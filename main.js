const name = 'Justyna';
const age = '25';

const emptyParagraph = document.querySelector('.week-summary__description--js')

emptyParagraph.innerHTML = `Uzupełniłam treść javascriptem!`;


   const greet = (age, name) => {
       console.log(
        `Witaj drogi odwiedzający, nazwyam się ${name} i mam ${age} lat`
       );
   }

greet(25, 'Justyna');

function createContent (querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.week-summary__description--js', 'Siemka');


const button = document.querySelector('.action--js');

console.log(button)


button.addEventListener('click', () => {

    const heading = document.querySelector(".main__heading--js")
    heading.innerHTML = `Witaj, nazywam się Justyna`;
    heading.classList.toggle('klasa-z-js');
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})

