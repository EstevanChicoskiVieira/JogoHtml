var prota = document.querySelector('.prota')
var vilao = document.querySelector('.vilao')

const pulo = () => {
    prota.classList.add('pulo')
    
    setTimeout(() => {
        prota.classList.remove('pulo')
    }, 700);
}

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
}, 10)

document.addEventListener('keydown', pulo)

document.getElementById('start').addEventListener('click', () => {
    document.querySelector('.container').style.display = 'block';
    document.querySelector('.inicio').style.display = 'none';
})

document.getElementById('restart').addEventListener('click', () => {
    window.location.reload(true);
})

const container = document.querySelector('.container').addEventListener('click', pulo)