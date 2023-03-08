console.log("Hello world! Zacząłem używać Gita");

let primaryHeader = document.querySelector(".js-article__primaryHeader");
let articleHeaderHidingButton = document.querySelector(".js-articleHeaderHidingButton");
let primaryHeaderHidingText = document.querySelector(".js-article__primaryHeader--hidingText");

articleHeaderHidingButton.addEventListener("click", () => {
    primaryHeader.remove();
    primaryHeaderHidingText.innerText = "Usunięto nagłówek!";
});

let articleFooter = document.querySelector(".article__footer");
let changeFooterButton = document.querySelector(".changeFooterButton");

changeFooterButton.addEventListener("click", () => {
    articleFooter.innerText = "Wszyscy byśmy chcieli takich artykułów w Wyborczej";
});

let tableRow = document.querySelector(".table__row");
let changeHeaderColorButton = document.querySelector(".js-changeHeaderColorButton");

changeHeaderColorButton.addEventListener("click", () => { tableRow.classList.toggle("table__row--yellow") })

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");
let nextBodyBackgroundColor = document.querySelector(".js-body__backgroundColor--change");

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body__backgroundColor--grey");
    nextBodyBackgroundColor.innerText = body.classList.contains("body__backgroundColor--grey") ? "białe" : "szare";
});