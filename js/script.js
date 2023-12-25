/*=================== toggle icon navbar===================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



/*=================== scrollsection active link===================*/
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forterEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id +']').classList.add('active');
      });
    };
  });

  /*=================== sticky navbar ===================*/
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  /*=================== remove toggle icon when click navbar link (scroll) ===================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/*=================== scroll reveal ===================*/
ScrollReaveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReaveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReaveal().reveal(".home-img, .skill-container, .portofolio-box, contact form", { origin: "bottom" });
ScrollReaveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReaveal().reveal(".home-content p, about-content", { origin: "right" });
