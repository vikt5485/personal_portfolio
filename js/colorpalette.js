document.addEventListener("DOMContentLoaded", start);

function start() {
    displayContent();
}

function displayContent() {
    console.log(content);

    if (localStorage.getItem('language') === "da") {
        document.querySelector("main > section > article > p:nth-child(2)").textContent = content[0].colorpalette.type;
        document.querySelector("main > section > article > p:nth-child(3)").textContent = content[0].colorpalette.long_desc[0];
        document.querySelector("main > section > article > p:nth-child(4)").textContent = content[0].colorpalette.long_desc[1];
        document.querySelector("a.button").textContent = content[0].colorpalette.cta;
        document.querySelector("#colorpalette > main > section > article > p:nth-child(11)").textContent = content[0].colorpalette.disclaimer;

    } else if (localStorage.getItem('language') === "en") {
        document.querySelector("main > section > article > p:nth-child(2)").textContent = content[0].colorpalette.type_en;
        document.querySelector("main > section > article > p:nth-child(3)").textContent = content[0].colorpalette.long_desc_en[0];
        document.querySelector("main > section > article > p:nth-child(4)").textContent = content[0].colorpalette.long_desc_en[1];
        document.querySelector("a.button").textContent = content[0].colorpalette.cta_en;
        document.querySelector("#colorpalette > main > section > article > p:nth-child(11)").textContent = content[0].colorpalette.disclaimer_en;
    }
}