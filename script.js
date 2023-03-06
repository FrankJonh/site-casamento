const btnMenu = document.getElementById('button-menu');
const navMenu = document.getElementById('menu');
const menuFixed = document.getElementById('container-menu');

btnMenu.addEventListener('click', ()=> {
    btnMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
})

function activeScroll(){
    menuFixed.classList.toggle('ativo', scrollY > 390);
}

window.addEventListener('scroll', activeScroll);


const posicoes = menuFixed.getBoundingClientRect();

console.log(posicoes);
