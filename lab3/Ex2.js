function generalElements(arr1, arr2){
    let seeThis = []
    for (let i=0;i<arr1.length;i++){
        for (let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j] && !seeThis.includes(arr1[i])){
                console.log(arr1[i])
                seeThis.push(arr1[i])
                break
            }
        }
    }
}
generalElements(['Hey', 'hello', 2, 4, 'Peter', 'e','hello'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
generalElements(['R', 'u', 's', 's', 'i', 'a'],
    ['R', 'u', 't'])