const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const menuLink = document.querySelectorAll('navbar__link')
const body = document.querySelector('body')

const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('navbar__menu-active')
  body.classList.toggle('active')
}
const closeMenuOnClick = () => {
  menu.classList.remove('is-active')
  menuLinks.classList.remove('navbar__menu-active')
}

menu.addEventListener('click', mobileMenu)
menuLinks.addEventListener('click', closeMenuOnClick)

menuLinks.addEventListener('click', function (event) {
  event.preventDefault()

  if (event.target.closest('.link-home')) {
    const hero = document.querySelector('.hero')
    hero.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    })
  }
  if (event.target.closest('.link-1')) {
    const services = document.querySelector('.services')
    services.scrollIntoView({
      block: 'center',
      inline: 'nearest',
      behavior: 'smooth',
    })
  }
  if (event.target.closest('.link-2')) {
    const plans = document.querySelector('.membership')
    plans.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    })
  }
  if (event.target.closest('.link-3')) {
    const team = document.querySelector('.team')
    team.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    })
  }
})

// Animations

gsap.registerPlugin(ScrollTrigger)

gsap.from('.animate-hero', {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
})

gsap.from('.animate-services', {
  scrollTrigger: '.animate-services',
  duration: 0.5,
  opacity: 1,
  x: -300,
  stagger: 0.12,
})

gsap.from('.animate-img', {
  scrollTrigger: '.animate-img',
  duration: 1.2,
  opacity: 0,
  x: -200,
  stagger: 0.12,
})

gsap.from('.animate-membership', {
  scrollTrigger: '.animate-membership',
  duration: 1,
  opacity: 1,
  y: -150,
  stagger: 0.3,
  delay: 0.5,
})

gsap.from('.animate-card', {
  scrollTrigger: '.animate-card',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.1,
  delay: 0.2,
})

gsap.from('.animate-team', {
  scrollTrigger: '.animate-team',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2,
})

gsap.from('.animate-email', {
  scrollTrigger: '.animate-email',
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 0.6,
})
