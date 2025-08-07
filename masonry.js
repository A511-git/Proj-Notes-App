function masonry(){
    if (!cardContainer.className.includes('card-container-masonry')) {
        return;
    }
    
    const cards = Array.from(cardContainer.children);


    const gap = parseInt(getComputedStyle(cardContainer).getPropertyValue("gap"));
    const gridAutoRows = parseInt(
        getComputedStyle(cardContainer).getPropertyValue("grid-auto-rows"));

    const column = getComputedStyle(cardContainer).getPropertyValue("grid-template-columns").split(" ");
    const columnCount = column.length;
    let columnsHeight = new Array(columnCount).fill(0);


    cards.forEach(card => {
        const cardHeight = (getTrueHeight(card));
        const span = Math.ceil((cardHeight + gap) / (gridAutoRows + gap));

        card.style.gridRowEnd = `span ${span}`
    })

    function getTrueHeight(card) {
        const clone = card.cloneNode(true);
        clone.style.position = "absolute";
        clone.style.visibility = "hidden";
        clone.style.height = "auto";
        clone.style.zIndex = -1;

        const computedStyle = window.getComputedStyle(card);

        // Ensure width matches exactly (including box-sizing)
        clone.style.width = `${card.offsetWidth}px`;
        clone.style.boxSizing = computedStyle.boxSizing;
        clone.style.padding = computedStyle.padding;
        clone.style.border = computedStyle.border;
        clone.style.margin = "0"; // Remove margin to avoid interference

        // Copy text-related properties that affect wrapping
        clone.style.fontSize = computedStyle.fontSize;
        clone.style.fontFamily = computedStyle.fontFamily;
        clone.style.fontWeight = computedStyle.fontWeight;
        clone.style.lineHeight = computedStyle.lineHeight;
        clone.style.wordWrap = computedStyle.wordWrap;
        clone.style.wordBreak = computedStyle.wordBreak;
        clone.style.whiteSpace = computedStyle.whiteSpace;
        
        card.parentNode.prepend(clone);
        let height = parseInt(clone.getBoundingClientRect().height);
        card.parentNode.removeChild(clone);
        return (height);
    }

}