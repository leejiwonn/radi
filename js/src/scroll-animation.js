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
  triggerhook: 0.8
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
    triggerhook: 0.8
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
  triggerhook: 0.8
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
  triggerhook: 0.8
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
  triggerhook: 0.8
})
.setTween(tween5)
.addTo(controller)
.addIndicators({
    name: "5"
});

/* p6 기본 및 이미지 애니메이션 */

var tween6 = gsap.fromTo(".page-6-fade", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut"});

var scene6 = new ScrollMagic.Scene({
  triggerElement: ".page-6",
  triggerhook: 0.8
})
.setTween(tween6)
.addTo(controller)
.addIndicators({
    name: "6"
});

var tween7 = gsap.timeline()
  .fromTo(".page6-slide-1", {x: -1000, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 1.3, ease: "sine.inOut"}, "with")
  .fromTo(".page6-slide-2", {x: 1000, opacity: 0, duration: 1, ease: "sine.inOut"}, {x: 0, opacity: 1, duration: 1.3, ease: "sine.inOut"}, "with");

var scene7 = new ScrollMagic.Scene({
  triggerElement: ".page-6",
  triggerhook: 0.8
})
.setTween(tween7)
.addTo(controller)
.addIndicators({
    name: "7"
});

var tween8 = gsap.timeline()
  .fromTo(".page6-slide-1", {x: 0, opacity: 1, duration: 1, ease: "sine.inOut"}, {x: -1000, opacity: 0, duration: 1.3, ease: "sine.inOut", delay: 0.5}, "with")
  .fromTo(".page6-slide-2", {x: 0, opacity: 1, duration: 1, ease: "sine.inOut"}, {x: 1000, opacity: 0, duration: 1.3, ease: "sine.inOut", delay: 0.5}, "with");

var scene8 = new ScrollMagic.Scene({
  triggerElement: ".page6-slide-2",
  triggerhook: 0.8
})
.setTween(tween8)
.addTo(controller)
.addIndicators({
    name: "8"
});

/* p7 circle 애니메이션 */

var tween9 = gsap.timeline()
  .fromTo(".p7-ani-1", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p7-ani-2", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut", delay: 0.4}, "with")
  .fromTo(".p7-ani-3", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut", delay: 0.8}, "with")
  .fromTo(".p7-ani-4", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut", delay: 1.2}, "with")

var scene9 = new ScrollMagic.Scene({
  triggerElement: ".page-7-circle",
  triggerhook: 0.8
})
.setTween(tween9)
.addTo(controller)
.addIndicators({
    name: "9"
});

/* p8 기본 애니메이션 */

var tween10 = gsap.fromTo(".page-8-fade", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut"});

var scene10 = new ScrollMagic.Scene({
  triggerElement: ".page-8",
  triggerhook: 0.8
})
.setTween(tween10)
.addTo(controller)
.addIndicators({
    name: "10"
});

}
  

