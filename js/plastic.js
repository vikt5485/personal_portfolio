document.addEventListener("DOMContentLoaded", start);

function start() {
    displayContent();
}

function displayContent() {
    console.log(content);

    if (localStorage.getItem('language') === "da") {
        document.querySelector("main > section > article > p:nth-child(2)").textContent = content[0].plastic.type;
        document.querySelector("main > section > article > p:nth-child(3)").textContent = content[0].plastic.long_desc[0];
        document.querySelector("main > section > article > p:nth-child(4)").textContent = content[0].plastic.long_desc[1];
        document.querySelector("a.button").textContent = content[0].plastic.cta;

    } else if (localStorage.getItem('language') === "en") {
        document.querySelector("main > section > article > p:nth-child(2)").textContent = content[0].plastic.type_en;
        document.querySelector("main > section > article > p:nth-child(3)").textContent = content[0].plastic.long_desc_en[0];
        document.querySelector("main > section > article > p:nth-child(4)").textContent = content[0].plastic.long_desc_en[1];
        document.querySelector("a.button").textContent = content[0].plastic.cta_en;
    }
}