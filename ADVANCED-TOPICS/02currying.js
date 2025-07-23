// FUNCTION CURRYING
// -----------------

//Currying is a process in functional programming in which we transform a function with multiple arguments into a sequence of nesting functions that take one argument at a time.

// ie, function(a,b,c)  ===> function(a)(b)(c)

function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 3, 4));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5());
//****************************************************

let multiply = function (x, y) {
  console.log(x * y);
};

// consider there is a function like this
let multiplyByTwo = function (y) {
  x = 2;
  console.log(x * y);
};
multiplyByTwo(5);

// consider this function as well
let multiplyBy2 = multiply.bind(this, 2);
multiplyBy2(5);

// this 2 codes executes almost in the same way
let multiplyBy3 = multiply.bind(this, 3);
multiplyBy2(6);

// if we give more argumnets to the bind then it will ignore them(at the right)

// this is one way of doing the currying using the bind()

// ***************************************
// ********************************************

// currying using closure
// --------------------------

let multiplyUsingClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyUsingClosureByTwo = multiplyUsingClosure(2);
multiplyUsingClosureByTwo(5);  
