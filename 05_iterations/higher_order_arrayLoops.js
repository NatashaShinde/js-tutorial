//for of

//["", "", ""]
//[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (let num of arr) {
	// console.log(num) // 1 2 3 4 5 (return whole array)
}

//===============================

const greetings = 'samco sec'
for (let greet of greetings) {
	// console.log(`Each char is ${greet}`) // s a m c o s e c
}
//==============================

//For in
const myObj = {
	js: 'javascript',
	cpp: 'c++',
	rb: 'ruby',
	swift: 'swift by apple',
}

for (const key in myObj) {
	// console.log(key) //js cpp rb swift (return keys)
	// console.log(myObj[key]) //javascript c++ ruby swift by apple
	// console.log(`${key} shortcut is for ${myObj[key]}`)
}

//==============================
const programming = ['js', 'cpp', 'rb', 'swift']

for (const key in programming) {
	// console.log(key) // 0 1 2 3
	console.log(programming[key]) //js cpp rb swift
}
