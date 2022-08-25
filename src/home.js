// h1 element
const title = document.createElement('h1');
title.textContent = "Our MoMo";

// img element
const img = document.createElement('img');
img.setAttribute("src","../Jhol_Buff_Momo_.jpg");
img.setAttribute("alt","MoMo");

// p element
const paragraph = document.createElement('p');
paragraph.textContent = "Our Momo is simply the best is the town. Try us now.";

// Adds DOM into desired element
function HomeTab (parent) {
    parent.appendChild(title);
    parent.appendChild(img);
    parent.appendChild(paragraph);
};

export default HomeTab;
