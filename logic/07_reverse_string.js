const reverseString = str => {
	// let l = str.length
	// for (let i = 0; i < l / 2; i++) {
	// 	let temp = str[i]
	// 	str[i] = str[l - 1 - i]
	// 	str[l - 1 - i] = temp
	// }

	// return str

	for (var i = 0; str[i] !== undefined; i++);

	return i
}

console.log(reverseString('Bob'))

// B o b
