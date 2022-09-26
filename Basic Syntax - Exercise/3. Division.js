function solve(num) {
    let outputNum = 0;
    if (num % 10 === 0) {
        outputNum = 10
    } else if (num % 7 === 0) {
        outputNum = 7
    } else if (num % 6 === 0) {
        outputNum = 6
    } else if (num % 3 === 0) {
        outputNum = 3
    } else if (num % 2 === 0) {
        outputNum = 2
    } else{
    
    }
    
    if (outputNum>0){
    console.log(`The number is divisible by ${outputNum}`);
    }else {
        console.log(`Not divisible`);
    }

}


solve(30)