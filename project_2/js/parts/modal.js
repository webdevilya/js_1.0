function modal () {
	let more = document.querySelector('.more'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close'),
			description_btn = document.querySelectorAll('.description-btn');
	more.addEventListener('click', function() {		
		this.classList.add('more-splash');
		overlay.style.display = "block";
		document.body.style.overflow = "hidden";
	});		

	for (let i = 0; i < description_btn.length; i++) {
			description_btn[i].addEventListener( 'click', function() {
				this.classList.add('more-splash');
				overlay.style.display = "block";
				document.body.style.overflow = "hidden";
			});
		};

	close.addEventListener('click', function() {
		overlay.style.display = "none";
		more.classList.remove('more-splash');
		document.body.style.overflow = "";
	});
}

module.exports = modal;