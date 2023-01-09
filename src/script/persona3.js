const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        // pra identificar se clicamos na direita ou na esquerda:
        const isLeft = control.classList.contains('arrow-left'); 

        // como somos informados de qual seta foi clicada:
        if (isLeft) {
            currentItem -= 1;
        }
        else {
            currentItem += 1;
        }

        // Manter o índice dentro da nossa quantidade de elementos na lista:
        if (currentItem >= maxItems) {
            currentItem = 0;
        }
        if (currentItem < 0) {
            currentItem = maxItems - 1;
        }

        // impressão que nos mostra a verificação de qual seta foi clicada:
        console.log("control", isLeft, currentItem);


        // remove a classe de item selecionado de todos:
        items.forEach(item => item.classList.remove('current-item'));

        // posiciona o item do índice atual no centro do elemento:
        items[currentItem].scrollIntoView({
            inline: "center", // posiciona no centro
            behavior: "smooth" // dá aquele efeito suave de scroll do carrossel
        })

        // Adiciona a classe de item selecionado ao índice atual, tornando o elemento mais visível:
        items[currentItem].classList.add('current-item');
        
        console.log(`Selecionado: ${items[currentItem].id}`)
    });
});

// Pegando por clique:
// console.log(items);
// items.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log(item.id)
        
//         items.forEach(item => item.classList.remove('current-item'));

//         item.scrollIntoView({
//             inline: "center", // posiciona no centro
//             behavior: "smooth" // dá aquele efeito suave de scroll do carrossel
//         })

//         item.classList.add('current-item');

//         console.log(`Selecionado: ${item.id}`)
//     })
// })