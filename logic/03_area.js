let pi = 3.14
let myFun = radius => {
	let area = pi * radius * radius
	return area
}
console.log(myFun(2))

const area = r => {
	const a = 3.14 * r * r
	return a
}

const area2 = r => 3.14 * r * r

console.log(area(2))
console.log(area(3))
console.log(area(4))

//-============================
