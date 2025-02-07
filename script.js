/----- Menu Toggle Function -----/
function myMenufunction() {
    var menuBtn = document.getElementById("myNavmenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive"; 
    } else {
        menuBtn.className = "nav-menu";
    }
}

/----- Dark Mode Toggle -----/
const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

/----- Typing Effect -----/
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"], 
    loop: true,
    typeSpeed: 150,
    backSpeed: 80,
    backDelay: 2000,
});

/---- Scroll Animation ----/
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {}); 

const srleft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
});

srleft.reveal(".about-info", { delay: 100 });
srleft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "right", 
    distance: "80px",
    duration: 2000,
    reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

/----- Active Link on Scroll ----/
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; 
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href='#" + sectionId + "']")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href='#" + sectionId + "']")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);