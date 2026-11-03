const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", String(!isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
        siteNav.classList.toggle("is-open", !isOpen);
    });
}

const filterButtons = document.querySelectorAll(".filter-button");
const menuGroups = document.querySelectorAll(".menu-group");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((item) => {
            const isActive = item === button;
            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });
        menuGroups.forEach((group) => {
            group.hidden = filter !== "all" && group.dataset.category !== filter;
        });
    });
});