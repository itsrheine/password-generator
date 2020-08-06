// Assignment code here


// prompt criteria
var showPassCriteria = function() {
  var passLength = window.prompt("Before proceeding, type the desired # of characters for your random password.  Your random password must have atleast a minimum of 8 characters and no more than 128 characters.");
  console.log = (passLength);

  // prompted for length
  if (passLength >= 8 && passLength <= 128) {
    passCharTypes();

    // return passLength;
  }
  else {
    window.alert("Invalid Input.  Your random password must have atleast a minimum of 8 characters and no more than 128 characters.");
    // force guest to choose valid option
    showPassCriteria();
  }
}

// prompted for character types
var passCharTypes = function () {
  var 
}





  //random number
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  // upper case
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  // lower case
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  // special characters
  function getRandomSymbol() {
    const symbols = "\\ !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

// when all prompt is answer - generate

// password is generated and displayed in an alert


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  alert("To generate a random password, click OK to proceed.");

  if (writePassword) {
    showPassCriteria();
  }
}

//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

// passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
