export function scrollAnimation() {

    var controller = new ScrollMagic.Controller();
  
    var tween1 = TweenMax.to('.big-title', 0.5, {
      scale: 2.5,
      rotation: 360,
      x: 130
    });
  
    var scene1 = new ScrollMagic.Scene({
        triggerElement: ".left-box",
        duration: "100%"
    })
    .setTween(tween1)
    .addTo(controller)
    .addIndicators({
        name: "1"
    });
}
  

