
function scrollTodiv(event) {
    event.preventDefault();
    var searchvalue = document.getElementById('search').value.trim();
    const targetElement = document.getElementById(searchvalue);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {

      alert("Element not found!");
    }

}

books=document.getElementsByClassName('card');


for (let i = 0; i < books.length; i++) {
  const removebutton = document.createElement('button');
  removebutton.innerHTML = 'Remove';
  removebutton.style.color="white";
  removebutton.onclick = function() {
        books[i].remove();
  }
books[i].append(removebutton);

}

function addbook(event){
  event.preventDefault();
  var bookname = document.getElementById('bookname').value;
  var author = document.getElementById('author').value;
  var price= document.getElementById('price').value;
  if(bookname=="" || author=="" || price==""){
    alert("Please fill all the fields");
    return;
  }
  var book = document.createElement('div');
  book.className = 'card';
  book.id = bookname;
  book.innerHTML = "<div class='image'></div> <h2 class='title'>"+bookname+"</h2><h4 class='titler'>"+author+"</h4><h4 class='titler'> Price:₹"+price+"</h4><button ><a href='#'>Read More</a></button><button><a href='#'>Add To Wishlist</a></button><button><a href='#'>Buy Now</a></button>" ;
  const removebutton = document.createElement('button');
  removebutton.innerHTML = 'Remove';
  removebutton.style.color="white";
  removebutton.onclick = function() {
        book.remove();
  }
  book.append(removebutton);
  document.getElementsByClassName('container')[0].append(book);
  document.getElementById('bookname').value="";
  document.getElementById('author').value=""; 
  document.getElementById('price').value="";
}



