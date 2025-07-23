//    success callback : it is the fn that gets exec when the promise is fulfilled

// failure callback : it is the fn that gets exec when the promise is rejected

/*
PROMISE - MDN DEFINITION

a promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an async action's eventual success value ot failure reaosn 

states: pending fulfilled rejected
*/



// this  is how we create a promise
////const promise = new Promise()


// how to fulfill or reject the promse
/*
here resolve and reject: both are function

resolve if the function which whrn called changes the state from 'pending' to 'fulfilled'

reject if the function which whrn called changes the state from 'pending' to 'rejected'
*/
//// const promise = new Promise((resolve, reject)=>{
////     setTimeout(()=>{
////         resolve();
////     })
//// })



const promise = new Promise((resolve, reject)=>{
    let success = false;
    setTimeout(() => {
        if (success) 
            resolve("the message is a success");
        else
            reject("OOPS! no no")
        
    }, 3000);  
})

promise
    .then((message)=>{
        console.log(message)
    })
    .catch((err)=>{
        console.log(err)
    })

 

    // executing call back functions based on the status change

    // promises can be chained and this can lead to promise hell

