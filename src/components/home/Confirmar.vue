<template>
  <div class="content">
    <!-- <img class="nave" src="../../assets/nave_04.png" /> -->
    <img src="../../assets/estrela_suspensa.png" width="100%" />
    <div class="title" v-if="!readConvidado.confirm && !readConvidado.not_go">
        <div class="mb-5 mt-15 text-left w-100">
          <h1 class="line-height title-confirmar">Confirme a sua presença!</h1>
          <v-row class="mt-2 justify-center">
            <v-col cols="12" class=" name_convidado">
              <h3 class="text-h5 line-height name_convidado_h3">{{ readConvidado.name_parents }}</h3>
            </v-col>
            <v-col cols="6" sm="3" md="4" v-if="readConvidado.conv_adults" class="text-center col">
              <h3 class="text-h6 line-height">Adultos</h3>
              <small>ou crianças com 11 anos ou mais</small>
              <v-text-field 
                class="mx-auto"
                density="compact"
                hide-details
                v-model.number="dataConvidados.conv_adults"
                variant="outlined"
                style="width: 130px;"
                readonly>
                <template v-slot:prepend>
                  <v-btn 
                  @click="dataConvidados.conv_adults--"
                  :disabled="dataConvidados.conv_adults <= 1"
                  density="compact" icon="mdi-minus" color="red"></v-btn>
                </template>
                <template v-slot:append>
                  <v-btn 
                    @click="dataConvidados.conv_adults++"
                    :disabled="readConvidado.conv_adults <= dataConvidados.conv_adults"
                    density="compact" icon="mdi-plus" color="success"></v-btn>
                </template>
               </v-text-field>
            </v-col>
            <v-col cols="6" sm="3" md="4" v-if="readConvidado.conv_child" class="text-center col">
              <h3 class="text-h6 line-height">Crianças até 4 anos</h3>
              <small>crianças menores</small>
              <v-text-field 
                class="mx-auto"
                density="compact"
                hide-details
                v-model.number="dataConvidados.conv_child"
                variant="outlined"
                style="width: 130px;"
                readonly>
                <template v-slot:prepend>
                  <v-btn 
                  @click="dataConvidados.conv_child--"
                  :disabled="dataConvidados.conv_child <= 0"
                  density="compact" icon="mdi-minus" color="red"></v-btn>
                </template>
                <template v-slot:append>
                  <v-btn 
                    @click="dataConvidados.conv_child++"
                    :disabled="4 <= dataConvidados.conv_child"
                    density="compact" icon="mdi-plus" color="success"></v-btn>
                </template>
               </v-text-field>
            </v-col>
            <v-col cols="6" sm="3" md="4" v-if="readConvidado.conv_child_maior" class="text-center col">
                <h3 class="text-h6 line-height"> Crianças de 4 a 10 anos</h3>
                <small>crianças maiores</small>
                <v-text-field 
                class="mx-auto"
                density="compact"
                hide-details
                v-model.number="dataConvidados.conv_child_maior"
                variant="outlined"
                style="width: 130px;"
                readonly>
                <template v-slot:prepend>
                  <v-btn 
                  @click="dataConvidados.conv_child_maior--"
                  :disabled="dataConvidados.conv_child_maior <= 0"
                  density="compact" icon="mdi-minus" color="red"></v-btn>
                </template>
                <template v-slot:append>
                  <v-btn 
                    @click="dataConvidados.conv_child_maior++"
                    :disabled="2 <= dataConvidados.conv_child_maior"
                    density="compact" icon="mdi-plus" color="success"></v-btn>
                </template>
               </v-text-field>
            </v-col>
          </v-row>
        </div>
        <v-form class="formulario" @submit.prevent="confirmar()">
          <v-textarea
            label="Mensagem"
            variant="outlined"
            placeholder="Deixe uma mensagem para o Theodoro e família."
            v-model="msg"
          ></v-textarea>
          <div class="d-flex justify-space-between">
            <v-btn @click="type=1, dialog = true"  color="error">NÃO PODEREI IR</v-btn>
            <v-btn @click="type=2, dialog = true" color="success" class="ml-2">MISSÃO ACEITA</v-btn>
          </div>
          <v-alert class="mt-5">
            <p class="d-flex justify-center align-center"> <v-icon>mdi-exclamation-thick</v-icon>Confirmar até 04/11/2024.</p>
          </v-alert>
        </v-form>
    </div>
    <div v-if="readConvidado.not_go" class="not_go">
      <img src="../../assets/porg.png">
        <p class="text-center px-2">Que pena, esperaremos {{ readConvidado.name_child }} na próxima luta contra os sith!</p>
    </div>
    <div v-if="readConvidado.confirm" class="confirm">
      <img src="../../assets/familia_2.png">
      <p class="mt-15">Bem-vindo a Resistência!! <br> <br> Te esperamos no <br> dia 09/11/2024  às 12hrs. <br> Restaurante Amendoeira <br>
        <h2 class="text-h5 px-2 my-2 text-yellow">Que a Diversão esteja com você!</h2> 
      </p>
    </div>
  </div>
  <v-dialog
      v-model="dialog"
      width="500px"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-cake"
        title="Confirmação"
        class="dialog"
      >
       <v-card-text>
        <div v-if="type == 1">
            Você informou que não poderá comparecer.
        </div>
        <div v-if="type == 2">
            Você confirmou que irá comparecer!
            <div class="bg-grey-darken-3 mt-3 pa-2">
              Número de Convites: <br>
              Adulto: {{dataConvidados.conv_adults}} <br>
              <span v-if="dataConvidados.conv_child">Criança até 4 anos: {{ dataConvidados.conv_child }}</span> <br>
              <span v-if="dataConvidados.conv_child_maior">Criança até 10 anos: {{ dataConvidados.conv_child_maior }}</span>
            </div>
        </div>
        <h3 class="text-h6 my-3">Confirma a operação?</h3>
        <div class="d-flex justify-center">
          <v-btn @click="dialog = false">Cancelar</v-btn>
          <v-btn @click="confirmar()" color="success">SIM</v-btn>
        </div>
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
        type: 0,
        msg: null,
        dialog: false,
        dataConvidados: {
          conv_child: 0, 
          conv_child_maior: 0, 
          conv_adults: 0
        }
      }
    },
    computed:{
      readConvidado(){
        return conviteStore.readConvidado
      }
    },
    methods:{
      confirmar(){
        if(this.type == 1) {
          conviteStore.not_go(this.readConvidado.id)
          this.dialog = false
        }
        if(this.type == 2) {
          const convite = {...this.dataConvidados}
          convite.confirm = true
          convite.msg = this.msg
          conviteStore.editInvite(convite)
          this.dialog = false
        }
      },
      copyDataConvidados(){
        setTimeout(()=>{
          this.dataConvidados = { ...this.readConvidado }
        }, 2000)
      }
    },
    mounted(){
      this.copyDataConvidados()
    }
  }
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  min-height: 100vh;
  background-image: 
    radial-gradient(1px 1px at 10% 20%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 30% 40%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 70% 90%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 80% 30%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 50% 60%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 90% 10%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 20% 80%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 40% 20%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 60% 10%, white 80%, transparent 100%),
    radial-gradient(1.5px 1.5px at 75% 85%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 85% 45%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 15% 35%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 25% 75%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 95% 65%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 65% 55%, white 80%, transparent 100%),
    radial-gradient(1.5px 1.5px at 35% 90%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 50% 10%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 5% 50%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 90% 85%, white 80%, transparent 100%),
    radial-gradient(2px 2px at 55% 30%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 45% 65%, white 80%, transparent 100%),
    radial-gradient(1px 1px at 75% 25%, white 80%, transparent 100%),
    radial-gradient(1.5px 1.5px at 35% 40%, white 80%, transparent 100%);
  background-size: 100% 100%; /* Preencher a tela inteira */
}
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
.content .nave{
  width: 50%;
  position: absolute;
  animation: aumenntar 1ms ease-in-out forwards;
  animation-timeline: view();
  animation-range: cover 20% cover 110%;
  opacity: 0;
}
@keyframes aumenntar {
  from{
    transform: scale(3);
    translate: -100vw;
    opacity: .5;
  }
  to{
    transform: scale(1);
    translate: 180vw;
    opacity: 1;
  }
}
.title{
  position: relative;
  margin: 1rem;
}
.name_convidado{
  position: relative;
  display: inline-block;
  text-align: center;
}
.name_convidado::before, .name_convidado::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    height: 5px;
    background-color: rgb(238, 228, 228);
}
.name_convidado::before {
    left: 0;
    right: auto;
    width: 20%;
    margin: 0 10px; /* Espaço antes do nome */
}
.name_convidado::after {
    right: 0;
    left: auto;
    width: 20%;
    margin: 0 10px; /* Espaço depois do nome */
}
.col{
  background: #212121;
  margin: 2px;
}
.formulario{
  z-index: 10;
}
.line-height{
  line-height: 1.1;
}
.not_go{
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: not_appear 1s forwards;
}
@keyframes not_appear {
  from{
    opacity: 0;
    scale: 0;
  }
  to{
    opacity: 1;
    scale: 1;
  }
}
.not_go img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  object-fit: cover;
  opacity: 0;
}
.confirm{
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: not_appear 1s forwards;
}
.confirm img{
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translate(-50%);
  width: 50%;
  height: 50%;
  object-fit: cover;
  opacity: 0;
}
.dialog{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
@media (max-width:500px) {
  .title img:nth-child(1){
    top: 400px;
  }
  .title img:nth-child(2){
    top: -160px;
  }
  .confirm img{
    width: 40%;
    height: 40%;
  }
  .name_convidado::before {
    width: 10%;
    margin: 0 10px; /* Espaço antes do nome */
  }
  .name_convidado::after {
      width: 10%;
      margin: 0 10px; /* Espaço depois do nome */
  }
}
@media (max-width:500px) {
  .title-confirmar{
    font-size: 1.6rem;
  }
}
</style>