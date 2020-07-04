export function scrollAnimation() {

var controller = new ScrollMagic.Controller();
  
/* p2 텍스트 애니메이션 */
var tween1 = gsap.timeline()
  .fromTo(".ani-2-1", {y: 20, opacity: 0, duration: 0.5, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut"}, "with")
  .fromTo(".ani-2-2", {y: 20, opacity: 0, duration: 0.5, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 0.5}, "with")
  .fromTo(".ani-2-3", {y: 20, opacity: 0, duration: 0.5, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 1}, "with")
  .fromTo(".ani-2-4", {y: 20, opacity: 0, duration: 0.5, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.5, ease: "sine.inOut", delay: 1.5}, "with");
  
var scene1 = new ScrollMagic.Scene({
  triggerElement: ".page-2-wrapper",
  triggerhook: 0
})
.setTween(tween1)
.addTo(controller)
.addIndicators({
    name: "1"
});

/* p3 기본 애니메이션 */

var tween2 = gsap.fromTo(".page-3-fade", {y: 20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"});

var scene2 = new ScrollMagic.Scene({
    triggerElement: ".page-3",
    triggerhook: 0
})
.setTween(tween2)
.addTo(controller)
.addIndicators({
    name: "2"
});

/* p4 기본 및 텍스트 애니메이션 */

var tween3 = gsap.fromTo(".page-4-fade", {y: 20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"});

var scene3 = new ScrollMagic.Scene({
  triggerElement: ".page-4",
  triggerhook: 0
})
.setTween(tween3)
.addTo(controller)
.addIndicators({
    name: "3"
});

var tween4 = gsap.timeline()
  .fromTo(".ani-4-1", {y: 0, opacity: 1, duration: 1, ease: "sine.inOut"}, {y: -100, opacity: 0, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".ani-4-2", {y: 0, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: -100, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with");
  
var scene4 = new ScrollMagic.Scene({
  triggerElement: ".page-4-textbox",
  triggerhook: 0
})
.setTween(tween4)
.addTo(controller)
.addIndicators({
    name: "4"
});

/* p5 기본 애니메이션 */

var tween5 = gsap.fromTo(".page-5-fade", {y: 20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"});

var scene5 = new ScrollMagic.Scene({
  triggerElement: ".page-5",
  triggerhook: 0
})
.setTween(tween5)
.addTo(controller)
.addIndicators({
    name: "5"
});

/* p6 기본 애니메이션 */

var tween6 = gsap.fromTo(".page-6-fade", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut"});

var scene6 = new ScrollMagic.Scene({
  triggerElement: ".page-6",
  triggerhook: 0
})
.setTween(tween6)
.addTo(controller)
.addIndicators({
    name: "6"
});

}
  

