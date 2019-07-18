var showMenu = document.getElementById('openMenu');
var hideMenu = document.getElementById('closeMenu');

showMenu.addEventListener('click', showOpenMenu );

function showOpenMenu() {
  TweenMax.to('#nav', 1, {y: 0});
}

hideMenu.addEventListener('click', hideOpenMenu );

function hideOpenMenu() {
  TweenMax.to('#nav', 1, {y: '-100%'});
}

function showListView() {
  var showList = document.getElementById('photoGrid');
  showList.classList.remove('photoGrid');
  showList.classList.add('gridPhoto');
}

function showGridView() {
  var showGrid = document.getElementById('photoGrid');
  showGrid.classList.add('photoGrid');
}