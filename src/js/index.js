const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
                if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                }
        });
});

const hiddenElems = document.querySelectorAll(".hidden");

hiddenElems.forEach((elem) => observer.observe(elem));

const mainLogo = document.getElementById("logo-cont");
const darkModeElem = document.getElementById("dark-mode");

let darkModeLS = localStorage.getItem("darkMode");
let darkModeState = darkModeLS || "on";

if (darkModeState === "off") {
        lightModeOn();
}

mainLogo.addEventListener("click", () => {
        if (darkModeState === "on") {
                lightModeOn();
                darkModeState = "off";
                localStorage.setItem("darkMode", "off");
        } else {
                darkModeOn();
                darkModeState = "on";
                localStorage.setItem("darkMode", "on");
        }
});

function lightModeOn() {
        darkModeElem.innerHTML = `
        :root {
                --bg-color: #fff;
                --p-color: #000;
        }
        .reversed {
                filter: invert(1);
        }
        .bd-2 {
                border: 2px solid var(--bg-color);
        }
        ::-webkit-scrollbar-track {
                background: var(--bg-color);
        }
        ::-webkit-scrollbar-thumb {
                background: var(--p-color);
        }`;
}

function darkModeOn() {
        darkModeElem.innerHTML = `
        :root {
                --bg-color: #000;
                --p-color: #fff;
        }
        .reversed {
                filter: invert(0);
        }
        .bd-2 {
                border: 2px solid var(--p-color);
        }
        ::-webkit-scrollbar-track {
                background: var(--bg-color);
        }
        ::-webkit-scrollbar-thumb {
                background: var(--p-color);
        }`;
}

const listButton = document.getElementById("list");
const listCont = document.getElementById("list-cont");
let listState = false;

listButton.addEventListener("click", () => {
        if (listState === false) {
                listCont.style.height = "445px";
                listCont.style.opacity = "1";
                listState = true;
        } else {
                listCont.style.height = "0px";
                listCont.style.opacity = "0";
                listState = false;
        }
});

const itemsCont = document.getElementById("items-cont");
const aLinks = itemsCont.querySelectorAll("a");

const imgPreview = document.getElementById("img-preview");

aLinks.forEach((element) => {
        element.addEventListener("mouseover", () => {
                let imageSrc = document.getElementById(element.name).children[0].src;
                imgPreview.src = imageSrc;
        });
});
