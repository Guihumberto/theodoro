<template>
    <h2 class="text-h4 my-5">Lista de Espera</h2>
        <div class="content">
            <v-card 
                 :title="item.name_parents"
                 color="yellow"
                v-for="item, i in readConvidados" :key="i" class="card"  prepend-icon="mdi-account-group">
                <v-card-text class="bg-black" >
                    <div class="d-flex align-center">
                        <v-icon
                            class="ma-3 icon"
                            rounded="0"
                            size="100"
                        >
                            mdi-human-male-male-child
                        </v-icon>
                        <div class="ml-5">
                            Criança: {{ item.name_child }}  <br>
                            confirmou ? {{ item.confirm }}<br>
                            reconfirmou ? {{ item.reconfirm }}<br>
                            Total pessoas ? {{ item.conv_adults + item.conv_child }}<br>
                            Sugestão de Presente: {{ item.suggest_presente }} <br> 
                        </div>
                    </div>
                    <div class="text-right mt-5">
                        <v-btn icon="mdi-arrow-up" @click="espera(item.id)"></v-btn>
                        <edit :form="item" />
                        <v-btn icon="mdi-delete" @click="remove(item.id)"></v-btn>
                        <v-btn icon="mdi-content-copy" @click="copyInvite(item.id)"></v-btn> 
                        <v-btn icon="mdi-share" @click="goTo(item.id)"></v-btn>
                    </div>
                </v-card-text>
            </v-card>   
        </div>
</template>

<script>
import { useConviteStore } from '@/stores/ConviteStore'
const conviteStore = useConviteStore()

    export default {
        computed:{
            readConvidados(){
                return conviteStore.readConvidados.filter(x => x.wait)
            }
        },
        methods:{
            remove(id){
                conviteStore.deleteConvite(id)
            },
            espera(id){
                conviteStore.changeListWaiReturn(id)
            }
        }
    }
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}
.card{
    width: 33%;
    margin-bottom: .5rem;
    margin-right: .2rem;
}
@media (max-width: 480px) {
    .card{
        width: 100%;
    }
}
@media (max-width: 768px) {
 
}
@media (max-width: 1024px) {
    
}
</style>