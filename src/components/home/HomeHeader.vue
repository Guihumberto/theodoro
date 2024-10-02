<template>
  <div class="indicador"></div>
  <div class="content">
    <img class="img_star" width="100%" src="../../assets/stars_2.png">
    <div class="title">
      <img src="../../assets/bebe_yoda.png" />
      <img src="../../assets/bb8_2.png" />
      <img src="../../assets/nave_1.png" />
      <div class="star-wars-title">
        <h1 class="convidado">{{ readConvidado.name_child }}</h1>
        <h1>A força está Chamando você</h1>  
      </div>
    </div>
  </div>
</template>

<script>
 import { useConviteStore } from '@/stores/ConviteStore'
 const conviteStore = useConviteStore()


  export default {
    computed:{
      readConvidado(){
        return conviteStore.readConvidado
      }
    }
  }
</script>

<style scoped>
:root{
  --scroll-heigth: 25px;
}
.indicador{
  position: fixed;
  width: 100%;
  background: red;
  height: 20px;
  inset: 0;
  transform-origin: left;
  animation: scroll 1ms ease-in-out;
  animation-timeline: scroll();
  z-index: 1;
}
@keyframes scroll {
  from{
    scale: 0 1;
  }
  to{
    scale: 1 1;
  }
}
.title{
  position: relative;
}
@keyframes subir{
  from{
    transform: translateY(200px)
  }
  to {
    transform: translateY(0px)
  }
}
.content{
  user-select: none;
  pointer-events: none;
  animation: appear 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover 50% cover 90%;
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
}
.content .img_star{
  position: absolute;
  top: 0;
  animation: surgir 1s ease-in-out forwards;
}
@keyframes surgir{
  from{
    transform: translateY(-200px)
  }
  to {
    transform: translateY(0px)
  }
}
.title img{
  position: absolute;
}
.title img:nth-child(1){
  top: -3%;
  animation: subiredescer 1s ease-in-out forwards;
  animation-delay: 1s;
  translate: 0vw;
  opacity: 0;
}
@keyframes subiredescer {
  from{
    opacity: 0;
    top: -40rem;
    translate: -100vw;
  }
  to{
    opacity: 1;
    top: -7rem;
    translate: 0vw;
  }
}
.title img:nth-child(2){
  top: 28rem;
  width: 200px;
  animation: subiredescer2 1s ease-in-out forwards;
  animation-delay: 1s;
  translate: 0;
  opacity: 0;
}
@keyframes subiredescer2 {
  from{
    opacity: 0;
    top: 50rem;
    translate: -100vw;
  }
  to{
    opacity: 1;
    translate: 0 0;
  }
}
.title img:nth-child(3){
  top: 0;
  left: 150px;
  animation: subiredescer3 1s ease-in-out forwards;
  animation-delay: 1s;
  translate: 0;
  opacity: 0;
}
@keyframes subiredescer3 {
  from{
    opacity: 0;
    top: -100rem;
    translate: -150vh;
  }
  to{
    opacity: 1;
    top: 20px;
    translate: 0;
  }
}

.star-wars-title{
  width: min(80%, 600px);
  animation: subir 1s ease-in-out forwards;
}
.star-wars-title h1 {
  font-family: 'Star Jedi', sans-serif;
    max-width: 100%;
    /* border: 5px solid yellow; */
    color: yellow;
    font-size: 4em;
    transform:skew(30deg,30deg);
    -webkit-transform: perspective(200px) rotateX(20deg); 
    perspective: 500px;
    text-align: center;
    line-height: 1;
    letter-spacing: 3px;
    transition: 1s ease;
}

.star-wars-title .convidado {
  color: rgb(17, 204, 204);
  animation: surgir2 2s ease-in-out forwards;
}
@keyframes surgir2 {
  from{
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
}

@media (max-width: 500px) {
  .star-wars-title h1{
    font-size: 2.8em;
  }
  .title img:nth-child(1){
    top: -35%;
    translate: 0vw;
  }
  .title img:nth-child(2){
    top: 19rem;
    width: 200px;
    translate: 0;
  }
  .title img:nth-child(3){
    top: -0px;
    left: -80px;
    /* animation: subiredescer3 1s ease-in-out forwards; */
    animation-delay: 1s;
    translate: 0;
  }
}

</style>