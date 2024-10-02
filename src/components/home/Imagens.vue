<template>
  <div class="content">
    <div class="title">
      <img src="../../assets/darth_2.png" class="darth" />
      <div>
        <h2 class="text-h5 text-yellow">Junte-se à festa, e juntos governaremos a galáxia... </h2>
        <h1 class="frasefinal text-h5">ou pelo menos o salão!</h1>
      </div>
      <div class="threeImg">
        <img src="../../assets/chuew_2.png" />
        <img src="../../assets/yoda_1.png" />
        <img src="../../assets/r2eC3.png" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.content {
  width: min(100%, 600px);
  user-select: none;
  pointer-events: none;
  user-select: none;
  overflow: hidden;
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
  animation: threeSurgir linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
@keyframes threeSurgir {
  from {
    opacity: 0;
    clip-path: inset(100% 100% 100% 100%);
  }
  to {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}
.content .nave{
  width: 300px;
  position: absolute;
  animation: aumentar 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover -10% cover 110%;
}
.content .title{
  max-width: 100%;
  position: relative
}
.frasefinal{
  color: rgb(226, 236, 236);
  animation: frasefinal 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover -80% cover 50%;
  text-shadow: -5px -3px 10px #ffffff;
}
.title .darth {
  position: absolute;
  top: 0;
  transition: 1s ease;
  animation: flutuar 4s ease-in-out infinite;
}
@keyframes flutuar {
    0% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(20px, -20px); /* Move um pouco para a direita e para cima */
    }
    50% {
        transform: translate(0, -40px); /* Move mais para cima */
    }
    75% {
        transform: translate(-20px, -20px); /* Move para a esquerda e para baixo */
    }
    100% {
        transform: translate(0, 0); /* Volta ao ponto inicial */
    }
}
.threeImg img{
  position: absolute;
}
.threeImg img:nth-child(1){
  top: 20rem;
  left: -5rem;
}
.threeImg img:nth-child(2){
  top: 20rem;
  left: 0rem;
}
.threeImg img:nth-child(3){
  left: 18rem;
  top: 22rem;
}
@media (max-width: 500px) {
  .title .darth {
    top: -8rem;
  }
  .threeImg img:nth-child(1){
    top: 14rem;
    left: 0rem;
    width: 200px;
  }
  .threeImg img:nth-child(2){
    top: 15rem;
    left: 3rem;
    width: 300px;
  }
  .threeImg img:nth-child(3){
    left: 13rem;
    top: 15rem;
    width: 200px;
}
 }
</style>