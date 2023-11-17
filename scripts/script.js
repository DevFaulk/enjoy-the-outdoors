const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll >= 50) {
    header.classList.add('header-shrink');
    navLinks.forEach((link) => {
      link.style.fontSize = '14px'; // Set smaller font size for the nav links
    });
  } else {
    header.classList.remove('header-shrink');
    navLinks.forEach((link) => {
      link.style.fontSize = ''; // Reset font size to default
    });
  }
});
