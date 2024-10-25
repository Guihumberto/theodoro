<template>
  <div class="wrapperContent">
    <Seta />
    <HomeHeader />
    <Idade />
    <Imagens />
    <DiaHorario v-if="readConvidado.id"  />
    <Confirmar v-if="readConvidado.id" />
    <Footer />
  </div>
</template>

<script>
  import Seta from '@/components/home/seta.vue';
import { useConviteStore } from '@/stores/ConviteStore'
  const conviteStore = useConviteStore()

  export default {
    data(){
      return{
        id: 1,
        idinvite: this.$route.params.id
      }
    },
    computed:{
      readConvidado(){
        return conviteStore.readConvidado
      }
    },
    methods:{
      loadInvite(){
        conviteStore.loadFirebaseIvite(this.idinvite)
      }
    },
    created(){
      this.loadInvite()
    }
  }
</script>

<style>
.wrapperContent{
  width: min(100%, 1080px);
  margin: 0 auto;
  font-family: 'Poppins', Courier, monospace;
}
.content{
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
  display: grid;
  place-items: center;
}
.title{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  transition: 1s ease;
}
h1, h2, h3, p {
  text-align: center;
}
.seta-baixo {
  font-size: 2rem;                  /* Tamanho da seta */
  color: white;                     /* Cor da seta */
  text-align: center;               /* Centraliza o texto */
  cursor: pointer;                  /* Aparece como um link clicável */
  position: fixed;                  /* Fixa na tela */
  bottom: 20px;                     /* Distância da parte inferior da tela */
  left: 45%;                        /* Centraliza horizontalmente */
  transform: translateX(-50%);      /* Ajusta para o centro exato */
  animation: pulando 1s infinite;   /* Animação de "pulo" */
  transition: opacity 0.5s ease;    /* Transição para o desaparecimento */
  z-index: 100;
}

@keyframes pulando {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px); /* Movimenta a seta para baixo */
  }
  100% {
    transform: translateY(0); /* Retorna à posição inicial */
  }
}
.hidden {
  opacity: 0; /* Esconde a seta */
  pointer-events: none; /* Desativa a seta quando oculta */
}
</style>
