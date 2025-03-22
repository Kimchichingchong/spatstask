
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



