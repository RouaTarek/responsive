// scroll behavior & navbar  changes

const edbinNavbar = document.getElementById('edbinNavbar');
// body to scroll upButton
const bodyScroll = document.getElementById('body');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) { 
    edbinNavbar.classList.add('scrolled');
    bodyScroll.classList.add('scrolled');
  } else {
    edbinNavbar.classList.remove('scrolled');
    bodyScroll.classList.remove('scrolled');
  }
});