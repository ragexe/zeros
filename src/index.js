module.exports = function getZerosCount(number) {

    let result = 0;
    let power = 1;
    let poweredMultiplier = 5 ** power;

    while (number >= poweredMultiplier){
        number = number - number % poweredMultiplier;
        result += number / poweredMultiplier;
        poweredMultiplier = 5 ** ++power;
    }

    return result
};
