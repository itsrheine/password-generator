// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

// universal variable 
var generateBtn = document.querySelector("#generate");
var alllowercase = "abcdefghijklmnopqrstuvwxyz";
var alluppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allnumbers = "0123456789";
var allspecial = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passLength;
var passUpperprompt;
var passLowerprompt;
var passNumprompt;
var passSpecprompt;
var generatedlastPass;
var number;
var upper;
var lower;

// prompt criteria
var showPassCriteria = function() {
  var passLength = window.prompt("Before proceeding, type the desired # of characters for your random password.  Your random password must have atleast a minimum of 8 characters and no more than 128 characters.");
  
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
  
}

// prompted for lower case
var passUpperOption = function () {
  var passUpperprompt = window.confirm("Would you like your password to include UPPERCASE leters?");

    // if it was YES
    if (passUpperprompt) {
      passUpperprompt = true;
      passLowerOption();

      return passUpperprompt;
    }

    // if it was NO
    else {
      passUpperprompt = false;
      passLowerOption();

      return passUpperprompt;
    }      
}

// prompted for upper case
var passLowerOption = function () {
  var passLowerprompt = window.confirm("Would you like your password to include LOWERCASE leters?");

    // if it was YES
    if (passLowerprompt) {
      passLowerprompt = true;
      passNumOption();

      return passLowerprompt;
    }

    // if it was NO
    else {
      passLowerprompt = false;
      passNumOption();

      return passLowerprompt;
    }      
}

// prompted for numeric
var passNumOption = function () {
  var passNumprompt = window.confirm("Would you like your password to include NUMBERS?");

    // if it was YES
    if (passNumprompt) {
      passNumprompt = true;
      passSpecOption();

      return passNumprompt;
    }

    // if it was NO
    else {
      passNumprompt = false;
      passSpecOption();

      return passNumprompt;
    }      
}

// prompted for special characters
var passSpecOption = function () {
  var passSpecprompt = window.confirm("Would you like your password to include SPECIAL characters?");

    // if it was YES
    if (passSpecprompt) {
      passSpecprompt = true;

      return passSpecprompt;
    }

    // if it was NO
    else {
      passSpecprompt = false;

      return passSpecprompt;
    }      
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
};

// choices combined
var charcombined = "";
var generatedlastPass = ""; 

  if (passUpperprompt && passNumprompt && passSpecprompt && passLowerprompt){
    charcombined += alluppercase + allnumbers + allspecial + alllowercase;

  }

  else if (passUpperprompt && passNumprompt && passLowerprompt){
    charcombined += alluppercase + allnumbers + alllowercase;

  }

  else if (passLowerprompt && passSpecprompt){
    charcombined += allnumbers + allspecial;

  }

  else if (passNumprompt && passSpecprompt){
    charcombined += allnumbers + allspecial;

  }

  else if (passUpperprompt && passNumprompt){
    charcombined += alluppercase + allnumbers;
   
  }

  else if (passUpperprompt && passSpecprompt){
    charcombined += alluppercase + allspecial;
   
  }

  else if (passUpperprompt && passLowerprompt){
    charcombined += alluppercase + alllowercase;
   
  }

  else if (passUpperprompt){
    charcombined += alluppercase;

  }

  else if (passLowerprompt){
    charcombined += alllowercase;

  }

  else if (passNumprompt){
    charcombined += allnumbers;

  }

  else if (passSpecprompt){
    charcombined += allspecial;

  }



  
  for (var i = 0; i < passLength; i++){
  generatedlastPass += charcombined.charAt(Math.floor(Math.random() * charcombined.length));
}


// Writes password to the #password input
function writePassword() {
  generatedlastPass = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = generatedlastPass;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);