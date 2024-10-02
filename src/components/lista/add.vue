<template>
    <div class="wrapper">
        <v-btn @click="dialog = true" prepend-icon="mdi-plus">
        Adicionar Convidado
        </v-btn>

        <v-dialog
            v-model="dialog"
            width="auto"
            >
            <v-card class="card">
                <v-card-title class="d-flex justify-space-between">
                    <h3> <v-icon color="success"size="1.5rem" class="mr-2">mdi-plus-circle</v-icon>Incluir Convidado</h3>
                    <v-btn @click="dialog = false" icon="mdi-close"></v-btn>
                </v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="addConvidado()" ref="form">
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
                            hide-details
                        ></v-text-field>
                        <v-btn variant="text" density="compact" class="mb-3 pa-0" @click="form.name_child = form.name_parents">Copiar</v-btn>

                        <v-text-field
                            label="Quantidade de Convites Adulto"
                            variant="outlined"
                            density="compact"
                            v-model.number="form.conv_adults"
                            type="number"
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
    </div>
</template>

<script>
    import { useConviteStore } from '@/stores/ConviteStore'
    const conviteStore = useConviteStore()

    export default {
        data(){
            return{
                dialog: false,
                form: {
                    name_parents: '',
                    name_child: '',
                    conv_adults: 1,
                    conv_child: 0,
                    suggest_presente: 0,
                    present_description: null,
                    confirm: false, 
                    reconfirm: false, 
                    conv_child_maior: 0,
                    wait: false
                },
                suggest_present: [
                    {id: 0, name: 'Nenhum'},
                    {id: 1, name: 'PIX'},
                    {id: 2, name: 'Presente'},
                    {id: 3, name: 'Link loja'}
                ]
            }
        },
        props:{
            invite: Object
        },
        methods:{
            addConvidado(){
                conviteStore.conviteAdd(this.form)
                this.clearForm()
            },
            clearForm(){
                this.form = {
                    name_parents: '',
                    name_child: '',
                    conv_adults: 0,
                    conv_child: 0,
                    suggest_presente: 0,
                    present_description: null,
                    confirm: false, 
                    reconfirm: false, 
                    conv_child_maior: 0,
                    wait: false
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper, .card{
    font-family: 'Poppins', Courier, monospace;
}
</style>