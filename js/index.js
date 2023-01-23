const imgPrev = document.querySelector(".imgPrev");
const imgs = document.querySelectorAll(".imgContainer");

let isimgPrevOpen = false;
let activeImg = null;
let activeImgParent = null;

imgs.forEach((img) => {
  let theImgMask = img.querySelector(".wrap");
  let theImg = img.querySelector("img");

  img.addEventListener("click", () => {
    const imgState = Flip.getState([theImgMask, theImg]);
    gsap.set(imgPrev, { autoAlpha: 1 });
    activeImg = theImgMask;
    activeMaskImg = theImgMask.querySelector("img");
    activeImgParent = theImgMask.parentNode;
    imgPrev.appendChild(theImgMask);

    Flip.from(imgState, {
      duration: 1,
      ease: "power3.inOut",
      scale: true,
      onStart: () => {
        imgPrev.classList.add("imgPreview--active");
      },
      onComplete: () => {
        isimgPreviewOpen = true;
      },
    });
  });

  imgPrev.addEventListener("click", (e) => {
    const activeImgState = Flip.getState([activeImg, activeMaskImg]);

    activeImgParent.appendChild(activeImg);

    Flip.from(activeImgState, {
      duration: 1,
      ease: "power3.inOut",
      absolute: true,
      scale: true,
      zIndex: 2000,
      nested: true,
      onStart: () => {
        imgPrev.classList.remove("imgPreview--active");
      },
      onComplete: () => {
        isimgPrevOpen = false;
        gsap.set(imgPrev, { autoAlpha: 0 });
      },
    });
  });
});
