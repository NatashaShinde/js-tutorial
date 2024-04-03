//without modulas
const checkNum = num => {
	if (num & 1) {
		console.log('even number')
	} else {
		console.log('odd number')
	}
}
checkNum(38) //0000000000100110 = odd as end digit is 0
checkNum(45) //0000000000101101 even as end digit is 1

//===========================
//with modulas
//===========================
const evenOddFunc = num => {
	if (num % 2 === 0) {
		console.log('even number !')
	} else {
		console.log('odd number !')
	}
}

evenOddFunc(56)
evenOddFunc(77)
