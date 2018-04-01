let userBudget,
   	userStoreName,
   	price;
let date = new Date();

function start() {
	price = prompt("Укажите цену","100");	
	while (isNaN(userBudget) || userBudget === '' || userBudget === null){
		userBudget = prompt("Укажите размер вашего бюджета","10000");
	}
  userStoreName = prompt("Как называется ваш магазин?").toUpperCase();
}

function chooseGoods(){
	for (let i = 0; i < 5; i++){
		let a =  prompt("Введите " + (i+1) + " товар");
		
		if((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50){
			console.log('Все верно!');
			mainList.shopGoods[i] = a;
		}else{
			alert("Нужно ввести товар!");
			i--;
		}
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
function hireEmployees(){
	for (let i = 0; i < 4; i++){
		let a = prompt("Введите номер продавца");
		while (isNaN(a) || a === '' || a === null){
			a = prompt("Введите номер продавца");
		}
		mainList.shopEmployees.number[i] = a;
		let b = prompt("Введите имя продавца");		
		if((typeof(b)) === 'string' && (typeof(b)) !== null && b !== '' && b.length < 50){
			console.log('Все верно!');
			mainList.shopEmployees.name[i] = b;
		}else{
			alert("Нужно ввести имя!");
			i--;
		}
	}
}

function workTime(time){
if(time < 8){
 alert('Еще слишком рано!');
 mainList.shopOpen = false;
 } else if (time < 20){
 	alert('Время работать!');
 	mainList.shopOpen = true;
 	} else {
 		alert('Уже поздно!');
 		mainList.shopOpen = false;
 	}
}

 function calcBudget(){
 	alert("Бюджет на день: " + userBudget/30);
 }

 function calcPrice(){
 	mainList.discount = confirm('У вас есть скидка?');
 	if(mainList.discount === true){
 		price = price * 0.8;
 	}
 }
 
 start();
 let mainList = {
 		budget: userBudget,
 		storeName: userStoreName,
 		shopGoods: [],
 		shopEmployees: {
 			number: [],
 			name: []
 			},
 		shopOpen: false,
 		discount: false
 	};
 chooseGoods(); 
 hireEmployees();
 workTime(date.getHours());
 calcBudget();
 calcPrice();
 
 console.log(mainList); 
 console.log(price);

