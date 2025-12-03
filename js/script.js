function cardflip() {
  const virar = document.querySelector(".popup-notificacao");
  virar.classList.remove("alterar");

  virar.classList.add("alterar");

  console.log("está funcionando");
}

function cardflip(element) {
  element.classList.add("flipar");
  console.log("está funcionando");
}
