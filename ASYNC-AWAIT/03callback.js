/*
CALLBACKS

in js, functions are first class obj
just like an obj, we can pass function as an argument
fn can also be returned
*/

//// function greet(name){
////     console.log(`Hai ${name}`)
//// }
//
//// function greetGouri(greetFn){
////     const name = "gouri"
////     greetFn(name);
//// }
//
//// greetGouri(greet);

/**
 * any function that is passed as an argument to another function is known as a callback function
 
a function that accepts a function as an argument or returns a function is called higher order functions


function higherOrderFunction(callback){
    const name = "gouri"
    callback(name);
}

why we use callback?
two types of callback are there

        sync callback
    like before eg, the call back fn is called immediately

        async callback
    an async callback is a callback that is often used to continue or resume code exec after ana sync operation has completed.

    callbacks are used to delay the exec of a fn until a particular time or event has occured


    but callback hell

    // callbacks are functions passed as arguments to other functions

    they acan be sync if they exec immediaately ot they can be async where ther get executed after some time has passed, some event has occured, or aome data has been fetched

    as more and more req has to be made based of the return value of the pre   vious req, dev started to encounter what is known as callback hell          

    cbh makes the code difficult to reason

    so recommended approach is promise
 */

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.map((n) => n * 2));
console.log(numbers.filter((n) => n % 2 === 0));
     
