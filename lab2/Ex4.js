function calculator(num1, func, num2){
    let result=0
    switch (func){
        case "+":
            result=num1+num2
            break
        case "-":
            result=num1-num2
            break
        case "*":
            result=num1*num2
            break
        case "/":
            if(num2===0){
                console.log("На нуль делить нельзя")
                return
            }
            result=num1/num2
            break
        default:
            console.log("Неверная операция");
            return;
    }
    console.log(result.toFixed(2))
}
calculator(5, '+', 10)
calculator(25.5, '-', 3)
calculator(4, "*", 6);  
calculator(25, "%", 0);
calculator(10, "/", 2);