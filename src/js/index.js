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

console.log(darkModeElem.innerHTML);
