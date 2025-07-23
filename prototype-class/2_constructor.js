// "use strict";

function Book(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    

    this.getSummary = function(){
        return `the book named ${this.title} is written by ${this.author} in the year ${this.year}`;
    }
}

const book1 = new Book("b1","johny","2013"); 

console.log(book1.title); 
console.log(typeof(book1))   
console.log(typeof Book); 
console.log(book1.getSummary())  