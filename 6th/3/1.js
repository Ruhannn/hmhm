let students = {
    2222:{
        name: 'John',
        section:"c",
        class:"ix",
        address:{
            "building": 12,
            "street": "st . jonson",
            'city':"Rangpur",
            "country": "bangladesh"
        }
    },
    3333:{
        name: 'ruhan',
        section:"d",
        class:"x",
        address:{
            "building": 76879,
            "street": "12.118.59.227st . jonson",
            'city':"dhaka",
            "country": "USA"
        }
    }
}
console.log(students[2222].address.city);
console.log(students[3333].address.city);
let data2 = {
    data:
    [
        {
        bookId:1,
        bookDescription:{
            name:"hauler programming ",
        }
        }
    ]
}
console.log(data2.data[0].bookDescription.name);