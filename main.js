/*
SCOPE
------
Block scope
Function Scope
Global Scope

*/

let a = 10;
function oute() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
}
