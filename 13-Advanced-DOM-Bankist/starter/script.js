'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = (document.querySelector('.header'));
const allSections = document.querySelectorAll('.section')
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const allButtons = document.getElementsByTagName('button');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const imgTargets = document.querySelectorAll('img[data-src');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slides = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

document.getElementById('section--1');

// Button Scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords)
  // console.log(e.target.getBoundingClientRect())
  // console.log(window.pageXOffset, window.pageYOffset);
  // console.log(document.documentElement.clientHeight, document.documentElement.clientWidth);

  // window.scrollTo(s1coords.left, s1coords.top + window.pageYOffset)
  // window.scrollTo({
  //   left: s1coords.left,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // })

  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const elementToScrollTo = document.querySelector(this.getAttribute('href'));
//     elementToScrollTo.scrollIntoView({ behavior: 'smooth' })
//   })
// })

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link') && !e.target.classList.contains('nav__link--btn')) {
    const elementToScrollTo = document.querySelector(e.target.getAttribute('href'));
    elementToScrollTo.scrollIntoView({ behavior: 'smooth' })
  }
})

// Tabbed Component

tabsContainer.addEventListener('click', function (e) {

  const clicked = e.target.closest('.operations__tab');

  //Guard Clause
  if (!clicked) return;

  // Remove Active CLasses
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(tc => tc.classList.remove('operations__content--active'));

  // Active Tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
});


// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky Navigation
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords)
// window.addEventListener('scroll', function (e) {
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// })

// Sticky Navigation: Intersection Observer API

// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)
// const obsCallback = function (entries, observer) {
//   console.log(entries)
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting)
    nav.classList.add('sticky');
  else
    nav.classList.remove('sticky');
}
const navHeight = nav.getBoundingClientRect().height;
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header);

// Reveal Sections
const revealSection = function (entries, observer) {
  // const [entry] = entries;
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target)
  })
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: .15
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden')
});

// Lazy Loading Images
const loadImg = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function (e) {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(loadImg, {
  roolt: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider
const sliderFunction = function () {
  let curSlide = 0;
  let maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${(i - slide) * 100}%)`);
    activateDot(slide)
  }

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML('beforeend', `
        <button class="dots__dot" data-slide="${i}"></button>
        `);
    })
  }

  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((dot => dot.classList.remove('dots__dot--active')));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  }

  const nextSlide = function () {
    if (curSlide === (maxSlide - 1)) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }

    goToSlide(curSlide);
  }

  createDots();
  goToSlide(0);

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    (e.key === 'ArrowRight') && nextSlide();
  })

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      curSlide = e.target.dataset.slide;
      goToSlide(curSlide)
    }
  })
}

sliderFunction()




// console.log(allButtons)

// console.log(document.getElementsByClassName('btn'));


// Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// // header.prepend(message)
// header.append(message)
// // header.append(message.cloneNode(true))
// // header.before(message)
// // header.after(message)

// // Delete elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function () {
//   message.remove();
//   // message.parentElement.removeChild(message);
// });

// // Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// // console.log(message.style.color)
// console.log(getComputedStyle(message).color)
// console.log(getComputedStyle(message).height)

// message.style.height = parseFloat(getComputedStyle(message).height) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt)
// console.log(logo.src)
// console.log(logo.className)
// logo.alt = 'Beautiful Minimalist Logo'
// logo.setAttribute('company', 'Bankist')
// logo.getAttribute('company')

// console.log(logo.getAttribute('src'))

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'))

// // Data Attributes
// console.log(logo.dataset.versionNumber)

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('You are reading the heading')

//   // h1.removeEventListener('mouseenter', alertH1);
// }
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// h1.onmouseenter = function (e) {
//   alert('You are reading the heading')
// }

// rgb(255,255,255)
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// // console.log(randomColor())

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('link', e.target, e.currentTarget);
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('container', e.target, e.currentTarget)

// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('nav', e.target, e.currentTarget)
// });

const h1 = document.querySelector('h1');

// Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes)
// console.log(h1.children)
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'red'

// // Going upwards: parents
// console.log(h1.parentNode)
// console.log(h1.parentElement)

// h1.closest('.header').style.background = 'var(--gradient-secondary)'
// h1.closest('h1').style.background = 'var(--gradient-primary)'

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling)
// console.log(h1.previousSibling)
// console.log(h1.nextSibling)

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// })


document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built')
  console.log(e)
})

window.addEventListener('load', function (e) {
  console.log('Page Fully loaded')
})

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// })