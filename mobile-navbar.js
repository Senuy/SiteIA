class MobileNavbar {
    constructor(mobileMenu, navMenu, navItem, navLink) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navMenu = document.querySelector(navMenu);
        this.navItem = document.querySelectorAll(navItem);
        this.navLink = document.querySelectorAll(navLink)
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
        this.navItem.forEach((link, index) => {
            console.log(index / 7 + 0.3);
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }
    handleClick() {
        this.navMenu.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".navMenu",
    ".navItem",
);
mobileNavbar.init()

const button = document.querySelector('.nav-button');

const mainSection = document.querySelector('main');

button.addEventListener('cick', () => {
    mainSection.scrollIntoView({ behavior: 'smoth' });
})