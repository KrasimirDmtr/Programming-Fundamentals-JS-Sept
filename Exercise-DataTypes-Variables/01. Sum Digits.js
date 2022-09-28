function solve(number){

    let numAsString=String(number)
    let sum=0;

    for (let i=0;i<numAsString.length;i++){
        let charAt=Number(numAsString[i])
        sum+=charAt
    
    }
    console.log(sum);
 


}

solve(97561)