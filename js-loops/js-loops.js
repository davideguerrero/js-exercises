console.log("-- init script");

var myTitle;
// a variable is undefined because it has no value assigned to it
console.log(myTitle);

myTitle = document.getElementById("name");
// a variable returns as null because it has a wrong value assigned to it
console.log(myTitle)

myTitle = document.getElementById("appTitle").innerHTML;
// the value of the variable gets log
console.log(myTitle)

// Say my name APP

// DEFINE A VARIABLE
var allNames = [];
var nameButton = document.getElementById("nameButton");
var nameInput = document.getElementById("myName");
var messageBox = document.getElementById("messageBox");

nameButton.addEventListener("click", sayMyName);

function sayMyName() {

  // console.log(nameInput.value.lenght);

  if(nameInput.value.length > 0) {
    allNames.push(nameInput.value);

    // empty the imput
    nameInput.value = "";
    // put the cursor in the input field
    nameInput.focus();

    // SUCCESS
    var lastNameAdded = allNames[allNames.length -1];
    updateTheMessage("You have successfuly added" + + "to the list!", true);
    
    console.log(allNames);
  } else {
    // ERROR
    updateTheMessage("No name entered!", false);
    
    console.log("No name");
  }

  // check if it's not empty

  // empty the imput and focus on it

  // console.log("Button clicked");

  // STORE IN THAT VARIABLE USING THE .push("value") METHOD
}

function updateTheMessage(messageText, messageSuccess) {
  messageBox.innerText = messageText;

  if (messageSuccess == true) {
    messageBox.classList.add("message-success");
    messageBox.classList.remove("message-error");
  } else {
    messageBox.classList.add("message-error");
    messageBox.classList.remove("message-success");
  }
  
}