function mergeArrays(array1, array2) {
    let newArray = [];
    let firstArrayLength = array1.length;

    for (let i = 0; i < firstArrayLength; i++) {
        if (i % 2 === 0) {
            newArray.push(Number(array1[i]) + Number(array2[i]))
        } else {
            newArray.push(String(array1[i]) + String(array2[i]))
        }
    }

    console.log(newArray.join(' - '));

}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])