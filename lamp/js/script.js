//DOM
const lampada = document.querySelector('#lampada')
const botao_ligar = document.querySelector('#botao_ligar')
const botao_desligar = document.querySelector('#botao_desligar')


//Evento
botao_ligar.addEventListener('click',acender)
botao_desligar.addEventListener('click',desligar)
lampada.addEventListener('dblclick',quebrar)

//Função
function acender(){
    lampada.src = 'images/acesa.gif'
}

function desligar(){
    lampada.src = 'images/apagada.gif'
}

function quebrar(){
    lampada.src = 'images/quebrada-removebg-preview.png'
}