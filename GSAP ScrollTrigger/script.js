gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
    }
});

tl.to(".box_one", { width: "100%", duration: 2 });
tl.to(".box_two", { width: "100%", duration: 2 });
tl.to(".box_three", { height: "100%", duration: 2 });
tl.to(".box_four", { width: "100%", duration: 2 });
tl.to(".box_five", { height: "100%", duration: 2 });
tl.to(".box_six", { width: "100%", duration: 2 });