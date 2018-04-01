var num = 33721;
console.log(
numMultiply =	(num%10)*(Math.floor(num/10)%10)*(Math.floor(num/100)%10)*(Math.floor(num/1000)%10)*(Math.floor(num/10000)%10)
	);
alert(numMultiply**3);

var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
var date = new Date();

for (i = 0; i < week.length; i++){
	if (i == date.getDay()){
		var a = '<i>' + week[i] + '</i>';		
	} else {
		var a = week[i];
	}
	if (week[i] === 'Sunday' || week[i] === 'Saturday'){
		document.writeln('<b>' + a + '</b>');
	} else{
		document.writeln(a);
	}
	document.writeln('<br>');
}

var arr = ['34567', '78966', '8567868', '67868', '3657', '867', '907789'];

for (i = 0; i < arr.length; i++)
	if (arr[i].charAt(0) == '3' || arr[i].charAt(0) == '7'){
		console.log(arr[i]);
	}
let str = "урок-3-был слишком легким";	
let str1 = str[0].toUpperCase();
 for (i = 1; i < str.length; i++){
 	str1 =str1 + str[i];
 }
 let str2 = '';
 for(i = 0; i < str1.length; i++){
 	if (str1[i] === '-'){
 		str2 = str2 + ' ';
 	} else {
 		str2 = str2 + str1[i];
 	}
 } 	

	console.log(str2);
	alert(str2 = str2.substr(str2.indexOf('легким'), 4) + 'o'); 

let arr2 = [20, 33, 1, 'Человек', 2, 3];
let b = 0; 
 for(i = 0; i < arr2.length; i++){
 	parseInt(arr2[i]);
 	if (typeof(arr2[i]) == "number"){
 	 b = b + arr2[i]**3;
 	}
 }
 console.log(Math.sqrt(b));