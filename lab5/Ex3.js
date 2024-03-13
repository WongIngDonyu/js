function Goods (name, count){
    this.name =name;
    this.count = count;
}

function solve(mass1, mass2){
    var products=[]
    for(let i=0;i<mass1.length;i+=2){
        var goods = new Goods(mass1[i], parseInt(mass1[i+1]))
        products.push(goods)
    }
    for(let i=0;i<mass2.length;i+=2){
        var good = new Goods(mass2[i], parseInt(mass2[i+1]))
        var hasGoods = products.find(product => product.name === good.name)
        if(hasGoods){
            hasGoods.count+=good.count
        }
        else {
            products.push(good)
        }
    }
    for (var i = 0; i < products.length; i++) {
        console.log(products[i].name + " -> " + products[i].count);
    }
}

solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])