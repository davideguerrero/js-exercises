var showMenu = document.getElementById('openMenu');
var hideMenu = document.getElementById('closeMenu');
var showGrid = document.getElementById('displayGrid');
var showList = document.getElementById('displayList');

showMenu.addEventListener('click', showOpenMenu );

function showOpenMenu() {
  TweenMax.to('#nav', 1, {y: 0});
}

hideMenu.addEventListener('click', hideOpenMenu );

function hideOpenMenu() {
  TweenMax.to('#nav', 1, {y: '-100%'});
}