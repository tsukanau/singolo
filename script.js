//header
const MENU = document.getElementById('menu');

function moveToAnchor() {
    if (window.pageYOffset > '601' && window.pageYOffset < '1105') {
        MENU.querySelectorAll('.navigationItem')
            .forEach(el => el.classList.remove('active'));
        MENU.querySelector('#navigationServ').classList.add('active');
}   else if (window.pageYOffset > '-1' && window.pageYOffset < '600') {
    MENU.querySelectorAll('.navigationItem')
        .forEach(el => el.classList.remove('active'));
    MENU.querySelector('#navigationHome').classList.add('active');
}   else if (window.pageYOffset > '1106' && window.pageYOffset < '1959') {
    MENU.querySelectorAll('.navigationItem')
        .forEach(el => el.classList.remove('active'));
    MENU.querySelector('#navigationPort').classList.add('active');
}   else if (window.pageYOffset > '1960' && window.pageYOffset < '2705') {
    MENU.querySelectorAll('.navigationItem')
        .forEach(el => el.classList.remove('active'));
    MENU.querySelector('#navigationAbout').classList.add('active');
}   else if (window.pageYOffset > '2705') {
    MENU.querySelectorAll('.navigationItem')
        .forEach(el => el.classList.remove('active'));
    MENU.querySelector('#navigationCont').classList.add('active');
}


}
window.addEventListener('scroll', () => moveToAnchor());

//slider 
let CHANGE = document.getElementById('section-slider')
let items = document.querySelectorAll('.carousel .item');
let currentItem = 0;
let isEnabled = true;

function clickArrow () {
    if (CHANGE.classList.contains('section-slider-blue')) {
        CHANGE.classList.remove('section-slider-blue');
    } else CHANGE.classList.add('section-slider-blue');
}

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('activeslide', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('activeslide');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
    showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
        previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
        nextItem(currentItem);
	}
});



function touchPhoneVert () {
    const VERTICALPHONEDISP = document.getElementById('verticalphone-display');
    if (VERTICALPHONEDISP.style.opacity === "0") {
        VERTICALPHONEDISP.style.opacity = "1";
    }
    else {
        VERTICALPHONEDISP.style.opacity = "0";
    }
}

function touchPhoneHor () {
    const HORIZONTALPHONEDISP = document.getElementById('horizontalphone-display');
    if (HORIZONTALPHONEDISP.style.opacity === "0") {
        HORIZONTALPHONEDISP.style.opacity = "1";
    }
    else {
        HORIZONTALPHONEDISP.style.opacity = "0";
    }
}

//porfolio
const portfolioButtonsElements = document.getElementById('portfolio-navBar');

portfolioButtonsElements.addEventListener('click', (event) => {
    portfolioButtonsElements.querySelectorAll('span').forEach(el => el.classList.remove('portfolio-button__active'));
    event.target.classList.add('portfolio-button__active');
});
const PICTURES = document.getElementById('portfolio');

PICTURES.addEventListener('click', (event) => {
    PICTURES.querySelectorAll('img').forEach(el => el.classList.remove('active-frame'));
    event.target.classList.add('active-frame');
});

const portfolioButtons = document.getElementById('portfolio-navBar').children;
for(let i = 0; i < portfolioButtons.length; i++) {
    portfolioButtons[i].addEventListener('click', handleClickPortfolioButton);
}
const itemsContainer = document.getElementById('portfolio');
const arrIcon = [];
itemsContainer.querySelectorAll('div').forEach((element) => {arrIcon.push(element)
});

function rebuildArray() {
    const newArray = [];
    for (let i = arrIcon.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random () * (i + 1));
        newArray.push(arrIcon[randomIndex])
    }
    return newArray
}
function handleClickPortfolioButton() {
    const sortedArray = rebuildArray();
    for (let i = 0; i < sortedArray.length; i++) {
        itemsContainer.append(sortedArray[i]);
    }
}
// Form GetQuote
const BUTTON = document.getElementById('button'); 
const CLOSEBUTTON = document.getElementById('close-btn');

BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('message-block').classList.remove('hidden');
    if(Boolean (subject)) {
        document.getElementById('subject-result').innerText = 'Subject: ' + subject;
    }
    else {
        document.getElementById('subject-result').innerText = 'No subject';
    }

    const description = document.getElementById('description').value.toString();
    if (Boolean (description)) {
        document.getElementById('description-result').innerText = 'Description: ' + description;
    }
    else {
        document.getElementById('description-result').innerText = 'No description';
    }

});
CLOSEBUTTON.addEventListener('click', () => {
    document.getElementById('mySingoloForm').reset();
    document.getElementById('message-block').classList.add('hidden');
});