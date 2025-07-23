function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const book1 = new Book("b1", "johny", "2013");

Book.prototype.getSummary = function () {
  return `the book named ${this.title} is written by ${this.author} in the year ${this.year}`;
};

console.log(book1.getSummary());

Book.prototype.getAge = function(){
    const years = new Date().getFullYear - this.year;
    return years
}

console.log(book1.getAge);

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

console.log(book1)
book1.revise("2022");
console.log(book1.revised,book1.year)