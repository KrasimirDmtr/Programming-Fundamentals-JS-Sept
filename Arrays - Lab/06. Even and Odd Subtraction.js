function solve (numbers){
    let even=0;
    let odd=0;

    for (let num of numbers){
        if (num % 2 === 0){
            even+=num
        }else {
            odd+=num
        }
    }


    console.log(even-odd);



}

solve([1,2,3,4,5,6])