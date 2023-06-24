/**
 * let, const => block scoped [ES6]
 * var => function scoped [ES5]
 */
let name = "cipher"; // global scope

function testing() {
  var abc = 20;
  let num = 25;
  console.log(abc);

  if (1) {
    let xyz = "Block Scoped";
    console.log(xyz);
    console.log(abc);
    console.log(num);
  }

  //   console.log(xyz); // gives error
  console.log(name);
}

testing();

// Hoisting
one();
two(); // this will give error because function expressions are not hoisted

function one() {
  console.log("function one");
}

// function expression
let two = function () {
  console.log("function two");
};

/**
 * var variables, function declarations are hoisted
 * Let, const, function expression does not hoisted
 */

const arrowFunc = () => {
  console.log("arrow function");
  console.log(this);
};

arrowFunc();

const funcExp = function () {
  console.log("function expression");
  console.log(this);
};

funcExp();
