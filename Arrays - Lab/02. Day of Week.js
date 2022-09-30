function solve(dayCount){
    let days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    if (dayCount<1 || dayCount>7){
        console.log(`Invalid day!`);
    }else {
        console.log(days[dayCount-1]);
    }

 



}

solve(11)