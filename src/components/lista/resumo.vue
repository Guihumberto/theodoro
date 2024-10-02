<template>
     <div class="my-5 d-flex justify-space-between align-center border pa-2">
            <div>
                Quantidade de Convite: {{ resumo.convites }}<br>
                Quantidade de Pessoas: {{ resumo.total }}<br>
                Quantidade de Adultos: {{ resumo.adults }}<br>
                Quantidade de Crianças menor 4: {{ resumo.childs_menores }}<br>
                Quantidade de Crianças menor 10: {{ resumo.child_maior }}<br>
            </div>
            <div>
                Quantidade de Confirmações: <br>
                Quantidade de Reconfirmações:
            </div>
        </div>
</template>

<script>
    import { useConviteStore } from '@/stores/ConviteStore'
    const conviteStore = useConviteStore()
    export default {
        computed:{
            resumo(){
                return conviteStore.readResumo
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>