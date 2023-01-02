var facebookProfile = {
    name: "Abdulfatah Ridwan",
    numberOfFriends: 390,
    messages: ["Hello", "How you doing"],
    postMessage : function(message){
        this.messages.push(message);
    },
    deleteMessage: function(index){
        this.messages.splice(index, 1)
    },
    addFriend: function(){
        this.numberOfFriends++;
    },
    removeFriend : function(){
        this.numberOfFriends--;
    }
}

facebookProfile.removeFriend();
facebookProfile.postMessage("Can I know you?")
facebookProfile.deleteMessage(1);
console.log(facebookProfile.numberOfFriends);
console.log(facebookProfile.messages);