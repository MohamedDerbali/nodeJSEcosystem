const EventEmitter = require("events");
const event = new EventEmitter();
//listener
event.on("Give0", (studentName)=>{
    console.log(`student ${studentName} got a zero`);
})
//emitter => il va envoyer l'evenement
const arr = ["Yesser", "Amine", "Safa", "Emir Jebari", "Aziz trabelsi"];
const criteria = (student) => {
    if(student === "Amine"){
        return false;
    }
    return true;
}
arr.map((student) => {
    (criteria(student)) &&  
    event.emit("Give0", student);
})
//spread syntax => copy element ...
const arrayCopy = [...arr, "Ali"];
const user = {
    name: "ali",
    age: 25
}
//object Destruction
const {name, age} = user;
console.log(`le nom est ${name} et l age est ${age}`);
console.log(arrayCopy);