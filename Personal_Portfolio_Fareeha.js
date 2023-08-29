const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
function FirstPageAnimation() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  });
  tl.to(".boundingElement", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 1,
    delay: -1,
    stagger: 0.2
  });
  tl.from("#heroFooter", {
    y: 0,
    opacity: 0,
    duration: 1.5,
    delay: -1,
    ease: Expo.easeInOut
  });
}

function CircleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#miniCircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  });
}

CircleMouseFollower();
FirstPageAnimation();

//for images we have to select all three elements and identify the x y position of mose by applying mouse move and
//at the defined position of x and y show the imamge a... move the image however the cursor moves

// Make sure GSAP library is loaded before running this code

document.addEventListener("mouseleave", function (event) {
  document.querySelectorAll(".element").forEach(function (element) {
    if (element.contains(event.target)) {
      gsap.to(element.querySelector("img"), {
        opacity: 0,
        ease: "power3.inOut",
        duration: 0.5
      });
    }
  });
});

/*document.addEventListener("mousemove", function (event) {
  var rotate = 0;
  var diffrot = 0;
  document.querySelectorAll(".element").forEach(function (element) {
    var diff = event.clientY - element.getBoundingClientRect().top;
    diffrot = event.clientX - rotate;
    rotate = event.clientX;
    if (element.contains(event.target)) {
      gsap.to(element.querySelector("img"), {
        opacity: 1,
        ease: "power3.inOut",
        top: diff + "px",
        left: event.clientX + "px",
        rotation: gsap.utils.clamp(-20, 20, diffrot * 0.8) // Added comma
      });
      element.querySelector("img").style.display = "block";
    } else {
      gsap.to(element.querySelector("img"), {
        opacity: 0.5,
        ease: "power1.inOut"
      });
      element.querySelector("img").style.display = "none";
    }
  });
});*/
