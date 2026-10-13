
let counting = 0;

const button = document.getElementById("save");
const label = document.getElementById("cls");

button.addEventListener("click", function () {
    counting++;
    label.textContent = `Resume: ${counting}`;
});
let profileHide = false;

const profileImg = document.getElementById("img");
const hideButton = document.getElementById("hide");

hideButton.addEventListener("click", function () {
    profileHide = !profileHide;

    profileImg.style.display = profileHide ? "none" : "block";

    hideButton.textContent = profileHide ? "Show" : "Hide";
});
let darkmode = false;

const toggle = document.getElementById("dark");
const bdy = document.getElementById("bdy");

toggle.addEventListener("click", function () {
    darkmode = !darkmode;

    bdy.classList.toggle("dark-mode", darkmode);

    toggle.textContent = darkmode ? "Light" : "Dark";
});
