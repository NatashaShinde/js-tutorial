let index = 0
while (index <= 10) {
	// console.log(`value of index is ${index}`)
	index = index + 2
}
//============ while loop =====================

let myArray = ['flash', 'batman', 'superman']
let arr = 0
while (arr < myArray.length) {
	// console.log(`my value is ${myArray[arr]}`)
	arr = arr + 1 //if this is missing then it will take arr = 0  everytime
}

//============== Do while loop ===================
//first execute in do{}
//then check condition in while()
let score = 1
do {
	// console.log(`score is ${score}`)
	score++
} while (score <= 5)
