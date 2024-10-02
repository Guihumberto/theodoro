<template>
  <div class="content">
    <img class="nave" src="../../assets/nave_04.png" />
    <div class="title">
      <img src="../../assets/darth_2.png" />
      <div class="threeImg">
        <img src="../../assets/chuew_2.png" />
        <img src="../../assets/yoda_1.png" />
        <img src="../../assets/r2eC3.png" />
      </div>
      <div class="w-50">
        <h2 class="text-yellow">Junte-se à festa, e juntos governaremos a galáxia... </h2>
        <h1 class="frasefinal">ou pelo menos o salão!</h1>
      </div>
      <div class="twoImg w-50">
        <img src="../../assets/luke_03.png" />
        <img width="18%" src="../../assets/leianave.png" />
      </div>
     
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.threeImg{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/stars.png');
  background-position: center;
  background-size: contain;
}
.threeImg img{
  width: 30%;
}
.threeImg img:nth-child(2){
  width: 4%;
}
.twoImg{
  display: flex;
  justify-content: center;
  align-items: center;
  animation: chegando 1ms ease-in-out forwards;
  animation-timeline: view();
}
@keyframes chegando {
  from{
    translate: 100vw;
  }
  to{
    translate: -120vw;

  }
}
.content {
  width: min(100%, 600px);
  position: relative;
  overflow: hidden;
}
.content .title{
  max-width: 100%;
  position: absolute;
}
.content .nave{
  width: 300px;
  position: absolute;
  animation: aumentar 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover -10% cover 110%;
}
@keyframes aumentar {
  from{
    transform: scale(5);
    opacity: .5;
  }
  to{
    transform: scale(1);
    translate: 120vw;
    opacity: 1;
  }
}
.frasefinal{
  color: rgb(161, 161, 235);
  animation: frasefinal 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover -80% cover 50%;
}
@keyframes frasefinal {
  from{
    transform: scale(5);
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

@media (max-width: 500px) {
  .content .nave {
    width: 40px;
  }
  .frasefinal{
    font-size: 1em;
  }
 }
</style>