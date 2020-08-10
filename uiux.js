var return_button = document.getElementById('return');
var icon = document.getElementById("icon")

var menu = document.getElementById('menu');
var buttons = menu.getElementsByTagName('div');

var menu_visible = false;
var screen_width = screen.width;

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

function displayMenu(){
	if(menu_visible && screen_width<=768){
		for (b in buttons){
			console.log(b);
			buttons[b].setAttribute('style','display:none;');
			menu_visible=false;
		}
	}else{
		for (b in buttons){
			console.log(b);
			buttons[b].setAttribute('style','display:block;');
			menu_visible=true;
		}
	}
	console.log(screen_width);
}