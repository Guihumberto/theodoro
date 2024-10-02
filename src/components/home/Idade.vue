<template>
  <div class="content">
    <img class="star" src="../../assets/stars.png" />
    <img class="star" src="../../assets/stars.png" />
    <div class="title">
      <img src="../../assets/dath_11.png" />
      <img src="../../assets/theo_1.png" />
      <div class="star-wars-title2">
        <img class="episodio3" src="../../assets/episodio.png" />
        <h1>Theodoro Humberto</h1>
        <div class="episodio">
          <h2 class="mt-n4 text-primary">THEO FAZ 3</h2>
        </div>
      </div>
      <h2 class="text-h4">O DESPERTAR DA DIVERSÃO!</h2>
      <div class="w-50">
        <h2 class="mt-5 text-yellow">
          A Força é forte com este padawan que está completando 3 anos.
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.content{
  position: relative;
  animation: appear 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover 10% cover 60%;
  pointer-events: none;
  user-select: none;
  background-image: 
    radial-gradient(1px 1px at 10% 20%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 30% 40%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 70% 90%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 80% 30%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 50% 60%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 90% 10%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 20% 80%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 40% 20%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 60% 10%, white 80%, transparent 100%),
    radial-gradient(1.5px 1.5px at 75% 85%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 85% 45%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 15% 35%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 25% 75%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 95% 65%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 65% 55%, white 80%, transparent 100%),
    radial-gradient(1.5px 1.5px at 35% 90%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 50% 10%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 5% 50%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 90% 85%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 55% 30%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 45% 65%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 75% 25%, white 80%, transparent 100%),
    radial-gradient(1.5px 1.5px at 35% 40%, white 80%, transparent 100%);
  background-size: 100% 100%; /* Preencher a tela inteira */
  animation: twinkle 3s infinite ease-in-out alternate;
}
@keyframes appear {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
.star{
  width: 500px;
}
.title{
  width: 100%;
}
img{
  position: absolute;
  z-index: 1;
}
img:nth-child(1){
  left: 0;
  width: 35%;
  translate: 50%;
  animation: deslocar 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover 10% cover 60%;
}
@keyframes deslocar {
  from{
    translate: 50%;
  }
  to{
    translate: 0;
  }
}
img:nth-child(2){
  right: 0;
  width: 32%;
  translate: -50%;
  animation: deslocar2 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover 10% cover 60%;
}
@keyframes deslocar2 {
  from{
    translate: -50%;
  }
  to{
    translate: 0;
  }
}
.star-wars-title2{
  position: relative;

}
.star-wars-title2 img{
  position: absolute;
  top: -10rem;
  left: 50%;
  z-index: 0;
  transform: translate(-50%, 0%);
}
.star-wars-title2 h1 {
    font-family: 'Star Jedi', sans-serif;
    width: 500px;
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
@media (max-width: 500px) {
  .star-wars-title2 h1{
    font-size: 2em;
    max-width: 320px;
  }
  .star-wars-title2 img{
    position: absolute;
    top: -7rem;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, 0%);
  }
}
.star-wars-title2 .episodio{
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
}
.episodio h2{
  background: #121212;
  padding: 0 2rem;
}
</style>