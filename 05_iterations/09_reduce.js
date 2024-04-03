// return callback function
//gives accumulator and current value

const myNums = [1, 2, 3]
const myTotal = myNums.reduce((acc, currVal) => acc + currVal, 0)
console.log(myTotal) //6

const shoppingCart = [
	{
		itemName: 'javascript',
		price: 2999,
	},
	{
		itemName: 'python',
		price: 999,
	},
	{
		itemName: 'mob dev course',
		price: 4999,
	},
	{
		itemName: 'data science course',
		price: 12999,
	},
]

const priceTopay = shoppingCart.reduce((acc, item) => item.price, 0)
console.log(priceTopay)
