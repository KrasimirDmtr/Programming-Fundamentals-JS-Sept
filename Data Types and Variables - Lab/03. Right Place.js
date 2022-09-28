function solve(stringOne, char, stringTwo){

    let res=stringOne.replace('_',char);
    let output=res === stringTwo? "Matched" : "Not Matched";
    console.log(output);


}

solve('Str_ng', 'i', 'String')