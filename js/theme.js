var toggleSwitch = document.getElementById("checkbox");
const currentTheme = localStorage.getItem("theme");

var iconSun = document.getElementById("icon-sun");
var iconMoon = document.getElementById("icon-moon");

function checkBtn() {
  iconSun.classList.toggle("display-none");
  iconMoon.classList.toggle("display-block");
  console.log(toggleSwitch.checked);
  switchTheme(toggleSwitch);
}

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

//  đổi icon btn menu navbar
function checkBtnMenu() {
  document.getElementById("icon-menu").classList.toggle("display-none");
  document.getElementById("icon-close").classList.toggle("display-block");
}

document.getElementById("btn-menu").addEventListener("click", function () {
  checkBtnMenu();
});

// duy
// const selectDefault = (document.getElementById("selcet-pro1").checked = true);
function uncheck23() {
  document.getElementById("select-pro1").checked = true;
  document.getElementById("select-pro2").checked = false;
  document.getElementById("select-pro3").checked = false;
  document.getElementById("layout-1").style.display = "flex";
  document.getElementById("layout-2").style.display = "none";
  document.getElementById("layout-3").style.display = "none";
}
function uncheck13() {
  document.getElementById("select-pro2").checked = true;
  document.getElementById("select-pro1").checked = false;
  document.getElementById("select-pro3").checked = false;
  document.getElementById("layout-1").style.display = "none";
  document.getElementById("layout-2").style.display = "flex";
  document.getElementById("layout-3").style.display = "none";
}
function uncheck12() {
  document.getElementById("select-pro3").checked = true;
  document.getElementById("select-pro1").checked = false;
  document.getElementById("select-pro2").checked = false;
  document.getElementById("layout-1").style.display = "none";
  document.getElementById("layout-2").style.display = "none";
  document.getElementById("layout-3").style.display = "flex";
}
