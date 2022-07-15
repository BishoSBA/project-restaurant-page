import "./style.scss";
import menu from "./menu";
import contact from "./contact";
import home from "./home";

const main = document.querySelector("main");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homeBtn.addEventListener("click", () => {
	home(main);
});
menuBtn.addEventListener("click", () => {
	menu(main);
});
contactBtn.addEventListener("click", () => {
	contact(main);
});

home();
