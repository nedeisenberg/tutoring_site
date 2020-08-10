var return_button = document.getElementById('return');
var icon = document.getElementById("icon")

function displayReturn(){
	var scroll = document.body.scrollTop;
	if (scroll>10){
		//make arrow visible
		//set animation
		return_button.setAttribute("style","display:block;")
		
	}else{
		return_button.setAttribute("style","display:none;")
		//return_button.setAttribute("styl")
	}
}