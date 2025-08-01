
const nav = document.querySelector(".nav");
const nav2 = document.querySelector(".nav2");
const setting = nav.querySelector(".setting");
const theme = nav.querySelector(".theme");
const layout = nav.querySelector(".layout");

function toggleSettings() {
    if(nav2.classList.contains("nav2-active")){
        nav2.classList.remove("nav2-active");
    }
    else{
        nav2.classList.add("nav2-active");
    }
}

function toggleThemeMenu() {
    layout.classList.remove("menu-body-active")
    theme.classList.add("menu-body-active")
}
function toggleLayoutMenu() {
    theme.classList.remove("menu-body-active")
    layout.classList.add("menu-body-active")
}

function setTheme(value) {
    document.body.className = value;
}

function setLayout(value) {
    const layout=document.querySelector("#card-container");
    layout.className=`card-container-${value}`;
    masonry();
}