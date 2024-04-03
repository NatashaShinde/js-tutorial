let user = 'samco'
let repoCount = 50

console.log(`user ${user.toUpperCase()} have ${repoCount} repositories.`)

const name = new String('samco-sec') //gets multiple methods and 0:s, 1:a, key value pairs

// console.log(name[0]) // s
// console.log(name.length); // 5
// console.log(name.toUpperCase()); //SAMCO
// console.log(name.charAt(2)); // m
// console.log(name.indexOf('c')); //3
// console.log(name.substring(0,4)); //samc
// console.log(name.slice(-6,4)); // c

const newString = '   Samco  '
// console.log(newString); //  samco
// console.log(newString.trim()); //samco

const url = 'https://samco.com/samco%20securities'
// console.log(url.replace('%20', '-')); //https://samco.com/samco-securities
// console.log(url.includes("securities")); //true
// console.log(url.includes("hitesh")); //false

const userName = 'samco-securities'
console.log(userName.split('-')) //['samco', 'securities']
