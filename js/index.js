const imgPrev = document.querySelector(".imgPrev");
const imgs = document.querySelectorAll(".imgContainer");

let isimgPrevOpen = false;
let activeImg = null;
let activeImgParent = null;

imgs.forEach((img) => {
  let theImgWrap = img.querySelector(".wrap");
  let theImg = img.querySelector("img");

  img.addEventListener("click", () => {
    const imgState = Flip.getState([theImgWrap, theImg]);
    gsap.set(imgPrev, { autoAlpha: 1 });
    activeImg = theImgWrap;
    activeWrapImg = theImgWrap.querySelector("img");
    activeImgParent = theImgWrap.parentNode;
    imgPrev.appendChild(theImgWrap);

    Flip.from(imgState, {
      duration: 1,
      ease: "power3.inOut",
      scale: true,
      onStart: () => {
        imgPrev.classList.toggle("imgPrev--active");
      },
      onComplete: () => {
        isimgPrevOpen = true;
      },
    });
  });
});

imgPrev.addEventListener("click", () => {
  const activeImgState = Flip.getState([activeImg, activeWrapImg]);
  activeImgParent.appendChild(activeImg);

  Flip.from(activeImgState, {
    duration: 1,
    ease: "power3.inOut",
    absolute: true,
    scale: true,
    zIndex: 2000,
    nested: true,
    onStart: () => {
      imgPrev.classList.toggle("imgPrev--active");
    },
    onComplete: () => {
      isimgPrevOpen = false;
      gsap.set(imgPrev, { autoAlpha: 0 });
    },
  });
});
