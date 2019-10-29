//Declaring the variables and selecting/creating Elements in the DOM.
let siteHead = document.querySelector('head');
let siteTitle = document.querySelector('title');
let headerTitle = document.querySelector('header > h1')
let headerListItems = document.querySelectorAll('header li > a')
let aboutBox = document.getElementById('about');
let contactBox = document.getElementById('contact');
let mainBox = document.getElementById('contact');
let tHeadItems = document.querySelectorAll('table > thead > tr > td');

let tHeadCell;
let aboutTitle = document.createElement('h2');
let aboutText = document.createElement('p');
let contactTitle = document.createElement('h2');
let linkElement = document.createElement('link');


//Changing "Bananas" to "Vegetables" in the site title.
siteTitle.innerHTML = 'Fruits & Vegetables Corp';

//Fixing the Header-title.
headerTitle.innerHTML = 'Fruits & Vegetables Corp';

//Changing the third link of the list in the header from "Bananas" to "Vegetables".
headerListItems[2].textContent = 'Vegetables';
headerListItems[2].setAttribute('href', '#vegetables');


//Adding the "About" title and placing the about-text in a P-Element.
aboutBox.innerHTML = '';
aboutText.textContent = 'We\'re the best in fruits & vegetables'

aboutTitle.innerHTML = 'About';
aboutBox.appendChild(aboutTitle);
aboutBox.appendChild(aboutText);

//Inserting the About-box before the Contact-box.
aboutBox.parentElement.insertBefore(aboutBox, aboutBox.parentElement.firstChild);

//Adding Contact-title to the Contact-box.
contactTitle.textContent = 'Contact';
contactBox.insertBefore(contactTitle, contactBox.firstChild);

//Changing the table titles to "th" instead of "td".
for (let i = 0; i < tHeadItems.length; i++){
  tHeadCell = document.createElement('th');
  tHeadCell.innerHTML = tHeadItems[i].innerHTML;
  tHeadItems[i].parentElement.replaceChild(tHeadCell, tHeadItems[i]);
}

//Adding the "main.css" file to the Head of the site.
linkElement.rel = 'stylesheet';
linkElement.type = 'text/css';
linkElement.href = 'main.css';

siteHead.appendChild(linkElement);
