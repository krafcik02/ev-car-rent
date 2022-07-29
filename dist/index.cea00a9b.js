"use strict";
const btnLearnMore = document.querySelector(".btn-learn-more");
const section1 = document.querySelector(".section-how");
btnLearnMore.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e.target);
    section1.scrollIntoView({
        behavior: "smooth"
    });
});
// Revealing sections
const allSections = document.querySelectorAll(".section-hidden");
console.log(allSections);
const revealSection = function(entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-hidden");
    sectionsObserver.unobserve(entry.target);
};
const sectionsObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.2,
    rootMargin: "650px"
});
allSections.forEach((section)=>sectionsObserver.observe(section));
console.log(document.querySelector(".list-item:last-of-type"));

//# sourceMappingURL=index.cea00a9b.js.map
