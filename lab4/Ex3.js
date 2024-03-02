function matrix(n){
    let mass = []
    for (let i=0;i<n;i++){
        mass[i] = [];
        for(let j=0;j<n;j++){
            mass[i][j]=n
        }
    }
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < n; j++) {
            row += mass[i][j] + " ";
        }
        console.log(row);
    }
}
matrix(3)
console.log("\n")
matrix(7)
console.log("\n")
matrix(2)