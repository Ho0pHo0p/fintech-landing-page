// Navbar

const bars = document.querySelector('#bars');
const navbar = document.querySelector('#navbar');
const menu = document.querySelector('#menu'
);


const menuDisplay = (e) => {
  navbar.classList.toggle('hidden');
  menu.classList.toggle('hidden')
  if(navbar.classList.contains('hidden')){
    console.log('hidden')
    navbar.style.visibility = 'hidden'
    navbar.style.opacity = '0'
    navbar.style.transitionDelay = '.1s linear'
    menu.style.visibility = 'hidden'
    menu.style.opacity = '0'
    menu.style.transitionDelay = '0s'
  } else {
    console.log('not hidden')
    menu.style.visibility = 'visible'
    menu.style.opacity = '1'
    menu.style.transitionDelay = '.1s linear'
    navbar.style.visibility = 'visible'
    navbar.style.opacity = '1'
  }
}

bars.addEventListener('click', menuDisplay)

