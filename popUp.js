const fullPage = document.querySelector(".full-page");
const cardContainer = document.querySelector("#card-container");
const pageContent = document.querySelector(".page-content");

function checkFirstNote() {
    if (cardContainer.children.length) {
        console.log("check first note");
        
        pageContent.querySelector(".first-note-container").classList.remove("first-note-active");
    }
}

function addNote() {
    popupContainer.classList.add("add-content-active");
    fullPage.classList.add("blur-active");
    popupContainer.querySelector(".heading").innerText = "Add New Note";
}
function popupCancel() {
    popupContainer.classList.remove("add-content-active");
    fullPage.classList.remove("blur-active");
}
function popupSave() {
    const cardTemplate = document.querySelector("#card-template");
    const form = document.querySelector("form");
    const newCard = cardTemplate.content.cloneNode(true);
    const formData = new FormData(form);
    const title = formData.get("title");
    const content = formData.get("content");

    newCard.querySelector(".card-subject").innerText = title;
    newCard.querySelector(".card-detail").innerText = content;
    cardContainer.prepend(newCard);
    console.log("here");

    popupContainer.classList.remove("add-content-active");
    fullPage.classList.remove("blur-active");

    checkFirstNote();
}
function deleteNo() { }
function deleteYes() { }