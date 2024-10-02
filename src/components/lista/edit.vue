<template>
        <v-btn @click="dialog = true" icon="mdi-pencil">
        </v-btn>

        <v-dialog
            v-model="dialog"
            width="auto"
            >
            <v-card class="card">
                <v-card-title class="d-flex justify-space-between">
                    <h3> <v-icon color="yellow"size="1.5rem" class="mr-2">mdi-pencil-circle</v-icon>Editar Convidado</h3>
                    <v-btn @click="dialog = false" icon="mdi-close"></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="editConvidado()" ref="form">
                        <v-text-field
                            label="Convidado(s)"
                            variant="outlined"
                            density="compact"
                            v-model="form.name_parents"
                        ></v-text-field>
                        <v-text-field
                            label="Nome no Convite"
                            variant="outlined"
                            density="compact"
                            v-model="form.name_child"
                        ></v-text-field>
                        <v-text-field
                            label="Quantidade de Convites Adulto"
                            variant="outlined"
                            density="compact"
                            type="number"
                            v-model.number="form.conv_adults"
                        ></v-text-field>
                        <v-text-field
                            label="Quantidade de Convites Criança até 4 anos"
                            variant="outlined"
                            density="compact"
                            v-model.number="form.conv_child"
                            type="number"
                        ></v-text-field>
                        <v-text-field
                            label="Quantidade de Convites Criança até 10 anos"
                            variant="outlined"
                            density="compact"
                            v-model.number="form.conv_child_maior"
                            type="number"
                        ></v-text-field>
                        <div>
                            <h3>Sugestão de Presente</h3>
                            <v-radio-group
                                v-model="form.suggest_presente"
                                inline
                            >
                                <v-radio
                                    v-for="s, i in suggest_present" :key="i"
                                    :label="s.name"
                                    :value="s.id"
                                ></v-radio>
                            </v-radio-group>
                            <v-textarea
                                v-model="form.present_description"
                                label="Descrição"
                                single-line
                                v-if="form.suggest_presente == 2 || form.suggest_presente == 3"
                            ></v-textarea>
                        </div>
                        <div class="text-right">
                            <v-btn variant="text" class="mr-2" @click="dialog = false">Cancelar</v-btn>
                            <v-btn variant="outlined" type="submit">Adicionar</v-btn>
                        </div>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-dialog>
</template>

<script>
    import { useConviteStore } from '@/stores/ConviteStore'
    const conviteStore = useConviteStore()

    export default {
        data(){
            return{
                dialog: false,
                suggest_present: [
                    {id: 0, name: 'Nenhum'},
                    {id: 1, name: 'PIX'},
                    {id: 2, name: 'Presente'},
                    {id: 3, name: 'Link loja'}
                ]
            }
        },
        props:{
            form: Object
        },
        methods:{
            editConvidado(){
                conviteStore.editInvite(this.form);
                this.dialog = false
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper, .card{
    font-family: 'Poppins', Courier, monospace;
}
</style>