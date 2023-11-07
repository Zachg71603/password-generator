// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Initialize variables
var SizeOfPassword;
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseLtr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
var upperCaseLtr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
//I used special characters from this IBM website:  https://www.ibm.com/docs/en/zos/2.4.0?topic=commands-alphanumeric-national-special-characters
var specialChar = ["&", "*", " ", "{", "}", "[", "]", ",", "=", "-", "(", ")", ".", "+", ";", "'","/"] ;
var acceptUppercase;
var acceptLowercase;
var acceptNumericValue;
var acceptSpecialChar;
var selected;

function generatePassword () {
  SizeOfPassword = prompt("Hello! What length would you like your password to be? (Between 8-128 characters)")


  for (var i = 0; i < number.length; i++) {
    if (SizeOfPassword < 8 || SizeOfPassword > 128 ) {
      SizeOfPassword = prompt ("Please try again. Enter a value between 8 and 128.");
    } 
    
  }
}

if (SizeOfPassword >= 8 || SizeOfPassword <= 128) {
  acceptUppercase = confirm("Would you like uppercase characters to be in your password?")
  acceptLowercase = confirm("Would you like lowercase characters to be in your password?")
  acceptSpecialChar = confirm("Would you like special characters to be in your password?")
  acceptNumericValue = confirm("Would you like numeric characters to be in your password?")
}

for (var i = 0; i < number.length; i++) {
  if (acceptLowercase === false && acceptUppercase === false && acceptNumericValue === false && acceptSpecialChar === false ) {
    selected = alert ("You must select atleast one characcter type.");
    acceptUppercase = confirm("Would you like uppercase characters to be in your password?")
    acceptLowercase = confirm("Would you like lowercase characters to be in your password?")
    acceptSpecialChar = confirm("Would you like special characters to be in your password?")
    acceptNumericValue = confirm("Would you like numeric characters to be in your password?")
  } 
  
}

//if user selects 3/4 character types
if (acceptLowercase = true & acceptUppercase === true & acceptNumericValue === true & acceptSpecialChar === true ) {
  selected = number.concat (lowerCaseLtr, upperCaseLtr, specialChar);
  
} 

else if (acceptLowercase = true & acceptUppercase === true & acceptNumericValue === true) {
  selected = number.concat (lowerCaseLtr, upperCaseLtr);
  
} 

else if (acceptSpecialChar = true & acceptUppercase === true & acceptNumericValue === true) {
  selected = number.concat (lowerCaseLtr, specialChar);
  
} 

else if (acceptSpecialChar = true & acceptUppercase === true & acceptNumericValue === true) {
  selected = number.concat (specialChar, upperCaseLtr);
  
} 

else if (acceptLowercase = true & acceptUppercase === true & acceptSpecialChar === true) {
  selected = number.concat (lowerCaseLtr, upperCaseLtr);
  
} 

//if user selects 3/4 character types

else if (acceptLowercase = true & acceptUppercase === true) {
  selected = lowerCaseLtr.concat (upperCaseLtr);
  
} 

else if (acceptLowercase = true & acceptSpecialChar === true) {
  selected = specialChar.concat (lowerCaseLtr);
  
} 

else if (acceptUppercase === true & acceptSpecialChar === true) {
  selected = specialChar.concat (upperCaseLtr);
  
} 

else if (acceptNumericValue === true & acceptSpecialChar === true) {
  selected = number.concat (specialChar);
  
} 

else if (acceptNumericValue === true & acceptLowercase === true) {
  selected = number.concat (lowerCaseLtr);
  
} 

else if (acceptNumericValue === true & acceptUppercase === true) {
  selected = number.concat (upperCaseLtr);
  
} 


