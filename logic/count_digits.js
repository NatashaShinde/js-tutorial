const countDigit = number => {
	let count = 0

	while (number != 0) {
		number = Math.floor(number / 10) //15.2 => 15 using floor
		count++
	}
	return count
}

console.log(countDigit(2244))
