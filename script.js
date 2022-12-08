const form = document.querySelector("form");
const formMain = document.querySelector("form .main");
const playBtn = document.querySelector("#playBtn");
playBtn.addEventListener('click', activateOptions);
function activateOptions() {
    form.classList.add("active");
    formMain.classList.add("active");
}
form.addEventListener('click', exitOptions);
function exitOptions() {
    form.classList.remove("active");
    formMain.classList.remove("active");
}
formMain.addEventListener('click', (event)=>{event.stopPropagation();})