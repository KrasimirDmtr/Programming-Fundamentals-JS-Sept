function solve(pageNumber,pagePerHour,reqDays){
    let hoursForBook=(pageNumber/pagePerHour)
    let hoursPerDay=hoursForBook/reqDays
    console.log(hoursPerDay);


}

solve(432,
    15 ,
    4 )