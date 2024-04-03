let length = 0
const calculateStringLength = str => {
	for (let i = 0; i < str.length; i++) {
		length++
	}
	return length
}
console.log(calculateStringLength('hello samco securities!')) //23

const myString = 'Hello, world!'
console.log(calculateStringLength(myString))
