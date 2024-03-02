function progressBar(z){
    if (z < 0 || z > 100 || z % 10 !== 0) {
        console.error("Значение должно быть между 0 и 100 и делиться на 10 без остатка");
        return;
    }
    let string ="["
    let c=z
    for(let x=0;x<10;x++){
        if(z>0){
            z-=10
            string+="%"
        }
        else {
            string+="."
        }
    }
    string+="]"
    if(c===100){
        console.log("100% Complete!")
        console.log(string)
    }
    else {
        console.log(c+ "% "+ string)
        console.log("Still loading...")
    }
}

progressBar(30)
progressBar(50)
progressBar(100)