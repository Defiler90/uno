let movie='nike';
const va=1000;
document.write(va);

function theNote(){
	let movie='the notebok';
	return movie;
}

console.log(theNote());
console.log(movie);

let dices='el tocino es bueno';

function dilo(){
	let caballo=true;
	let dices='eres un caballo';
	console.log('antes de if: ',dices);
	
	if(caballo){
		let dices='soy un caballo';
		console.log('en el if: ',dices);
		
	}
	console.log('despues de if: ',dices);
}
dilo();

console.log('******Arrow*****');
let circle=(r)=>{
	var pi=3.1416;
	var res=pi*Math.pow(r,2);
	return res;
}
console.log(circle(7));
console.log('******Arrow*****');
let suma=(a,b)=>{
	let c=a+b;
	return c;
}

let circulo1 = r => 3.1416*Math.pow(r,2);
let suma1 = (a,b) => a+b;
let suma2 = (a,b,c,d) => a+b+c+d;

console.log(suma(3,5));
console.log(circulo1(7));
console.log(suma1(3,5));
console.log(suma2(2,3,5,6));
console.log("****literales*****");
var tel="samsung galaxy s6";
console.log('tengo un telefono ${tel} que me salio barato');









