var greenColor = document.getElementById('green');
greenColor.addEventListener('click', changeToGreen);

function changeToGreen() {
  document.getElementById('circle').style.backgroundColor = 'green';
  document.getElementById('circle').style.transform = 'scale(1.2)';
}

var blueColor = document.getElementById('blue');
blueColor.addEventListener('click', changeToBlue);

function changeToBlue() {
  document.getElementById('circle').style.backgroundColor = 'blue';
  document.getElementById('circle').style.transform = 'scale(1)';
}

var blackColor = document.getElementById('black');
blackColor.addEventListener('click', changeToBlack);

function changeToBlack() {
  document.getElementById('circle').style.backgroundColor = 'black';
  document.getElementById('circle').style.transform = 'scale(1)';
}