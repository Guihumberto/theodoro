<template>
    <div class="text-center footer">
        <div class="my-3">
          <v-btn @click="social('https://www.linkedin.com/in/joao-humberto-6a4713232/')" variant="tonal" icon="mdi-linkedin"></v-btn>
          <v-btn class="mx-2" @click="social('https://www.instagram.com/joaohumberto_dev/')" variant="tonal" icon="mdi-instagram"></v-btn>
          <v-btn @click="whatsapp" variant="tonal" icon="mdi-whatsapp"></v-btn>
        </div>
        <a class="text-yellow" href="https://joaohumberto.com.br/" target="_blank">www.joaohumberto.com.br</a>
        <h4 class="text-caption">Idealizado e desenvolvido por João Humberto</h4>
    </div>
</template>

<script setup>
   const whatsapp = () =>{
    const telefone = '5598984650786';
    const mensagem = encodeURIComponent('Olá, gostaria de mais informações!');
    const url = `https://wa.me/${telefone}?text=${mensagem}`;
    
    window.open(url, '_blank');
   }

   const social = (url) => {
      window.open(url, '_blank');
   }
</script>

<style lang="scss" scoped>
.footer{
    margin-top: 2rem;
}
@media (max-width: 400px) {
    .footer{
        margin-top: 2rem;
    }
}
</style>