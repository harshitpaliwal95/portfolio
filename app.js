function enableDark() {
  document.body.classList.add("dark_mode");
  buttOn.setAttribute("src", "./images/sun.png");
  localStorage.setItem("darkmode", "enabled-state");
}

function disableDark() {
  document.body.classList.remove("dark_mode");
  buttOn.setAttribute("src", "./images/moon.png");
  localStorage.setItem("darkmode", "disabled-state");
}

let buttOn = document.querySelector("#switcher");
buttOn.addEventListener("click", function () {
  locale = localStorage.getItem("darkmode");
  if (locale != "enabled-state") {
    enableDark();
  } else {
    disableDark();
  }
});

//getting LC data  keeping it enabled if present on page reload
let locale = localStorage.getItem("darkmode");
if (locale === "enabled-state") {
  enableDark();
}
