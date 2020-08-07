// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  alert("To generate a random password, click OK to proceed.");

  if (writePassword) {
    showPassCriteria();
  }
};

// prompt criteria
var showPassCriteria = function() {
  var passLength = window.prompt("Before proceeding, type the desired # of characters for your random password.  Your random password must have atleast a minimum of 8 characters and no more than 128 characters.");
  console.log = (passLength);

  // prompted for length
  if (passLength >= 8 && passLength <= 128) {
    passCharTypes();

  return passLength;
  }
  else {
    window.alert("Invalid Input.  Your random password must have atleast a minimum of 8 characters and no more than 128 characters.");
    // force guest to choose valid option
    showPassCriteria();
  }
};

// prompted for character types
var passCharTypes = function () {
  var passCharTypesOptions = window.prompt(
    "Choose atleast one character type for your random password.  Type LOWERCASE, UPPERCASE, NUMERIC and/or SPECIAL CHARACTERS.");
    
    passCharTypesOptions = passCharTypesOptions.toLowerCase();
    // conditional recursive function call
    if (passCharTypesOptions === "lowercase") {

      // generated password
      window.alert("Your generated password is " + getRandomLower);
    }

    if (passCharTypesOptions === "uppercase") {

      // upper case only
      passCharTypesOptions = getRandomUpper;

    }

    if (passCharTypesOptions === "numeric") {

      // numeric only
      passCharTypesOptions = getRandomNumber;

    }

    if (passCharTypesOptions === "special characters") {

      // special characters only
      passCharTypesOptions = getRandomSymbol;

    }
  }


// when password is generated - password displayed in alert or written on page
var passwordText = document.querySelector("#password");


// Variables
var getRandomLower = function() {
  String.fromCharCode(Math.floor(Math.random() * 26) + 97);

};

var getRandomUpper = function() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

var getRandomNumber = function() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

var getRandomSymbol = function() {
  const symbols = "\\ !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
};
