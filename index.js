const myLibrary = [];

function Book(bookname, pagenumber, readitornot){
    this.bookname = bookname;
    this.pagenumber = pagenumber;
    this.readitornot = readitornot;
    this.info = function(){
        return bookname + ", " + pagenumber + ", " + readitornot;
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit by J.R.R. Tolkien", "295 pages", "read");
const lordOfTheRings1 = new Book("The Lord of The Rings: The Fellowship of the King by J.R.R. Tolkien", "576 pages", "not read yet");
const lordOfTheRings2 = new Book("The Lord of The Rings: The Two Towers by J.R.R. Tolkien", "464 pages", "not read yet");

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){

    }
}