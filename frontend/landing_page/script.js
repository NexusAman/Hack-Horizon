document.getElementById("getStarted").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent instant navigation

  let page = document.getElementById("landingPage");
  page.classList.add("fade-out"); // Apply fade-out animation

  setTimeout(() => {
      window.location.href = "/frontend/login_page/login.html"; // Redirect after animation
  }, 700); // Wait for animation to finish (700ms)
});
