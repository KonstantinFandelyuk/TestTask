const modal = document.querySelector(".modal");
const wrapper = document.querySelector(".wrapper");

document.addEventListener("click", function(event) {
  const button = event.target.closest("#button");
  if (button) {
    modal.classList.add("active");
    modal.classList.add("slideInLeft");
    wrapper.classList.add("act");
  }
});

document.addEventListener("click", function(event) {
  let modalClose = event.target.closest(".modal__close");
  let modalElementBackground = event.target.closest(".menu");
  let modalElement = event.target.closest(".modal");
  if (modalClose || (modalElement && !modalElementBackground)) {
    modal.classList.remove("active");
    wrapper.classList.remove("act");
  }
});
