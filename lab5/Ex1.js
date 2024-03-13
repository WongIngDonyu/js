function Employee(name,id){
    this.name=name;
    this.id = id;
}
function rite(mass){
    for(let i=0;i<mass.length;i++){
        var id = mass[i].length
        var employe = new Employee(mass[i],id)
        console.log("Name: " + employe.name + " - Personal Number: "+ employe.id)
    }
}

rite([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])
