// ========================================
// SHUBHAM PAL PORTFOLIO - JAVASCRIPT
// ========================================


// ========================================
// PAGE LOAD
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("Shubham Pal Portfolio Loaded Successfully!");

});


// ========================================
// SMOOTH SCROLLING
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        // Ignore empty links
        if (!targetId || targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ========================================
// NAVBAR SHADOW ON SCROLL
// ========================================

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (!header) {
        return;
    }

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 4px 20px rgba(0, 0, 0, 0.12)";

    } else {

        header.style.boxShadow =
            "0 2px 15px rgba(0, 0, 0, 0.08)";

    }

});


// ========================================
// ACTIVE NAVIGATION LINK
// ========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.style.color = "#334155";

        if (link.getAttribute("href") === "#" + currentSection) {
            link.style.color = "#2563eb";
        }

    });

});


// ========================================
// FOOTER YEAR
// ========================================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Shubham Pal. All Rights Reserved.`;

}