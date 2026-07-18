// =============================
// Back To Top Button
// =============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =============================
// Scroll Animation
// =============================

const elements = document.querySelectorAll(
    ".about-card, .skill, .project-card, .certificate-card, .contact-card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

elements.forEach((el) => {
    el.classList.add("fade-up");
    observer.observe(el);
});

// =============================
// Current Year in Footer
// =============================

const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML =
        `© ${new Date().getFullYear()} MADIPEDDY RAJESH KUMAR. All Rights Reserved.`;
}
const text = [
    "Aspiring Data Analyst",
    "AI & Machine Learning Enthusiast",
    "Python Developer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
    if (!typing) return;

    const current = text[textIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typing.textContent = current.substring(0, charIndex--);
        if (charIndex < 0) {
            deleting = false;
            textIndex = (textIndex + 1) % text.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();
