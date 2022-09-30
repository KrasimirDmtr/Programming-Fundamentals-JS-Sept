function solve(array1, array2) {
    let sum = 0;

    for ( let i = 0; i < array1.length; i++){
        array1[i] = Number(array1[i]);
        sum+=array1[i]
    }

    for ( let i = 0; i < array2.length; i ++ ){
        array2[i] = Number(array2[i]);
    }
    let isEqual=true;


    for ( let i = 0; i < array1.length; i++){
        for (let j = 0; j < array2.length; j++){
            if (array1[i]!==array2[i]){
                console.log(`Arrays are not identical. Found difference at ${i} index`);
                isEqual=false;
                return;
            }else {
                isEqual=true;
            }
        }
    }
    if (isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }





}

solve(['1'], ['10'])