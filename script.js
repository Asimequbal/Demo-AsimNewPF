const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});

function moovescrolldot(){
    window.addEventListener('mousemove',function(delt){
      document.querySelector('#minicircle').style.transform = `translate(${delt.clientX}px, ${delt.clientY}px)`
    })
}
moovescrolldot();