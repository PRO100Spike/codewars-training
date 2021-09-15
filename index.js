import {unified} from 'unified';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

function component() {
  let md;
  const element = document.createElement('div');

  if (window.location.pathname !== '/') {
    import(`.${window.location.pathname}/index.js`);

    md = import(`.${window.location.pathname }/readme.md`);
    md.then(file => {
      unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(file.default)
        .then((html) => {
          element.innerHTML = html;
        });
    }).catch(e => {
      element.innerHTML = '<p>This kata kata has no description.</p>';
    })
  } else {
    console.log('here')
    //


    fetch('https://api.github.com/repos/PRO100Spike/codewars-training/contents')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const ul = document.createElement('ul');

        element.appendChild(ul);

        data.map(el => {
          if (el.type === "dir") {
            let li = document.createElement('li');
            let a = document.createElement('a');

            a.href = `/${el.name}`
            a.append(el.name);

            li.appendChild(a);
            ul.appendChild(li);
          }
        })
      });
  }

  return element;
}

document.body.appendChild(component());
