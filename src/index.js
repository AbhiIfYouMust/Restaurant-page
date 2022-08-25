import HomeTab from "./home";
import MenuTab from "./menu";
import AboutTab from "./about";

const content = document.querySelector("#content");

const top = document.createElement('div');
top.setAttribute('id','top');

const pages = document.createElement('div');
pages.setAttribute('id','pages');

//creating three tabs
const Home = document.createElement('a');
Home.textContent = "Home";

const Menu = document.createElement('a');
Menu.textContent = "Menu";

const About = document.createElement('a');
About.textContent = "About";

content.appendChild(top);

top.appendChild(Home);
top.appendChild(Menu);
top.appendChild(About);

content.appendChild(pages);

//default home page
HomeTab(pages);

// implementing tab model for pages
document.addEventListener('click', function(e) {
    if (e.target.textContent === "Home") {
        pages.innerHTML = "";
        HomeTab(pages);
    } else if (e.target.textContent === "Menu") {
        pages.innerHTML = "";
        MenuTab(pages);
    } else if (e.target.textContent === "About") {
        pages.innerHTML = "";
        AboutTab(pages);
    };
});