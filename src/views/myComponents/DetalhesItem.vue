<template>
  <div class="fundo">
<<<<<<< HEAD
    <div
      class="md-layout md-gutter md-alignment-center"
      style="margin-left:1px; margin-bottom:2px;"
    >
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        style="margin-left:200px"
      >
        <video-player videoWith="600px" videoHeight="500px" :src="artista.urlVideoPrincipal" />
=======
   
  <div class="md-layout md-gutter md-alignment-center" style="padding-top: 80px; margin-left:1px; margin-bottom:2px;">

      <div class="md-layout-item md-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100" style="padding: 20px 220px">
        <a href="javascript:history.back()" class="md-button back-link"> Voltar </a>
      </div>
      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" style="margin-left:200px">
        <video-player videoWith="100%" videoHeight="400px" :src= "artista.urlVideoPrincipal" />
>>>>>>> f2c7f8db124d4467138ff63bf125e641ae4fc6b8
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        style="margin-top:0px !important;"
      >
        <h2>
          <br />
          <b>{{artista.nomeArtista}}</b>
        </h2>
        <h6>{{tituloProfissao}}</h6>
        <md-button class="md-raised md-primary" @click="openModal = true">
          <h6 class="tituloBotao">
            <img src="@/assets/gif/Ovideo.gif" style="width:80px;" />
            por R$
            <strong>{{artista.valor}},00</strong>
          </h6>
        </md-button>
        <br />
        <md-icon class="star">star</md-icon>
        <md-icon class="star">star</md-icon>
        <md-icon class="star">star</md-icon>
        <md-icon class="star">star</md-icon>
        <md-icon class="star">star</md-icon>
        <br />

        <h6>Tempo previsto de resposta: em até uma semana</h6>
        <md-icon class="timer">timer</md-icon>
        <md-content>
          <h6 class="descricao">{{artista.descricaoPrincipal}}</h6>
        </md-content>
      </div>
      <div class="md-layout-item md-medium-size-33 md-small-size-10 md-xsmall-size-10"></div>

      <div class="md-layout-item md-size-100 md-alignment-center">
        <br />
        <md-divider />
        <md-divider />
        <br />
        <h3 style="text-align:center;">
          Veja outros vídeos
        </h3>
      </div>
    </div>
      <div class="md-layout md-gutter md-alignment-center" style="margin-left:50px">
        <div class="md-layout-item" v-for="video in artista.urlVideos" :key="video">
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <VideoPlayer videoWith="500px" videoHeight="400px" :src="video"></VideoPlayer>
          </div>
        </div>
      </div>

    <!--- ####################### OPEN MODAL #################################-->

    <modal v-if="openModal" @close="classicModalHide">
      <template slot="header">
        <h3 class="modal-title">Confirmação de Compra</h3>
        <md-button
          class="md-simple md-just-icon md-round modal-default-button"
          @click="classicModalHide"
        >
          <md-icon>clear</md-icon>
        </md-button>
      </template>

      <template slot="body">
        <!-- Primeiro bloco - informações sobre o vídeo -->
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <h5>Esse vídeo é para quem ?</h5>
            <md-radio v-model="destinatario" value="mySelf">Para mim</md-radio>
            <md-radio v-model="destinatario" value="someone">Para Alguém</md-radio>
            <md-radio v-model="destinatario" value="marketing">Para uma marca ou empresa</md-radio>
          </div>
        </div>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <h5>O que você deseja ser dito no vídeo</h5>
            <md-field>
              <md-input v-model="sobreOvideo" placeholder="Descreva o conteúdo do vídeo"></md-input>
            </md-field>
          </div>
        </div>
        <!-- Primeiro bloco - informações do Cartão -->
        <!-- <div class="md-layout md-gutter">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <h5>Dados para Compra</h5>
            <md-field>
              <md-input v-model="initial" placeholder="Número do Cartao"></md-input>
            </md-field>
            <md-field>
              <md-input v-model="initial" placeholder="Código de Segurança"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-datepicker v-model="selectedDate">
              <label>Selecione a data</label>
            </md-datepicker>
          </div>
        </div> -->
      </template>

      <template slot="footer">
        <md-button class="md-simple" @click="finalizarCompra()">Finalizar Compra</md-button>
         
        <md-button class="md-danger md-simple" @click="classicModalHide">Cancelar</md-button>
      </template>
    </modal>
  </div>
</template> 
 
<script>
import VideoPlayer from "@/components/VideoPlayer";
import MainNavbar from "@/layout/MainNavbar";
import { Modal } from "@/components";
import { TheMask } from "vue-the-mask";
export default {
  components: {
    VideoPlayer,
    MainNavbar,
    Modal,
    TheMask
  },
  data: () => ({
    showDialog: false,
    clicked : false,
    required: true,
    openModal: false,
    artista: {},
    sobreOvideo: null,
    destinatario: false,
    PedidoDTO: {
      idArtista: null,
      idUsuario: null,
      destinatario: null,
      conteudoVideo: null,
      dtPedido: null,
      status: null
    }
  }),

  methods: {
    classicModalHide() {
      this.openModal = false;
    },
    sucesso() {
      (this.showDialog = false), (this.openModal = true);
    },
    finalizarCompra() {
      clicked=true
      this.PedidoDTO.destinatario = this.destinatario;
      this.PedidoDTO.idArtista = this.$route.params.id;
      this.PedidoDTO.conteudoVideo = this.sobreOvideo;

      this.$http
        .post("pedidos/salvar", this.PedidoDTO)
        .then(res =>{
          console.log(res)
          window.location.href= res.data
          this.$route.push(res.data)
        }).catch(()=>{
        this.$swal({
          position:'top',
          type: 'error',
          title: "Oops!",
          text: 'Verifique seu email e senha',
          toast: true,
          timer: 3000,
          showConfirmButton: false
        });
        this.loading = false;
      })
    }
  },
  mounted() {
    this.$http
      .get("artistas/?id=" + this.$route.params.id)
      .then(response => (this.artista = response.data));
  }
};
</script> 
 
<style scoped>
.descricao {
  font-family: Arial, Helvetica, sans-serif;
  text-transform: none;
  font-size: 18px;
}

h6 {
  color: black !important;
}
.star {
  color: yellow !important;
}

.timer {
  color: blue !important;
}

.md-dynamic-height .md-label {
  color: black !important;
  font-size: 18px !important;
}
.md-tabs
  .md-acento
  .md-tabs-wrapper
  .md-tabs-canvas
  .md-paginação-wrapper
  .md-ink-bar {
  color: #60c9f8; /* isso altera a cor da ondulação */
  background-color: #60c9f8; /* isso muda a cor da barra de tinta */
}

.fundo {
  background-color: white;
}


.back-link{
  text-align:center;
  padding: 10px 40px;
}
</style>

