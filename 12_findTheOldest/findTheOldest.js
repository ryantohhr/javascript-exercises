const findTheOldest = function(people) {
    const year = new Date().getFullYear();
    return people.reduce((oldest, current) => {
        if (current.yearOfDeath) {
            currentAge = current.yearOfDeath - current.yearOfBirth;
        }
        else {
            currentAge = year - current.yearOfBirth;
        }
        if (oldest.yearOfDeath) {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        else {
            oldestAge = year - oldest.yearOfBirth;
        }
        if (oldestAge > currentAge) {
            return oldest;
        }
        else {
            return current;
        }
    }, {})
};

// Do not edit below this line
module.exports = findTheOldest;
