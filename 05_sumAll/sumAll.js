const sumAll = function(num1, num2) {
    let sum = 0;
    num1Type = typeof num1;
    num2Type = typeof num2;
    num1 = Number(num1);
    num2 = Number(num2);
    if (!(Number.isInteger(num1)) || !(Number.isInteger(num2))) {
        return "ERROR";
    }
    else if (num1Type !== "number" || num2Type !== "number") {
        return "ERROR";
    }
    else if (num1 > num2) {
        let tmp = num1;
        num1 = num2;
        num2 = tmp;
    }
    else if ((num1 < 0) || (num2 < 0)) {
        return "ERROR";
    }
    for (let i = num1; i < num2 + 1; i++) {
        sum += i;
    };
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
