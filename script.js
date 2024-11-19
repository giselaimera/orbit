const menuToggle = document.querySelector('.menu-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});

const menuItems = document.querySelectorAll('.navbar-menu li a');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    navbarMenu.classList.remove('show'); 
  });
});


document.getElementById("find-us-btn").addEventListener("click", function() {
  document.getElementById("find-us").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.classList.add('show-scroll');
  } else {
    scrollToTopBtn.classList.remove('show-scroll');
  }
};

scrollToTopBtn.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
