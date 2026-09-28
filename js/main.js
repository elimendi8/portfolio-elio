const sections = document.querySelectorAll(
    "#inicio, #proyectos, #servicios, #sobre-mi, #contacto"
);

const navLinks = document.querySelectorAll(".nav-link");

function updateActiveMenu() {

    let currentSection = "inicio";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 180) {
            currentSection = section.id;
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveMenu);

updateActiveMenu();