function cardEdit(card) {
    popupContainer.classList.add("add-content-active");
    fullPage.classList.add("blur-active");
    popupContainer.querySelector(".heading").innerText = "Edit Card";

    console.log("card editing");

    console.log("check : " + document.querySelector(".heading").innerText);



    const cardTemplate = document.querySelector("#card-template");
    const form = document.querySelector("form");
    const newCard = cardTemplate.content.cloneNode(true);
    const formData = new FormData(form);
    const title = card.querySelector(".card-subject").innerText;
    const content = card.querySelector(".card-detail").innerText;

    // Set values into the form fields
    form.querySelector(".form-title").value = title;
    form.querySelector(".form-content").value = content;
}
function cardDelete(card) {
    deleteContentContainer.classList.add("delete-content-active");
    fullPage.classList.add("blur-active");
}
function cardArrayPush(titlevalue, contentvalue) {
    cardsArray.push({ title: titlevalue, content: contentvalue });
    localStorage.setItem("localCards", JSON.stringify(cardsArray));
}

function pushInitialCardsToDOM() {
    cardContainer.innerHTML = ""; // Clear existing cards
    cardsArray.forEach(card => {
        const newCard = cardTemplate.content.cloneNode(true);

        newCard.querySelector(".card-subject").innerText = card.title;
        newCard.querySelector(".card-detail").innerText = card.content;
        cardContainer.append(newCard);

    })
    if (localStorage.getItem("layout") == "masonry") masonry();

}