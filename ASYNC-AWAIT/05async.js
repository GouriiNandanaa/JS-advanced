/*
async keyword is used to declare async functions

async functions are functions that are instances of the asyncFunction constructor

unlike other function async functions always return a promise


 */

//// function greet() {
////   return "hello";
//// }
//// console.log(greet());
//
//// async function asyncGreet() {
////   return "Hello";
//// }
//// console.log(asyncGreet());
//
//// async function asyncGreetResolve() {
////   return Promise.resolve("hello");
//// }
//// asyncGreetResolve().then(console.log)

// **************************************************

/*

SEQUENTIAL VS CONCURRENT CS PARALLEL EXECUTION

*/

function resolveHello() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("hello is resolved");
    }, 2000);
  });
}

function resolveWorld() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("world is resolved");
    }, 1000);
  });
}

// resolveHello().then(console.log);
// resolveWorld().then(console.log);

async function sequentialStart() {
  const hello = await resolveHello();
  console.log(`Sequential ${hello}`);
  // this gets printed after 2 sec

  const world = await resolveWorld();
  console.log(`Sewuential ${world}`);
  // this gets printed after 3(2+1) sec.here there is an unnecessary delay of 1 sec
}
// sequentialStart();

async function concurrentStart() {
  const hello = resolveHello();
  const world = resolveWorld();

  console.log(`concurrent ${await hello}`); //after 2sec
  console.log(`concurrent ${await world}`); //after 2sec
}
// concurrentStart();


// parallel execution
function parallel(){
    Promise.all([
      (async () => console.log(await resolveHello()))(),//logs after 2sec
      (async () => console.log(await resolveWorld()))(),//logs after 1sec
    ]);
}
parallel();