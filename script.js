
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


