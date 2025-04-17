const menuButtons = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".main-layout .screen-overlay");
const themeButton = document.querySelector(".navbar .theme-button i");
const searchButton = document.querySelector("#search-button");
const searchBackButton = document.querySelector("#search-back-button");

// Toggle sidebar visibility when menu buttons are clicked
menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
  });
});

// Toggle sidebar visibility when screen overlay is clicked
screenOverlay.addEventListener("click", () => {
  document.body.classList.toggle("sidebar-hidden");
});

// Initialize dark mode based on localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  themeButton.classList.replace("uil-moon", "uil-sun");
} else {
  themeButton.classList.replace("uil-sun", "uil-moon");
}

// Toggle dark mode when theme button is clicked
themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  themeButton.classList.toggle("uil-sun", isDarkMode);
  themeButton.classList.toggle("uil-moon", !isDarkMode);
});

// Show sidebar on large screens by default
if (window.innerWidth >= 768) {
  document.body.classList.remove("sidebar-hidden");
}




document.querySelector('.search-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission behavior
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const videoCards = document.querySelectorAll('.video-card');

  videoCards.forEach(card => {
    const title = card.querySelector('.title').textContent.toLowerCase();
    if (title.includes(searchInput)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});

// Optional: Reset filter on empty search
document.getElementById('search-input').addEventListener('input', function () {
  if (this.value === '') {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
      card.style.display = 'block';
    });
  }
});

const videoCard = document.getElementById("videoCard");
const video = document.getElementById("myVideo");

videoCard.addEventListener("mouseenter", () => {
    video.play();
});

videoCard.addEventListener("mouseleave", () => {
    video.pause();
});
 