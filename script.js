const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('slide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex=slides.length
    }
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


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





const PICTURES = document.getElementById('portfolio');

PICTURES.addEventListener('click', (event) => {
    PICTURES.querySelectorAll('img').forEach(el => el.classList.remove('active-frame'));
    event.target.classList.add('active-frame');
});



const BUTTON = document.getElementById('button'); 
const CLOSEBUTTON = document.getElementById('close-btn');

BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('message-block').classList.remove('hidden');
    if(Boolean (subject)) {
        document.getElementById('subject-result').innerText = 'Singolo';
    }
    else {
        document.getElementById('subject-result').innerText = 'Без темы';
    }

    const description = document.getElementById('description').value.toString();
    if (Boolean (description)) {
        document.getElementById('description-result').innerText = 'Portfolio project';
    }
    else {
        document.getElementById('description-result').innerText = 'Без описания';
    }

});
CLOSEBUTTON.addEventListener('click', () => {
    document.getElementById('mySingoloForm').reset();
    document.getElementById('message-block').classList.add('hidden');
});

const portfolioButtonsElements = document.getElementById('portfolio-navBar')
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

portfolioButtonsElements.addEventListener('click', (event) => {
    portfolioButtonsElements.querySelectorAll('span').forEach(el => el.classList.remove('portfolio-button__active'));
    event.target.classList.add('portfolio-button__active');
});
