function maxNumber(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        let isBigger = true;
        let currentNumber = array[i];
        for (let j = i + 1; j < array.length; j++) {
            if (currentNumber <= array[j]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            newArray.push(currentNumber)
        }
    }
    console.log(newArray.join(' '));

}

maxNumber([14, 24, 3, 19, 15, 17])