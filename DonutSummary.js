const donutArray = [
    {type : "jelly", cost: 1.23},
    {type : "chocolate", cost: 2.23},
    {type : "cidar", cost: 1.59},
    {type : "Bostom cream", cost: 5.99}
];

donutArray.forEach(function (donut){
    console.log(donut.type+ " donuts cost $"+donut.cost +" each")
});

