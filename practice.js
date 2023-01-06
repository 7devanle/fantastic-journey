const vehicle ={
    name: "Mazda",
    Length: 4.2,
    color: "Dirty green"
}
function changeObject(objectToChange){
    objectToChange.color = "Dark red";
}
changeObject(vehicle);
console.log(vehicle)