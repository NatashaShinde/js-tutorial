let myDate = new Date()
// console.log(myDate.toString()) //Mon Feb 12 2024 11:18:22 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()) //Mon Feb 12 2024
// console.log(myDate.toLocaleString()) //2/12/2024, 11:18:22 AM
// console.log(typeof myDate) //object

let createDate = new Date(2024, 0, 26)
// console.log(createDate.toDateString()) //Fri Jan 26 2024

let createNewDate = new Date(2026, 2, 22, 5, 6)
// console.log(createNewDate.toDateString()) //Sun Mar 22 2026

let newDates = new Date('01-03-2022')
// console.log(newDates.toLocaleString()) //1/3/2022, 12:00:00 AM

let myTimeStamp = Date.now
// console.log(newDates.getTime)
// console.log(Math.floor(Date.now() / 1000)) //1707719339

let newDate = new Date()
// console.log(newDate) //2024-02-12T06:36:54.688Z
// console.log(newDate.getMonth() + 1) //2
// console.log(newDate.getDay()) // 1

newDate.toLocaleString('default', {
	weekday: 'long',
})

let currenTime = new Date().toISOString()
console.log(currenTime) //2024-02-12T07:08:19.271Z
// Z denotes center line 7:08:19 +India (5.5)
// T is separator betwwen date and time
