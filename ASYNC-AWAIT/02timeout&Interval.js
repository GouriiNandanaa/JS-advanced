/*

*/

// setTimeout(function, duration, param1, param2,...)

function greet(){
    console.log("hi")
}
const timeOut = setTimeout(greet,5000);
clearTimeout(timeOut)

function greetName(name){
    console.log(`hello ${name}`)
}
setTimeout(greetName, 6000, "gouri");

// TO CLEAR A TIMEOUT you can use 
// clearTimeout() methos passing in the identifier returned by setTimeout as a parameter



// SET INTERVAL - to run a piece of code in a certain perios of time
const interval = setInterval(greet,2000);
clearInterval(interval);











/*
NB: TIMEOUTS AND INTERVALS
they are not part of js itself
they are implemented by the browser

settimeout and setinterval are basically names given to that functionality in js


duration parameter is the minimum delay not guaranteed delay.

*/


/**
it is possible to achieve set interval using recursive set timeouts
 */

setTimeout(function run(){
    console.log("hi")
    setTimeout(run,100)
},100)
// benefits of this is that we can guarantee the duration between executions. Irrespective of how long the code takes to run. the interval will remain the same.

/*
the thing in set interval is that the duratio interval includes the time taken to execute the code you want to run.


if the cpde takes 20ms to run, then the interval will be 80ms

if code takes long time, then use recursive timeout

you can calculate a diff delay before running each iteration
 */ 
