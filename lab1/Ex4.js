function business(people, group, day){
    let allCount=0
    let countPerPeople=0
    if (group==="Students" && day==="Friday"){
        countPerPeople=8.45
    }
    if (group==="Students" && day==="Saturday"){
        countPerPeople=9.80
    }
    if (group==="Students" && day==="Sunday"){
        countPerPeople=10.46
    }
    if (group==="Corp" && day==="Friday"){
        countPerPeople=10.90
    }
    if (group==="Corp" && day==="Saturday"){
        countPerPeople=15.60
    }
    if (group==="Corp" && day==="Sunday"){
        countPerPeople=16
    }
    if (group==="Regular" && day==="Friday"){
        countPerPeople=15
    }
    if (group==="Regular" && day==="Saturday"){
        countPerPeople=20
    }
    if (group==="Regular" && day==="Sunday"){
        countPerPeople=22.50
    }
    allCount=people*countPerPeople;
    if(group==="Regular" && people>=10 && people<=20){
        console.log("Total price " + ((allCount*95)/100).toFixed(2))
    }
    else if (group==="Corp" && people>=100){
        allCount-=10*countPerPeople
        console.log("Total price " + allCount.toFixed(2))
    }
    else if (group==="Students" && people>=30){
        console.log("Total price " + ((allCount*85)/100).toFixed(2))
    }
    else {
        console.log("Total price " + allCount.toFixed(2))
    }
}
business(30, "Students", "Sunday")
business(40, "Regular", "Saturday")