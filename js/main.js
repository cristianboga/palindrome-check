
const button = document.querySelector(".button");
let palindromeString = document.getElementById("input");
let resultContainer = document.querySelector('.result-message');
const contentBox = document.querySelector('.content')

function palindrome(str){

    if(str === "") {
        resultContainer.innerHTML = "^Input missing!";
        contentBox.style.boxShadow = "0px 2px 7px -1px red";
    }else {
    let abRegExp = /[^A-Za-z0-9]/g;
    let lowerString = str.toLowerCase().replace(abRegExp, '');
    let reverseString = lowerString.split('').reverse().join('');
    
        if(reverseString === lowerString) {
            resultContainer.innerHTML = `<span class="green-result">It's a palindrome</span>`;
            contentBox.style.boxShadow = "0px 2px 7px -1px rgba(38, 194, 129, 1)";
        }else {
            resultContainer.innerHTML = `<span class="green-red">It's not a palindrome</span>`;
            contentBox.style.boxShadow = "0px 2px 7px -1px red";
        }
    }

}

function removeStyle() {
    resultContainer.innerHTML = "";
    contentBox.style.boxShadow = "0px 2px 7px -1px rgba(0,0,0,0.5)";
}

button.addEventListener('click', function(){
    palindromeString = document.getElementById("input").value;
    palindrome(palindromeString)
    document.getElementById("input").value = "";
});

palindromeString.addEventListener('keydown',removeStyle);