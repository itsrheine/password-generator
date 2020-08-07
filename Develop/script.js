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
    window.alert("You may choose between four character types.  You must choose atleast one in order to proceed.")
    passUpperOption();

  return passLength;
  }
  else {
    window.alert("Invalid Input.  Your random password must have atleast a minimum of 8 characters and no more than 128 characters.");
    // force guest to choose valid option
    showPassCriteria();
  }

  var passExit = window.confirm("Exit");
  
  if (passExit) {
    showPassCriteria();
  }
  else {
    window.alert("Exit");
  }
  
};

// prompted for lower case
var passUpperOption = function () {
  var passprompt = window.prompt("Would you like your password to include UPPERCASE leters?");
      passprompt = passprompt.toLowerCase();

      // if they mistyped 
      if (passprompt === "" || passprompt === null) {
        window.alert("Invalid Input.")
        passUpperOption();
      }

      // if it was YES
      else if (passprompt === "yes") {
        passprompt = true;
        return passprompt;
      }

      else if (passprompt === "no") {
        passprompt = false;
        return passprompt
      }

      return passprompt;
      
}


 // prompted for upper case
 var passLowerOption = function () {
  var passprompt = window.prompt("Would you like your password to include LOWERCASE leters?");
      passprompt = passprompt.toLowerCase();

      // if they mistyped 
      if (passprompt === "" || passprompt === null) {
        window.alert("Invalid Input.")
        passLowerOption();
      }

      // if it was YES
      else if (passprompt === "yes") {
        passprompt = true;
        return passprompt;
      }

      else if (passprompt === "no") {
        passprompt = false;
        return passprompt
      }

      return passprompt;
}


 // prompted for numeric
 var passNumOption = function () {
  var passprompt = window.prompt("Would you like your password to include NUMERICAL characters?");
      passprompt = passprompt.toLowerCase();

      // if they mistyped 
      if (passprompt === "" || passprompt === null) {
        window.alert("Invalid Input.")
        passNumOption();
      }

      // if it was YES
      else if (passprompt === "yes") {
        passprompt = true;
        return passprompt;
      }

      else if (passprompt === "no") {
        passprompt = false;
        return passprompt
      }

      return passprompt;
}
    
// prompted for special characters
var passSpecOption = function () {
  var passprompt = window.prompt("Would you like your password to include SPECIAL characters?");
      passprompt = passprompt.toLowerCase();

      // if they mistyped 
      if (passprompt === "" || passprompt === null) {
        window.alert("Invalid Input.")
        passSpecOption();
      }

      // if it was YES
      else if (passprompt === "yes") {
        passprompt = true;
        return passprompt;
      }

      else if (passprompt === "no") {
        passprompt = false;
        return passprompt
      }

      return passprompt;
}

// prompted for special characters


// when password is generated - password displayed in alert or written on page
var passwordText = document.querySelector("#password");


// Variables and functions
function generatePassword() {
  
}