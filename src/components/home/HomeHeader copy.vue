<template>
  <div class="indicador"></div>
  <div class="content">
    <img width="100%" src="../../assets/stars_2.png">
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
.content{
  animation: appear 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover 50% cover 90%;
}
.content img{
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
.title{
  position: relative;
  animation: subir 1s ease-in-out forwards;
}
@keyframes subir{
  from{
    transform: translateY(200px)
  }
  to {
    transform: translateY(0px)
  }
}
img{
  position: absolute;
}
.title img:nth-child(1){
  top: -40rem;
  animation: subiredescer 1s ease-in-out forwards;
  animation-delay: 1s;
  translate: -100vw;
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
    translate: 0 0;
  }
}
.title img:nth-child(2){
  top: -50rem;
  width: 200px;
  animation: subiredescer2 1s ease-in-out forwards;
  animation-delay: 1s;
  translate: -100vw;
}
@keyframes subiredescer2 {
  from{
    opacity: 0;
    top: 50rem;
    translate: -100vw;
  }
  to{
    opacity: 1;
    top: 22rem;
    translate: 0 0;
  }
}
.title img:nth-child(3){
  top: -150rem;
  animation: subiredescer3 1s ease-in-out forwards;
  animation-delay: 1s;
  translate: 0;
}
@keyframes subiredescer3 {
  from{
    opacity: 0;
    top: 0rem;
    translate: 0;
  }
  to{
    opacity: 1;
    top: 20px;
    translate: -320px;
  }
}
.star-wars-title{
  width: min(80%, 600px);
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
}

.star-wars-title .convidado {
  color: rgb(17, 204, 204);
}

@media (max-width: 500px) {
  .star-wars-title h1{
    font-size: 2.8em;
  }
}

@keyframes appear {
  from{
    opacity: 1;
  }
  to{
    opacity: 0;
  }
}
@keyframes scroll {
  from{
    scale: 0 1;
  }
  to{
    scale: 1 1;
  }
}



/* .star-wars-title3 h1 {
  font-family: 'Star Jedi', sans-serif;
    width: 500px;
    border: 5px solid yellow;
    padding: 1.2rem;
    color: rgb(246, 246, 244);
    font-size: 3em;
    transform:skew(30deg,30deg);
    -webkit-transform: perspective(200px) rotateX(20deg); 
    perspective: 500px;
    text-align: center;
    line-height: 1;
} */

@keyframes crawl {
    0% {
        transform: rotateX(20deg) translateZ(0);
        opacity: 1;
    }
    100% {
        transform: rotateX(20deg) translateZ(-500px);
        opacity: 0;
    }
}
</style>