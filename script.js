// complete the given function

function palindrome(str){
  str = str.toLowerCase();
    let arr = [...str];
    let arrCopy = [...str];  
    let arrReverse = arrCopy.reverse();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arrReverse[i]) {
            return false;
        }
    }
   
     return true;
}
module.exports = palindrome
