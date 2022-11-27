const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
	anchor.addEventListener("click", function (e) {
		e.preventDefault() // Предотвратить стандартное поведение ссылок
		// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
		const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
		// Плавная прокрутка до элемента с id = href у ссылки
		document.querySelector(goto).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
};


const upButton = document.querySelector('.up-button');
window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    upButton.classList.add('up-button--visible');
  } else {
    upButton.classList.remove('up-button--visible');
  }
};




const mobileMenu = document.querySelector('.mob-menu');
const menuBtnOpen = document.querySelector('.mob-menu__button-open');
const menuBtnClose = document.querySelector('.mob-menu__button-close');

const toggleMenu = () => {
  mobileMenu.classList.toggle('is-mob-menu-open');
};

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const mobileMenu = document.querySelector('.mob-menu');
    const toggleMenu = () => {
      mobileMenu.classList.toggle('is-mob-menu-open');
    };
    if (mobileMenu.classList.contains('is-mob-menu-open')) {
      mobileMenu.classList.toggle('is-mob-menu-open');
    }
    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    // const topOffset = document.querySelector('.scrollto').offsetHeight;
    const topOffset = 80; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});




const speakersTitle = document.querySelector('.speakers-title');
const speakerFirst = document.querySelector('.speaker-first');
const speakerSecond = document.querySelector('.speaker-second');
const speakerThird = document.querySelector('.speaker-third');
const speakerFourth = document.querySelector('.speaker-fourth');
const scrollToSpeakers = speakersTitle.offsetTop;

const programTitle = document.querySelector('.program-title');
const programFirst = document.querySelector('.program-first');
const programSecond = document.querySelector('.program-second');
const programThird = document.querySelector('.program-third');
const programFourth = document.querySelector('.program-fourth');
const scrollTopPrograms = programTitle.offsetTop;
const viewPortHeight = window.screen.height;
let isSpeakersShown = false;
let isProgramShown = false;

window.addEventListener('scroll', function () {
  if (!isSpeakersShown) {
    if (window.pageYOffset > scrollToSpeakers - viewPortHeight) {
      speakerFirst.className =
        'speaker-first speakers__item animate__animated animate__heartBeat animate__slower animate__delay-2s';
      speakerSecond.className =
        'speaker-first speakers__item animate__animated animate__heartBeat animate__slower animate__delay-3s';
      speakerThird.className =
        'speaker-first speakers__item animate__animated animate__heartBeat animate__slower animate__delay-4s';
      speakerFourth.className =
        'speaker-first speakers__item animate__animated animate__heartBeat animate__slower animate__delay-5s';
      speakersTitle.className =
        'speakers-title section__title speakers__title animate__animated animate__fadeInUp animate__slower animate__delay-1s';
      isSpeakersShown = true;
    }
  }

  if (!isProgramShown) {
    if (window.pageYOffset > scrollTopPrograms - viewPortHeight) {
      programFirst.className =
        'program__thumb program__thumb-top animate__animated animate__bounceIn animate__delay-1s';
      programSecond.className =
        'program__thumb program__thumb-bottom animate__animated animate__bounceIn animate__delay-3s';
      programThird.className =
        'program__thumb program__thumb-top animate__animated animate__bounceIn animate__delay-2s';
      programFourth.className =
        'program-fourth transparent program__thumb program__thumb-bottom animate__animated animate__bounceIn animate__delay-4s';
      programTitle.className =
        'program-title program__title animate__animated animate__bounceIn animate__delay-1s';
      isProgramShown = true;
    }
  }
});