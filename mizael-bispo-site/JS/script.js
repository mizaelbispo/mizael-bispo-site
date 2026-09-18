document.addEventListener('DOMContentLoaded', function () {
  var botao = document.querySelector('.menu-toggle');
  var links = document.querySelector('.menu-links');

  if (botao && links) {
    botao.addEventListener('click', function () {
      links.classList.toggle('ativo');
    });
  }
}); 