var umbrella = {
    name: "Umbrella",
    color : "black",
    weight : "0.6kg",
    isOpen: false,
    open : function(){
        if(umbrella.isOpen){
            console.log("Umbrella is already opened");
        }
        else{
            umbrella.isOpen = true;
            console.log("Opening umbrella");
        }
    },
    close : function(){
        if(umbrella.isOpen){
            isOpen = false;
            console.log("Closing umbrella");
        }else{
            console.log("Umbrella is already closed");
        }
    }
}

console.log(umbrella["weight"]);
umbrella.close();
umbrella.open();
umbrella.close();