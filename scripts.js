let oneBlock = document.getElementById('one');

let num1;

oneBlock.onclick = function() {
	num1 = Nember(oneBlock.textContent)
}

let twoBlock = document.getElementById('two');

let num2;

twoBlock.onclick = () => {
	num2 = Number(twoBlock.textContent)
}

let plusBlock = document.getElementById('plus');

let rezult;

plusBlock.onclick = () => {
	rezult = num1 + num2
}

