/*
	5 x 9 = 45
	5 x 8 = 40
	.
	.
	5 x 1 = 5


*/

let num = 5
let count = 9

for (let i = count; i < 10; i++) {
	let number = num * i
	console.log(`${num} * ${i} = ${number}`)
}
