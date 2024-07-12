/* ---------- Menu Mobile ---------- */
const headerNav = document.querySelector('.header-nav');
const btnMobile = document.querySelector('#btn-mobile');

function ativarMenuMobile(event){
    if(event.type === 'touchstart'){
        event.preventDefault();
    }

    btnMobile.classList.toggle('ativo');
    headerNav.classList.toggle('ativo');

    const navbarAtiva = headerNav.classList.contains('ativo');

    event.currentTarget.setAttribute('aria-expanded', navbarAtiva);

    if(navbarAtiva){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', ativarMenuMobile);
btnMobile.addEventListener('touchstart', ativarMenuMobile);

//Script temporário para desativar a função de navegar dos links do menu, pois as outras páginas não estão prontas.
const linksInternos = document.querySelectorAll('.nav-menu a');

function evitarNavegacao(event){
    event.preventDefault();
}

linksInternos.forEach((link)=>{
    link.addEventListener('click', evitarNavegacao)
})
