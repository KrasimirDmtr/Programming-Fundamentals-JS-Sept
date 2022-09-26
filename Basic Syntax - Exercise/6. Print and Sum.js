function solve(start,end){
    let sum=0;
    let outp=  '';


    for (let i=start;i<=end;i++){
        let num=Number(i)
        sum+=num
        outp+=`${num} `;
    }
     console.log(outp);
     console.log(`Sum: ${sum}`);


}

solve(0,26)