document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.passador-de-fotos img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentImageIndex = 0;

  function mostrarImagem(index) {
    images.forEach((img, i) => {
      img.classList.remove('activate');
      if (i === index) {
        img.classList.add('activate');
      }
    });
  }

  mostrarImagem(currentImageIndex);

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    mostrarImagem(currentImageIndex);
  })

  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    mostrarImagem(currentImageIndex);
  })

  setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    mostrarImagem(currentImageIndex)
  }, 7000);

  const countdownElement = document.getElementById('contagem');

  const startDate = new Date(2024, 9, 22, 20, 30, 0);

  function atualizarContagem() {
    const agora = new Date();
    const diff = agora.getTime() - startDate.getTime();

    const seconds = Math.floor(diff / 1000);
    const minuts = Math.floor(seconds / 60);
    const hours = Math.floor(minuts / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30.44);
    const years = Math.floor(days / 365.25);

    const remainingSeconds = seconds % 60;
    const remainingMinuts = minuts % 60;
    const remainingHours = hours % 24;
    const remainingDays = days % 30;

    countdownElement.innerHTML = `
      ${years} anos,
      ${months % 12} meses,
      ${remainingDays} dias,
      ${remainingHours} horas,
      ${remainingMinuts} minutos e
      ${remainingSeconds} segundos.
    `;
  }

  setInterval(atualizarContagem, 1000);

  atualizarContagem();
})