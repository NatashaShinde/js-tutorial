for (let i = 1; i <= 5; i++) {
	for (let j = 1; j <= 5; j++) {
		if (j <= i) {
			process.stdout.write('*')
		} else {
			process.stdout.write(' ')
		}
	}
	process.stdout.write('\n')
}
