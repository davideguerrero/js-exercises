var showSlideOne = document.getElementById('nextSlideOne');
showSlideOne.addEventListener('click', nextSlideOne);

function nextSlideOne() {
  
  document.getElementById('dolphin').style.display = 'grid';
  document.getElementById('palm').style.display = 'none';
  document.getElementById('earth').style.display = 'none';
}

var showSlideTwo = document.getElementById('nextSlideTwo');
showSlideTwo.addEventListener('click', nextSlideTwo);

function nextSlideTwo() {
  
  document.getElementById('dolphin').style.display = 'none';
  document.getElementById('palm').style.display = 'grid';
  document.getElementById('earth').style.display = 'none';
}

var showSlideThree = document.getElementById('nextSlideThree');
showSlideThree.addEventListener('click', nextSlideThree);

function nextSlideThree() {
  
  document.getElementById('dolphin').style.display = 'none';
  document.getElementById('palm').style.display = 'none';
  document.getElementById('earth').style.display = 'grid';
}

// store all the link
var links = document.getElementsByClassName('button');
// calculate the lenght of the array
var numberOflinks = links.length;
// a variable to store the last link clicked
var lastLinkClicked;

// loop through all the links
// variable, start in; not more than 20; increment +1
for ( var n = 0; n < numberOflinks; n++ ) {
  links[n].addEventListener('click', hoverColor);
}

function hoverColor() {
  // check if the variable is not undefined
  if (lastLinkClicked) {
    lastLinkClicked.classList.remove('button-active');
  }
  // console.log(this);
  this.classList.add('button-active');
  // store the last link clicked
  lastLinkClicked = this;

  // color the cards
  var cardBackgroundTwo = document.getElementById('palm');
  palm.style.backgroundColor = this.dataset.color;

  var cardBackgroundThree = document.getElementById('earth');
  earth.style.backgroundColor = this.dataset.color;
}

// when I click another link, it should get blue
// and the previous one turn back to pink