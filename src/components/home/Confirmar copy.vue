<template>
  <div class="content">
    <img src="../../assets/estrela_suspensa.png" width="100%" />
    <div class="title">
      <img src="../../assets/familia_2.png" />
      <img src="../../assets/familia.png" />
        <div class="mb-5 mt-15 text-left w-100">
          <h1>Confirme a sua presença!</h1>
          Convidado(s): - qtd<br>
          Criança(s): - qtd<br>
          Sugestão de Presente:
        </div>
        <v-form class="formulario" @submit.prevent="confirmar()">
          <v-textarea
            label="Mensagem"
            variant="outlined"
            placeholder="Deixe uma mensagem para o Theodoro e família."
          ></v-textarea>
          <v-btn @click="type=1" type="submit" color="error">NÃO PODEREI IR</v-btn>
          <v-btn @click="type=2" type="submit" color="success" class="ml-2">MISSÃO ACEITA</v-btn>
        </v-form>
     
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        type: 0
      }
    },
    methods:{
      confirmar(){
        console.log(this.type, "eu vou");
      }
    }
  }
</script>

<style lang="scss" scoped>
.content img{
  position: absolute;
  top: 0;
  animation: appear 1ms ease-in-out forwards;
  animation-timeline: view();
}
@keyframes appear {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
.title{
  position: relative;
  margin: 1rem;
}
.title img{
  position: absolute;
}
.title img:nth-child(1){
  top: 480px;
}
.title img:nth-child(2){
  top: -60px;
}
.formulario{
  z-index: 10;
}
@media (max-width:500px) {
  .title img:nth-child(1){
    top: 400px;
  }
  .title img:nth-child(2){
    top: -160px;
  }
}
</style>