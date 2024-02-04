function loading() {
  var tl = gsap.timeline()

  tl.to('#yellow1', {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out"
  })
  tl.from('#yellow2', {
    top: "100%",
    delay: 0.6,
    duration: 0.7,
    ease: "expo.out"
  }, "anim")
  tl.to('.loader h1', {
    color: "black",
    delay: 0.1

  }, " anim")
  tl.to(".loader", {
    display: "none",
    opacity: 0
  })

}

loading();

function loco() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
  });

  document.querySelector('.footer h2').addEventListener('click', function () {
    scroll.scrollTo(0)
  })

  const page2 = document.querySelector('.page2')
  let elems = document.querySelectorAll('.elem')
  elems.forEach(Element => {
    Element.addEventListener('mouseenter', function (e) {
      let bgImg = Element.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgImg})`
    })
  })
}

loco();