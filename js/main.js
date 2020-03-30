"use strict";

document.addEventListener("DOMContentLoaded", start);

let language = localStorage.getItem('language');
let content = [];

function start() {
    fetchJOSN();
    checkLanguage();
    // slider();
    document.querySelector("#scroll_ani").addEventListener("animationend", () => {
        document.querySelector("#scroller").style.opacity = "0";
    })
}

async function fetchJOSN() {
    console.log("fetchJSON");

    const jsonData = await fetch("../content.json");
    const svgData = await fetch("../assets/language_switch.svg");

    content = await jsonData.json();
    const mySVG = await svgData.text();

    document.querySelector("#switch").innerHTML = mySVG;

    if (window.innerWidth < 500) {
        document.querySelector("#switch > svg").setAttribute("viewBox", "0 0 30 130");
    }
    document.querySelector("#switcher").addEventListener("click", toggleLanguage);

    displayContent();
}

function displayContent() {
    console.log(content);
    console.log(localStorage.getItem('language'));

    if (localStorage.getItem('language') === 'da') {
        document.querySelector("nav > a:nth-child(1)").textContent = content[0].forside.links[0];
        document.querySelector("nav > a:nth-child(2)").textContent = content[0].forside.links[1];
        document.querySelector("nav > a:nth-child(3)").textContent = content[0].forside.links[2];

        document.querySelector("#projects > h1").textContent = content[0].forside.project_title;
        document.querySelector(".project_1 > div > div.overlay_content > p").textContent = content[0].lisa.short_desc;
        document.querySelector(".project_2 > div > div.overlay_content > p").textContent = content[0].koga.short_desc;
        document.querySelector(".project_3 > div > div.overlay_content > p").textContent = content[0].plastic.short_desc;
        document.querySelector(".project_4 > div > div.overlay_content > p").textContent = content[0].colorpalette.short_desc;

        document.querySelector("#about_wrap > div > h1").textContent = content[0].forside.about_title;
        document.querySelector("#about_wrap > div > p:nth-child(2)").textContent = content[0].forside.about[0];
        document.querySelector("#about_wrap > div > p:nth-child(3)").textContent = content[0].forside.about[1];
        document.querySelector("#about_wrap > div > p:nth-child(4)").textContent = content[0].forside.about[2];

        document.querySelector("#contact > h1").textContent = content[0].forside.contact[0];
        document.querySelector("#contact > span:nth-child(4)").innerHTML = content[0].forside.contact[1];

    } else if (localStorage.getItem('language') === 'en') {
        document.querySelector("nav > a:nth-child(1)").textContent = content[0].forside.links_en[0];
        document.querySelector("nav > a:nth-child(2)").textContent = content[0].forside.links_en[1];
        document.querySelector("nav > a:nth-child(3)").textContent = content[0].forside.links_en[2];

        document.querySelector("#projects > h1").textContent = content[0].forside.project_title_en;
        document.querySelector(".project_1 > div > div.overlay_content > p").textContent = content[0].lisa.short_desc_en;
        document.querySelector(".project_2 > div > div.overlay_content > p").textContent = content[0].koga.short_desc_en;
        document.querySelector(".project_3 > div > div.overlay_content > p").textContent = content[0].plastic.short_desc_en;
        document.querySelector(".project_4 > div > div.overlay_content > p").textContent = content[0].colorpalette.short_desc_en;

        document.querySelector("#about_wrap > div > h1").textContent = content[0].forside.about_title_en;
        document.querySelector("#about_wrap > div > p:nth-child(2)").textContent = content[0].forside.about_en[0];
        document.querySelector("#about_wrap > div > p:nth-child(3)").textContent = content[0].forside.about_en[1];
        document.querySelector("#about_wrap > div > p:nth-child(4)").textContent = content[0].forside.about_en[2];

        document.querySelector("#contact > h1").textContent = content[0].forside.contact_en[0];
        document.querySelector("#contact > span:nth-child(4)").innerHTML = content[0].forside.contact_en[1];
    }
}

function toggleLanguage() {
    if (localStorage.getItem('language') === 'da') {
        localStorage.setItem('language', 'en');

        document.querySelector("#switch").className = "en";
    } else if (localStorage.getItem('language') === 'en') {
        localStorage.setItem('language', 'da');

        document.querySelector("#switch").className = "da";
    }

    displayContent();
}

function checkLanguage() {
    if (localStorage.getItem('language') === 'da') {
        document.querySelector("#switch").className = "da";
    } else if (localStorage.getItem('language') === "en") {
        document.querySelector("#switch").className = "en";
    } else {
        localStorage.setItem('language', 'da');
        document.querySelector("#switch").className = "da";
    }
}

// function slider() {
//     const slider = document.querySelector('#projects');
//     let isDown = false;
//     let startX;
//     let scrollLeft;

//     slider.addEventListener('mousedown', (e) => {
//         isDown = true;
//         startX = e.pageX - slider.offsetLeft;
//         scrollLeft = slider.scrollLeft;
//     });
//     slider.addEventListener('mouseleave', () => {
//         isDown = false;
//     });
//     slider.addEventListener('mouseup', () => {
//         isDown = false;
//     });
//     slider.addEventListener('mousemove', (e) => {
//         if (!isDown) return;
//         e.preventDefault();
//         const x = e.pageX - slider.offsetLeft;
//         const walk = (x - startX) * 3; //scroll-fast
//         slider.scrollLeft = scrollLeft - walk;
//         console.log(walk);
//     });
// }