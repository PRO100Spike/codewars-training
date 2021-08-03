Array.prototype.sameStructureAs = function (other) {
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.
  let sameStructureAs = true;
  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
  const checkChildArr = (a, b) => {
    let resultChecked = true;

    a.map((item, i) => {
      if (Array.isArray(item) !== Array.isArray(b[i])) {
        resultChecked = false;
        return null;
      } else {
        if (Array.isArray(item)) {
          if (item.length !== b[i].length) {
            resultChecked = false;
            return null;
          }
          checkChildArr(item, b[i]);
        }
      }
    });
    return resultChecked;
  };

  if (Array.isArray(this) && Array.isArray(other)) {
    this.map((item, i) => {
      if (Array.isArray(item) !== Array.isArray(other[i])) {
        sameStructureAs = false;
        return null;
      } else {
        if (Array.isArray(item)) {
          if (item.length !== other[i].length) {
            sameStructureAs = false;
            return null;
          }
          sameStructureAs = checkChildArr(item, other[i]);
          if (!sameStructureAs) {
            return null;
          }
        }
      }
    });
  } else {
    sameStructureAs = false;
  }

  return sameStructureAs;
};
