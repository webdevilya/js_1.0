var userBudget    = prompt("Укажите размер вашего бюджета","10000");
var userStoreName = prompt("Как называется ваш магазин");
var shopGood 			= [];
var shopEmployees = [];
var shopOpen 			= confirm("Магазин открыт?");

shopGood[0] = prompt("Введите первый товар");
shopGood[1] = prompt("Введите второй товар");
shopGood[2] = prompt("Введите третий товар");

shopEmployees[0] = prompt("Введите имя первого продавца");
shopEmployees[1] = prompt("Введите имя второго продавца");


 mainList = {
 		budget: userBudget,
 		storeName: userStoreName,
 		goods: shopGood,
 		employees: shopEmployees,
 		open: shopOpen
 };

 alert("Бюджет на день: " + userBudget/30);
 