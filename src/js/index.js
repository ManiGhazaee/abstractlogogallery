const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                }
        });
});

const hiddenElems = document.querySelectorAll(".hidden");

hiddenElems.forEach((elem) => observer.observe(elem));
