const emojis = [
    '🐱',
    '🐱',
    '🐶',
    '🐶',
    '🐰',
    '🐰',
    '🦄',
    '🦄',
    '🐹',
    '🐹',
    '🦝',
    '🦝'
]; // Guarda todos os emogis.
let openCards = []; // Guarda as cartas abertas.

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2: -1) // Função para 'embaraçhar os emojis', o '.sort()' permite criar uma ordenação de acordo com a regra da função que você passará. A função coloca o peso de '2' ou '-1' para cada elemento que ele pega, e como irá haver mais de um elemento com o mesmo valor, ele fará uma ordenação aleatória pros elementos.

for(let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div'); // Tag div criada dinâmicamente.
    box.className = 'item'; // Adicionada a classe na div criada anteriormente.
    box.innerHTML = shuffleEmojis[i]; // Aqui eu digo que o que estará dentro da minha div, será o meu 'shuffleEmojis' na sua posição i.
    box.onclick = handleClick; // Toda vez que eu clicar na caixinha, eu executarei a função 'handleClick'.
    document.querySelector('.game').appendChild(box); // colocando a div criada como filho da div '.game'.
}

function handleClick(){
    if(openCards.length < 2) { // Verificar se eu tenho 2 cartas abertas.
        this.classList.add('boxOpen'); // Toda vez que eu clicar para abrir um card eu vou adicionar a classe 'boxOpen'.
        openCards.push(this); // E ao clicar na carta, guardarei ela no vetor 'opencards'. Aceitando no máxio duas.
    }

    if(openCards.length == 2) { // Se eu tiver pelo menos duas cartas guardadas no meu vetor. Chamarei a função abaixo 'checkMatch'.
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){ // Checar se as cartas são iguais.
    if(openCards[0].innerHTML === openCards[1].innerHTML) { // Comparar a marcaçaõ HTML das duas cartas.
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add('boxMatch');
        // Inserir a classe 'boxMatch' nos elementos que foram guardados no 'openCards' que possuem a mesma marcação HTML, ou seja, as cartas iguais.
    } else {
        openCards[0].classList.remove('boxOpen')
        openCards[1].classList.remove('boxOpen')
        // Se as cartas forem diferentes, remove de ambas a classe 'boxOpen'.
    }

    openCards = []; // Para resetar as cartas que eu tenho na memória.

    if(document.querySelectorAll('.boxMatch').length === emojis.length) {
        alert('Parabéns, você venceu 🥳');
    }
}

