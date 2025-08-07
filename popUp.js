



function checkFirstNote() {
    if (cardsArray.length==0) {
        pageContent.querySelector(".first-note-container").classList.add("first-note-active");
    }
    else{
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
function popupSave(cardIndex) {
    const cardTemplate = document.querySelector("#card-template");
    const form = document.querySelector("form");
    const newCard = cardTemplate.content.cloneNode(true);
    const formData = new FormData(form);
    const title = formData.get("title");
    const content = formData.get("content");


    // if card is being edited
    if (ifCardEdit) {
        card = cardContainer.querySelector(`.card[data-index="${cardIndex}"]`);
        
        card.querySelector(".card-subject").innerText = title;
        card.querySelector(".card-detail").innerText = content;
        const index = parseInt(card.getAttribute("data-index"));
        cardsArray[index] = { title: title, content: content }; 
        localStorage.setItem("localCards", JSON.stringify(cardsArray));
        
    }
    // if new card added
    else {
        newCard.querySelector(".card-subject").innerText = title;
        newCard.querySelector(".card-detail").innerText = content;
        let length = cardsArray.length;
        cardArrayPush(title, content);
        cardContainer.append(newCard);
        syncCardsToDOM();
    }

    popupContainer.classList.remove("add-content-active");
    fullPage.classList.remove("blur-active");

    checkFirstNote();
    ifCardEdit=0; // very important ;)
    document.querySelector(".form").reset();

}

function cardDelete() {
    deleteContentContainer.classList.add("delete-content-active");
    fullPage.classList.add("blur-active");
}

function deleteNo() {
    deleteContentContainer.classList.remove("delete-content-active");
    fullPage.classList.remove("blur-active");
}
function deleteYes(cardIndex) {

    card = cardContainer.querySelector(`.card[data-index="${cardIndex}"]`);

    if (card) card.remove();

    cardsArray.splice(cardIndex, 1);

    let cardsArrayLength = cardsArray.length;
    cardsArray[cardsArrayLength]


    deleteContentContainer.classList.remove("delete-content-active");
    fullPage.classList.remove("blur-active");
    checkFirstNote();
    syncCardsToDOM();
    localStorage.setItem("localCards", JSON.stringify(cardsArray));
}