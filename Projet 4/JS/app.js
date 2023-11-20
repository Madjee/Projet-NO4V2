// Début Caroussel
const items = document.querySelectorAll('img');
const nbSlide = items.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');// Quand je met let count = 0, j'ai une slide manquante. Du coup j'ai mit 1 et ça a marché 
let count = 1;

function slideSuivante(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    }else {
        count = 1;
    }
    items[count].classList.add('active')
}

suivant.addEventListener('click', slideSuivante)

function slidePrecedente(){
    items[count].classList.remove('active');

    if(count > 1){
        count--;
    }else {
        count = nbSlide - 1;
    }

    items[count].classList.add('active')
    // console.log(count);
}
precedent.addEventListener('click', slidePrecedente)

function keyPress(e){
    if(e.keyCode === 37){
        slidePrecedente();
    }else if(e.keyCode === 39){
        slideSuivante();
    }
}
document.addEventListener('keydown', keyPress)

// Fin Caroussel