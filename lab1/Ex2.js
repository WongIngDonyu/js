function rounding(num, accuracy){
    if(accuracy>15){
        accuracy = 15;
    }
    let fixNumber = num.toFixed(accuracy)
    return parseFloat(fixNumber);
}
console.log(rounding(10.4,152))
console.log(rounding(10.4,152) +0.044)
