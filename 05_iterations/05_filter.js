//forEach doesnt return values
//forEach only print print values but doesnt return
// return true false result
const coding = ['js', 'ruby', 'cpp', 'react']

const values = coding.forEach(item => {
	console.log(item)
	return item
})

console.log(values) //undefined
