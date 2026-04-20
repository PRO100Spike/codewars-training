const http = require("http");
const fs = require("fs");
const path = require("path");

const CONTENT_DIR = path.join(__dirname, "src/katas");
const TEMPLATES_DIR = path.join(CONTENT_DIR, "templates");

function buildFileTree(dir, baseUrl = "") {
  const items = fs.readdirSync(dir);

  return items
    .filter((name) => !name.startsWith(".")) // скрытые файлы игнорим
    .map((name) => {
      const fullPath = path.join(dir, name);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        return {
          type: "dir",
          name,
          url: baseUrl + "/" + name,
          children: buildFileTree(fullPath, baseUrl + "/" + name),
        };
      }

      if (name.endsWith(".md")) {
        const cleanName = name.replace(".md", "");

        return {
          type: "file",
          name: cleanName,
          url: baseUrl + (cleanName === "index" ? "" : "/" + cleanName),
        };
      }

      return null;
    })
    .filter(Boolean);
}

function renderTree(tree, currentPath) {
  let html = "<ul>";

  for (const item of tree) {
    if (item.type === "dir") {
      html += `
        <li>
          📁 ${item.name}
          ${renderTree(item.children, currentPath)}
        </li>
      `;
    }

    if (item.type === "file") {
      const isActive = item.url === currentPath;

      html += `
        <li>
          <a href="${item.url}" style="
            color: ${isActive ? "red" : "black"};
            text-decoration: none;
          ">
            📄 ${item.name}
          </a>
        </li>
      `;
    }
  }

  html += "</ul>";
  return html;
}

function getFilePath(candidates) {
  for (const filePath of candidates) {
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  return null;
}

function resolveMarkdown(urlPath) {
  const safePath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, "");
  const fullPath = path.join(CONTENT_DIR, safePath);

  const candidates = [fullPath + ".md", path.join(fullPath, "readme.md")];

  return getFilePath(candidates);
}

function resolveTemplate(name = "index") {
  const fullPath = path.join(TEMPLATES_DIR, name);

  return getFilePath([fullPath + ".html"]);
}

function renderTemplate(template, data) {
  let replacedTmp = template;

  for (let key in data) {
    replacedTmp = replacedTmp.replace("${" + key + "}", data[key]);
  }

  return replacedTmp;
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const tree = buildFileTree(CONTENT_DIR);
  let pathname = decodeURIComponent(url.pathname);

  // убираем trailing slash (кроме корня)
  if (pathname !== "/" && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  const filePath = resolveMarkdown(pathname);
  const templatePath = resolveTemplate("layout");

  res.setHeader("Content-Type", "text/html; charset=utf-8");

  try {
    const layout = fs.readFileSync(templatePath, "utf-8");
    const sidebar = renderTree(tree, pathname);
    let content;

    if (pathname === "/") {
      content = "Welcome";
    } else if (!filePath) {
      res.statusCode = 404;
      content = "Not Found";
    } else {
      content = fs.readFileSync(filePath, "utf-8");
    }

    const html = renderTemplate(layout, {
      sidebar,
      content: content,
    });

    return res.end(html);
  } catch (err) {
    res.statusCode = 500;
    res.end("Server Error");
    console.error(err);
  }
});

server.listen(3000, () => {
  console.log("http://localhost:3000");
});
