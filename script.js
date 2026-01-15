console.log("js console");

let data;
grid = document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
if (xhttp.readyState === 4 && xhttp.status === 200) {
   data = JSON.parse(xhttp.responseText);
   console.log(data);

   data.forEach(function(movie) {
let card = document.createElement("div");
card.classList.add("card");

let textData =

"<div class='movie-title'>" + movie.title + "</div>" + 
"<span>" +
"Director:" + movie.director + "<br>" +
" Release Date:" + movie.releaseDate + "<br>";
 

card.innerHTML = textData;

if (movie.imgSrc) {
    card.style.backgroundImage = "url(" + movie.imgSrc + ")";
}
   
grid.appendChild(card);
  
    });

  }
};

xhttp.open("GET", "list.json", true);
xhttp.send();
