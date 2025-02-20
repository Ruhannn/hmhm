const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const players = [5, 563, 636, 3, 6, 36, 63, 6]
const selected = players.filter(p => p > 70)
console.log("selected", selected)

class Player {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sleep() {
        console.log(`sleeping now ${this.name}`);
    }


}
const kodom = new Player("ruhan", 16)

console.log(kodom);
kodom.sleep();


let data = {
    sophia: {
        id: 33,
        study: [
            {
                primary: [
                    { school_name: "cpscr", location: "rangpur" }
                ]
            }
        ]
    }
};

console.log(data.sophia.study[0].primary[0].location);

let students = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        email: "rubaprou17@gmail.com",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }
    }
};
