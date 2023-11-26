const tl = gsap.timeline();

tl.to(".intro-letters", {opacity: 1, stagger: 0.3}, 1)
  .to(".intro-screen", {height: "0%", duration: 0.7, ease: Power1.easeIn},"+=0.7")
  .to(".intro-letters", {opacity: 0, y: "-100%"}, "-=1");