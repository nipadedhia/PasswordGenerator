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



function generatePassword() {
  alert("Do you want to generate password?");
  var passLength = prompt("Enter the length of the password (between 8 and 128)");

  if (passLength < 8 || passLength > 128) {
    prompt("Incorrect length. Please enter valid number");
  }


}
var upperCase = confirm("Do you want to add uppercase characters?");
var lowerCase = confirm("Do you want to add lowercase characters?");
var specialChar = confirm("Do you want to add special characters?");
var numericChar = confirm("Do you want to add numeric characters?");







