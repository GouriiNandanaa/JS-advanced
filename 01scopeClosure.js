/*
SCOPE
------
Block scope
Function Scope
Global Scope
 
*/

//// let a = 10;
//// function outer() {
////   let b = 20;
////   function inner() {
////     let c = 30;
////     console.log(a, b, c);
////   }
////   inner();
//// outer();
//// }

/*
CLOSURE
--------
A Closure is the combination of a function bundled together with references to its surrounding state. Closures are created every time a function is created, at function creation time.
*/

//// function outer(){
////     let counter  = 0;
////     function inner(){
////         console.log(++counter);
////     }
////     inner()
//// }
//// outer();
//// outer();

// here whenever new function call is happening, a new temporary memory location is allocated and we have a new 'counter' variable during every invocation

//// function outer(){
////     let counter = 0;
////     function inner(){
////         console.log(++counter)
////     }
////     return inner;
//// }

//// let z = outer();
//// z();
//// z();

// In JavaScript, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and its scope chain is what is called a closure in JavaScript.
