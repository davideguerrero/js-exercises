// single line comment

/*
multi-line
comment
*/

// to log information to the console
//we can use the console.log();

//single line instruction - statement
console.log('Hello world');

///console.log(2 + 2);

//declare a variable
var messageToTheWorld = 'Hello world';
var myName = 'David';

var myMessage = messageToTheWorld + ' from ' + myName;
////console.log(messageToTheWorld + ' from ' + myName);

// try to subtitute the content of the h1 element
var titleElement = document.getElementById('title');
// innerHTML manipulates the content between the HTML tag
titleElement.innerHTML = myMessage;

/*
manipulate CSS
*/

// select the element with the ID 'styleButton'
var buttonStyleElement = document.getElementById('styleButton');

// addEventListener
buttonStyleElement.addEventListener('click', changeTextColor);

// a variable storing a number
var counter = 0;

// function containing some code
function changeTextColor() {

  var titleColors = ['red', 'purple', 'pink', 'orange', 'blue']
  
  /*
  // print the whole array
  console.log(titleColors);
  // print the array lenght
  console.log(titleColors.lenght);
  // print the first item in the array
  console.log(titleColors[0]);
  // print the last item in the array
  console.log(titleColors[titleColors.lenght-1]);
  */

  // assign a new value to the color property of the element
  titleElement.style.color = titleColors[counter];

  if(counter == titleColors.length - 1) {
    console.log('it is true');
    counter = -1;
  }

  // increment by one
  // counter = counter +1; or
  counter ++;
  
  console.log('color changed');
};

/*
array is for more than one item
var myList = [1,2,3]
*/

//execute a function
// changeTextColor();

///// var buttonElement = document.getElementById('myButton');
// console.log("This is the element:" + buttonElement);
///// buttonElement.classList.add('cta');

////console.log(titleElement)
////titleElement.innerHTML = '001_01_101_001000_01_100';