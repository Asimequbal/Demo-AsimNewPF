const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});

function animatefpage(){
  var tl = gsap.timeline();
  tl.from("#nav" , {
    y: '-10',
    opacity: 0,
    duration:1.5,
    ease: Expo.easeInOut,
  })
  .to(".boundelem" , {
    y: '0',
    ease: Expo.easeInOut,
    duration: 1.5,
    delay: -1,
    stagger: .2,
  })
  .from("#hero-ffoter" , {
    y: '-10',
    opacity: 0,
    duration:1.5,
    delay: -1,
    ease: Expo.easeInOut,
  })
}


function moovescrolldot(){
    window.addEventListener('mousemove',function(delt){
      document.querySelector('#minicircle').style.transform = `translate(${delt.clientX}px, ${delt.clientY}px)`;
    })
}
moovescrolldot();
animatefpage();
document.querySelectorAll(".elem").forEach(function(elem){
  var rotate = 0;
  var diffrot = 0;
  elem.addEventListener("mouseleave", function (details) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
  elem.addEventListener("mousemove",function(details){
  var tdifference = details.clientY - elem.getBoundingClientRect().top;
gsap.to(elem.querySelector("img"),{
opacity: 1,
ease : Power3,
top: tdifference,
left : details.clientX,
});
  });
});