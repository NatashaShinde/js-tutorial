//Performs the specified action for each element in an array.
// pass parameter : forEach gives item, arr, and index
//forEach doesnt return values
//forEach only print values but doesnt return values
// to get values need to write if condition and logics instaed we can use other methods like filter

const coding = ['js', 'ruby', 'cpp', 'react']
//callback function
//pass parameter
coding.forEach(function (item) {
	// console.log(item) //js, ruby, cpp, react
})
//==================================================

// callback with arrow function
// coding.forEach(() => {})

//=============printMe()============================
function printMe(item) {
	// console.log(item)
}

coding.forEach(printMe)
//==================================================

coding.forEach((item, index, arr) => {
	// console.log(item, index, arr)
})
/*Output 
natasha.shinde@samcoadmins-MacBook-Air JS % node iterations/forEach_loop.js
js 0 [ 'js', 'ruby', 'cpp', 'react' ]
ruby 1 [ 'js', 'ruby', 'cpp', 'react' ]
cpp 2 [ 'js', 'ruby', 'cpp', 'react' ]
react 3 [ 'js', 'ruby', 'cpp', 'react' ]
*/

const codingLanguages = [
	{
		languageName: 'javascript',
		languageFileName: 'js',
	},
	{
		languageName: 'java',
		languageFileName: 'jv',
	},
	{
		languageName: 'React',
		languageFileName: 'rc',
	},
]

codingLanguages.forEach(item => {
	// console.log(item.languageName) //javascript, java, react
})

// so to get values we can use filter
//this also takes callback function
//it return values
// if {} using then return keyword needs to write (bcoz {} scope is open)
// otherwise use (), so no need to write return keyword

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
// 	return num > 4
// })

// const newNums = myNums.filter(num => num > 4)
// console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]

//using forEach

const newNums = []

myNums.forEach(num => {
	if (num > 4) {
		newNums.push(num)
	}
})

console.log(newNums) //[ 5, 6, 7, 8, 9, 10 ]
//================================================
