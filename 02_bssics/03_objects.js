//singleton
// object.create

//object literals
const mySym = Symbol('key1')

const JsUser = {
	name: 'Samco',
	[mySym]: 'myKey1',
	'full name': 'Samco securities',
	age: 20,
	location: 'Mumbai',
	email: 'samco@es.in',
	isLoggedIn: false,
	lastlogindays: ['monday', 'saturday'],
}

// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser[mySym]) //myKey1

JsUser.email = 'samco@google.com'

// To freeze obj
// Object.freeze(JsUser)

JsUser.greeting = () => {
	console.log('hello user')
}

JsUser.greetingTwo = () => {
	console.log(`hello user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
