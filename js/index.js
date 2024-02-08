const nav = document.querySelector(".topbar__button");
const body = document.body;

nav.addEventListener("click", () => {
	body.classList.toggle("_lock");
});

window.addEventListener("scroll", reveal);

function reveal() {
	let reveals = document.querySelectorAll(".reveal");

	for (let i = 0; i < reveals.length; i++) {
		let windowheight = window.innerHeight;
		let revealtop = reveals[i].getBoundingClientRect().top;
		let revealpoint = 150;

		if (revealtop < windowheight - revealpoint) {
			reveals[i].classList.add("reveal_active");
		} else {
			reveals[i].classList.remove("reveal_active");
		}
	}
}

/* --------------------------------- Sliders -------------------------------- */
const landSlider = new Swiper(".land-section-slider", {
	// Optional parameters

	speed: 2000,
	slidesPerView: 1,
	spaceBetween: 20,
	autoplay: true,
	loop: true,
	allowTouchMove: false,
	
	autoplay: {
		delay: 2000,
	},

	effect: 'fade',
	fadeEffect: {
	  crossFade: true,
	},
});

const countSlides = document.querySelectorAll(".main-slider .swiper-slide").length;


const main = new Swiper(".main-slider", {
	spaceBetween: 20,
	speed: 2000,
	slidesPerView: 1,
	/* loop: countSlides > 1, */
	autoplay: countSlides > 1,

	allowTouchMove: false,

	allowSlideNext: countSlides > 1,
	allowSlidePrev: countSlides > 1,

	effect: 'fade',
	fadeEffect: {
	  crossFade: true,
	},

	autoplay: {
		delay: 3000,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

});

const articles = new Swiper(".articles__slider", {
	// Optional parameters

	speed: 2000,
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
	autoplay: true,

	autoplay: {
		delay: 4000,
	},

	breakpoints: {
		1100: {
			slidesPerView: 3,
			autoplay: false,
			allowTouchMove: false
		},
		768: {
			slidesPerView: 2,
		},
		200: {
			slidesPerView: 1
		},
	}
	
});

const portfolio = new Swiper(".portfolio__slider", {
	// Optional parameters
	speed: 2000,
	slidesPerView: 3,
	loop: true,
	autoplay: true,

	autoplay: {
		delay: 4000,
	},

	breakpoints: {
		1100: {
			slidesPerView: 3,
			autoplay: false,
			allowTouchMove: false
		},
		620: {
			slidesPerView: 2,
		},
		200: {
			slidesPerView: 1
		},
	}
	
});

/* --------------------------------- /Sliders -------------------------------- */

Fancybox.bind("[data-fancybox]", {});

Fancybox.bind("[data-fancybox='gallery']", {});
