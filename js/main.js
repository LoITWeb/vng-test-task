function mobileNav() {
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const navLinks = document.querySelectorAll('.mobile-nav a');

	function toggleMenu() {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');
	}

	function closeMenu() {
		nav.classList.remove('mobile-nav--open');
		menuIcon.classList.remove('nav-icon--active');
		document.body.classList.remove('no-scroll');
	}

	// Клик по кнопке 
	navBtn.addEventListener('click', toggleMenu);

	// Клик по ссылке внутри меню
	navLinks.forEach(link => {
		link.addEventListener('click', closeMenu);
	});

	// Клик вне меню
	document.addEventListener('click', (e) => {
		if (
			nav.classList.contains('mobile-nav--open') &&
			!nav.contains(e.target) &&
			!navBtn.contains(e.target)
		) {
			closeMenu();
		}
	});
}

mobileNav();
