let closeBtn = document.getElementById("close-btn");
let navContainer = document.getElementById("nav");
let navBtn = document.getElementById("nav-btn");
let btnContainer = document.getElementById("nav-btn-container");

closeBtn.addEventListener(('click'), () => {
    navContainer.classList.remove("nav-visible");
    btnContainer.classList.remove("btn-invisible");
});

navBtn.addEventListener(('click'), () => {
    btnContainer.classList.add("btn-invisible");
    navContainer.classList.add("nav-visible")
})