// variables


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
  var passUpperprompt = window.prompt("Would you like your password to include UPPERCASE leters?");
      passUpperprompt = passprompt.toLowerCase();

      // if they mistyped 
      if (passUpperprompt === "" || passUpperprompt === null) {
        window.alert("Invalid Input.")
        passUpperOption();
      }

      // if it was YES
      else if (passUpperprompt === "yes") {
        passUpperprompt = true;
        return passUpperprompt;
      }

      else if (passUpperprompt === "no") {
        passUpperprompt = false;
        return passUpperprompt;
      }

      return passUpperprompt;
      
}

 // prompted for upper case
 var passLowerOption = function () {
  var passLowerprompt = window.prompt("Would you like your password to include LOWERCASE leters?");
      passLowerprompt = passprompt.toLowerCase();

      // if they mistyped 
      if (passLowerprompt === "" || passLowerprompt === null) {
        window.alert("Invalid Input.")
        passLowerOption();
      }

      // if it was YES
      else if (passLowerprompt === "yes") {
        passLowerprompt = true;
        return passLowerprompt;
      }

      else if (passLowerprompt === "no") {
        passLowerprompt = false;
        return passLowerprompt;
      }

      return passLowerprompt;
}


 // prompted for numeric
 var passNumOption = function () {
  var passNumprompt = window.prompt("Would you like your password to include NUMERICAL characters?");
      passNumprompt = passprompt.toLowerCase();

      // if they mistyped 
      if (passNumprompt === "" || passNumprompt === null) {
        window.alert("Invalid Input.")
        passNumOption();
      }

      // if it was YES
      else if (passNumprompt === "yes") {
        passNumprompt = true;
        return passNumprompt;
      }

      else if (passNumprompt === "no") {
        passNumprompt = false;
        return passNumprompt;
      }

      return passNumprompt;
}
    
// prompted for special characters
var passSpecOption = function () {
  var passSpecprompt = window.prompt("Would you like your password to include SPECIAL characters?");
      passSpecprompt = passprompt.toLowerCase();

      // if they mistyped 
      if (passSpecprompt === "" || passSpecprompt === null) {
        window.alert("Invalid Input.")
        passSpecOption();
      }

      // if it was YES
      else if (passSpecprompt === "yes") {
        passSpecprompt = true;
        return passSpecprompt;
      }

      else if (passSpecprompt === "no") {
        passSpecprompt = false;
        return passSpecprompt;
      }

      return passSpecprompt;
}

// functions
function generatePassword() {

  // generate length
  showPassCriteria();
  console.log(passLength);

  // generate upper case
  passUpperOption();
  console.log(passUpperprompt);

  // generate lower case
  passLowerOption();
  console.log(passLowerprompt);

  // generate numerical values
  passNumOption();
  console.log(passNumprompt);

  // generate special characters
  passSpecOption();
  console.log(passSpecprompt);
}

// 


// incorporating character length chosen by user to equation to generate random password
for (var i = 0; i < passLength; i++){
  += 
}

// password is generated and displayed in alert or writter to the page
function writePassword() {
  window.alert("To generate a random password, click OK to proceed.");
  var passGen = "";
  passGen = generatePassword();

  // when password is generated - password displayed in alert or written on page
  var passwordText = document.querySelector("#password"); {
  passwordText.value = passGen;

}  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


