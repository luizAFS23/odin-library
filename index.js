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

const theHobbit = new Book("The Hobbit by J.R.R. Tolkien", "295 pages", "not read yet");

function displayBooks(){
    
}