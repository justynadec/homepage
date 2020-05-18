const name = 'Justyna';
const age = '25';

const heading = document.querySelector('.main__heading--js')

heading.innerHTML = `Witaj, nazywam się ${name} i mam ${age} lat.`;

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