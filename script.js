
document.addEventListener("DOMContentLoaded", () => {
    const cardTemplate = document.querySelector("#card-template");
    const firstNote = document.querySelector(".first-note-container");
    const nav = document.querySelector(".nav");
    const pageContent = document.querySelector(".page-content");
    const cardContainer = document.querySelector("#card-container");
    const cardModify = document.querySelector(".card-modify");

    checkFirstNote();


    document.addEventListener("click", (e) => {
        const action = e.target.closest("[data-action]")?.dataset.action;
        const card = e.target.closest(".card");

        
        
        if (!action) return;

        switch (action) {

            //nav
            case "add-note": addNote(); break;
            case "open-settings": toggleSettings(); break;
            case "toggle-theme": toggleThemeMenu(); break;
            case "toggle-layout": toggleLayoutMenu(); break;
            case "theme-light": setTheme("light"); break;
            case "theme-dark": setTheme("dark"); break;
            case "layout-grid": setLayout("grid"); break;
            case "layout-masonry": setLayout("masonry"); break;

            //body

            // add note popup
            case "add-note": addNote(); break;
            case "popup-cancel": popupCancel(); break;
            case "popup-save": popupSave(); break;

            // card content
            case "card-edit": cardEdit(e.target.closest(".card")); break;
            case "card-delete": cardDelete(e.target.closest(".card")); break;

            //delete popup
            case "delete-no": deleteNo(); break;
            case "delete-yes": deleteYes(); break;

                e.preventDefault();
        }
    });

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

    cardContainer.addEventListener('pointerenter', (e) => {
        const card = e.target.closest(".card");
        if (!card) return;

        const modifyButtons = card.querySelector(".card-modify");
        if (modifyButtons) {
            modifyButtons.classList.add("card-modify-active");
        }
    }, { capture: true });

});