function solve(number){
    let sum=0;


    for (let i=1; i<=number;i++){
        let num=Number([i])
        sum=(num%10);
        sum=(sum/10);

        console.log(sum);
        
    }


}

solve(15)