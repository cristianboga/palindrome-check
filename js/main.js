let palindromeString = document.getElementById("input");
let resultContainer = document.querySelector('.result-message');
const button = document.querySelector(".button");
const contentBox = document.querySelector('.content');
const isPalindrome = `<span class="green-result">It's a palindrome</span>`;
const notPalindrome = `<span class="green-red">It's not a palindrome</span>`;
const missingInputText = "^Input missing!";


function takeFromInput(){
    palindromeString = document.getElementById("input").value;
    palindrome(palindromeString)
    document.getElementById("input").value = "";
}

function palindromeCheck(str){
    let abRegExp = /[^A-Za-z0-9]/g;
    let lowerString = str.toLowerCase().replace(abRegExp, '');
    let reverseString = lowerString.split('').reverse().join('');
    
    if(reverseString === lowerString) {
        resultContainer.innerHTML = isPalindrome;
        contentBox.style.boxShadow = "0px 2px 7px -1px rgba(38, 194, 129, 1)";
    }else {
        resultContainer.innerHTML = notPalindrome;
        contentBox.style.boxShadow = "0px 2px 7px -1px red";
    }
}

function missingInput() {
    resultContainer.innerHTML = missingInputText;
    contentBox.style.boxShadow = "0px 2px 7px -1px red";
}

function palindrome(str){
    if(str === "") {
        missingInput();
    }else {
        palindromeCheck(palindromeString);
    }
}

function removeStyle() {
    resultContainer.innerHTML = "";
    contentBox.style.boxShadow = "0px 2px 7px -1px rgba(0,0,0,0.5)";
}

button.addEventListener('click', takeFromInput);
palindromeString.addEventListener('keydown', removeStyle);
