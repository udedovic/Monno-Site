document.addEventListener("DOMContentLoaded", function () {
  fetch("/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;

      const script = document.createElement("script");
      script.src = "/assets/js/navbar.js";
      document.body.appendChild(script);
    });

  fetch("/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });

  function scrollToHash() {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }

  // Scroll to the element if URL contains hash
  scrollToHash();

  // Scroll to the element on hashchange
  window.addEventListener("hashchange", scrollToHash);
});
