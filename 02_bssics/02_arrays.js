const marvel_heroes = ['thor', 'ironman', 'spiderman']
const dc_heroes = ['superman', 'flash', 'batman']

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// Concat returns new array

// ************* spread array **************
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes) //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = anotherArray.flat(Infinity)
// console.log(real_another_array) //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4,5 ]

// console.log(Array.isArray('Samco')) //false
// console.log(Array.from('samco')) //[ 's', 'a', 'm', 'c', 'o' ]

//*************** Interesting cases *************/
// console.log(
// 	Array.from({
// 		name: 'samco',
// 	})
// ) //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]

// ...23, 34, 55,  => [23, 34, 55] // rest (used in function argument)
// ...[23, 44, 56] => 23, 34, 55 //spread

// const sum = (...nums) =>  {
//   nums // [2, 4, 7, 8, 6, 7]
// }

// sum(2, 4, 7, 8, 6, 7) // 6
