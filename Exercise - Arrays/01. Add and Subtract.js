function solve(numbers) {
    let newArray = []
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        firstSum += num;

        if (num % 2 === 0) {
            num = num + i;
            newArray.push(num)
        } else {
            num = num - i;
            newArray.push(num)
        }

    }

    for (let i = 0; i < newArray.length; i++) {
        let num = newArray[i];
        secondSum += num;
    }
    console.log(`[ ${newArray.join(', ')} ]`);
    console.log(firstSum);
    console.log(secondSum);

}

solve([5, 15, 23, 56, 35])