const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".nav-menu");
const menuCloseButton = document.querySelector(".menu-close");

 menuButton.addEventListener("click", () => { /* при клике на меню, добавь класс is-active (развернуть меню) */
 	menu.classList.add("is-active");
 	menuCloseButton.classList.add("is-active");
 });

menuCloseButton.addEventListener("click", () => { /* при клике на закрыть, удалить класс is-active (свернуть меню) */
 	menu.classList.remove("is-active");
 	menuCloseButton.classList.remove("is-active");
 });