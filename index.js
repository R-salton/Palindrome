// function to check if the string is palindrome or note

function checkPalindrome(str){
    // find the lenth of string
    const len = str.length;

    for(let i = 0; i< len/2; i++){
        //check if the last and  first are the same
        if(str[i] !== str[len - 1 -i]){
            return "It is not a palindrome. ";
        }
        return "It is palindrome. "
    }
}

// fetch inputs
const str = prompt('Enter any string You Whant to check..');

// call The functon

const value = checkPalindrome(str);
document.getElementById("check").innerHTML = value;
