function magicSum(array, result) {
    let pairs = [];


    for (let i = 0; i < array.length; i++) {
        let currentNumber = array[i];

        for (let j = i + 1; j < array.length; j++) {
            let nextNumber = array[j];

            if (currentNumber + nextNumber === result) {
                pairs.push(currentNumber, nextNumber);
                console.log(pairs.join(' '));
                pairs = []
            }
        }
    }



}

magicSum([1, 2, 3, 4, 5, 6],
    6)