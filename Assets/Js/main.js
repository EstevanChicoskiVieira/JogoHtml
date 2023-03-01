var prota = document.querySelector('.prota')
var vilao = document.querySelector('.vilao')
var placar = document.getElementById('placar')

const pulo = () => {
    prota.classList.add('pulo')
    
    setTimeout(() => {
        prota.classList.remove('pulo')
    }, 700);
} // função de pulo do personagem

let i = 0;

setInterval(() => {
    i = i + 1;
    placar.innerHTML = `Sua pontuação: ${i}`;
}, 2550) // placar 

const loop = setInterval(() => {
    const vilaoPosition = vilao.offsetLeft;
    const protaPosition = +window.getComputedStyle(prota).bottom.replace('px', '');

    if(vilaoPosition <= 20 && vilaoPosition > 0 && protaPosition <= 70){
        vilao.style.animation = 'none';  
        vilao.style.left = `${vilaoPosition}px`;

        setTimeout(() => {
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.fim').style.display = 'flex';
        }, 400)
    }
}, 10) // verificação de inicio e fim de jogo

document.addEventListener('keydown', pulo) // pulo por pressionar tecla do teclado

document.getElementById('start').addEventListener('click', () => {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.inicio').style.display = 'none';
}) // botão de inicio de jogo

document.getElementById('restart').addEventListener('click', () => {
    window.location.reload(true);
}) // botão de restart

const container = document.querySelector('.container').addEventListener('click', pulo) // pulo por click na tela