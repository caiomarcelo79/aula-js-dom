function trocaCor() {
  
    // Pega o valor que você escreveu no campoTexto(nosso input) e armazena numa variável chamada textoDoInput
    const corDoInput = document.getElementById('campoCor').value

    console.log(corDoInput)

    document.getElementById('texto').style.color = corDoInput
    
    // Quando a função for ativada ao clicar no botão, ele irá sobre escrever o valor armazenado na variável textoDoInput dentro do elemento que tem o id = texto
}

setInterval(counter, 1000)

function counter() {

    document.getElementById('width').innerHTML = window.innerWidth
    document.getElementById('height').innerHTML = window.innerHeight
    
}

let pessoas = [
    {
        nome: "caio",
        idade: 19,
        cor: "vermelho"
    },
    {
        nome: "felipe",
        idade: 34,
        cor: "preto"
    },
]

pessoas.map((pessoa, index) => {
    console.log(index)
    console.log('nome:', pessoa.nome)
    console.log('idade:', pessoa.idade)
    console.log('cor:', pessoa.cor)
})


const body = document.querySelector('body')
function darkMode() {

    body.classList.toggle('dark')
    
}

