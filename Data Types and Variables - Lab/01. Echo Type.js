function solve(value){
    console.log(typeof value);
    if (typeof value == 'string' || typeof value == 'number'){
        console.log(value);
    }else {
        console.log(`Parameter is not suitable for printing`);
    }


}
solve(null)