var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
});

document.body.addEventListener("mousemove", mouseMove);

function mouseMove(event) {
  let leftImage = document.querySelector(".header-image__list-item--left");
  let centerImage = document.querySelector(".header-image__list-item--center");
  let rightImage = document.querySelector(".header-image__list-item--right");
  let windowWidth = `${window.innerWidth / 2}`;
  if (event.pageX > windowWidth) {
    leftImage.classList.add("mouseMove");
    centerImage.classList.add("mouseMove");
    rightImage.classList.add("mouseMove");
  } else {
    leftImage.classList.remove("mouseMove");
    centerImage.classList.remove("mouseMove");
    rightImage.classList.remove("mouseMove");
  }
}
