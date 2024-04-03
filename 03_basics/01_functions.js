// const addTwoNums = (num1, num2) => {
// 	console.log(num1 + num2)
// }

// addTwoNums(4, 9)

const twoNums = (num1, num2) => {
	// let result = num1 + num2
	// return result

	return num1 + num2
}

const result = twoNums(2, 3)

// console.log('Result:', result)
// ==================================

const loginUserName = username => {
	if (username === undefined) {
		//instead of this we can use !username
		console.log('Please enter username')
		return
	}
	return `${username} just logged in`
}
// console.log(loginUserName('Samco'))
console.log(loginUserName()) //undefined if user call empty function
// bydefalult "Undefined is false" but to make it true => !undefined
// so now undefined is ture
// and if undefined is true then we can print error message
//and return nothing

//================================================

const loginUser = (usermail = 'sam@ty.com') => {
	//we can pass default value also
	if (!usermail) {
		// console.log('enter user email id')
		return 'invalid' //invalid
	}
	return `user email id: ${usermail}` //sam@ty.com
}

console.log(loginUser())

// ===============================================

// ==================================
// getMonthName(2) // February

// 1: Jan
// 2: February
// 3: Mar

const getMonthName = num => {
	const monthNames = {
		1: 'Jan',
		2: 'Feb',
		3: 'March',
	}

	if (!monthNames[num]) return 'Invalid' //negation is used for error cases

	return monthNames[num]
}

console.log(getMonthName(3))

// ===================================================
