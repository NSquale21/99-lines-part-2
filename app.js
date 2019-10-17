let friends = ['Tony', 'Shannon', 'Kim', 'Shelby', 'Lorenz'];

let startBtn = document.querySelector('button');
startBtn.addEventListener('click', startSong);

function startSong() {
	for (let i = 0; i < friends.length; i++) {
		let div = document.createElement('div');
		div.className = 'friend text-center';
		let h3 = document.createElement('h3');
		let h3Text = document.createTextNode(friends[i]);
		h3.className = 'text-uppercase text-center';
		h3.appendChild(h3Text);
		div.appendChild(h3);
		document.querySelector('section').appendChild(div);

	  for (let count = 99; count > 0; count--) {
			if (count === 1) {
				let p = document.createElement('p');
				let pText = document.createTextNode(`${count} line of code in the file, ${count} line of code; ${friends[i]} strikes one out, clears it all out, no more lines of code in the file`);
				p.appendChild(pText);
				div.appendChild(p);
			} else if (count === 2) {
				let p = document.createElement('p');
				let pText = document.createTextNode(`${count} lines of code in the file, ${count} lines of code; ${friends[i]} strikes one out, clears it all out, ${count - 1} line of code in the file`);
				p.appendChild(pText);
				div.appendChild(p);
			} else {
				let p = document.createElement('p');
				let pText = document.createTextNode(`${count} lines of code in the file, ${count} lines of code; ${friends[i]} strikes one out, clears it all out, ${count - 1} lines of code in the file`);
				p.appendChild(pText);
				div.appendChild(p);
			}
		}
	}
}