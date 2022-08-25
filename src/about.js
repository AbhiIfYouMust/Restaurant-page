const heading = document.createElement("h1");
heading.textContent = "Do you like our Mo:mos?";

const contact = document.createElement("p");
contact.textContent = "Contact no: +977-XXX-XXX-XXX"

function AboutTab(parent) {
    parent.appendChild(heading);
    parent.appendChild(contact);
}

export default AboutTab;