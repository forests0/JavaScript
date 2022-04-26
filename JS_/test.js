let main = document.querySelector('main');
let passwords = document.querySelectorAll('.password');
let passwordCipher, ratioOfNumbers, ratioOfSpecialCharacters, ratioOfLowerCases, ratioOfUpperCases;
let password;
let minPassword = 8, maxPassword = 17;
let numbers = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
let specialCharacters = new Array('!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '~', '`', '|', "'", '"', '{', '}', ':', ';', '<', '>', ',', '.', '?', '/', '-', '_', '+', '=');
let lowerCases = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
let upperCases = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
let check = 0;

function makeFourPasswords() {
  for(let i = 0; i < 4; i++) {
    makeAPassword(i);
  }
}

function makeAPassword(cipher) {
  createPassword();
  let newPassword = '';

  for(let i = 0; i < password.length; i++) {
    newPassword += password[i];
  }
  console.log(newPassword);
  passwords[cipher].innerHTML = newPassword;
  password = [];
  check = 0;
}

function createPassword() {
  passwordCipher = createNumber(minPassword, maxPassword);
  password = new Array(passwordCipher);

  ratioOfNumbers = createNumber(1, passwordCipher);

  ratioOfSpecialCharacters = createNumber(1, passwordCipher - ratioOfNumbers);

  ratioOfLowerCases = createNumber(1, passwordCipher - ratioOfNumbers - ratioOfSpecialCharacters);

  ratioOfUpperCases = passwordCipher - ratioOfNumbers - ratioOfSpecialCharacters - ratioOfLowerCases;

  if(ratioOfNumbers === 0 || ratioOfSpecialCharacters === 0 || ratioOfLowerCases === 0 || ratioOfUpperCases === 0)
    createPassword();

  decideSpaceNumbers(ratioOfNumbers);
  decideSpaceSpecialCharacters(ratioOfSpecialCharacters);
  decideSpaceLowerCases(ratioOfLowerCases);
  decideSpaceUpperCases();
}

function createNumber(min, max) {
  return number = Math.floor((Math.random() * (max - min)) + min);
}

function decideSpaceNumbers(number) {
  if(check === 1)
    return;
  for(let i = 0; i < number; i++) {
    while(1) {
      let index = createNumber(1, passwordCipher);
      if(password[index] === undefined) {
        password[index] = numbers[createNumber(0, numbers.length)];
        break;
      }
    }
  }
}

function decideSpaceSpecialCharacters(number) {
  if(check === 1)
    return;
  for(let i = 0; i < number; i++) {
    while(1) {
      let index = createNumber(1, passwordCipher);
      if(password[index] === undefined) {
        let char = specialCharacters[createNumber(0, specialCharacters.length)];
        if(char === '<')
          password[index] = '&lt;';
        else
        password[index] = char;
        break;
      }        
    }
  }
}

function decideSpaceLowerCases(number) {
  if(check === 1)
    return;
  for(let i = 0; i < number; i++) {
    while(1) {
      let index = createNumber(1, passwordCipher);
      if(password[index] === undefined) {
        password[index] = lowerCases[createNumber(0, lowerCases.length)];
        break;
      }
    }
  }
}

function decideSpaceUpperCases() {
  if(check === 1)
    return;
  for(let i = 0; i < passwordCipher; i++) {
    if(password[i] === undefined)
      password[i] = upperCases[createNumber(0, upperCases.length)];
  }
  check = 1;
}

function copyToClipboard(elementId) {
  
  let text = document.createElement('input');
  text.setAttribute('value', document.getElementById(elementId).innerHTML);
  document.body.appendChild(text);
  text.select();
  document.execCommand('copy');
  document.body.removeChild(text);
}