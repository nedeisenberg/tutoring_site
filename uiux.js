var return_button = document.getElementById('return');
var icon = document.getElementById("icon")

var menu = document.getElementById('menu');
var buttons = menu.getElementsByTagName('div');

var menu_visible = false;
var screen_width = screen.width;

var fact_visible = false;
var focus_visible = false;

var fact_content = document.getElementById('fact-content');
var focus_content = document.getElementById('focus-content');

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
}

function furl_unfurl(element){
	if(screen_width<=768){
		if (element.id =='focus'){
			if(focus_visible){
				focus_content.setAttribute('style','animation-fill-mode: backwards;');
				focus_visible=false;
			}else{
				focus_content.setAttribute('style','animation-fill-mode: forwards;');
				focus_content.setAttribute('style','animation-play-state: running;');
				focus_visible=true;
			}
		}else{
			if(fact_visible){
				fact_content.setAttribute('style','animation-fill-mode: backwards;');
				fact_visible=false;
			}else{
				fact_content.setAttribute('style','animation-fill-mode: forwards;');
				fact_content.setAttribute('style','animation-play-state: running;');
				fact_visible=true;
			}
		}	
	}
	
}