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
    document.body.className = localStorage.getItem("theme");
}

function setLayout() {
    cardContainer.className=`card-container-${localStorage.getItem("layout")}`;
    if(localStorage.getItem("layout")=="masonry") masonry();
}