const reverseString = function(string) {
    splitString = string.split("").reverse().join('');
    return splitString;
};


x = reverseString("This is the string")
console.log(x);


// Do not edit below this line
module.exports = reverseString;
