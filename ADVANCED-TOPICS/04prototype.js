function Person(fName, lName){
    this.firstname = fName;
    this.lastname = lName;
}

const person1 = new Person("Gouri","Nandana");
const person2 = new Person("Nandan", "Gourav");

// //person1.getFullName = function(){
//    // return this.firstname+" "+this.lastname;
// //}
// //console.log(person1.getFullName()) 
// //console.log(person2.getFullName())

// here the first log gives output but the second one throws an error. it is because the getfullname() is defined associated with the person1 not the person2. It is not generic



// in js, every function has a property called "prototype" associated with it. we can make use of that prototype object to determine. So instead of the person1.fullname() we use prototype


Person.prototype.getFullname = function(){
    return this.firstname+" "+this.lastname
}

console.log(person1.getFullname());
console.log(person2.getFullname());


// the function using with the new keyword is the constructor function

/*  uses of prototype
----------------------
== share properties and methods across instances
== inheritence (prototypal inheritance)
        


*/