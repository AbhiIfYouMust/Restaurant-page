const ul = document.createElement("ul");

//Menu list
const momoList = ["Veg Mo:mo", "Chicken Mo:mo", "Buff Mo:mo", "Jhol Mo:mo", "Fried Mo:mo"];

momoList.forEach( momo => {
    let li = document.createElement("li");
    li.innerHTML = momo;
    ul.appendChild(li);
})

// Adds node into desired parent element
function MenuTab (parent) {
    parent.appendChild(ul);
}

export default MenuTab;