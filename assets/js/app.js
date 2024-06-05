const hamburgerToggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#navbar");

hamburgerToggle.addEventListener("click", onHamburgerClick);

function onHamburgerClick() {
  navbar.classList.contains("open")
    ? navbar.classList.remove("open")
    : navbar.classList.add("open");
}
