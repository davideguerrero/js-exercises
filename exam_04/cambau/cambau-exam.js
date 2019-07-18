
// variables
  // for the toggle buttons
var toggleGrid = document.getElementById('toggleGrid');
var toggleList = document.getElementById('toggleList');

  // the container of the articles
var container = document.getElementById('articlesContainer');

  // for the articles
var articles = document.getElementsByClassName('articles');

  // for the images
var img = document.getElementsByClassName('article-img');
var arrow = document.getElementsByClassName('arrow');

// menu
var menuBtn = document.getElementById('hamburgerMenu');

var closeArrow = document.getElementById('arrow');

var listItems = document.getElementsByClassName('list-items');

// event listeners
toggleGrid.addEventListener('click', toggleGridView);
toggleList.addEventListener('click', toggleListView);

closeArrow.addEventListener('click', closeMenu);

menuBtn.addEventListener('click', openMenu);



// functions

function toggleListView() {
  container.classList.remove('grid-container');
  container.classList.add('list-container');

  articles[0].classList.add('list-articles');
  articles[1].classList.add('list-articles');
  articles[2].classList.add('list-articles');
  articles[3].classList.add('list-articles');
  articles[4].classList.add('list-articles');
  articles[5].classList.add('list-articles');


  arrow[0].style.display = 'block';
  arrow[1].style.display = 'block';
  arrow[2].style.display = 'block';
  arrow[3].style.display = 'block';
  arrow[4].style.display = 'block';
  arrow[5].style.display = 'block';
}

function toggleGridView() {
  container.classList.remove('list-container');
  container.classList.add('grid-container');

  articles[0].classList.remove('list-articles');
  articles[1].classList.remove('list-articles');
  articles[2].classList.remove('list-articles');
  articles[3].classList.remove('list-articles');
  articles[4].classList.remove('list-articles');
  articles[5].classList.remove('list-articles');


  arrow[0].style.display = 'none';
  arrow[1].style.display = 'none';
  arrow[2].style.display = 'none';
  arrow[3].style.display = 'none';
  arrow[4].style.display = 'none';
  arrow[5].style.display = 'none';
}

function openMenu() {
  document.getElementById('hiddenMenu').style.transform = 'translateX(0)';
  document.getElementById('hiddenMenu').style.opacity = '1';

  listItems[0].style.transform = 'translateX(0)';
  listItems[1].style.transform = 'translateX(0)';
  listItems[2].style.transform = 'translateX(0)';
  listItems[3].style.transform = 'translateX(0)';
  listItems[4].style.transform = 'translateX(0)';
}

function closeMenu() {
  document.getElementById('hiddenMenu').style.transform = 'translateX(100%)';
  document.getElementById('hiddenMenu').style.opacity = '0';

  listItems[0].style.transform = 'translateX(100%)';
  listItems[1].style.transform = 'translateX(100%)';
  listItems[2].style.transform = 'translateX(100%)';
  listItems[3].style.transform = 'translateX(100%)';
  listItems[4].style.transform = 'translateX(100%)';
}

