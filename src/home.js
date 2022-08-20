// content is the parent DOM selected from index.html
const content = document.querySelector("#content");

// h1 element
const title = document.createElement('h1');
title.textContent = "Our MoMo";

// img element
const img = document.createElement('img');
img.setAttribute("src","../Jhol_Buff_Momo_.jpg");
img.setAttribute("alt","MoMo");
img.setAttribute("style","height: 400px;");

// p element
const paragraph = document.createElement('p');
paragraph.textContent = "Our Momo is simply the best is the town. Try us now.";

// Appending into content div


function HomeTab () {
    content.appendChild(title);
    content.appendChild(img);
    content.appendChild(paragraph);
};

export default HomeTab;
