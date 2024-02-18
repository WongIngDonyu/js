function beautifulMatrixOrSomeSheesh(arr){
    let standard =0
    for (let i=0;i<arr[0].length;i++){
            standard+=arr[0][i]
    }
    for (let i=1;i<arr.length;i++){
        let sum=0
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j]
        }
        if(sum!== standard){
            console.log(false)
            return
        }
    }
    for (let i=0;i<arr[0].length;i++){
        let  sum=0
        for (let j=0;j<arr.length;j++){
            sum+=arr[j][i]
        }
        if(sum!== standard){
            console.log(false)
            return
        }
    }
    console.log(true)
}
beautifulMatrixOrSomeSheesh([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
beautifulMatrixOrSomeSheesh([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])
beautifulMatrixOrSomeSheesh([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
)