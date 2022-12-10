const options = document.querySelector(".options");
const optionsBtns = document.querySelector(".optionsBtns");
const playBtn = document.querySelector("#playBtn");
playBtn.addEventListener('click', activateOptions);
function activateOptions() {
    options.classList.add("active");
    optionsBtns.classList.add("active");
}
options.addEventListener('click', exitOptions);
function exitOptions() {
    options.classList.remove("active");
    optionsBtns.classList.remove("active");
}
optionsBtns.addEventListener('click', (event)=>{event.stopPropagation();})