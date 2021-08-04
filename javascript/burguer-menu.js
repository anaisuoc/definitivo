/*menu responsive*/
const hamburguer = document.querySelector('.menu-ham');
const links = document.querySelector('ul');
const bars = document.querySelectorAll('.menu-ham span');
hamburguer.addEventListener('click', function () {
	links.classList.toggle('show');
	bars.forEach(function (child) {
		child.classList.toggle('animation');
	});
});
