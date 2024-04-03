const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ['Sam', 'John']

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]) //0

// Array methods
// myArr.push(6)

// myArr.pop() //removes last value of array
// myArr.unshift(9) //Add to 1st position
// console.log(myArr.shift()) //Reomves 1st ele

// Ask que
// console.log(myArr.includes(9)) //false
// console.log(myArr.indexOf(3)) //3
// console.log(myArr.indexOf(9)) //-1 , for non existing values

const newArr = myArr.join() //bind and convert to string
// console.log(newArray) //0,1,2,3,4,5
// console.log(myArr) //[ 0, 1, 2, 3, 4, 5 ]
// console.log(typeof newArr) //string

console.log('A', myArr) //A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) //returns a copy of a section of an array

console.log('B', myn1) //[ 1, 2 ]

const myn2 = myArr.splice(1, 3)
console.log('C', myn2) //C [ 1, 2, 3 ]
// splice(start, deleteCount, item1, item2) //An array containing the elements that were deleted.
