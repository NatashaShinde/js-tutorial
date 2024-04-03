const useremail = []

if (useremail) {
	console.log('got the user email')
} else {
	console.log('dont have user email')
}

//to check is array empty or not
if (useremail.length === 0) {
	console.log(`array is empty`)
}
//============================================================
// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", "false", " ", [], {}, function(){}
//=============================================================
const emptyObj = {}
//v.imp
// console.log(Object.keys(tinderUser)) //gives array [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) //[ '123abc', 'john', false ]

// console.log(Object.entries(tinderUser)) //array of array [ [ 'id', '123abc' ], [ 'name', 'john' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true
if (Object.keys(emptyObj).length === 0) {
	// as Object.keys this return array, so now we can use
	// array property on it, which is .length
	console.log(`empty obj`)
}
