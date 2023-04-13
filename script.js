const btnMenu = document.getElementById('button-menu');
const navMenu = document.getElementById('menu');
const menuFixed = document.getElementById('container-menu');
const nossoNome = document.querySelector('.nosso-nome');

window.addEventListener('scroll', activeScroll);

function activeScroll(){
    menuFixed.classList.toggle('ativo', scrollY >450);
}

btnMenu.addEventListener('click', ()=> {
    btnMenu.classList.toggle('active');
    navMenu.classList.toggle('active');

})

function closeMenu() {
    navMenu.classList.remove('active');
    btnMenu.classList.remove('active');
    
}


