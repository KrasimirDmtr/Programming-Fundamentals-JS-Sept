function solve(people,groupType,day){

    let pricePerPerson=0;
    let discount=0;

    switch(groupType){
        case "Students":
            if (day==="Friday"){
                pricePerPerson=8.45;
            }else if (day==='Saturday'){
                pricePerPerson=9.80;
            }else if (day==='Sunday'){
                pricePerPerson=10.46;
            }break;
        case "Business":
            if (day==='Friday'){
                pricePerPerson=10.90;
            }else if (day==='Saturday'){
                pricePerPerson=15.60;
            }else if (day==='Sunday'){
                pricePerPerson=16;
            }break;
        case "Regular":
            if (day==='Friday'){
                pricePerPerson=15;
            }else if (day==='Saturday'){
                pricePerPerson=20;
            }else if(day==='Sunday'){
                pricePerPerson=22.50;
            }break;
    }
    let totalPrice=pricePerPerson*people

    if (groupType==="Students" && people>=30){
        discount=totalPrice*0.15;
        totalPrice=totalPrice-discount;
    }else if (groupType==="Business" && people>=100){
        totalPrice=totalPrice-(pricePerPerson*10);
    }else if (groupType==="Regular" && people>=10 && people<=20){
        discount=totalPrice*0.05;
        totalPrice=totalPrice-discount
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);


}

solve(40,

    "Regular",
    
    "Saturday")