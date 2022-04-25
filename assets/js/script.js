//var timerE1 = document.querySelector(".timer-count");
//var wordBlanks = document.querySelector(".word-blanks");
//var start = document.querySelector(".start-button");
var generateBtn = document.querySelector("#generate");
//console.log (timerE1);
//console.log (startButton);

//startButton.addEventListener("click", function(event){};

// varriable arrays  that will be used in the generator
var numbers = [0,1,2,3,4,5,6,7,8,9];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialKeys = ["!","@","#","$","%","^","&","*","(",")","-","_","~","`","=","+",";",":","/","?",".",",",">","<","["];
//var timeLeft =10;


//startButton.addEventListener( "click", countdown );
 
function generatePassword (){

    //creates open empty array and password variable is being created
var password = "";
var characters = [];

//setting password lenght
var passwordLength = prompt("How long do you want gnerated password to be?")
// if statements for blank fields

if (passwordLength === null) {
    return ;
  } 
  //setting alerts to make sure password criteria is followed
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must have inbetween 7 and 129 characters!")
    return generatePassword();
  } 
  else if (isNaN(passwordLength)) {
    alert("Input valid numbers only!")
    return generatePassword();
  }
  else {
    var yesNum= confirm("Click OK if you want numbers included!");
    var yesLow = confirm("Click OK if you want lowercase letters included!");
    var yesUp = confirm ("Click OK if you want uppercase letters included!");
    var yesSpecial = confirm("Click OK if you want special characters included!");
  };
  console.log(passwordLength);

  //after the choices from user are added 
  if (yesNum === false && yesUp === false && yesUp === false && yesSpecial === false ) {
    alert ("You must choose at least one condition");
    return generatePassword();
  }
  if (yesNum === true) {
    characters = characters.concat(numbers);
  }
  if (yesLow === true) {
    characters = characters.concat(lowerCase);
  }
  if (yesUp === true) {
    characters = characters.concat(upperCase);
  }
  if (yesSpecial === true) {
    characters = characters.concat(yesSpecial);
  }

  console.log(characters);

  //random array loop from charcters array and then random password  is generated
  for (var i=0; i<passwordLength; i++)
  password += characters[Math.floor(Math.random() * characters.length )];
  console.log(password);
  return password;
}
// input #password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

