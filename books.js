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
    let myEle = document.getElementById(`${myLibrary[i].title}`);
    if(myEle){
        console.log("book is already there!");
    } else {
      const bookCard = document.createElement('div');
      let cardTable = document.createElement('table');
      let cardTitle = document.createElement('tr');
      let title1 = document.createElement('td');
      let t1 = document.createTextNode('Title');
      title1.appendChild(t1);
      let title2 = document.createElement('td');
      ti2 = `Title: ${myLibrary[i].title}`;
      let t2 = document.createTextNode(ti2);
      title2.appendChild(t2);
      cardTitle.appendChild(title1, title2);
      let cardAut = document.createElement('tr');
      let aut1 = document.createElement('td');
      let a1 = document.createTextNode('Author');
      aut1.appendChild(a1);
      let aut2 = document.createElement('td');
      let a2 = document.createTextNode(myLibrary[i].author);
      aut2.appendChild(a2);
      cardAut.appendChild(aut1, aut2);
      let cardPages = document.createElement('tr');
      let pages1 = document.createElement('td');
      let p1 = document.createTextNode('Number of pages');
      pages1.appendChild(p1);
      let pages2 = document.createElement('td');
      let p2 = document.createTextNode(myLibrary[i].pages);
      pages2.appendChild(p2);
      cardPages.appendChild(pages1, pages2);
      let cardRead = document.createElement('tr');
      let read1 = document.createElement('td');
      let r1 = document.createTextNode('read');
      read1.appendChild(r1);
      let read2 = document.createElement('td');
      let r2 = document.createTextNode(myLibrary[i].read);
      read2.appendChild(r2);
      cardRead.appendChild(read1, read2);
     /* cardTitle.innerText = `Title: ${myLibrary[i].title}`;
      cardAut.innerText = `Author: ${myLibrary[i].author}`;
      cardPages.innerText= `Number of pages: ${myLibrary[i].pages}`;
      cardRead.innerText = myLibrary[i].read; */

      bookCard.classList.add('book');
      bookCard.setAttribute("id", `${myLibrary[i].title}`);
      cardTable.appendChild(cardTitle);
      cardTable.appendChild(cardAut);
      cardTable.appendChild(cardPages);
      cardTable.appendChild(cardRead);
      bookCard.appendChild(cardTable);
      cardsContainer.appendChild(bookCard);
    }
  }
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', addBookToLibrary);
submitBtn.addEventListener('click', displayBooks);
