const popupContainer= document.querySelector(".popup-container");

function cardEdit(card){
    popupContainer.classList.add("add-content-active");
    fullPage.classList.add("blur-active");
    popupContainer.querySelector(".heading").innerText="Edit Card";
}
function cardDelete(card){
    card.remove();
}