document.addEventListener("DOMContentLoaded", function () {
  fetch("docs/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;

      const script = document.createElement("script");
      script.src = "../assets/js/navbar.js";
      document.body.appendChild(script);
    });

  fetch("docs/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });
});
