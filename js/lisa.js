document.addEventListener("DOMContentLoaded", start);

function start() {
    displayContent();
}

function displayContent() {
    console.log(content);

    if (localStorage.getItem('language') === "da") {
        document.querySelector("header > a > div > p").textContent = content[0].forside.title;
        document.querySelector("main > section > article > p:nth-child(2)").textContent = content[0].lisa.type;
        document.querySelector("main > section > article > p:nth-child(3)").textContent = content[0].lisa.long_desc[0];
        document.querySelector("main > section > article > p:nth-child(4)").textContent = content[0].lisa.long_desc[1];
        document.querySelector("a.button").textContent = content[0].lisa.cta;

        document.querySelector("main > section > article > p:nth-child(6)").textContent = content[0].lisa.responsibility[0];
        document.querySelector("ul > li").textContent = content[0].lisa.responsibility[1];
        document.querySelector("ul > li + li").textContent = content[0].lisa.responsibility[2];

    } else if (localStorage.getItem('language') === "en") {
        document.querySelector("header > a > div > p").textContent = content[0].forside.title_en;
        document.querySelector("main > section > article > p:nth-child(2)").textContent = content[0].lisa.type_en;
        document.querySelector("main > section > article > p:nth-child(3)").textContent = content[0].lisa.long_desc_en[0];
        document.querySelector("main > section > article > p:nth-child(4)").textContent = content[0].lisa.long_desc_en[1];
        document.querySelector("a.button").textContent = content[0].lisa.cta_en;

        document.querySelector("main > section > article > p:nth-child(6)").textContent = content[0].lisa.responsibility_en[0];
        document.querySelector("ul > li").textContent = content[0].lisa.responsibility_en[1];
        document.querySelector("ul > li + li").textContent = content[0].lisa.responsibility_en[2];
    }
}