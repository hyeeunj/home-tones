
// 	//swiper
// var swiper = new Swiper(".main-slide", {
// 	spaceBetween: 30,
// 	effect: "fade",
// 	centeredSlides: true,
// 	autoplay: {
// 		delay: 4000,
// 		disableOnInteraction: false,
// 	},
// 	// 		/* pagination: {
// 	// 			 el: ".swiper-pagination",
// 	// 			 clickable: true,
// 	// 		 },*/
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });


// var swiper = new Swiper(".caseText-slide", {
// 	slidesPerView: 1,
// 	spaceBetween: 0,
// 	loop: true,
// 	autoplay: {
// 		delay: 2800,
// 		disableOnInteraction: false,
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });

// var swiper = new Swiper(".case-slide", {
// 	slidesPerView: 2,
// 	spaceBetween: 30,
// 	loop: true,
// 	autoplay: {
// 		delay: 2800,
// 		disableOnInteraction: false,
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });

//swiper


//header
const $anchor = document.querySelectorAll('.menu-list');
const $depth2 = document.querySelectorAll('.depth2');

$anchor.forEach((item, i) => {
	item.addEventListener('mouseenter', () => {
		for (let i = 0; i < $anchor.length; i++) {
			$depth2[i].classList.remove('on');
		}
		$depth2[i].classList.add('on');
	})

	item.addEventListener('mouseleave', () => {
		$depth2[i].classList.remove('on');
	})
})

//search 
const $btnSearch = document.querySelector('.search');
const $searchBox = document.querySelector('.search-box');
const $close = document.querySelector('.close');

$btnSearch.addEventListener('click', () => {
	$searchBox.classList.toggle('on');
})

$close.addEventListener('click', () => {
	$searchBox.classList.remove('on');
})

//tab
const $tabBtn = document.querySelectorAll('.tab-tit > li > a');
const $tabCont = document.querySelectorAll('.tab-cont > div');

$tabBtn.forEach((item, index) => {
	item.addEventListener('click', () => {
		for (let i = 0; i < $tabBtn.length; i++) {
			$tabBtn[i].classList.remove('on');
			$tabCont[i].classList.remove('on');
		}
		item.classList.add('on');
		$tabCont[index].classList.add('on');
	})
})

//search tab
const $listBtn = document.querySelectorAll('.list-btn');
const $listCont = document.querySelectorAll('.tab-search');


$listBtn.forEach((item, index) => {
	item.addEventListener('click', () => {
		console.log('aa');
		for (let i = 0; i < $listCont.length; i++) {
			$listCont[i].classList.remove('on');
			$listBtn[i].classList.remove('on');
		}
		$listCont[index].classList.add('on');
		item.classList.add('on');
	})
})

//slide button
const $popBtn = document.querySelectorAll('.popup-btn');
const $post = document.querySelectorAll('.post');

$popBtn.forEach((item, index) => {
	item.addEventListener('click', () => {
		if ($post[index].classList.contains('on')) {
			$post[index].classList.remove('on')
		} else {
			$post[index].classList.add('on');
		}
	})
})

//tab
$selectBtn = document.querySelectorAll('.tab-btn');
$selectCont = document.querySelectorAll('.tab-cont .cont');

$selectBtn.forEach((item, index) => {
	item.addEventListener('click', () => {
		for (let i = 0; i < $selectCont.length; i++) {
			$selectCont[i].classList.remove('on');
		}
		$selectCont[index].classList.add('on');
	})
})