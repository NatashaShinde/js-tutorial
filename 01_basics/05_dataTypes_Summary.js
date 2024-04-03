/* 
primitive DataTypes: Stack memory => will get copy (original value remains same)
*/

let myYoutubeName = "Samco@google.com"
let anotherName = myYoutubeName

anotherName = "Doe@yahoo.com"

console.log(myYoutubeName); //Samco@google.com
console.log(anotherName); //Doe@yahoo.com

/*
Non primitive/ Reference DataTypes: Heap memory => get reference (original value changed)
*/

let obj1 = {
    user: "John",
    age: 20
}

let obj2 = obj1

obj2.user = "Doe"

console.log(obj2.user) //Doe
console.log(obj1.user) //Doe
