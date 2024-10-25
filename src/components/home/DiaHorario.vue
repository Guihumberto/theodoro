<template>
  <div class="content">
    <div class="star-wars-title2">
      
      <div class="text-yellow text-center">
        <h2 class="text-h5 mb-5">Venha almoçar com o Theo e a Família!!</h2>
        <div class="location">
          <h2>Sábado</h2>
          <h2>09/11/2024 às 12hrs</h2>
          <h2>Local: <span class="text-h5">Restaurante Amendoeira</span></h2>
          <h2>Planeta: <span class="text-h5">TERRA</span></h2>
          <h2>Sistema: <span class="text-h5">SOLAR</span></h2>
        </div> 
      </div>
      <div class="mapbox my-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.055005837812!2d-44.24432198760943!3d-2.4887453974794242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f69270c3fe8c9d%3A0x9ef5f4affefd9476!2sAmendoeira%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1727784973775!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
    <div class="twoImg">
        <img src="../../assets/luke_03.png" />
        <img width="18%" src="../../assets/leianave.png" />
      </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.content{
  width: min(100%, 600px);
  position: relative;
}
@property --a{
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
.location {
    position: relative;
    // background: repeating-conic-gradient(from var(--a), #ff2770 0%, #ff2770 5%, transparent 5%, transparent 40%, #ff2770 50%);
    max-width: 400px;
    max-height: 400px;
    padding: 15px;
    margin: 5px 10px;
    border-radius: 8px;
    color: #fff;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.1);
    border: 5px solid red; /* Define a borda */
    animation:animate 4s linear infinite;
}
@keyframes animate {
  0%{
    --a: 0deg;
  }
  100%{
    --a: 360deg;
  }
}
.location::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 30px 15px rgba(255, 0, 0, 0.7); /* Luz vermelha do ponto */
    // background: repeating-conic-gradient(from var(--a), #45f3ff 0%, #45f3ff 0%, transparent 0%, transparent 40%, #45f3ff 50%);
    animation: rodar 5s linear infinite;
    animation-delay: -2s;
}
@keyframes rodar {
            0% {
                // transform: translate(-50%, -50%) rotate(0deg);
                box-shadow: 0 0 20px 10px rgba(0, 0, 255, 0.7); /* Luz azul no início */
            }
            25% {
                // transform: translate(-50%, -50%) rotate(90deg);
                box-shadow: 0 0 25px 12px rgba(0, 0, 128, 0.7); /* Transição de azul para púrpura */
            }
            50% {
                // transform: translate(-50%, -50%) rotate(180deg);
                box-shadow: 0 0 30px 15px rgba(255, 0, 0, 0.7); /* Luz vermelha intensa */
            }
            75% {
                // transform: translate(-50%, -50%) rotate(270deg);
                box-shadow: 0 0 25px 12px rgba(128, 0, 0, 0.7); /* Transição de vermelho para púrpura */
            }
            100% {
                // transform: translate(-50%, -50%) rotate(360deg);
                box-shadow: 0 0 20px 10px rgba(0, 0, 255, 0.7); /* Volta para azul */
            }
        }
.star-wars-title2{
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.star-wars-title2 h1 {
    width: 90%;
    border: 5px solid yellow;
    padding: 1.2rem;
    color: rgb(246, 246, 244);
    font-size: 3em;
    perspective: 500px;
    text-align: center;
    line-height: 1;
    z-index: 0;
    transform: scale(.5);
    animation: aumentar 1ms ease-in-out forwards;
    animation-timeline: view();
    animation-range: cover 10% cover 60%;
}
@keyframes aumentar {
  from{
    transform: scale(.5);
  }
  to{
    transform: scale(1);
    padding: .9rem .5rem;
  }
}
.star-wars-title2 .episodio{
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
}
.mapbox{
  position: relative;
  min-width: (100%, 600px);
  height: 500px;
  background: #fff;
}
.mapbox iframe{
  width: 100%;
  height: 100%;
}
.twoImg{
  position: absolute;
  animation: kaka 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover 0% cover 50%;
}

@keyframes kaka {
  from{
    translate: 80vw 0;
  }
  to{
    translate: -100vw 0;
  }
}
@media (max-width:500px) {
  .mapbox{
    position: relative;
    min-width: (100%, 600px);
    height: 300px;
    background: #fff;
  }
}
</style>