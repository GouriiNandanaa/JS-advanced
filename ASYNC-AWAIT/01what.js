/* ASYNCHRONOUS JAVASCRIPT
JS is a synchronous single threaded blocking language

asynchronous- one line at a time

blocking- if function A had to execute an intensive chunk of code, js has to finish that without moving on to function B. Even if that code takes 10sec or 1 min.

Web app runs in a browser and it executes an intensive chunk of code without returning control to the browser, the browser can appear to be frozen.


Single-threaded- a thread is simply a process that your js program can use to run a task.

Each thread can only do one task at a time. Js jas just the one thread called the main thread for executing any code.
 */


/*
if we have to fetch data then we cant execute the next statement until we get the response
so there must be a waiting
that is we need to have an async behaviour in js

js is not enough
we need pieces outise js
that is web browser

web browset define functions and api s that allow us to register functions that shouls not be executed sync. and shoud instead be invokes async ly when some kind of event occurs 

for eg: passage of time( set time out, set interval) 
    users interaction with mouse(addevent listenet)
    arrival of data over network(callcacks, promises, async await)


you can let ur code do several things at the same time without stopping ot blocing ur main thread



*/

