var userBudget    = prompt("Укажите размер вашего бюджета","10000");
var userStoreName = prompt("Как называется ваш магазин");
var date = new Date();

mainList = {
 		budget: userBudget,
 		storeName: userStoreName,
 		shopGoods: [],
 		shopEmployees: [],
 		shopOpen: false
 };

for (let i = 0; i < 5; i++){
	let a =  prompt("Введите " + (i+1) + " товар");
	
	if((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50){
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}else{
		alert("Нужно ввести товар!");
		i--;
	}
}
/*var i = 0
while (i < 5){
	let a =  prompt("Введите " + (i+1) + " товар");
	
	if((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50){
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}else{
		alert("Нужно ввести товар!");
		i--;
	}
	i++;
}*/

/*var i = 0;
do {
	let a =  prompt("Введите " + (i+1) + " товар");
	
	if((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50){
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	} else {
		alert("Нужно ввести товар!");
		i--;
	}
	i++;
}
while (1 < 5);*/

for (let i = 0; i < 2; i++){
	let b =  prompt("Введите имя " + (i+1) + " продавца");
	
	if((typeof(b)) === 'string' && (typeof(b)) !== null && b != '' && b.length < 50){
		console.log('Все верно!');
		mainList.shopEmployees[i] = b;
	}else{
		alert("Нужно ввести имя!");
		i--;
	}
}
if(date.getHours() < 8){
 alert('Еще слишком рано!');
 mainList.shopOpen = false;
 } else if (date.getHours() < 20){
 	alert('Время работать!');
 	mainList.shopOpen = true;
 	} else {
 		alert('Уже поздно!');
 		mainList.shopOpen = false;
 	}


 

 alert("Бюджет на день: " + userBudget/30);
