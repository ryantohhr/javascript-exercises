const removeFromArray = function(array, ...toRemove) {
    for (let i = 0; i < toRemove.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (toRemove[i] === array[j]) {
                array.splice(j, 1);
                j--;
            };
        };
    };
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
