function cardflip() {
  const virar = document.querySelector(".popup-notificacao");
  virar.classList.remove("alterar");

  virar.classList.add("alterar");

  console.log("está funcionando");
}

function flipResposta() {
  const virar = document.querySelector(".popup-respostas");
  virar.classList.add("popup-aparecer");
}
