
document.addEventListener("DOMContentLoaded", () => {
    const cardTemplate = document.querySelector("#card-template");
    const firstNote = document.querySelector(".first-note-container");
    const nav = document.querySelector(".nav");
    const pageContent = document.querySelector(".page-content");

    // 🔹 NAVIGATION LISTENER
    nav.addEventListener("click", (e) => {
        e.preventDefault();
        const action = e.target.closest("[data-action]")?.dataset.action;
        if (!action) return;

        switch (action) {
            case "add-note": addnote(); break;
            case "open-settings": toggleSettings(); break;
            case "toggle-theme": toggleThemeMenu(); break;
            case "toggle-layout": toggleLayoutMenu(); break;
            case "theme-light": setTheme("light"); break;
            case "theme-dark": setTheme("dark"); break;
            case "layout-grid": setLayout("grid"); break;
            case "layout-masonry": setLayout("masonry"); break;
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


    // 🔹 MAIN BODY LISTENER
    pageContent.addEventListener("click", (e) => {
        const action = e.target.closest("[data-action]")?.dataset.action;
        if (!action) return;

        switch (action) {
            case "add-note": addNote(); break;
            case "delete-note": deleteNote(e.target); break;
            // other body actions...
        }
    });
});