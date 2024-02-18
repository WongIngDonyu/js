function ageIdentifier(age){
    if(age >=0 && age <=2){
        console.log("младенец")
    }
    else if(age >=3 && age <=13){
        console.log( "Ребенок")
    }
    else if(age >=14 && age <=19){
        console.log( "Подросток")
    }
    else if(age >=20 && age <=65){
        console.log( "Взрослый")
    }
    else if(age >=66){
        console.log( "Пожилой")
    }
}
ageIdentifier(2)