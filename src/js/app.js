// imports
import '../scss/main.scss'; //importing scss file

class accordion{
	constructor(clName){
		this.className = clName;
		this.accord_button = document.getElementsByClassName(this.className);
	}

	activate(){
		for (var i = 0 ; i < this.accord_button.length; i++) {
		  	this.accord_button[i].addEventListener('click' , function(){
				this.classList.add('c-accordion--active');
				alert("YO!");
		 	}); 
		 	this.accord_button[i].classList.remove('c-accordion--active');
		}
	}
}

const faq = new accordion('c-accordion__wrap');
faq.activate();
