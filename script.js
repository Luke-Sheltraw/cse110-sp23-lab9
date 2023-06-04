console.log('%cWelcome to Lab 9!', 'color: red; font-weight: bold');

class FormInputError extends Error {
	constructor(message) {
		super(message);
		this.name = 'FormInputError'
	}
}

const form = document.querySelector('form');
form.addEventListener('submit', e => {
	e.preventDefault();
	const output = document.querySelector('output');
	const firstNum = document.querySelector('#first-num').value;
	const secondNum = document.querySelector('#second-num').value;
	const operator = document.querySelector('#operator').value;
	let result = '';
	try {
		if (isNaN(firstNum) && isNaN(secondNum)) {
			throw new FormInputError('Neither input is a number');
		} else if (isNaN(firstNum)) {
			throw new FormInputError('First input is not a number');
		} else if (isNaN(secondNum)) {
			throw new FormInputError('Second input is not a number');
		}
		result = eval(`${firstNum} ${operator} ${secondNum}`);
	} catch (error) {
		console.group('Calc Error');
		console.log('The calculator triggered an error:');
		console.error(error);
		console.groupEnd();
	} finally {
		output.innerHTML = result;
	}
});

window.addEventListener('error', (event) => {
	console.log(`An error just occurred (${event.error})`);
});

document.querySelector('#log').addEventListener('click', () => {
	console.log('This is an example console log.');
});

document.querySelector('#error').addEventListener('click', () => {
	console.error('This is an example console error.');
});

document.querySelector('#count').addEventListener('click', () => {
	console.count('Console counter');
});

document.querySelector('#warn').addEventListener('click', () => {
	console.warn('This is an example console warning');
});

document.querySelector('#assert').addEventListener('click', () => {
	const number = 2;
	console.assert(number === 3, '%o', { number: number, errorMessage: 'The number does not equal 3' });
});

document.querySelector('#clear').addEventListener('click', () => {
	console.clear();
});

document.querySelector('#dir').addEventListener('click', (event) => {
	console.dir(event.currentTarget);
});

document.querySelector('#dirxml').addEventListener('click', (event) => {
	console.dirxml(event.currentTarget);
});

document.querySelector('#groupStart').addEventListener('click', () => {
	console.group();
});

document.querySelector('#groupEnd').addEventListener('click', () => {
	console.groupEnd();
});

document.querySelector('#table').addEventListener('click', () => {
	console.table([
		{'Class name': 'Software Engineering', 'Class number': 110}, 
		{'Class name': 'Adv Software Engineering', 'Class number': 112}, 
		{'Class name': 'Algorithms', 'Class number': 101},
	]);
});

document.querySelector('#timerStart').addEventListener('click', () => {
	console.time('Example timer');
});

document.querySelector('#timerEnd').addEventListener('click', () => {
	console.timeEnd('Example timer');
});

document.querySelector('#trace').addEventListener('click', () => {
	function surface() {
		function underTheSurface() {
			function deepInTheMine() {
				function iCantSeeDownHere() {
					console.trace();
				}
				iCantSeeDownHere();
			}
			deepInTheMine();
		}
		underTheSurface();
	}
	surface();
});

document.querySelector('#globalError').addEventListener('click', () => {
	oopsyDaisy();
});