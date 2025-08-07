// global variables/constants
const fullPage = document.querySelector(".full-page");
const heading = document.querySelector(".heading").innerText;
const cardTemplate = document.querySelector("#card-template");
const firstNote = document.querySelector(".first-note-container");
const pageContent = document.querySelector(".page-content");
const cardContainer = document.querySelector("#card-container");
const cardModify = document.querySelector(".card-modify");
let cardToAction = null;
const nav = document.querySelector(".nav");
const nav2 = document.querySelector(".nav2");
const setting = nav.querySelector(".setting");
const theme = nav.querySelector(".theme");
const layout = nav.querySelector(".layout");
const popupContainer = document.querySelector(".popup-container");
const deleteContentContainer = document.querySelector(".delete-content-container");
// ||=or means either this returned value if null then make it array  
let cardsArray = JSON.parse(localStorage.getItem("localCards")) || [];

let ifCardEdit = 0;

document.addEventListener("DOMContentLoaded", () => {


    setLayout();
    setTheme();
    checkFirstNote();
    syncCardsToDOM();


    //click event listner 
    document.addEventListener("click", (e) => {
        const action = e.target.closest("[data-action]")?.dataset.action;
        const card = e.target.closest(".card");
        if (card) {
            cardToAction = card.getAttribute("data-index");
        }

        if (!action) return;
        e.preventDefault();

        switch (action) {


            //nav
            case "open-settings": toggleSettings(); break;
            case "toggle-theme": toggleThemeMenu(); break;
            case "toggle-layout": toggleLayoutMenu(); break;
            case "theme-light": localStorage.setItem("theme", "light"); setTheme(); break;
            case "theme-dark": localStorage.setItem("theme", "dark"); setTheme(); break;
            case "layout-grid": localStorage.setItem("layout", "grid"); setLayout(); break;
            case "layout-masonry": localStorage.setItem("layout", "masonry"); setLayout(); break;

            //add note
            case "add-note": addNote(); break;

            //body

            // add note popup
            case "popup-cancel": popupCancel(); break;
            case "popup-save": popupSave(cardToAction); break;

            // card content
            case "card-edit": cardEdit(e.target.closest(".card")); break;
            case "card-delete": cardDelete(); break;

            //delete popup
            case "delete-no": deleteNo(); break;

            case "delete-yes": deleteYes(cardToAction); break;

        }
    });
    //click event ends


    //scroll event listner
    let lastScrollY = window.scrollY;
    let lastNavHeight = nav.clientHeight;

    window.addEventListener("scroll", (e) => {
        const currentScrollY = window.scrollY;
        const currentNavHeight = nav.clientHeight;

        // If nav height changed (e.g. nav2 opened), don't react
        if (currentNavHeight !== lastNavHeight) {
            lastScrollY = currentScrollY;
            lastNavHeight = currentNavHeight;
            return;
        }

        if (Math.abs(currentScrollY - lastScrollY) < 15 || currentScrollY < nav.clientHeight) {
            // Do nothing for small scrolls or near top
            lastScrollY = currentScrollY;
            return;
        }

        if (currentScrollY > lastScrollY) {
            // Scrolling down
            nav.classList.remove("scroll-up", "scroll-up-active");
        } else {
            // Scrolling up
            nav.classList.add("scroll-up");
            setTimeout(() => {
                nav.classList.add("scroll-up-active");
            }, 100)
        }

        lastScrollY = currentScrollY;
    });
    //scroll event listner ends




});