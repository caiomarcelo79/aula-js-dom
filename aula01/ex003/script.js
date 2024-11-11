function geraTexto() {
  
  // Pega o valor que você escreveu no campoTexto(nosso input) e armazena numa variável chamada textoDoInput
  const textoDoInput = document.getElementById('campoTexto').value
  
  // Quando a função for ativada ao clicar no botão, ele irá sobre escrever o valor armazenado na variável textoDoInput dentro do elemento que tem o id = texto
  document.getElementById('texto').innerHTML = textoDoInput
}