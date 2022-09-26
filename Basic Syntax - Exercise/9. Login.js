function solve(user,pass){

    let index=1;
    let password=pass[index]
    let reversedString= '';
    let username=user;
    let wrongTries=0;
    
    for (let i = username.length - 1; i >=0 ; i--){
        reversedString+=username[i]

    }

    while (password!==reversedString){
        console.log(`Incorrect password. Try again.`);
        
        if (password===reversedString){
            console.log(`User ${username} logged in`);
            return;
        }
        wrongTries+=1
        password=pass[index]
        index++


    }
    


}

solve(['Acer','login','go','let me in','recA'])