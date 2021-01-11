let myLibrary = [];

const cardsContainer = document.getElementById('cardscontainer');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`
      }
  }

function addBookToLibrary() {
  // do stuff here
  let bookName = document.getElementById("title").value;
  let authorName = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = ""
  var check = document.getElementsByName('read'); 
              
    for(i = 0; i < check.length; i++) { 
        if(yesread.checked) {
            read = 'read';
        } else {
        read = 'not yet read';
    }}

  myLibrary.push(new Book(bookName, authorName, pages, read));
}

function displayBooks() {
  for (i = 0; i < myLibrary.length; i++) {
    const bookCard = document.createElement('div');
    let cardTitle = document.createElement('p');
    let cardAut = document.createElement('p');
    let cardPages = document.createElement('p');
    let cardRead = document.createElement('p');
    for (property in myLibrary[i]) {
      console.log(`key= ${property} value = ${myLibrary[i][property]}`)
   }
    
    bookCard.classList.add('book');
    bookCard.appendChild(cardTitle);
    bookCard.appendChild(cardAut);
    bookCard.appendChild(cardPages);
    bookCard.appendChild(cardRead);
    cardsContainer.appendChild(bookCard);
  }
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', addBookToLibrary);

//myLibrary.forEach(displayBooks);