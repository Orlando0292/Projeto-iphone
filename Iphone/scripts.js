/*console.log ("oi estou aqui"); testar se o java está linkado com o html*/

function trocaCor(cor){
    let circulo = document.querySelector(".circulo")
    circulo.style.background = cor

}

function trocaImagem(imagem) {
    let imgIphone = document.querySelector(".iphone")
    imgIphone.src = imagem

}