const sideMenu = document.querySelector("#sidemenu");
const navbar = document.querySelector("nav");
const navlinks = document.querySelector("nav ul");
const html = document.documentElement;
const btn = document.getElementById("sd");





function openmenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}
function closemenu() {
  sideMenu.style.transform = "translateX(16rem)";
}
window.addEventListener("scroll", () => {
  if (scrollY >50) {
    navbar.classList.add(
      "bg-white",
      // "bg-opacity",
      // "background-blue-lg",
      // "shadow-sm",
      "dark:bg-darkThem",
      "dark:shadow-white/20"
    );
    navlinks.classList.remove(
      "bg-white",
      // "bg-white",
      // "shadow-sm", "bg-opacity-50",
      "dark:border",
      "dark:border-white/50",
      "dark:bg-transparent"
    );
  } else {
    navbar.classList.remove(
      "bg-white",
      "bg-opacity",
      "background-blue-lg",
      "shadow-sm"
    );
    navlinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
  }
});
// -------light and dark mode -----

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
)
 {
  document.documentElement.classList.add("dark");
} 
else{
  document.documentElement.classList.remove("dark");
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}

