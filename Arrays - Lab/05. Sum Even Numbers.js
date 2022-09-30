function solve(numbers){
    let even=0;

    for (let i = 0; i < numbers.length; i++){
        let num=Number(numbers[i]);

        if (num % 2 === 0){
            even+=num
        }

    }

    console.log(even);
    


}

solve([['3','5','7','9']])