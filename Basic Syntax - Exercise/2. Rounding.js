function solve(num,fix){
    if (fix>15){
        fix=15
    }

    let final=num.toFixed(fix)
    
    console.log(parseFloat(final));


}


solve(10.5,3)