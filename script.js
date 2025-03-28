// All Datas of Books in a list format

const BookData = [
  {
      "title": "The Dark Side of Mirror",
      "author": "Christopher Murphy",
      "price": "1,100",
      "description": "A thrilling exploration of hidden secrets and dark truths that lie on the other side of a reflection.",
      "url": "https://a-kamalesh45.github.io/TechTales/books/a.jpg"
  },
  {
      "title": "Junior Year Bites",
      "author": "Annie Listenby",
      "price": "950",
      "description": "A humorous coming-of-age novel set during the turbulent college years, filled with awkward moments and self-discovery.",
      "url": "https://a-kamalesh45.github.io/TechTales/books/b.jpg"
  },
  {
      "title": "A Court at Constantinople",
      "author": "Anthony Earth",
      "price": "1,250",
      "description": "Set in the grandeur of the Byzantine Empire, this historical novel delves into the intrigues and power struggles of the court.",
      "url": "https://a-kamalesh45.github.io/TechTales/books/c.jpg"
  },
  {
      "title": "Daughters of a Winter Night",
      "author": "Doug Belair",
      "price": "1,300",
      "description": "A tale of family bonds, secrets, and survival against the backdrop of a harsh winter, where the past and future collide.",
      "url": "https://a-kamalesh45.github.io/TechTales/books/d.jpg"
  },
  {
      "title": "Cult Crystal",
      "author": "Remi Bradley",
      "price": "1,400",
      "description": "A mystical and suspenseful novel revolving around an ancient crystal that holds the power to change the course of history.",
      "url": "https://a-kamalesh45.github.io/TechTales/books/e.jpg"
  },
  {
      "title": "Novel of Fiction",
      "author": "S. J. Lee",
      "price": "1,800",
      "description": "A groundbreaking work that explores the boundaries of fiction, where storytelling becomes a philosophical journey.",
      "url": "https://a-kamalesh45.github.io/TechTales/books/f.jpg"
  },
  {
      "title": "As the Fallen Rise",
      "author": "Sadie Hewitt",
      "price": "1,200",
      "description": "A gripping tale of redemption and the power of rising from one's downfall, filled with action, drama, and emotional depth.",
      "url": "https://a-kamalesh45.github.io/TechTales/books/g.jpg"
  },
  {
      "title": "Takakush",
      "author": "Raine Reiter",
      "price": "1,000",
      "description": "A fascinating adventure in a distant world, where ancient traditions and new conflicts clash, revealing the true power of unity.",
      "url": "https://a-kamalesh45.github.io/TechTales/books/h.jpg"
  }
]


const container = document.querySelector('.container');

// Function for Showing the books in the website
    function showBooks(BookData) {
      container.innerHTML = '';
      BookData.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.innerHTML = `
        <div class="cover">
        <img class="image a" src="${book.url}" />
        <div class="para"><p>${book.description}</p></div>
        </div>
        <h2 class="title">${book.title}</h2>
        <h4 class="titler">${book.author}</h4>
        <h4 class="titl">Price:₹${book.price}</h4>
        <button class="readmore" ><a><span>Read More</span> <i class="fa-solid fa-info"></i> </a></button>
        <button><a><span>Add To Wishlist</span> <i class="fa-solid fa-heart"></i></a></button>
        <button><a><span>Buy Now</span> <i class="fa-solid fa-cart-shopping"></i></a></button>
        <button class="removeBtn"><a><span>Remove</span> <i class="fa-solid fa-trash"></i></a></button>
        `;
        container.appendChild(bookCard);
      });
    }


    // Function for working of buttons 
    function buttonWorking() {
      const removeButtons = document.querySelectorAll('.removeBtn');
    removeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        button.parentElement.remove();
      })
    })

const readmore = document.querySelectorAll('.readmore');
readmore.forEach((item) => {
  const desc = item.parentElement.children[0].children[1];
  const image = item.parentElement.children[0].children[0];
  item.addEventListener('click', () => {
    if(desc.style.opacity === '1') {
      item.children[0].children[0].innerHTML = '<span>Read More</span>';
      desc.style.opacity = '0';
      desc.style.transform = 'rotateY(180deg)';
      image.style.transform = 'rotateY(0deg)';
      image.style.opacity = '1';
    }
    else {
      desc.style.opacity = '1';
      desc.style.transform = 'rotateY(0deg)';
      image.style.opacity = '0';
      image.style.transform = 'rotateY(180deg)';
      item.children[0].children[0].innerHTML = '<span>Show Less</span>';
    }
  });
});

    }

    showBooks(BookData);
    buttonWorking();

    // const books=document.getElementsByClassName('card');
    // console.log(books);


    

function scrollTodiv(event) {
  event.preventDefault();
  var searchvalue = document.getElementById('search').value.trim();

  var searchedBook = BookData.find(book => book.title === searchvalue);
  console.log("Now searching by title");
  if (searchedBook) {
    showBooks([searchedBook]);
    console.log("Found book by title");
  }
  else {
    var searchedBook = BookData.find(book => book.author === searchvalue);
    console.log("Now searching by author");
    if (searchedBook) {
      showBooks([searchedBook]);
      console.log("Found book by author");
    }
    else{
      var searchedBook = BookData.find(book => book.price === searchvalue);
      console.log("Now searching by price");
      if (searchedBook) {
        console.log("Found book by price");
        showBooks([searchedBook]);
      }
      else{
        alert("Book not found!");
      }
    }
  }
  
  buttonWorking();

  // const targetElement = document.querySelector(searchvalue);
  
  // if (targetElement) {
  //   // targetElement.scrollIntoView({ behavior: "smooth" });
  //   var x=document.getElementsByClassName('card');
  //   for(i=0;i<x.length;i++){
  //     x[i].style.display="none";
  //   }
  //   targetElement.style.display="block";
  //   document.getElementById('search').value="";
  // } else {

  //   alert("Element not found!");
  // }
}



function addbook(event){
  event.preventDefault();
  var bookname = document.getElementById('bookname').value;
  var author = document.getElementById('author').value;
  var price = document.getElementById('price').value;
  var url = document.getElementById('url').value;

  if(bookname=="" || author=="" || price=="" || url==""){
    alert("Please fill all the fields");
    return;
  }

  const newBook = {
    title: bookname,
    author: author,
    price: price,
    description: "Newly added book description.",
    url: url
  };

  BookData.push(newBook);
  showBooks(BookData);
  buttonWorking();

  document.getElementById('bookname').value = "";
  document.getElementById('author').value = ""; 
  document.getElementById('price').value = "";
  document.getElementById('url').value = "";

}

function sortUp() {  
  BookData.sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/,/g, '')); 
    const priceB = parseFloat(b.price.replace(/,/g, '')); 
    return priceA - priceB; 
  });

  showBooks(BookData);  // Re-render books with sorted data
  buttonWorking();
}

function sortDown() {  
  BookData.sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/,/g, '')); 
    const priceB = parseFloat(b.price.replace(/,/g, '')); 
    return priceB - priceA; 
  });

  showBooks(BookData);  // Re-render books with sorted data
  buttonWorking();
}



