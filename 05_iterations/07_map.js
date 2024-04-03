//map is call back function(better than forEach)
const myNums = [1, 2, 3, 4, 6, 7, 8, 9, 10]

// const newNums = myNums.map(num => num + 10)

//chaining
const newNums = myNums
	.map(num => num * 10)
	.map(num => num + 1)
	.filter(num => num >= 40)
console.log(newNums) //[ 41, 61, 71, 81, 91, 101 ]
