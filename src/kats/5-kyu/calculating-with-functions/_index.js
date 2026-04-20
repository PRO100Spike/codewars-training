function zero() {
  if (arguments[0] === undefined) {
    return 0;
  } else {
    return arguments[0][0].call(this, 0, arguments[0][1]);
  }
}
function one() {
  if (arguments[0] === undefined) {
    return 1;
  } else {
    return arguments[0][0].call(this, 1, arguments[0][1]);
  }
}
function two() {
  if (arguments[0] === undefined) {
    return 2;
  } else {
    return arguments[0][0].call(this, 2, arguments[0][1]);
  }
}
function three() {
  if (arguments[0] === undefined) {
    return 3;
  } else {
    return arguments[0][0].call(this, 3, arguments[0][1]);
  }
}
function four() {
  if (arguments[0] === undefined) {
    return 4;
  } else {
    return arguments[0][0].call(this, 4, arguments[0][1]);
  }
}
function five() {
  if (arguments[0] === undefined) {
    return 5;
  } else {
    return arguments[0][0].call(this, 5, arguments[0][1]);
  }
}
function six() {
  if (arguments[0] === undefined) {
    return 6;
  } else {
    return arguments[0][0].call(this, 6, arguments[0][1]);
  }
}
function seven() {
  if (arguments[0] === undefined) {
    return 7;
  } else {
    return arguments[0][0].call(this, 7, arguments[0][1]);
  }
}
function eight() {
  if (arguments[0] === undefined) {
    return 8;
  } else {
    return arguments[0][0].call(this, 8, arguments[0][1]);
  }
}
function nine() {
  if (arguments[0] === undefined) {
    return 9;
  } else {
    return arguments[0][0].call(this, 9, arguments[0][1]);
  }
}

function plus() {
  return [
    (a, b) => {
      return a + b;
    },
    arguments[0]
  ];
}
function minus() {
  return [
    (a, b) => {
      return a - b;
    },
    arguments[0]
  ];
}
function times() {
  return [
    (a, b) => {
      return a * b;
    },
    arguments[0]
  ];
}
function dividedBy() {
  if (arguments[0] === 0)
    return new Error('division by zero, result is infinny')
  return [
    (a, b) => {
      return Math.floor(a / b);
    },
    arguments[0]
  ];
}
