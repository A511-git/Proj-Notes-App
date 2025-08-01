function masonry(){
    const masonryContainer = document.querySelector("#card-container");
    const cards = Array.from(masonryContainer.children);

    const gap = parseInt(getComputedStyle(masonryContainer).getPropertyValue("gap"));
    const gridAutoRows = parseInt(
        getComputedStyle(masonryContainer).getPropertyValue("grid-auto-rows"));
    console.log(gridAutoRows);
    console.log("");


    const column = getComputedStyle(masonryContainer).getPropertyValue("grid-template-columns").split(" ");
    const columnCount = column.length;
    let columnsHeight = new Array(columnCount).fill(0);

    console.log("");

    cards.forEach(card => {
        console.log(card.clientHeight);
    });

    console.log("");


    cards.forEach(card => {
        const cardHeight = (getTrueHeight(card));
        const span = Math.ceil((cardHeight + gap) / (gridAutoRows + gap));
        console.log(cardHeight + " / " + span);

        card.style.gridRowEnd = `span ${span}`
    })

    function getTrueHeight(card) {
        const clone = card.cloneNode(true);
        clone.style.position = "absolute";
        clone.style.visibility = "hidden";
        clone.style.width = `${card.offsetWidth}px`;
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