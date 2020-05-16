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
    leftImage.style.transform = "rotate(-1.1deg)";
    centerImage.style.transform = "rotate(-1.5deg)";
    rightImage.style.transform = "rotate(-2.03deg)";
  } else {
    leftImage.style.transform = "rotate(1.1deg)";
    centerImage.style.transform = "rotate(1.5deg)";
    rightImage.style.transform = "rotate(2.03deg)";
  }
}
