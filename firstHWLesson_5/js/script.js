let menuItem2 = document.getElementsByClassName('menu-item')[1],
		menuItem3 = document.getElementsByClassName('menu-item')[2],
	  menu = document.getElementsByClassName('menu')[0],  
	  adv = document.getElementsByClassName('adv')[0],
	  column = document.getElementsByClassName('column')[1],
	  title = document.getElementById('title'),
	  answer = prompt("Каково ваше отношение к технике Apple"),
	  divPrompt = document.getElementById('prompt');
	  
menu.insertBefore(menuItem3, menuItem2);
document.body.style.backgroundImage = 'url(img/apple_true.jpg)';
column.removeChild(adv);
title.textContent = "Мы продаем только подлинную технику Apple";
divPrompt.textContent = answer;