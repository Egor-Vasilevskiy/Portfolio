let header = document.querySelector('.header');
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
	if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
    }
	prevScrollPos = currentScrollPos;
};