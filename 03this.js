// this keyword which is used in a function, refers to the object it belongs to. It makes functions reusable by letting you decide the object value. This value is determined entirely by how a function is called.

//// function sayName(name){
////     console.log(`My name is ${name}`);
//// }
//// sayName("gouri");
//// sayName(this);

/* there are actually 4 ways to invoke a function and find the value of "this" keyword.
       1] implicit binding
       2] explicit binding
       3] new binding
       4] default binding
*/

// implicit binding
const person = {
  name: "gouri",
  sayName: function () {
    console.log(`My name is ${this.name}`);
  },
};
person.sayName();

// explicit binding
function sayName() {
  console.log(`My name is ${this.name}`);
}
sayName.call(person);

// new binding
function Person(name) {
  // here this is an empty object.we dont create "this" keyword. It will create automatically
  this.name = name;
}

const p1 = new Person("Gouri");
const p2 = new Person("nandana");

console.log(p1.name, p2.name);


// default binding

globalThis.name = "superman"
sayName()


/*
Order of Precedence

        new binding
        explicit binding
        implicit binding
        default binding
*/