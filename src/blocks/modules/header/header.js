const burgerBtn = document.querySelector(".header__burger-btn");
const burgerOverflow = document.querySelector(".burger-overflow");
const burgerMenu = document.querySelector(".header__burger-menu");
const headerMenuItem = document.querySelector(".header__nav-item");

const openBurgerMenu = () => {
  burgerBtn.classList.toggle("header__burger-btn--open");
  burgerOverflow.classList.toggle("burger-overflow--open");
  burgerMenu.classList.toggle("header__burger-menu--open");
};

burgerBtn.addEventListener("click", openBurgerMenu);
burgerOverflow.addEventListener("click", openBurgerMenu);
document.querySelector(".header__nav").addEventListener("click", (e) => {
  if (e.target.classList.contains("header__nav-item")) {
    openBurgerMenu();
  }
});

//Скролл до секций
const sectionScroll = (from) => {
  let fromLink = document.querySelector(from);
  let href = fromLink.getAttribute("href");
  fromLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (window.location.pathname === "/") {
      let elementPosition = document.querySelector(href).getBoundingClientRect()
        .top;

      window.scrollBy({
        top: elementPosition,
        behavior: "smooth",
      });
    } else {
      window.location.href = `/${href.split(4)}`;
    }
  });
};

sectionScroll(".scrollFrom-useful");
sectionScroll(".scrollFrom-suitable");
sectionScroll(".scrollFrom-tarif");
sectionScroll(".scrollFrom-useful--footer"); //--footer нужен, т.к addEventListener не может работать с массивом элементов
sectionScroll(".scrollFrom-suitable--footer");
sectionScroll(".scrollFrom-tarif--footer");
