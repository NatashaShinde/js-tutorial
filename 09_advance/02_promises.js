//promise creation
const promiseOne = new Promise(function (resolve, reject) {
	//do an async task
	//db calls, cryptography, network calls
	setTimeout(function () {
		console.log('async task completed')
		resolve()
	}, 1000)
})

//consume promise
promiseOne.then(function () {
	console.log('promise consumed')
})

//============================================================
new Promise(function (resolve, reject) {
	setTimeout(function () {
		console.log('async task two')
		resolve()
	}, 1000)
}).then(function () {
	console.log('asynnc two resolved')
})
//============================================================

const promiseThree = new Promise(function (resolve, reject) {
	setTimeout(function () {}, 1000)
	resolve({ userName: 'chai', userEmail: 'chaiaurcode.com' })
})
//to get above data in then
promiseThree.then(function (user) {
	console.log(user)
})

//============================================================
const promiseFour = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = true
		if (!error) {
			//if no error
			return resolve({ userName: 'samco', password: '123' })
		} else {
			reject('ERROR: something went wrong')
		}
	}, 1000)
})
const username = promiseFour
	.then(user => {
		console.log(user)
		return user.username
	})
	.then(username => {
		console.log(username)
	})
	.catch(function (error) {
		console.log(error)
	})
	.finally(() => console.log('the promise is either resolved or rejected'))

//======================================================
const promiseFive = new Promise(function (resolve, reject) {
	setTimeout(function () {
		let error = false
		if (!error) {
			resolve({ user: 'samco', year: 2015 })
		} else {
			reject('something went wrong here')
		}
	}, 2000)
})

//simillar to .then .catch
//async, await: wait for the work to be done,
//if its done, then only it execute, else gives error
//used for db connections
//promise is an object, to
//async, await cant handle errors directly
async function consumePromiseFive() {
	//waiting for promiseFive response
	try {
		const response = await promiseFive
		console.log(response)
	} catch (error) {
		console.log(error)
	}
}

consumePromiseFive()
//======================================================

async function getAllUsers() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/comments')
		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.log('err', error)
	}
}

getAllUsers()
