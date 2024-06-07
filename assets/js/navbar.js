const navbar = document.querySelector("#navbar");
const hamburgerToggle = document.querySelector("#hamburger-toggle");
hamburgerToggle.addEventListener("click", onHamburgerClick);

function onHamburgerClick() {
  navbar.classList.contains("open")
    ? navbar.classList.remove("open")
    : navbar.classList.add("open");
}
