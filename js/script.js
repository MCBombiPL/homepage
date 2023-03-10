{
    const welcome = () => {
        console.log("Hello world! Zacząłem używać Gita");
    }
    welcome();
}

{
    const removePrimaryHeader = () => {

        const primaryHeader = document.querySelector(".js-article__primaryHeader");
        const primaryHeaderHidingText = document.querySelector(".js-article__primaryHeader--hidingText");

        primaryHeader.remove();
        primaryHeaderHidingText.innerText = "Usunięto nagłówek!";
    }

    const hideArticleHeaderClick = () => {
        const articleHeaderHidingButton = document.querySelector(".js-articleHeaderHidingButton");

        articleHeaderHidingButton.addEventListener("click", removePrimaryHeader);
    }
    hideArticleHeaderClick();
}

{
    const changeFooterText = () => {

        const articleFooter = document.querySelector(".article__footer");

        articleFooter.innerText = "Wszyscy byśmy chcieli takich artykułów w Wyborczej";
    }

    const changeFooterClick = () => {
        const changeFooterClick = document.querySelector(".changeFooterButton");

        changeFooterClick.addEventListener("click", changeFooterText);
    }
    changeFooterClick();
}

{
    const toggleTableHeader = () => {

        const tableRow = document.querySelector(".table__row");

        tableRow.classList.toggle("table__row--yellow")
    }

    const toggleTableHeaderClick = () => {
        const changeHeaderColorButton = document.querySelector(".js-changeHeaderColorButton");

        changeHeaderColorButton.addEventListener("click", toggleTableHeader);
    }

    toggleTableHeaderClick();
}

{
    const toggleBackground = () => {

        const body = document.querySelector(".body");
        const nextBodyBackgroundColor = document.querySelector(".js-body__backgroundColor--change");

        body.classList.toggle("body__backgroundColor--grey");
        nextBodyBackgroundColor.innerText = body.classList.contains("body__backgroundColor--grey") ? "białe" : "szare";
    }

    const toggleBackgroundClick = () => {

        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");

        changeBackgroundButton.addEventListener("click", toggleBackground);
    }
    toggleBackgroundClick();
}