document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#card-carousel', {
          perPage    : 2,
          breakpoints: {
              640: {
                  perPage: 1,
              },
          },
    } ).mount();
  } );


  gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".panel"),
  container = document.querySelector(".container");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + container.offsetWidth,
  },
});