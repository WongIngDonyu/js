function del(num){
    if(num%10 ===0){
        console.log("Число делиться на 10")
    }
    else if(num%7 ===0){
        console.log("Число делиться на 7")
    }
    else if(num%6 ===0){
        console.log("Число делиться на 6")
    }
    else if(num%3 ===0){
        console.log("Число делиться на 3")
    }
    else if(num%2 ===0){
        console.log("Число делиться на 2")
    }
    else {
        console.log("Не делиться")
    }
}
del(12)