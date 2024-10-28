const fibonacci = function(member) {
    member = Number(member);
    if (member < 0) {
        return "OOPS";
    }
    else if (member === 1) {
        return 1;
    }
    else if (member === 0) {
        return 0;
    }
    else {
        return fibonacci(member - 1) + fibonacci(member - 2);
    }
};

// Do not edit below this line
module.exports = fibonacci;
