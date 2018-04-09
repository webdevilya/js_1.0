let age = document.getElementById('age');
 
function showUser(surname, name) {
         alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
 
showUser.call(age, "Yusupov", "Ilya");

class options {
		constructor(height, width, bg, fontSize, textAlign) {
			this.height = height;
			this.width = width;
			this.bg = bg;
			this.fontSize = fontSize;
			this.textAlign = textAlign;
		}
		createDiv() {
			let div = document.createElement('div');			
			console.log(div);			
			document.body.appendChild(div);
			div.textContent = "Привет!";
			div.style.cssText = "height: " + this.height + "; width: " + this.width + "; background-color: " + this.bg + "; text-align: " + this.textAlign + "; font-size:" + this.fontSize + ";";
		}
	}
	const div1 = new options('100px', '200px', 'red', '40px', 'center');
	div1.createDiv();	
	