let closeBtn = document.getElementById("close-btn");
let navContainer = document.getElementById("nav");
let navBtn = document.getElementById("nav-btn");

closeBtn.addEventListener(('click'), () => {
    navContainer.style.display = "none";
    navBtn.style.display = "block";
});

navBtn.addEventListener(('click'), () => {
    navBtn.style.display = "none";
    navContainer.style.display = "block";
})