function subtract(a, b){
    let c = arguments[2]
    console.log(a+b-c)
}

function subtract2(a,b){
    return a[0]+a[1]-b
}

console.log(subtract2([23,6], 10))
