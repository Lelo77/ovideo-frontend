<template>
  <div>
    <md-toolbar class="t">
      <MainNavbar class="m" />
    </md-toolbar>
    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-size-30"></div>
      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-content>
          <md-steppers md-vertical>
            <md-step id="first" md-label="Cadastrar Celebridade" md-description="Optional">
              <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                  <md-field>
                    <label>Nome da Celebridade</label>
                    <md-input v-model="nomeCelebridade"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                  <md-field>
                    <label>Categoria</label>
                    <md-input v-model="categoria" required></md-input>
                    <span class="md-error">There is an error</span>
                  </md-field>
                </div>
              </div>
              <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"></div>
                <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                  <md-button class="md-primary" @click="gerarUrl">Gravar informações</md-button>
                </div>
              </div>
            </md-step>

            <md-step id="second" md-label="URL para Encaminhar">
              <h6>URL Gerada</h6>
              <br />
              <md-field>
                <label>URL</label>
                <md-input v-model="url" readonly></md-input>
              </md-field>
            </md-step>
            <!-- v-for="video in nrVideo" :key="video" -->
            <md-step id="third" md-label="UPLOAD de video">
              <div
                class="md-layout md-gutter md-alignment-center"
                v-for="video in nrVideo"
                :key="video"
              >
                <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                  <md-field>
                    <md-file v-model="video.urlVideo" placeholder="Selecione o vídeo" />
                  </md-field>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                  <button @click="imprimir">imprimir</button>
                </div>
              </div>
            </md-step>
          </md-steppers>
        </md-content>
      </div>
    </div>
  </div>
</template>

<script>
import FormCadastroArtista from "./FormCadastroArtista";
import MainNavbar from "@/layout/MainNavbar";
export default {
  components: {
    FormCadastroArtista,
    MainNavbar
  },
  data: () => ({
    idUrl: null,
    nomeCelebridade: null,
    categoria: null,
    url: null,
    urlVideo: null,
    nrVideo: 2,
    objVideo: {
      random: 0,
      urlVideo: null,
      descVideoPrincipal: null
    },
    lsVideo: [
      {
        random: 0,
        urlVideo: null,
        descVideoPrincipal: null
      }
    ],
    principal: null
  }),
  methods: {
    gerarUrl() {
      if (this.nomeCelebridade != null && this.categoria != null) {
        this.url =
          "http://localhost:8080/#/formulario-artista/" + this.idUrl; //futuramente o código do artista vai estar aqui.
      }
    },

    gerarNumeroAleatorio() {
      return Math.random();
    },
    imprimir() {
      console.log(this.lsVideo);
    },
    cadastrarArtista() {
      axios.push().then(response => (this.idUrl = reponse));
    }
  }
};
</script>


<style scoped>
.md-content {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

.t {
  height: 80px;
  background-color: #9c27b0 !important;
}
</style>