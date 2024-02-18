function clock (arr, rotate){
        for (let i=0;i<rotate;i++){
            let temp = arr.shift()
            arr.push(temp)
        }
        console.log(arr)
}
clock([51, 47, 32, 61, 21], 2)
clock([32, 21, 61, 1], 4)
clock([2, 4, 15, 31], 5)