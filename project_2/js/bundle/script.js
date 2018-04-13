window.addEventListener('DOMContentLoaded', function(){

	let tab = require('../parts/tab.js');
	let modal = require('../parts/modal.js');
	let slider = require('../parts/slider.js');
	let calc = require('../parts/calc.js');
	let AJAX = require('../parts/AJAX.js');
	let timer = require('../parts/timer.js');

	tab();
	modal();
	slider();
	calc();
	AJAX();
	timer();
});	
	