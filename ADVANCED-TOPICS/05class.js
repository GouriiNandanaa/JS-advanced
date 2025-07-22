class Person {
  constructor(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
  }
  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = new Person("Gouri", "Nandana");
console.log(person1.sayMyName());

class SuperHero extends Person {
  constructor(fname, lname) {
    super(fname, lname);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("fighting the crime");
  }
}

const batman = new SuperHero('Bruce','Lee');
console.log(batman.sayMyName());
