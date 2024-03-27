function find(a, b) {
    let c = arguments[2]//два аргумента 2 функии
    console.log(Math.min(a,b,c))
}


function find2(a,b){
    return Math.min(a,b)
}

console.log(find2(find2(2,5),3))


