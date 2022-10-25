let one = document.getElementById('one');

let two = document.getElementById('two');

let three = document.getElementById('three');

let num1;

let num2;

one.onclick = () => {
	num1 === undefined ? num1 = one.textContent : num2 = one.textContent ;
}

two.onclick = () => {
	num1 === undefined ? num1 = two.textContent  : num2 = two.textContent ;
}

three.onclick = () => {
	num1 === undefined ? num1 = three.textContent  : num2 = three.textContent ;
}

let plus = document.getElementById('plus');

let rez;

plus.onclick = () => {
	rez = +num1 + +num2
	alert(rez)
}