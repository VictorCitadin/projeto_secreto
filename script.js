* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}

html, body {
  height: 100%; 
  width: 100%;
}

body {
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center; 
  align-items: center;   
  overflow: hidden;      
  background-color: #253f81; 
  color: #fff; 
}

.container {
  width: calc(100% - 60px); 
  max-width: 350px;
  height: calc(var(--vh, 1vh) * 100 - 60px); 
  margin: 20px;
  background-color: #10265b;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3); 
  display: flex;
  flex-direction: column; 
  padding: 20px; 
  overflow-y: auto; 
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.container::-webkit-scrollbar {
    display: none;
}

.spotify-widget {
  width: 100%;
  margin-bottom: 25px; 
}

.spotify-widget iframe {
  display: block;
  border-radius: 10px;
  width: 100%;
  height: 152px; 
}

.passador-de-fotos {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 25px;
  border-radius: 15px; 
  flex-shrink: 0; 
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); 
}

.passador-de-fotos img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  border-radius: 15px;
}

.passador-de-fotos img.active { 
  opacity: 1;
}

.controle-passador {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
}

.controle-passador button {
  background-color: rgba(0, 0, 0, 0.6); 
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.4em;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.controle-passador button:hover {
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}


.tempo-juntos {
  text-align: center;
  margin-top: auto; 
  flex-shrink: 0;
  padding-bottom: 5px;
}

.tempo-juntos h2 {
  font-size: 1.6em; 
  font-weight: 400; 
  margin-bottom: 10px;
  color: #406a84; 
}

.tempo-juntos p#contagem {
  font-size: 1.4em; 
  font-weight: 700; 
  color: #405a84;
  letter-spacing: 0.5px;
  line-height: 1.4;
}

@media (max-width: 400px) {
  .container {
    width: calc(100% - 40px); 
    height: calc(var(--vh, 1vh) * 100 - 40px);
    margin: 20px; 
    border-radius: 15px; 
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); 
  }

  .passador-de-fotos {
    height: 350px; 
  }

  .tempo-juntos p#contagem {
    font-size: 1.2em;
  }
}

@media (max-height: 700px) { 
    .passador-de-fotos {
        height: 300px; 
    }
    .tempo-juntos p#contagem {
        font-size: 1.1em; 
    }
}
