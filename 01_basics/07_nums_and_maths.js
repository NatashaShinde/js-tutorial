const score = 400
// console.log(score); //400

const balance = new Number(100) 
// console.log(balance); //[Number: 100]

//As its converted into string, It can access all string methods also
// console.log(balance.toString().length) // 3

const amount = 500.255
// console.log(amount.toFixed(2)) //500.25

const anotherNum = 14.47910
// console.log(anotherNum.toPrecision(3)); //14.5 round of
// console.log(anotherNum.toPrecision(4)); // 14.48

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000

//===========MATHS==============
// console.log(Math.abs(-4)); //4
// console.log(Math.round(6.6));// 7
// console.log(Math.ceil(4.7)); //5 ceiling-top
// console.log(Math.floor(4.9)) //4 floor-bottom
// console.log(Math.min(4, 3, 5, 6)) //3

console.log(Math.random());
console.log((Math.random() * 10) + 1);

const min = 10
const max = 20 
console.log(Math.floor(Math.random() * (max - min + 1 )) + min)