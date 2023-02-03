var scopeAsync = () => {
    const getUserAsync = (userId, secondes) => {
        setTimeout(()=>{
            console.log(userId);
        }, secondes)
    }
    //instruction du async
    getUserAsync("123", 2000); //3
    getUserAsync("321", 1000); //2
    const sum = 1+2;
    console.log("the sum of 1+2 is "+ sum); //1
}

var scopeSync = () => { //dans l'ordre
    const getUserSync = (userId)=> {
        return userId;
    }
    //instruction du sync
    const user1 = getUserSync("123"); //1
    console.log(user1);
    const user2 = getUserSync("321"); //2
    console.log(user2);
    const sum = 1+2;
    console.log("the sum of 1+2 is"+ sum); //3
}
// scopeSync();
scopeAsync();