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
 		discount: false,
 		shopItems: [],
 		chooseGoods: function chooseGoods() {
									for (let i = 0; i < 5; i++){
										let a =  prompt("Какой тип товаров будем продавать?", "");
										
										if((typeof(a)) === 'string' && (typeof(a)) !== null && a !== '' && a.length < 50){
											console.log('Все верно!');
											mainList.shopGoods[i] = a;
										}else{
											alert("Нужно ввести тип товара!");
											i--;
										}
									}
								},
		hireEmployees: 	function hireEmployees() {
											for (let i = 0; i < 4; i++){
												let a = prompt("Введите номер продавца", "");
												while (isNaN(a) || a === '' || a === null){
													a = prompt("Нужно ввести номер продавца!", "");
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
										},
		workTime: function workTime(time){
								if (time < 8) {
								 alert('Еще слишком рано!');
								 mainList.shopOpen = false;
								 } else if (time < 20){
								 	alert('Время работать!');
								 	mainList.shopOpen = true;
								 	} else {
								 		alert('Уже поздно!');
								 		mainList.shopOpen = false;
								 	}
								}	,							
		dayBudget:  function dayBudget() {
									 	alert("Бюджет на день: " + userBudget/30);
									 },
		makeDiscount: function makeDiscount() {
								 	mainList.discount = confirm('У вас есть скидка?');
								 	if(mainList.discount === true){
								 		price = price * 0.8;
								 	}
								 },	
		chooseShopItem: function chooseShopItem	() {
			let items = prompt("Перечислите через запятую товары", "");
			mainList.shopItems = items.split(",");
			mainList.shopItems.push(prompt("Подождите, ещё ", ""));
			mainList.shopItems.sort();
		}				 
 	}; 
mainList.chooseShopItem();
let y = "У нас вы можете купить: \n";
mainList.shopItems.forEach(function(item, i, arr) {
y = y + (i+1) + ": " + item + "\n";
});
alert(y);

for(let key in mainList) {
	console.log("Наш магазин включает в себя: " + key);
}


 

