<template>
  <div class="wrapperContent">
    <HomeHeader />
    <Idade />
    <Imagensescola />
    <DiaHorarioescola />
    <Confirmar v-if="readConvidado.id" />
    <Footer />
  </div>
</template>

<script>
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
</style>
