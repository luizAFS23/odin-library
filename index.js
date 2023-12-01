const book_show = document.querySelector('.book-show');

const myLibrary = [];

function Book(bookname, pagenumber, readitornot, urlimage){
    this.bookname = bookname;
    this.pagenumber = pagenumber;
    this.readitornot = readitornot;
    this.urlimage = urlimage;
}

function addBookToLibrary(...books){
    myLibrary.push(...books);
}

const theHobbit = new Book("The Hobbit by J.R.R. Tolkien", "295 pages", "read", "https://m.media-amazon.com/images/I/91M9xPIf10L._SL1500_.jpg");
const lordOfTheRings1 = new Book("The Lord of The Rings: The Fellowship of the King by J.R.R. Tolkien", "576 pages", "not read yet", "https://m.media-amazon.com/images/I/81SM0D5+DwL._SL1500_.jpg");
const lordOfTheRings2 = new Book("The Lord of The Rings: The Two Towers by J.R.R. Tolkien", "464 pages", "not read yet", "https://m.media-amazon.com/images/I/81lQ5N0QwJL._SL1500_.jpg");

addBookToLibrary(theHobbit, lordOfTheRings1, lordOfTheRings2);

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        var image = new Image(200, 250);
        image.style.border = "5px solid black";
        book_show.style.display = "flex";
        book_show.style.gap = "20px";
        image.src = myLibrary[i].urlimage;
        book_show.appendChild(image);
    }
}

displayBooks();