var showMenu = document.getElementById('openMenu');
var hideMenu = document.getElementById('closeMenu');
var article = document.getElementsByClassName('article');
var arrow = document.getElementsByClassName('arrow');
var btnOff = document.getElementsByClassName('displayGrid');
var btnOn = document.getElementsByClassName('displayList');

showMenu.addEventListener('click', showOpenMenu );

function showOpenMenu() {
  TweenMax.to('#nav', .5, {y: 0});
}

hideMenu.addEventListener('click', hideOpenMenu );

function hideOpenMenu() {
  TweenMax.to('#nav', .5, {y: '-100%'});
}

function showListView() {
  var showList = document.getElementById('photoList');
  showList.classList.remove('gridPhoto');
  showList.classList.add('photoList');

  article[0].classList.add('list-article');
  article[1].classList.add('list-article');
  article[2].classList.add('list-article');
  article[3].classList.add('list-article');
  article[4].classList.add('list-article');
  article[5].classList.add('list-article');

  btnOff[0].classList.add('btnGridOff');
  btnOn[0].classList.add('btnListOn');
}

function showGridView() {
  var showGrid = document.getElementById('photoList');
  showGrid.classList.add('gridPhoto');

  article[0].classList.remove('list-article');
  article[1].classList.remove('list-article');
  article[2].classList.remove('list-article');
  article[3].classList.remove('list-article');
  article[4].classList.remove('list-article');
  article[5].classList.remove('list-article');

  btnOff[0].classList.remove('btnGridOff');
  btnOn[0].classList.remove('btnListOn');
}