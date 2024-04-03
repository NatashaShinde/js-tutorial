const course = {
	coursename: 'js',
	courseprice: 999,
	courseInstructor: 'samco',
}

// Destructure {}
const { coursename, courseprice, courseInstructor: instructor } = course

console.log(courseprice) //999
console.log(courseInstructor) //samco
console.log(instructor) //samco
