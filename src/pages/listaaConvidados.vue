<template>
    <div class="wrapperContent">
        <div class="d-flex align-center justify-space-between my-2">
            <h2 class="d-flex align-center"> <v-icon size="1.5rem" class="mr-2">mdi-account-group</v-icon>Lista Convidados</h2>    
            <add />
        </div>
       <resumo />
        <Convidados />
        <esperaList />
        <div v-if="readLoad">Carregando...</div>
    </div>
</template>

<script>

import { useConviteStore } from '@/stores/ConviteStore'
const conviteStore = useConviteStore()

    export default {
        computed:{
            readLoad(){
                return conviteStore.readLoad
            }
        },
        created(){
            conviteStore.getAllInvites()
        }
    }
</script>

<style lang="scss">
.wrapperContent{
  width: min(90%, 1080px);
  margin: 0 auto;
  font-family: 'Poppins', Courier, monospace;
}
</style>