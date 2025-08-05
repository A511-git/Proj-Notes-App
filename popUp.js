



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
function popupSave(card) {
    const cardTemplate = document.querySelector("#card-template");
    const form = document.querySelector("form");
    const newCard = cardTemplate.content.cloneNode(true);
    const formData = new FormData(form);
    const title = formData.get("title");
    const content = formData.get("content");
    

    // if card is being edited
    if(heading=="Edit Card"){
        card.querySelector(".card-heading").innerText=title;
        card.querySelector(".card-detail").innerText=content;
    }
    // if new card added
    else{
    newCard.querySelector(".card-subject").innerText = title;
    newCard.querySelector(".card-detail").innerText = content;
    cardArrayPush(title,content);
    cardContainer.append(newCard);
    }

    popupContainer.classList.remove("add-content-active");
    fullPage.classList.remove("blur-active");

    checkFirstNote();
}
function deleteNo() {
    deleteContentContainer.classList.remove("delete-content-active");
    fullPage.classList.remove("blur-active");
}
function deleteYes(card) {
    card.remove();  
    deleteContentContainer.classList.remove("delete-content-active");
    fullPage.classList.remove("blur-active");
    checkFirstNote();
    masonry();
}