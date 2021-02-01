var field = document.getElementsByTagName("td");
field[3].style.backgroundImage = " ";
field[3].style.backgroundSize = "contain";
var count = 0;
var valorOne;
var valorTwo;
var win=0;
var moves= 0;
var textMoves = document.getElementById("textMoves")
var images = ["11.jpg", "12.jpg", "13.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg",
 "31.jpg", "32.jpg", "33.jpg", "34.jpg", "41.jpg", "42.jpg", "43.jpg", "44.jpg"];
function randomBack(){
	function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
	}
	var juegoListo = shuffle(images);
	var b = 0;
	for (var i=0; i<field.length;i++){
		if(i != 3){
			field[i].style.backgroundImage = "url('animals/" + juegoListo[b] + "')";
			field[i].style.backgroundSize = "contain";
			b++;
		}		
	}
};
randomBack();
for(var i=0; i<field.length; i++){
	field[i].setAttribute("selection", "false");
	field[i].addEventListener('click', function(){
		if(this.attributes.selection.value == "false"){
			this.classList.add('selected');
			this.attributes.selection.value = "true";
		}else{
			this.classList.remove('selected');
			this.attributes.selection.value = "false";
		}

		if (count == 0){
			valorOne = this;
			count++;
		}else if(count == 1){
		var valorTwo = this;
		count = 0;
		var black;
		var other;
		if(valorOne.innerText == "14"){
			black = (valorOne.id).slice(1,3);
			other = (valorTwo.id).slice(1,3);
			console.log(black);
			console.log(parseInt(other.charAt(1)) + 1);
			changeIt();
		}else if (valorTwo.innerText == "14"){
			black = (valorTwo.id).slice(1,3);
			other = (valorOne.id).slice(1,3);
			console.log(black);
			console.log(parseInt(other.charAt(1)) + 1);
			changeIt();
		}
		function changeIt(){
		if ((black.charAt(0) == other.charAt(0) && (black.charAt(1) == parseInt(other.charAt(1)) + 1 ||
		 black.charAt(1) == other.charAt(1) - 1)) ||
		  ((black.charAt(1) == other.charAt(1)) && (black.charAt(0) == parseInt(other.charAt(0)) + 1 ||
		   black.charAt(0) == other.charAt(0) - 1))){
		var aux = valorOne.innerText;
		var aux2 = valorOne.style.backgroundImage;
		valorOne.innerText = valorTwo.innerText;
		valorOne.style.backgroundImage = valorTwo.style.backgroundImage;
		valorTwo.innerText = aux;
		valorTwo.style.backgroundImage = aux2;
		valorOne.classList.remove('selected');
		valorOne.attributes.selection.value = "false";
		valorTwo.classList.remove('selected');
		valorTwo.attributes.selection.value = "false";
		moves++;
		textMoves.innerText = moves;
		}else{
		valorOne.classList.remove('selected');
		valorOne.attributes.selection.value = "false";
		valorTwo.classList.remove('selected');
		valorTwo.attributes.selection.value = "false";
		}};
		var casilla = 0;
		for(var l=1;l<5;l++){
			for(var z=1; z<5;z++){
						var style = field[casilla].currentStyle || window.getComputedStyle(field[casilla], false);
						bi = style.backgroundImage.slice(61, -1).replace(/"/g, "");
						casilla++;
						if(bi == (l.toString()) + (z.toString()) + ".jpg"){
							win++	
						}						
				}			
			}
			if (win == 15){
				alert("FELICIDADES, HAS GANADO");
				location.reload();
				var fragment = document.createDocumentFragment();
				var div = document.createElement('div');
				var h2 = document.createElement('h2');
				var h3 = document.createElement('h3');
				var body = document.body;
			}
			win = 0;
		}	
	})
}



/*

var valorOne = this.innerHTLM;
	console.log(valorOne);
	if (count == 1){
		var valorTwo = this.innerHTML;
		console.log(valorTwo);
	}
	if(count == 2){
		console.log("se van a cambiar los valores de valorOne" + valorOne+ "por los de valorTwo" + valorTwo)
		count = 0;
	}	

*/