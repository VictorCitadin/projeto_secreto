document.addEventListener('DOMContentLoaded', () => {
  // Lista com os nomes das fotos
  const nomesDasFotos = [
    "20241012_011330-COLLAGE.jpg",
    "20241109_150422.jpg",
    "20241109_231518.jpg",
    "20241223_094849.jpg",
    "20250306_222942.jpg",
    "20250411_210552.jpg",
    "20250517_200928.jpg",
    "20250607_112558.jpg",
    "20250612_212542.jpg",
    "20250614_152641.jpg",
    "20250712_181437.jpg",
    "20250913_221154.jpg",
    "20250927_122226.jpg",
    "20250927_214941.jpg",
    "20251102_135309.jpg",
    "20251123_110841.jpg",
    "20251129_175818.jpg",
    "20251129_204145.jpg",
    "20251227_170252.jpg",
    "20260101_212400.jpg",
    "20260111_010842.jpg",
    "20260116_215544.jpg",
    "20260124_225729.jpg",
    "20250303093551677.jpg",
    "20250304142734311.jpg",
    "AISelect_20250612_084150_Photos.jpg",
  ];

  // Embaralha (randomiza) a ordem das fotos
  nomesDasFotos.sort(() => Math.random() - 0.5);

  const containerFotos = document.querySelector('.passador-de-fotos');
  const controles = document.querySelector('.controle-passador');

  // Cria as tags <img> dinamicamente
  nomesDasFotos.forEach(nome => {
    const img = document.createElement('img');
    img.src = `fotos/${nome}`;
    containerFotos.insertBefore(img, controles);
  });

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
