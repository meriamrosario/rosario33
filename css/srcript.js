const header = ducument.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

Let menu = ducument.querySelector('#menu-icon');
Let navbar = ducument.querySelector('.navbar');

menu.onclick = ()  => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll  = ()  => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};