// 1.створити 3 обʼєкти через {}
// 2.створити 3 обʼєкти через Object()
// 3.створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі
// 4.створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
// 5.унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

let car = {
    "spid": 300,
    "color": "red",
    "engin": {
        "power": 560,
        "dvs": "disel"
    }
}

let newCar = Object.create(car);
// console.log(newCar.spid);

let sity = {
    "population": 300,
    "homeColor": "black",
    "pets": [
        "cats",
        "dogs"
    ]
}

let newSity = {
    "bildings" : 4343,
    __proto__:sity
}
// console.log(newSity.homeColor);

let phone = new Object()
    phone.black = "black";
    phone.display = "Doe";
    phone.ozu = 3;

// console.log(phone.ozu);
//======================================================================

let engineer = {
    name: "Stiv Jobs",
    experience: 34,
    skills: ["JavaScript","playWrite"]
};
  
let qaEngineer = Object.create(engineer);
qaEngineer.newName = "Roman"
// console.log(qaEngineer.newName, qaEngineer.experience, qaEngineer.skills);

//=========================================================================

let person = {
    name: "noName",
    age: 32,
    city: "Dnipro"
};    
console.log("Person", person);

let newEngineer = {
    job: 10,
    skills: "JavaScript",
    __proto__: person
};
console.log("Engineer", newEngineer);

let newQangineer = {
    name: "Roman",
    __proto__: newEngineer
};
console.log("QA Engineer", newQangineer);