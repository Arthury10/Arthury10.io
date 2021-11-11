/*NAVEGAÇÃO POR TABS*/
/*selectores navtabs*/
const navMenu = document.querySelectorAll('a[id^=nav]')
const modalMenu = document.querySelectorAll('section[id^=m]')

if (navMenu.length && modalMenu.length) {
	modalMenu[0].classList.add('ativo')

	function activeTab(index) {
		modalMenu.forEach(section => {
			section.classList.remove('ativo')
		})
		modalMenu[index].classList.add('ativo')
	}

	navMenu.forEach((itemMenu, index) => {
		itemMenu.addEventListener('click', () => {
			activeTab(index)
		})
	})
}
/*////////////////////////////////////////////////////////////////////////////*/
/*menu-mobile*/
function openMenuMobile() {
	const menuMobile = document.querySelector('.icon-menu')
	const menuMobileList = document.querySelector('.nav-mobile')

	if (window.innerWidth < 800) {
		menuMobile.addEventListener('click', () => {
			menuMobileList.classList.toggle('openModalMobile')
		})
		navMenu.forEach(e => {
			e.addEventListener('click', () => {
				menuMobileList.classList.toggle('openModalMobile')
			})
		})
	}
}

/*open-modal-form-menu*/
function openModalFormMenu() {
	const BtnOpenFormHome = document.querySelector('.open-form-home')
	const ModalopenFormMenu = document.querySelector('.form-home')
	const BtnCloseFormHome = document.querySelector('.close-form-home')

	BtnOpenFormHome.addEventListener('click', () => {
		ModalopenFormMenu.classList.add('show-form-home')
	})

	BtnCloseFormHome.addEventListener('click', () => {
		ModalopenFormMenu.classList.remove('show-form-home')
	})
}

/*typed*/
function typed() {
	window.addEventListener('load', () => {
		const typed = new Typed('.typing', {
			strings: ['Web Developer', 'Web Designer'],
			typeSpeed: 150,
			backSpeed: 100,
			backDelay: 500,
			loop: true
		})

		const typed2 = new Typed('.typing2', {
			strings: ['fólio'],
			typeSpeed: 200,
			backSpeed: 150,
			backDelay: 500,
			loop: true
		})
	})
}

/*ARROW TO UP*/
function arrowToUp() {
	const arrow = document.querySelector('.back-to-top')

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 100) {
			arrow.classList.add('show')
		} else {
			arrow.classList.remove('show')
		}
	})
}

//funcções ativas
function ativas() {
	openMenuMobile()
	openModalFormMenu()
	typed()
	arrowToUp()
}
ativas()
