<template>
  <div class="fundo">
    <div class="md-layout md-gutter md-alignment-center-center">
      <md-autocomplete
        class="autocomplete"
        @change="preencheAutoComplete()"
        style="margin-top:110px !important"
        v-model="selectedArtista"
        :md-options="artistasAutoComplete"
      >
        <i class="material-icons">search</i>
        <label color="#0B0101">ARTISTAS & CATEGORIAS</label>
      </md-autocomplete>
      <div
        class="md-layout-item md-size-25"
        style="    margin: 48px 0px 0px 37% !important; position: absolute;"
      >
        <div class="select">
          <md-field>
            <md-select v-model="country" name="country" id="country" placeholder="Filtrar por">
              <md-option value="australia">Menor Preço</md-option>
              <md-option value="brazil">Maior Preço</md-option>
              <md-option value="japan">Recomendados</md-option>
              <md-option value="united-states">Popularidade</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
    </div>

    <div class="md-layout md-gutter md-alignment-center-right">
      <div class="md-layout-item md-size-10"></div>
    </div>
    <br />

    <div class="md-layout md-gutter md-alignment-top-center" style="padding-bottom: 20px;">
      <div class="md-layout-item md-size-20 md-small-hide">
        <strong style="margin-left: 55px; font-size:22px; ">CATEGORIAS</strong>
        <br />
        <div style="margin-left: 35px;" v-for="cat in lsCategorias" :key="cat.nome">
          <md-button
            @click="()=>{filtrarArtistaCat(cat.nome)}"
            class="primary md-mini"
          >{{cat.nome}} ({{cat.quantidade}})</md-button>
        </div>
      </div>

      <div class="md-layout-item" style="margin:2">
        <md-card
          @click.native="redirectDetailItem(item.id)"
          class="card"
          style="margin-left:20px;"
          v-for="item in paginatedCards"
          :key="item"
          v-on:click="teste()"
        >
          <md-card-media style="width:150px;height:180px;background:rgba(0,0,0,0.05)">
            <img v-if="item.urlFotoCard" :src="item.urlFotoCard" alt="people" style="height:180px;" />
          </md-card-media>
          <md-card-content>
            <p style="text-align:center">{{item.nomeArtista}}</p>
          </md-card-content>
          <md-card-actions>R$ {{item.valor ? item.valor : 0}}</md-card-actions>
        </md-card>
      </div>
      <div class="md-layout-item md-size-100" style="text-align:center">
        <jw-pagination
          :items="lsCards"
          :labels="paginationLabels"
          :pageSize="16"
          @changePage="onChangePage"
        ></jw-pagination>
      </div>
    </div>
  </div>
</template>


<script>
import VideoPlayer from "@/components/VideoPlayer";
import MainNavbar from "@/layout/MainNavbar";
import JwPagination from 'jw-vue-pagination';

export default {
  components: {
    VideoPlayer,
    MainNavbar,
    "jw-pagination":JwPagination
  },
  name: "AutocompleteStatic",
  data: () => ({
   selectedArtista: null,
    selectedEmployee: null,
    artistasAutoComplete: [],
    showLoading: false,
    lsCards: [],
    test: [...Array(25).keys()].map(i => ({ id: (i+1), urlFotoCard: null, nomeArtista:"Artista "+i, valor: 10+i })),
    lsCategorias:[],
    paginatedCards: [],
    paginationLabels:{
        first: 'Primeira',
        last: 'Última',
        previous: 'Anterior',
        next: 'Próxima'
    }
  }),
  methods: {
    onChangePage(pageOfItems) {
        this.paginatedCards = pageOfItems;
    },
    redirectDetailItem(id) {
      this.showLoading = true;
      setTimeout(() => {
        this.$router.push({ path: `/detalhes/${id}` });
      }, 1000);

      },

      teste(){
        console.log("funciona")
      },
      filtrarArtistaCat(nomeCategoria){
        this.$http.get("artistas/categoriaArtista?categoria="+nomeCategoria)
        .then(response => (this.lsCards = response.data));
      },
      preencheAutoComplete(){
        console.log(selectedArtista)
     
     //   this.$http.get("artistas/nomeArtista?"+palavra)
      //  .then(response => (this.lsCards = response.data))
        
      }
    
  },
     teste(){
        console.log("funciona");
    },
    filtrarArtistaCat(nomeCategoria) {
      this.$http.get("artistas/categoriaArtista?categoria="+nomeCategoria).then(response => (this.lsCards = response.data));
    },
    preencheAutoComplete(palavra) {
      this.$http
        .get("artistas//nomeArtista"+palavra).then(response => (this.lsCards = response.data))
    }
 
};
  mounted() {
    this.$http.get("artistas").then(response => (this.lsCards = response.data));
    console.log(this.lsCards);

    this.$http
      .get("categorias")
      .then(response => (this.lsCategorias = response.data));
    console.log(this.lsCategorias);
  }
};
</script>

<style lang="scss" scoped>
.page-header {
  background-color: white !important;
}
.header-filter {
  background-color: rgb(132, 7, 170) !important;
}
.autocomplete {
  width: 300px;
}

.page-header {
  background: "#ffff" !important;
  height: 90px;
}

.primary {
  width: 200px;
  color: rgb(252, 244, 244) !important;
  background-color: rgb(153, 12, 158) !important;
  border-radius: 15px 0px 15px 0px;
  padding: 4px;
  text-align: left !important;
  font-family: inherit !important;
}
.img {
  width: 200px !important;
  height: 250px !important;
  border-radius: 5px !important;
}
.card {
  margin: 30px auto;
  width: 150px;
  height: 310px;
  border-radius: 5px 0px 10px 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.4s;
  display: inline-block;
  vertical-align: top;
}

.row:hover > [class*="box"] {
  background-color: red;
}

.select {
  float: right;
  margin-bottom: 10%;
  padding-top: 0px;
  margin: 0px;
  margin-right: 2%;
}

.wrapper {
  display: flex;

  background-color: #fff;
  color: #444;
}

.box {
  color: black;
  border-radius: 0px;
  padding: 10x;
  margin-left: 10px;
  width: 100%;
  font-size: 150%;
}

.card:hover {
  transform: scale(1.05, 1.05);
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.button {
  border-radius: 6%;
  flex-wrap: nowrap;
  margin-top: 0px !important;
  background: #283048; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #859398,
    #283048
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    #859398,
    #283048
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.fundo {
  background-color: #fff;
}
</style>