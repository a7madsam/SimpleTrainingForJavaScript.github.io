// start header
let header = document.createElement("div");
let logo = document.createElement("a");
let linksContainer = document.createElement("div");
let home = document.createElement("a");
let about = document.createElement("a");
let service = document.createElement("a");
let contact = document.createElement("a");

document.body.style.backgroundColor = "rgb(221,221,221)";
document.body.style.margin = "0px";
document.body.style.fontFamily = "Helvetica";
header.className = "header";
header.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 10px; background-color: white;";
//start logo
logo.className = "logo";
let logoText = document.createTextNode("Ahmad");
logo.setAttribute("href", "#");
logo.appendChild(logoText);
logo.style.cssText = "color:rgb(54,165,116); font-weight: bold; padding: 10px; font-size:26px; text-decoration: none;";
//end logo
//start links
let links = [home, about, service, contact];
let homeText = document.createTextNode("Home");
let aboutText = document.createTextNode("About");
let serviceText = document.createTextNode("Service");
let contactText = document.createTextNode("Contact");
let linksText = [homeText, aboutText, serviceText, contactText];
for (let i = 0; i < linksText.length; i++) {
    links[i].appendChild(linksText[i]);
}
for (let i = 0; i < links.length; i++) {
    links[i].setAttribute("href", "#");
    links[i].style.cssText = "color: rgb(152,149,152); text-decoration: none; padding: 10px; font-size: 18px;";
}
//end links
// end header
// start contentSection
let content = document.createElement("div");
content.className = "content";
content.style.cssText = "display:grid; grid-template-columns: repeat(auto-fill,minmax(300px,1fr)); gap:20px; margin:20px; height: calc(100% - 170px);";
for (let i = 0; i < 15; i++) {
    let product = document.createElement("div");
    let numberOfProduct = document.createElement("h1");
    let para = document.createElement("p");
    let numberOfProductText = document.createTextNode(`${i + 1}`);
    numberOfProduct.appendChild(numberOfProductText);
    let paraText = document.createTextNode("Product");
    para.appendChild(paraText);
    product.appendChild(numberOfProduct);
    product.appendChild(para);
    product.style.cssText = "display:flex; flex-direction:column; justify-content:center; align-items:center; background-color: white";
    para.style.cssText = "color:rgb(152,149,152); margin: 0px;";
    numberOfProduct.style.cssText = "margin:0px; font-weight: 400;";
    content.appendChild(product);
}
// end contentSection
//start footerSection
let footer = document.createElement("div");
footer.className = "footer";
footer.style.cssText = "display: flex; justify-content:center; align-items:center; background-color:rgb(54,165,116);"
let footerH2 = document.createElement("h2");
let footerH2Text = document.createTextNode("Copyright 2021");
footerH2.style.cssText = "color: white; font-weight: 400;"
footerH2.appendChild(footerH2Text);
footer.appendChild(footerH2);
//end footerSection
//responsive by javaScript
let mediaQuery = window.matchMedia("(max-width: 674px)");
function checkMedia(mediaQuery) {
    if (mediaQuery.matches) {
        content.style.height = "auto";
        links.forEach((item) => {
            item.style.padding = "5px";
            item.style.fontSize = "15px";
        })
        logo.style.fontSize = "22px";
        footerH2.style.fontSize = "20px";
    } else {
        content.style.height = "calc(100% - 170px)";
        links.forEach((item) => {
            item.style.padding = "10px";
            item.style.fontSize = "18px";
        })
        logo.style.fontSize = "26px";
        footerH2.style.fontSize = "22px";
    }

}
console.log(mediaQuery);
mediaQuery.addEventListener("change", checkMedia);
checkMedia(mediaQuery);

//append section
links.forEach(function (item) {
    linksContainer.appendChild(item);
});
header.appendChild(logo);
header.appendChild(linksContainer);
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

