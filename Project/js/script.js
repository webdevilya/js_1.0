let openBtn = document.getElementById('open-btn'),
		nameValue = document.getElementsByClassName('name-value')[0],
		budgetValue = document.getElementsByClassName('budget-value')[0],
		goodsValue = document.getElementsByClassName('goods-value')[0],
		itemsValue = document.getElementsByClassName('items-value')[0],
		employersValue = document.getElementsByClassName('employers-value')[0],
		discountValue = document.getElementsByClassName('discount-value')[0],
		isopenValue = document.getElementsByClassName('isopen-value')[0],

		goodsItems = document.getElementsByClassName('goods-item'),
		goodsButton = document.getElementsByTagName('button')[1],
		budgetButton = document.getElementsByTagName('button')[2],
		employeesButton = document.getElementsByTagName('button')[3],
		chooseItem = document.querySelector('.choose-item'),
		timeValue = document.querySelector('.time-value'),
		countBudgetValue = document.querySelector('.count-budget-value'),
		hireEmployers = document.querySelectorAll('.hire-employers-item');

let userBudget,   	
   	price;
		
	
openBtn.addEventListener('click', () => {
	userBudget = prompt("Укажите размер вашего бюджета","10000");
	while (isNaN(userBudget) || userBudget === '' || userBudget === null){
		userBudget = prompt("Укажите размер вашего бюджета","10000");
	}
	budgetValue.textContent = userBudget;
  nameValue.textContent = prompt("Как называется ваш магазин?").toUpperCase();

});

goodsButton.addEventListener('click', () => {
	for (let i = 0; i < goodsItems.length; i++){
				let a =  goodsItems[i].value  										
					if((typeof(a)) === 'string' && (typeof(a)) !== null  && a.length < 50){
					console.log('Все верно!');
					mainList.shopGoods[i] = a;
					goodsValue.textContent = mainList.shopGoods;
					} else { alert("Нужно ввести тип товара!");
					i--;
				}
			}
});

chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;
	if(isNaN(items) && items !== '' ){
			mainList.shopItems = items.split(", ");			
			mainList.shopItems.sort();
			itemsValue.textContent = mainList.shopItems;
		}	
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;
	if (time < 0) {	
		console.log('Такого не может быть!')	
		mainList.shopOpen = false;
		} else if (time >= 8 && time < 20){	
			console.log('Время работать!');					
			mainList.shopOpen = true;
			} else if (time < 24){
				console.log('Уже слишком поздно!');				
				mainList.shopOpen = false;
				} else {
					console.log("В сутках только 24 часа!");
					mainList.shopOpen = false;
					};

	if (mainList.shopOpen == true){
	 isopenValue.style.backgroundColor = 'green'	
	} else {
		isopenValue.style.backgroundColor = 'red'
	}
});

budgetButton.addEventListener('click', () => {
	countBudgetValue.value = userBudget / 30;
});

employeesButton.addEventListener('click', () => {
	for (i = 0; i < hireEmployers.length; i++){
		let name = hireEmployers[i].value;												
		if((typeof(name)) === 'string' && (typeof(name)) !== null && name.length < 50){
		console.log('Все верно!');
		mainList.shopEmployees[i] = name;
		} else {
			alert("Нужно ввести имя!");
			i--;
			}
	}
	employersValue.textContent += mainList.shopEmployees[i] + ', ';
});
const mainList = {
 	budget: userBudget, 	
 	shopGoods: [],
 	shopEmployees: [],
 	shopOpen: false,
 	discount: false,
 	shopItems: [],
 	};


