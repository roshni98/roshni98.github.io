const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector(".intro h1");
const text2 = intro.querySelector(".intro h2");

//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes -TRIGGER WORD & END WORD IS HERE
let scene = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });
const textAnim2 = TweenMax.fromTo(text2, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

  let scene3 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: 0
  })
    .setTween(textAnim2)
    .addTo(controller);
  
//Video Animation
let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 895;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 120);
