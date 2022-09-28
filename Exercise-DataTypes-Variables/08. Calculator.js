function solve(number,operator,number2){
    let res=0;
    if (operator==='+'){
        res=number+number2;
    }else if (operator==='-'){
        res=number-number2;
    }else if (operator==='/'){
        res=number/number2;
    }else if (operator==='*'){
        res=number*number2;
    }
    console.log(res.toFixed(2));


}

solve(5,
    '+',
    10)