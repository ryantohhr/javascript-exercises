const palindromes = function (string) {
    // Removing space and punctuation
    string = string.replace(/\ /g, "").replace(/\./g, "").replace(/\!/g, "").replace(/\,/g, "");

    // Convert string to lower case
    string = string.toLowerCase();

    // Check palindrome
    let n = Math.floor(string.length / 2);
    let firstHalf = string.slice(0, n);
    let firstHalfReversed = firstHalf.split("").reverse().join("");
    let secondHalf = string.slice(string.length - n);
    if (firstHalfReversed === secondHalf) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
