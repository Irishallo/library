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
      let ti2 = `${myLibrary[i].title}`;
      let t2 = document.createTextNode(ti2);
      title2.appendChild(t2);
      cardTitle.appendChild(title1);
      cardTitle.appendChild(title2);
      let cardAut = document.createElement('tr');
      let aut1 = document.createElement('td');
      let a1 = document.createTextNode('Author');
      aut1.appendChild(a1);
      let aut2 = document.createElement('td');
      let au2 = `${myLibrary[i].author}`
      let a2 = document.createTextNode(au2);
      aut2.appendChild(a2);
      cardAut.appendChild(aut1);
      cardAut.appendChild(aut2);
      let cardPages = document.createElement('tr');
      let pages1 = document.createElement('td');
      let p1 = document.createTextNode('Number of pages');
      pages1.appendChild(p1);
      let pages2 = document.createElement('td');
      let pa2 = `${myLibrary[i].pages}`
      let p2 = document.createTextNode(pa2);
      pages2.appendChild(p2);
      cardPages.appendChild(pages1);
      cardPages.appendChild(pages2);
      let cardRead = document.createElement('tr');
      let read1 = document.createElement('td');
      let r1 = document.createTextNode('read the book?');
      read1.appendChild(r1);
      let read2 = document.createElement('td');
      let re2 = `${myLibrary[i].read}`
      let r2 = document.createTextNode(re2);
      read2.appendChild(r2);
      cardRead.appendChild(read1);
      cardRead.appendChild(read2);
      bookCard.classList.add('book');
      bookCard.setAttribute("id", `${myLibrary[i].title}`);
      cardTable.appendChild(cardTitle);
      cardTable.appendChild(cardAut);
      cardTable.appendChild(cardPages);
      cardTable.appendChild(cardRead);
      bookCard.appendChild(cardTable);
      let btn1 = document.createElement("BUTTON");
      btn1.innerHTML = "delete book";
      bookCard.appendChild(btn1);
      let btn2 = document.createElement("BUTTON");
      btn2.innerHTML = "read the book";
      bookCard.appendChild(btn2);
      cardsContainer.appendChild(bookCard);
    }
  }
}

function showForm() {
  let form = document.getElementById('input');
  form.classList.toggle('input1');
  form.classList.toggle('input2');
}

const formBtn = document.getElementById('showform');
formBtn.addEventListener('click', showForm);

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', addBookToLibrary);
submitBtn.addEventListener('click', displayBooks);
