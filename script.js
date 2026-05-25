// ============================================
//  script.js — Crochet Café Website
//  student: Maungo Mothibamele (cse25-265)
//  Web & Multimedia Development — 2026
// ============================================


// ---- BACK TO TOP BUTTON ----
// this shows a button at the bottom right when you scroll down

const backBtn = document.getElementById("back-to-top");

// check scroll position every time user scrolls
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backBtn.style.display = "block";  // show button
  } else {
    backBtn.style.display = "none";   // hide button
  }
});

// when button is clicked, go smoothly back to the top
backBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ---- FADE IN ON SCROLL ----
// elements with class "fade-in" will appear when you scroll to them

const fadeElements = document.querySelectorAll(".fade-in");

function checkVisibility() {
  fadeElements.forEach(function (el) {
    // getBoundingClientRect tells us where the element is on screen
    const position = el.getBoundingClientRect();

    // if the top of the element is within the visible window area
    if (position.top < window.innerHeight - 60) {
      el.classList.add("visible");  // add class that shows it
    }
  });
}

// check when the page first loads
checkVisibility();

// also check every time user scrolls
window.addEventListener("scroll", checkVisibility);


// ---- HIGHLIGHT ACTIVE NAV LINK ----
// this adds a highlight to whichever page we are currently on

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


// ---- CONTACT FORM ----
// this runs only on the contact page because the form only exists there

const contactForm = document.getElementById("contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    // stop the page from refreshing when form is submitted
    e.preventDefault();

    // get what the user typed in each field
    const nameInput    = document.getElementById("name").value.trim();
    const emailInput   = document.getElementById("email").value.trim();
    const messageInput = document.getElementById("message").value.trim();

    // check if all the fields have something in them
    if (nameInput === "" || emailInput === "" || messageInput === "") {
      alert("Please fill in all the fields before sending :)");
      return; // stop the function here
    }

    // very simple email check — it must have @ and a dot
    if (!emailInput.includes("@") || !emailInput.includes(".")) {
      alert("Please enter a valid email address!");
      return;
    }

    // if everything is okay, show the success message
    const successMsg = document.getElementById("success-msg");
    successMsg.style.display = "block";

    // clear the form so its empty again
    contactForm.reset();

    // hide the success message after 4 seconds
    setTimeout(function () {
      successMsg.style.display = "none";
    }, 4000);

  });

}
