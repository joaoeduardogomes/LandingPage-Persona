function removeCurrentitem(items) {
    items.forEach(item => item.classList.remove('current-item'));
}

function positionItem(items) {
    items[currentItem].scrollIntoView({
        inline: "center", // posiciona no centro
        behavior: "smooth" // dá aquele efeito suave de scroll do carrossel
    })
}

function addCurrentItem(items) {
    items[currentItem].classList.add('current-item');
}

function addIndexValue(items) {
    for(i = 0; i < items.length; i++) {
        items[i].dataset.indexValue = i;
        console.log(items[i].dataset.indexValue);
    }
}

function hideData() {
    info.forEach(charInfo => charInfo.classList.add('hide'));    
}
function showData() {
    info[currentItem].classList.remove('hide');
}


const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

// 
const info = document.querySelectorAll('.info');
console.log(info[0])
hideData();
showData();

addIndexValue(items);

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
        removeCurrentitem(items);

        // posiciona o item do índice atual no centro do elemento:
        positionItem(items);

        // Adiciona a classe de item selecionado ao índice atual, tornando o elemento mais visível:
        addCurrentItem(items);

        
        console.log(`Selecionado: ${items[currentItem].id}`)
        console.log(` current item é: ${currentItem}`)

        hideData();
        // Mostrar informações do personagem selecionado:
        if(items[currentItem].classList.contains('current-item')) {
            showData();
        }
    });
});

// Pegando por clique:
//console.log(items);

items.forEach(item => {
    item.addEventListener('click', () => {

        currentItem = item.dataset.indexValue;
        removeCurrentitem(items);
        item.classList.add('current-item');
        positionItem(items);

        console.log(`O índice é: ${item.dataset.indexValue}`);
        console.log(`Selecionado: ${item.id}`)
        console.log(`O current item é: ${currentItem}`)
    })
})
