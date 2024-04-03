/* CASE 1: passing single value */
const number = num1 => {
	return num1
}
// console.log(number(2)) //2

//=============================================

/* CASE 2: passing multiple valuse using REST operator */
const calculatePrice = (...num) => {
	return num
}

// console.log(calculatePrice(100, 400, 650, 720)) //[ 100, 400, 650, 720 ]

//CASE 3: =======================================

const calculateCart = (val1, val2, ...num) => {
	return num
}
// console.log(calculateCart(200, 700, 500, 800)) //[ 500, 800 ] here val1=200,val2=700

//===============================================

// CASE 4: pass object in function
const user = {
	username: 'samco',
	price: 200,
}

const handleObject = anyObject => {
	// console.log(`The user ${anyObject.username} has ${anyObject.price} rupees`) //The user samco has 200 rupees
}

handleObject(user)

// CASE 5: pass array in function

const nums = [2, 3, 4, 5]

const returnSecondValue = getArray => {
	return getArray[2] //4
}

// console.log(returnSecondValue(nums))
console.log(returnSecondValue([200, 400, 600, 250])) //400
