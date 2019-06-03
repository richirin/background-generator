var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
	
}

function randomHex(){
	var randomColor1 = '#' + (function co(lor){   return (lor +=
		[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
		&& (lor.length == 6) ?  lor : co(lor); })('');
	var randomColor2 = '#' + (function co(lor){   return (lor +=
		[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
		&& (lor.length == 6) ?  lor : co(lor); })(''); /* HOW TO BE BEST PRACTICES? */
	body.style.background = 
	"linear-gradient(to right, "
	+ randomColor1
	+ ", "
	+ randomColor2
	+ ")";
	color1.setAttribute("value", randomColor1);
	color2.setAttribute("value", randomColor2);
	css.textContent = body.style.background + ";";
	console.log(randomColor1);
	console.log(randomColor2);

}


button.addEventListener("click", randomHex);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

setGradient();