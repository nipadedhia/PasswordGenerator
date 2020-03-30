// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  alert("Select your criteria for password generation");
  var PassLen = prompt("Enter the required length of the password - Enter a whole number between 8 and 128");


  // Used while loop and it will keep prompting until user input number between 8 to 128 number. It will alert user if number is less than 8 or more than 128
  while (PassLen < 8 || PassLen > 128 || isNaN(PassLen)) {
    alert("Incorrect password length. Please enter a number between 8 & 128");
    PassLen = prompt("Enter the required length of the password - Enter a whole number between 8 and 128");
  }
  PassLen = Math.floor(PassLen);

  // Added confirm prompt asking the criteria to include or no?
  var LwrCase = confirm("Do you want to include lowercase characters? - Select 'OK' for Yes and 'Cancel' for No");
  var UprCase = confirm("Do you want to include uppercase characters? - Select 'OK' for Yes and 'Cancel' for No");
  var Numeric = confirm("Do you want to include numeric characters? - Select 'OK' for Yes and 'Cancel' for No");
  var SplChar = confirm("Do you want to include special characters? - Select 'OK' for Yes and 'Cancel' for No");

  // User will be asked to include at least ine criteria of selection
  while (LwrCase == false && UprCase == false && Numeric == false && SplChar == false) {
    alert("You need to select Yes for at least one criteria");
    LwrCase = confirm("Do you want to include lowercase characters? - Select 'OK' for Yes and 'Cancel' for No");
    UprCase = confirm("Do you want to include uppercase characters? - Select 'OK' for Yes and 'Cancel' for No");
    Numeric = confirm("Do you want to include numeric characters? - Select 'OK' for Yes and 'Cancel' for No");
    SplChar = confirm("Do you want to include special characters? - Select 'OK' for Yes and 'Cancel' for No");
  }

  //alert to display user's selected criteria for password
  alert("Your selection criteria is as follows:" + "\n" + "\n" +
    "Password length is " + PassLen + "\n" +
    "Include lowercase characters = " + LwrCase + "\n" +
    "Include uppercase characters = " + UprCase + "\n" +
    "Include Numeric characters = " + Numeric + "\n" +
    "Include Special characters = " + SplChar
  );


  //adding arrays
  var AllChars = [];

  if (LwrCase) {
    AllChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }

  if (UprCase) {
    AllChars.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "W", "X", "Y", "Z");
  }

  if (Numeric) {
    AllChars.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  }

  if (SplChar) {
    AllChars.push("~", "!", "@", "#", "$", "%", "^", "&", "*", "?");
  }

  var GenPass = "";

  for (i = 0; i < PassLen; i++) {
    GenPass += AllChars[Math.floor(Math.random() * AllChars.length)];
  }

  alert("Your password has been generated. Please copy it from the box below after clicking OK");

  return (GenPass);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);