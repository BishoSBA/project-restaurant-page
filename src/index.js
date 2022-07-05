import "./style.scss";

const header = document.querySelector("header");
const main = document.querySelector("main");
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

const home = () => {
	main.textContent = "";
	header.textContent = "Home";

	const section1 = document.createElement("section");
	const section1Title = document.createElement("h3");
	section1Title.textContent = "Title";
	const section1P = document.createElement("p");
	section1P.textContent = "lorem ipsum";
	const section1A = document.createElement("a");

	section1.append(section1Title, section1P, section1A);

	const section2 = document.createElement("section");
	const section2Title = document.createElement("h3");
	section2Title.textContent = "Title";
	const section2P = document.createElement("p");
	section2P.textContent = "lorem ipsum";
	const section2A = document.createElement("a");

	section2.append(section2Title, section2P, section2A);

	const section3 = document.createElement("section");
	const section3Title = document.createElement("h3");
	section3Title.textContent = "Title";
	const section3P = document.createElement("p");
	section3P.textContent = "lorem ipsum";
	const section3A = document.createElement("a");

	section3.append(section3Title, section3P, section3A);

	main.append(header, section1, section2, section3);
};

const contact = () => {
	main.textContent = "";
	header.textContent = "Contact";

	const section1 = document.createElement("section");
	const section1Title = document.createElement("h3");
	section1Title.textContent = "Title";
	const section1P = document.createElement("p");
	section1P.textContent = "lorem ipsum";
	const section1A = document.createElement("a");

	section1.append(section1Title, section1P, section1A);

	const section2 = document.createElement("section");
	const section2Title = document.createElement("h3");
	section2Title.textContent = "Title";
	const section2P = document.createElement("p");
	section2P.textContent = "lorem ipsum";
	const section2A = document.createElement("a");

	section2.append(section2Title, section2P, section2A);

	const section3 = document.createElement("section");
	const section3Title = document.createElement("h3");
	section3Title.textContent = "Title";
	const section3P = document.createElement("p");
	section3P.textContent = "lorem ipsum";
	const section3A = document.createElement("a");

	section3.append(section3Title, section3P, section3A);

	main.append(header, section1, section2, section3);
};

const menu = () => {
	main.textContent = "";
	header.textContent = "Menu";

	const section1 = document.createElement("section");
	const section1Title = document.createElement("h3");
	section1Title.textContent = "Title";
	const section1P = document.createElement("p");
	section1P.textContent = "lorem ipsum";
	const section1A = document.createElement("a");

	section1.append(section1Title, section1P, section1A);

	const section2 = document.createElement("section");
	const section2Title = document.createElement("h3");
	section2Title.textContent = "Title";
	const section2P = document.createElement("p");
	section2P.textContent = "lorem ipsum";
	const section2A = document.createElement("a");

	section2.append(section2Title, section2P, section2A);

	const section3 = document.createElement("section");
	const section3Title = document.createElement("h3");
	section3Title.textContent = "Title";
	const section3P = document.createElement("p");
	section3P.textContent = "lorem ipsum";
	const section3A = document.createElement("a");

	section3.append(section3Title, section3P, section3A);

	main.append(header, section1, section2, section3);
};

homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
contactBtn.addEventListener("click", contact);

home();
