// const PI = 3.14;
const PI = Math.PI;

const min = (n1 , n2) => {
    if (n1 > n2) {
        return n2;
    } else {
        return n1;
    }
}

const max = (n1 , n2) => {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

const sqrt = (number) => {
    return Math.sqrt(number);
}


const round = (number) => {
    const array = number.toString().split(".");
    if(array[1] >= 5) {
        return parseInt(array[0]) + 1
    } else {
        return parseInt(array[0])
    }
}



module.exports = {
    sqrt,
    max,
    min,
    round,
}





