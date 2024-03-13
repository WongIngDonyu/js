function DescritpTown(town, latitude, longitude){
    this.town = town;
    this.latitude = latitude
    this.longitude = longitude
}

function createTown(mass){
    for(let i=0;i<mass.length;i++){
        var columns = mass[i].split("|")
        var town = new DescritpTown(columns[0].trim(), parseFloat(columns[1].trim()).toFixed(2), parseFloat(columns[2].trim()).toFixed(2))
        console.log(town)
    }
}
createTown(['Moscow | 55.7522 | 37.6156',
    'Beijing | 39.913818 | 116.363625'])