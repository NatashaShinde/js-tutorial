const tinderUser = {}
tinderUser.id = '123abc'
tinderUser.name = 'john'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
	email: 'some@gmail.com',
	fullname: {
		userfullname: {
			firstname: 'samco',
			lastname: 'securities',
		},
	},
}
//is fullname exist ? used in api responses
// console.log(regularUser.fullname?.userfullname.lastname)

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }
const obj4 = { 5: 'a', 6: 'b' }
// const obj3 = { obj1, obj2 } //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2, obj4) //combine
// console.log(obj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' 5: 'a', 6: 'b' }

//spread operator
const obj3 = { ...obj1, ...obj2 }
// console.log(obvj3) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// api eg
const users = [
	{
		id: 1,
		email: 'h@gmail.com',
	},
	{
		id: 1,
		email: 'h@gmail.com',
	},
	{
		id: 1,
		email: 'h@gmail.com',
	},
]

users[1].email
console.log(tinderUser)

const reports = [
	{
		id: 1,
		label: 'Portfolio Plan 1 test',
		endpoints: ['portfolioDashboard', 'portfolioTracker'],
		downloadEndPoints: 'portfolio',
		apiBody: { id: 1 },
	},
	{
		id: 2,
		label: 'Portfolio Plan 2 test',
		endpoints: ['portfolioDashboard', 'portfolioTracker'],
		downloadEndPoints: 'portfolio',
		apiBody: { id: 2 },
	},
]
console.log(reports[0].id)
console.log(reports[0].label)

//v.imp
// console.log(Object.keys(tinderUser)) //gives array [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) //[ '123abc', 'john', false ]

// console.log(Object.entries(tinderUser)) //array of array [ [ 'id', '123abc' ], [ 'name', 'john' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true
