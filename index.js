let quebrada = false;

function acenderLampada() {
  if (!quebrada) {
    const imagem = document.getElementById("lampada");
    imagem.src = "./images/lampada_acessa.jpg";
  }
}

function apagarLampada() {
  if (!quebrada) {
    const imagem = document.getElementById("lampada");
    imagem.src = "./images/lampada_apagada.jpg";
  }
}

function quebrarLampada() {
  if (!quebrada) {
    quebrada = true;
    const imagem = document.getElementById("lampada");
    imagem.src = "./images/lampada_quebrada.jpg";

    const botao = document.createElement("button");
    botao.innerText = "Restaurar lâmpada";
    botao.onclick = restaurarLampada;
    botao.id = "restaurar";

    const divPrincipal = document.getElementById("principal");
    divPrincipal.appendChild(botao);
  }
}

function restaurarLampada() {
  quebrada = false;
  apagarLampada();

  const divPrincipal = document.getElementById("principal");
  const botao = document.getElementById("restaurar");

  divPrincipal.removeChild(botao);
}
