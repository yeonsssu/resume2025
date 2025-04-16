const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.sidebar ul li a');
const content = document.querySelector('.content');

content.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (content.scrollTop >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('open');
}
