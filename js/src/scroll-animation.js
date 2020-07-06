export function scrollAnimation() {

var controller = new ScrollMagic.Controller();

/* p2 텍스트 애니메이션 */

var tweenP2 = gsap.timeline()
  .fromTo(".ani-2-1", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".ani-2-2", {opacity: 0, duration: 0.8, ease: "sine.inOut"}, {opacity: 1, duration: 1, ease: "sine.inOut", delay: 1}, "with");
  
var sceneP2 = new ScrollMagic.Scene({
  triggerElement: ".page-2-wrapper",
  triggerhook: 0.8
})
.setTween(tweenP2)
.addTo(controller)
.addIndicators({
    name: "2"
});

/* p3 기본 애니메이션 */

var tweenP3 = gsap.fromTo(".page-3-fade", {y: 20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"});

var sceneP3 = new ScrollMagic.Scene({
    triggerElement: ".page-3",
    triggerhook: 0.8
})
.setTween(tweenP3)
.addTo(controller)
.addIndicators({
    name: "3"
});

/* p4 기본 및 텍스트 애니메이션 */

var tweenP41 = gsap.fromTo(".page-4-fade", {y: 20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"});

var sceneP41 = new ScrollMagic.Scene({
  triggerElement: ".page-4",
  triggerhook: 0.8
})
.setTween(tweenP41)
.addTo(controller)
.addIndicators({
    name: "41"
});

var tweenP42 = gsap.timeline()
  .fromTo(".ani-4-1", {y: 0, opacity: 1, duration: 1, ease: "sine.inOut"}, {y: -100, opacity: 0, duration: 0.8, ease: "sine.inOut"}, "with")
  .fromTo(".ani-4-2", {y: 0, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: -100, opacity: 1, duration: 0.8, ease: "sine.inOut"}, "with");
  
var sceneP42 = new ScrollMagic.Scene({
  triggerElement: ".page-4-textbox",
  triggerhook: 0.8
})
.setTween(tweenP42)
.addTo(controller)
.addIndicators({
    name: "42"
});

/* p5 기본 애니메이션 */

var tweenP5 = gsap.fromTo(".page-5-fade", {y: 20, opacity: 0, duration: 1, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 0.8, ease: "sine.inOut"});

var sceneP5 = new ScrollMagic.Scene({
  triggerElement: ".page-5",
  triggerhook: 0.8
})
.setTween(tweenP5)
.addTo(controller)
.addIndicators({
    name: "5"
});

/* p6 기본 및 이미지 애니메이션 */

var tweenP61 = gsap.timeline()
  .fromTo(".page-6-fade", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut"}).to(".p9-ani-1", {y: 0, duration: 0.1, ease: "sine.inOut", delay: 0.1}, "with")

var sceneP61 = new ScrollMagic.Scene({
  triggerElement: ".page-6",
  triggerhook: 0.8
})
.setTween(tweenP61)
.addTo(controller)
.addIndicators({
    name: "61"
});

var tweenP62 = gsap.timeline()
  .to(".page6-slide-1", {x: 0, opacity: 1, duration: 1.3, ease: "sine.inOut"}, "with")
  .to(".page6-slide-2", {x: 0, opacity: 1, duration: 1.3, ease: "sine.inOut"}, "with");

var sceneP62 = new ScrollMagic.Scene({
  triggerElement: ".page-6",
  triggerhook: 0.8
})
.setTween(tweenP62)
.addTo(controller)
.addIndicators({
    name: "62"
});

var tweenP63 = gsap.timeline()
  .to(".page6-slide-1", {x: -1200, opacity: 0, duration: 1.3, ease: "sine.inOut"}, "with")
  .to(".page6-slide-2", {x: 1200, opacity: 0, duration: 1.3, ease: "sine.inOut"}, "with")
  .fromTo(".p6-ani-1", {opacity: 1, duration: 1, ease: "sine.inOut"}, {opacity: 0, duration: 1.3, ease: "sine.inOut"}, "with")
  .fromTo(".page-6-textbox", {duration: 1, ease: "sine.inOut"}, {duration: 0.1, ease: "sine.inOut", delay: 1}, "with")
  .fromTo(".p6-ani-2", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.5}, "with");

var sceneP63 = new ScrollMagic.Scene({
  triggerElement: ".p6-trigger1",
  triggerhook: 0.8
})
.setTween(tweenP63)
.addTo(controller)
.addIndicators({
    name: "63"
});

/* p7 circle 애니메이션 */

var tweenP7 = gsap.timeline()
  .fromTo(".p7-ani-1", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p7-ani-2", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut", delay: 0.4}, "with")
  .fromTo(".p7-ani-3", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut", delay: 0.8}, "with")
  .fromTo(".p7-ani-4", {y: 20, opacity: 0, duration: 0.8, ease: "sine.inOut"}, {y: 0, opacity: 1, duration: 1, ease: "sine.inOut", delay: 1.2}, "with");

var sceneP7 = new ScrollMagic.Scene({
  triggerElement: ".page-7-circle",
  triggerhook: 0.8
})
.setTween(tweenP7)
.addTo(controller)
.addIndicators({
    name: "7"
});

/* p8 기본 애니메이션 */

var tweenP8 = gsap.fromTo(".page-8", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut"});

var sceneP8 = new ScrollMagic.Scene({
  triggerElement: ".page-8",
  triggerhook: 0.8
})
.setTween(tweenP8)
.addTo(controller)
.addIndicators({
    name: "8"
});

/* p9 기본 애니메이션 */

var tweenP91 = gsap.timeline()
  .fromTo(".page-9-fade", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.1}, "with")
  .to(".p9-ani-1", {y: 0, duration: 0.1, ease: "sine.inOut"}, "with")
  .to(".p9-ani-2", {y: 0, duration: 0.1, ease: "sine.inOut"}, "with")
  .to(".p9-ani-3", {y: 0, duration: 0.1, ease: "sine.inOut"}, "with")
  .to(".p9-ani-4", {y: 0, duration: 0.1, ease: "sine.inOut"}, "with");

var sceneP91 = new ScrollMagic.Scene({
  triggerElement: ".page-9",
  triggerhook: 0.8
})
.setTween(tweenP91)
.addTo(controller)
.addIndicators({
    name: "91"
});

var tweenP92 = gsap.timeline()
  .fromTo(".p9-ani-1", {y: 0, duration: 0.8, ease: "sine.inOut"}, {y: -800, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p9-ani-2", {y: 0, duration: 0.8, ease: "sine.inOut"}, {y: -800, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p9-ani-3", {y: 0, duration: 0.8, ease: "sine.inOut"}, {y: -800, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p9-ani-4", {y: 0, duration: 0.8, ease: "sine.inOut"}, {y: -800, duration: 1, ease: "sine.inOut"}, "with");

var sceneP92 = new ScrollMagic.Scene({
  triggerElement: ".p9-trigger1",
  triggerhook: 0.8
})
.setTween(tweenP92)
.addTo(controller)
.addIndicators({
    name: "92"
});

var tweenP93 = gsap.timeline()
  .fromTo(".p9-ani-1", {y: -800, duration: 0.8, ease: "sine.inOut"}, {y: -1550, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p9-ani-2", {y: -800, duration: 0.8, ease: "sine.inOut"}, {y: -1550, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p9-ani-3", {y: -800, duration: 0.8, ease: "sine.inOut"}, {y: -1550, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p9-ani-4", {y: -800, duration: 0.8, ease: "sine.inOut"}, {y: -1550, duration: 1, ease: "sine.inOut"}, "with");

var sceneP93 = new ScrollMagic.Scene({
  triggerElement: ".p9-trigger2",
  triggerhook: 0.8
})
.setTween(tweenP93)
.addTo(controller)
.addIndicators({
    name: "93"
});

var tweenP94 = gsap.timeline()
  .fromTo(".p9-ani-1", {y: -1550, duration: 0.8, ease: "sine.inOut"}, {y: -2300, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p9-ani-2", {y: -1550, duration: 0.8, ease: "sine.inOut"}, {y: -2300, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p9-ani-3", {y: -1550, duration: 0.8, ease: "sine.inOut"}, {y: -2300, duration: 1, ease: "sine.inOut"}, "with")
  .fromTo(".p9-ani-4", {y: -1550, duration: 0.8, ease: "sine.inOut"}, {y: -2300, duration: 1, ease: "sine.inOut"}, "with");

var sceneP94 = new ScrollMagic.Scene({
  triggerElement: ".p9-trigger3",
  triggerhook: 0.8
})
.setTween(tweenP94)
.addTo(controller)
.addIndicators({
    name: "94"
});

/* p10 기본 애니메이션 */

var tweenP10 = gsap.fromTo(".page-10-fade", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut"});

var sceneP10 = new ScrollMagic.Scene({
  triggerElement: ".page-10",
  triggerhook: 0.8
})
.setTween(tweenP10)
.addTo(controller)
.addIndicators({
    name: "10"
});

/* p11 기본 애니메이션 */

var tweenP11 = gsap.fromTo(".page-11-fade", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.2});

var sceneP11 = new ScrollMagic.Scene({
  triggerElement: ".page-11",
  triggerhook: 0.8
})
.setTween(tweenP11)
.addTo(controller)
.addIndicators({
    name: "11"
});

/* p12 기본 애니메이션 */

var tweenP12 = gsap.fromTo(".page-12-fade", {opacity: 0, duration: 1, ease: "sine.inOut"}, {opacity: 1, duration: 0.8, ease: "sine.inOut", delay: 0.1});

var sceneP12 = new ScrollMagic.Scene({
  triggerElement: ".page-12",
  triggerhook: 0.8
})
.setTween(tweenP12)
.addTo(controller)
.addIndicators({
    name: "12"
});

}
  

