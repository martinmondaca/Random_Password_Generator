// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var reloadBtn = document.querySelector("#reload");

//Available Characters
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", 
  "{", "}", "|", "~", "\\",];

//Password holders  
var passwordOutput = [];
var yourPassword = "";

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  
//Prompting user for their choices function
function generatePassword (){

  //Asking for password length
  var passwordLength = prompt("How many characters would you like your password to be? Please choose between 8 and 128.")
  if (isNaN(passwordLength) || passwordLength == "" || passwordLength == null){
  alert ("Please input a numeric value between 8 and 128.")
  clearPage();
  return;
  } else if (passwordLength.trim() >=8 && passwordLength.trim() <= 128){
  alert("Your password will be " + passwordLength.trim() + " characters long.");
  } else if (passwordLength.trim() < 8 || passwordLength.trim() > 128){
  alert("Please choose between 8 and 128.");
  clearPage();
  return;
  }

  //Asking if they want lowercase characters
  var wantLowercase = confirm ("Would you like lowercase characters in your password? Please click OK for 'yes' and Cancel for 'no'.")
  if (wantLowercase){
    alert ("You have selected 'yes' to lowercase characters.")
    passwordOutput = passwordOutput.concat(lowercaseCharacters);
  } else {
    alert("You have selected 'no' to lowercase characters.")
  }
  
  //Asking if they want uppercase characters
  var wantUppercase = confirm ("Would you like uppercase characters in your password? Please click OK for 'yes' and Cancel for 'no'.")
  if (wantUppercase){
    alert ("You have selected 'yes' to uppercase characters.")
    passwordOutput = passwordOutput.concat(uppercaseCharacters);
  } else {
    alert ("You have selected 'no' to uppercase characters.")
  }
  
  //Asking if they want numbers
  var wantNumber = confirm ("Would you like numbers in your password? Please click OK for 'yes' and Cancel for 'no'.")
  if (wantNumber){
    alert ("You have selected 'yes' to numeric characters.")
    passwordOutput = passwordOutput.concat(numericCharacters);
  } else {
    alert ("You have selected 'no' to numeric characters.")
  }
  
  //Asking if they want special characters
  var wantSpecial = confirm ("Would you like special characters in your password? Please click OK for 'yes' and Cancel for 'no'." )
  if (wantSpecial){
    alert ("You have selected 'yes' to special characters.")
    passwordOutput = passwordOutput.concat(specialCharacters);
  } else {
    alert ("You have selected 'no' to special characters.")
  }
  
  //If user says no to all prompts for characters they would like
  if (wantLowercase === false && wantUppercase === false && wantNumber === false && wantSpecial === false){
    alert ("Please pick at least one type of character for your password!")
   clearPage();
   return;
    
  }

generateBtn.disabled = true;

    //function for turing array into random string
    function makePassword(){
    passwordOutput = passwordOutput.join("")
    for (i=0; i < passwordLength; i++)
      yourPassword += passwordOutput.charAt(Math.floor(Math.random() * passwordOutput.length));
      return yourPassword
    }
    
  makePassword();
  return yourPassword

}

//Reload webpage
function clearPage(){
  window.location.reload();
}

//Copy password to clipboard
function copyToClipboard() {
  var copyText = document.querySelector("#password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
reloadBtn.addEventListener("click", clearPage);
copyBtn.addEventListener("click", copyToClipboard);