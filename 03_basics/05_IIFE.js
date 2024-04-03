//To avoid global var pollutiomn we can use IIFE ()()

;(function chai() {
	//named iife
	console.log(`DB CONNECTED`)
})() // to pass two iifes use ;
;(name => {
	//unamed iife
	console.log(`DB connected two ${name}`)
})('hitesh')
