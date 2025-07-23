/**
  if we have an object , it has properties as well as methods
  object.property
  object.method


  almost everything in the js is objects
  even though there are string
 */
// const s1 = "hello";
// // console.log(s1.toUpperCase());
// console.log(typeof s1.toUpperCase());

// const s2 = new String("heyy");
// // console.log(s2.toUpperCase());

// console.log(typeof s1);
// console.log(typeof s2);




// console.log(window);
// window.alert(2)

// console.log(navigator.appVersion)





const book1 = {
  title: "boook one",
  author: "john yeh",
  year: "2013",
  getSummary: function(){ 
    return `the book named ${this.title} is written by ${this.author} in the year ${this.year}`
  }
}   
    
// console.log(book1)
// console.log(book1.title);
// console.log(book1.getSummary())

console.log(Object.keys(book1));
console.log(Object.values(book1));
console.log(Object.entries(book1));
console.log(Object.assign(book1));

  