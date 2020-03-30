document.addEventListener("DOMContentLoaded", start);

function start() {
    displayContent();
}

function displayContent() {
    console.log(content);

    if (language === "da") {


    } else if (language === "en") {
        document.querySelector("#lisafosmark > main > section > article > p:nth-child(2)").textContent = content[0].lisa.long_desc_1_en;
        document.querySelector("#lisafosmark > main > section > article > p:nth-child(4)").textContent = content[0].lisa.long_desc_2_en;
        document.querySelector("#kogakbh > main > section > article > p:nth-child(2)").textContent = content[0].koga.long_desc_1_en;
        document.querySelector("#kogakbh > main > section > article > p:nth-child(4)").textContent = content[0].koga.long_desc_2_en;
        document.querySelector("#plastikhelvede > main > section > article > p:nth-child(2)").textContent = content[0].plastic.long_desc_1_en;
        document.querySelector("#plastikhelvede > main > section > article > p:nth-child(4)").textContent = content[0].plastic.long_desc_2_en;
        document.querySelector("#kbhgokart > main > section > article > p:nth-child(2)").textContent = content[0].gokart.long_desc_1_en;
        document.querySelector("#kbhgokart > main > section > article > p:nth-child(4)").textContent = content[0].gokart.long_desc_2_en;
    }
}