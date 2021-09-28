function palindrome(str) {

  str=str.match(/[a-z0-9]/ig);
  let originalString=str.join('').toLowerCase();
  let reverseString=str=str.reverse().join('').toLowerCase();
  
  if(originalString===reverseString)
    return true;

  return false;
}

console.log(palindrome("_12eye"));

/* REVERSE STRING RECURSIVE

function inversion(a){
    if (a === ""){
        return "";
    } else {            
        return inversion(a.substr(1)) + a.charAt(0)
    }
}
let a = inversion("putYourStringHere");
*/
