const burgerBtn = document.querySelector(".header__burger-btn")
const burgerOverflow = document.querySelector(".burger-overflow")
const burgerMenu = document.querySelector(".header__burger-menu")

const openBurgerMenu = () => {
  burgerBtn.classList.toggle('header__burger-btn--open')
  burgerOverflow.classList.toggle('burger-overflow--open')
  burgerMenu.classList.toggle('header__burger-menu--open')
}

burgerBtn.addEventListener('click', openBurgerMenu)
