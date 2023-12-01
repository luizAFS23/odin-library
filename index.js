const book_show = document.querySelector('.book-show');

const myLibrary = [];

function Book(bookname, pagenumber, readitornot, urlimage){
    this.bookname = bookname;
    this.pagenumber = pagenumber;
    this.readitornot = readitornot;
    this.urlimage = urlimage;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit by J.R.R. Tolkien", "295 pages", "read", "https://m.media-amazon.com/images/I/91M9xPIf10L._SL1500_.jpg");
const lordOfTheRings1 = new Book("The Lord of The Rings: The Fellowship of the King by J.R.R. Tolkien", "576 pages", "not read yet", "https://m.media-amazon.com/images/I/81SM0D5+DwL._SL1500_.jpg");
const lordOfTheRings2 = new Book("The Lord of The Rings: The Two Towers by J.R.R. Tolkien", "464 pages", "not read yet", "https://m.media-amazon.com/images/I/81lQ5N0QwJL._SL1500_.jpg");

addBookToLibrary(theHobbit);
addBookToLibrary(lordOfTheRings1);
addBookToLibrary(lordOfTheRings2);

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        var image = new Image();
        image.src = myLibrary[i].urlimage;
        book_show.appendChild(image);
    }
}

displayBooks();