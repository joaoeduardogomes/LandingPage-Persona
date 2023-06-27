/*
items.forEach(item => {
    if (item.classList.contains('current-item')) {
    console.log("tem")
    }
    
})
*/

const toggle = document.querySelectorAll('.toggle');

toggle.forEach(element => {
    element.addEventListener('click', () => {
        const charNormal = document.getElementsByClassName('char-normal');
        const charMetaverse = document.getElementsByClassName('char-metaverse');

        for (i = 0; i < charNormal.length; i++) {
            charNormal[i].classList.toggle('hide');
            charMetaverse[i].classList.toggle('hide');
        }

        // CRIAR ALGUMA REGRA PRA IMAGEM VOLTAR AUTOMATICAMENTE QUANDO MUDAR DE PERSONAGEM
    })

})