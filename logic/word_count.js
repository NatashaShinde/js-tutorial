/*
word[0] = d
word[1] = a
word[2] = d
word[3] = undefined

i=0 word[i] !== undefined i++
*/

const word = 'dad'
let count = 0

for (let i = 0; word[i] !== undefined; i++) {
	if (word[i] === 'd') {
		count++
	}
}

console.log(count)
