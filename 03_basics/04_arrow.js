//this: refer to current context {} (about)

const user = {
	username: 'Hitesh',
	price: 999,
	welcomeMessage: function () {
		// console.log(`${this.username} welcome to website`) //Hitesh welcome to website
		// console.log(this)
	},
}
user.welcomeMessage()
// console.log(this)

//=======================================

const addNums = (num1, num2) => num1 + num2
// console.log(addNums(3, 4))
//inside {retun keyword is necessary}
//inside (return keyword is not necessary)

//To return OBJECT use ({})
const addNumsTwo = (num1, num2) => ({ username: 'samco' })
console.log(addNumsTwo(3, 4)) //{ username: 'samco' }
