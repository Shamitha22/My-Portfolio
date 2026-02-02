const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
}

// Toggle theme
if (toggle) {
  toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    localStorage.setItem(
      "theme",
      body.classList.contains("light") ? "light" : "dark"
    );
  });
}
