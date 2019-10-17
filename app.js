let friends = ['Tony', 'Shannon', 'Kim', 'Shelby', 'Lorenz'];

function startSong() {
	for (let i = 0; i < friends.length; i++) {
		console.group(`${friends[i].toUpperCase()}`);
	  for (let count = 99; count > 0; count--) {
			if (count === 1) {
				console.log(`${count} line of code in the file, ${count} line of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file`)
			} else if (count === 2) {
				console.log(`${count} lines of code in the file, ${count} lines of code; ${friends[i]} strikes one out, clears it all out, ${count - 1} line of code in the file`);
			} else {
				console.log(`${count} lines of code in the file, ${count} lines of code; ${friends[i]} strikes one out, clears it all out, ${count - 1} lines of code in the file`)
			}
		}
		console.groupEnd();
	}
}

let startBtn = document.querySelector('button');
startBtn.addEventListener('click', startSong());
