const cardTemplate = document.querySelector("#card-template");

const firstNote = document.querySelector(".first-note-container");

const cardContainer = document.querySelector(".card-container");

const addButton = document.querySelectorAll(".add-note");

const addContentContainer = document.querySelector(".add-content-container");

const fullPage = document.querySelector(".full-page");

function checkCardContainer() {
    if (cardContainer.children.length <= 0) {
        firstNote.classList.add("first-note-active")
    }
    else {
        firstNote.classList.remove("first-note-active");
    }
}


function addContentPopup_Blur() {
    addContentContainer.classList.add("add-content-active");
    fullPage.classList.add("blur-active");
}

function cancel() {
    addContentContainer.classList.remove("add-content-active");
    fullPage.classList.remove("blur-active");
}

function appendNote() {
    const newCard = cardTemplate.content.cloneNode(true);


}

function save() {
    const newCard = cardTemplate.content.cloneNode(true);
    const form = document.querySelector(".form");
    const formData = new FormData(form);

    const title = formData.get("title");
    const content = formData.get("content");

    newCard.querySelector(".card-subject").textContent = title;
    newCard.querySelector(".card-detail").textContent = content;

    cardContainer.appendChild(newCard);
}


// add note button EventListener
addButton.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        addContentPopup_Blur();
        event.preventDefault();
    })
})

// add note POPUP EventListener
// used event delegation here
addContentContainer.addEventListener("click", (event) => {
    const target = event.target.classList;

    if (target.contains("cancel")) {
        event.preventDefault();
        cancel();
    }

    if (target.contains("save")) {
        event.preventDefault();
        save();
        cancel();
        checkCardContainer();
    }
})

checkCardContainer()