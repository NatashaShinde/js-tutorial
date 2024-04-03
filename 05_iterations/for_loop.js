//for loop execution steps
// 1. assign value to i
// 2. check condition
// 3. if it is true then goes inside scope
// 4. then increemnt value i.e i++

for (let i = 0; i < 5; i++) {
	const element = i
	if (element == 2) {
		// console.log(`2 is best number`)
	}
	// console.log(element)
}
//=========================================================

for (let i = 1; i <= 10; i++) {
	// console.log(`outer vxalue ${i}`)
	for (let j = 1; j <= 10; j++) {
		// console.log(`inner value ${j} and outer value ${i}`)
		// console.log(i + '*' + j + ' = ' + i * j)
	}
}

//=========================================================

const myArray = ['flash', 'batman', 'superman']

// console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
	const element = myArray[i]
	// console.log(element)
}

//=================Find smaller number==================================
const numArray = [23, 45, 77, 39, 28]

let min = numArray[0]
for (let i = 1; i < numArray.length; i++) {
	if (min > numArray[i]) {
		min = numArray[i]
	}
}
console.log(`smaller number is ${min}`)

//=============for loop for[{}] obj (but for obj we can use for in loop)===========================
const myObj = [
	{ id: 1, label: 'one' },
	{ id: 2, label: 'two' },
	{ id: 3, label: 'three' },
	{ id: 4, label: 'four' },
]

let planId = 2
let selectedPlan = null

for (let i = 0; i < myObj.length; i++) {
	if (planId === myObj[i].id);
	selectedPlan = myObj[i].label
}

console.log(`Id 2 label is ${selectedPlan}`)

//===================Break======================================

for (let i = 1; i <= 10; i++) {
	if (i == 5) {
		// console.log(`detected 5`)
		break
	}
	// console.log(`my values ${i}`)
}

//==============continue=============================================

for (let i = 0; i <= 10; i++) {
	if (i == 5) {
		console.log(`Detected 5`)
		continue //ek khoon maaf
	}
	console.log(`value of i is ${i}`)
}
