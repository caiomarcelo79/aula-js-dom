function geraTexto(nome) {
  // Quando a função for ativada ao clicar no botão, ele irá sobre escrever o texto escrito dentro do elemento que tem o id = texto
  document.getElementById('texto').innerHTML = (`Olá ${nome}, você está exibindo a sua primeira mensagem no corpo da sua aplicação`)
}