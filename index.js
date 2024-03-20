

const passwordBox = document.getElementById("password");
const passwordLength = 12;

const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "@#$%^&*()_+/*-[]{}|";
const allChars = upperCaseChars + lowerCaseChars + numberChars + symbolChars;

function createPassword() {
    let password = "";
    password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    password += symbolChars[Math.floor(Math.random() * symbolChars.length)];

    while (password.length < passwordLength) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

// function copyPassword() {
//     passwordBox.select();
//     navigator.clipboard.writeText(passwordBox.value)
//         .then(() => {
//             console.log('Password copied to clipboard');
//         })
//         .catch(err => {
//             console.error('Unable to copy password to clipboard: ', err);
//         });
// }
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}