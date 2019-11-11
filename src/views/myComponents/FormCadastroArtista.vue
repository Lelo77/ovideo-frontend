<template>
  <div>
    <md-toolbar class="t">
      <MainNavbar class="m" />
    </md-toolbar>
    <div class="md-layout md-gutter md-alignment-center-center">
      <md-content class="content" style="padding:16px;">
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <h4 style="text-align:center">Formulário de Inscrição</h4>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-field>
              <label>Número de Inscrição</label>
              <md-input v-model="artista.id" readonly></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-field :class="messageClass">
              <label>Nome da Celebridade</label>
              <md-input v-model="artista.nomeArtista" readonly></md-input>
              <span class="md-error">There is an error</span>
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <h6 style="text-align:left; text-transform: none;">
              Crie uma conta para gerenciar seus vídeos
              <strong>(opcional)</strong>
            </h6>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-field>
              <label>Email</label>
              <md-input v-model="artista.email"></md-input>
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-field>
              <label>Senha</label>
              <md-input type="password" v-model="artista.senha"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-field>
              <label>Confirme sua senha</label>
              <md-input type="password" v-model="artista.senha"></md-input>
            </md-field>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <h6 style="text-align:left; text-transform: none;">Dados da Conta Bancária</h6>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <p
              style="font-size:10px"
            >* É a conta que você deseja receber pelos seus vídeos que serão postados *</p>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-field>
              <label>Conta:</label>
              <md-input v-model="artista.conta"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-field>
              <label>Agência:</label>
              <md-input v-model="artista.agencia"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-autocomplete v-model="artista.banco" :md-options="bancos">
              <label>Selecione seu banco</label>
            </md-autocomplete>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <button
              @click="exibeTermosDeUso"
              style="font-size:10px; text-align:center"
            >Leia atentamente os Termos de uso</button>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-checkbox v-model="termosUso">
              <p style="font-size:10px; margin-top:0px;">Li e concordo com os termos de Uso</p>
            </md-checkbox>
          </div>
        </div>
        <div class="md-layout md-gutter md-alignment-top">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-button style="height:25px;" class="md-primary" @click="gravar">Gravar informações</md-button>
          </div>
        </div>
      </md-content>
    </div>
    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
        <md-dialog-alert
          :md-active.sync="second"
          md-title="Termos de uso"
          md-content="termos de uso termos de uso  termos de uso  termos de uso termos de uso termos de uso  termos de uso  termos de uso termos de uso termos de uso  termos de uso  termos de uso termos de uso termos de uso  termos de uso  termos de uso "
        />
      </div>
    </div>
  </div>
</template>
<script>
import MainNavbar from "@/layout/MainNavbar";

export default {
  components: {
    MainNavbar
  },

  data: () => ({
    bancos: [
      "654 Banco A.J.Renner S.A.",
      "246 Banco ABC Brasil S.A.",
      "025 Banco Alfa S.A.",
      "641 Banco Alvorada S.A.",
      "213 Banco Arbi S.A.",
      "019 Banco Azteca do Brasil S.A.",
      "029 Banco Banerj S.A.",
      "000 Banco Bankpar S.A.",
      "740 Banco Barclays S.A.",
      "107 Banco BBM S.A.",
      "031 Banco Beg S.A.",
      "739 Banco BGN S.A.",
      "096 Banco BM&F de Serviços de Liquidação e Custódia S.A",
      "318 Banco BMG S.A.",
      "752 Banco BNP Paribas Brasil S.A.",
      "248 Banco Boavista Interatlântico S.A.",
      "218 Banco Bonsucesso S.A.",
      "065 Banco Bracce S.A.",
      "036 Banco Bradesco BBI S.A.",
      "204 Banco Bradesco Cartões S.A.",
      "394 Banco Bradesco Financiamentos S.A.",
      "237 Banco Bradesco S.A.",
      "225 Banco Brascan S.A.",
      "M15 Banco BRJ S.A.",
      "208 Banco BTG Pactual S.A.",
      "044 Banco BVA S.A.",
      "263 Banco Cacique S.A.",
      "473 Banco Caixa Geral - Brasil S.A.",
      "412 Banco Capital S.A.",
      "040 Banco Cargill S.A.",
      "745 Banco Citibank S.A.",
      "M08 Banco Citicard S.A.",
      "241 Banco Clássico S.A.",
      "M19 Banco CNH Capital S.A.",
      "215 Banco Comercial e de Investimento Sudameris S.A.",
      "756 Banco Cooperativo do Brasil S.A. - BANCOOB",
      "748 Banco Cooperativo Sicredi S.A.",
      "075 Banco CR2 S.A.",
      "721 Banco Credibel S.A.",
      "222 Banco Credit Agricole Brasil S.A.",
      "505 Banco Credit Suisse (Brasil) S.A.",
      "229 Banco Cruzeiro do Sul S.A.",
      "266 Banco Cédula S.A.",
      "003 Banco da Amazônia S.A.",
      "083-3 Banco da China Brasil S.A.",
      "M21 Banco Daimlerchrysler S.A.",
      "707 Banco Daycoval S.A.",
      "300 Banco de La Nacion Argentina",
      "495 Banco de La Provincia de Buenos Aires",
      "494 Banco de La Republica Oriental del Uruguay",
      "M06 Banco de Lage Landen Brasil S.A.",
      "024 Banco de Pernambuco S.A. - BANDEPE",
      "456 Banco de Tokyo-Mitsubishi UFJ Brasil S.A.",
      "214 Banco Dibens S.A.",
      "001 Banco do Brasil S.A.",
      "047 Banco do Estado de Sergipe S.A.",
      "037 Banco do Estado do Pará S.A.",
      "039 Banco do Estado do Piauí S.A. - BEP",
      "041 Banco do Estado do Rio Grande do Sul S.A.",
      "004 Banco do Nordeste do Brasil S.A.",
      "265 Banco Fator S.A.",
      "M03 Banco Fiat S.A.",
      "224 Banco Fibra S.A.",
      "626 Banco Ficsa S.A.",
      "M18 Banco Ford S.A.",
      "233 Banco GE Capital S.A.",
      "734 Banco Gerdau S.A.",
      "M07 Banco GMAC S.A.",
      "612 Banco Guanabara S.A.",
      "M22 Banco Honda S.A.",
      "063 Banco Ibi S.A. Banco Múltiplo",
      "M11 Banco IBM S.A.",
      "604 Banco Industrial do Brasil S.A.",
      "320 Banco Industrial e Comercial S.A.",
      "653 Banco Indusval S.A.",
      "630 Banco Intercap S.A.",
      "077-9 Banco Intermedium S.A.",
      "249 Banco Investcred Unibanco S.A.",
      "M09 Banco Itaucred Financiamentos S.A.",
      "184 Banco Itaú BBA S.A.",
      "479 Banco ItaúBank S.A",
      "376 Banco J. P. Morgan S.A.",
      "074 Banco J. Safra S.A.",
      "217 Banco John Deere S.A.",
      "076 Banco KDB S.A.",
      "757 Banco KEB do Brasil S.A.",
      "600 Banco Luso Brasileiro S.A.",
      "212 Banco Matone S.A.",
      "M12 Banco Maxinvest S.A.",
      "389 Banco Mercantil do Brasil S.A.",
      "746 Banco Modal S.A.",
      "M10 Banco Moneo S.A.",
      "738 Banco Morada S.A.",
      "066 Banco Morgan Stanley S.A.",
      "243 Banco Máxima S.A.",
      "045 Banco Opportunity S.A.",
      "M17 Banco Ourinvest S.A.",
      "623 Banco Panamericano S.A.",
      "611 Banco Paulista S.A.",
      "613 Banco Pecúnia S.A.",
      "094-2 Banco Petra S.A.",
      "643 Banco Pine S.A.",
      "724 Banco Porto Seguro S.A.",
      "735 Banco Pottencial S.A.",
      "638 Banco Prosper S.A.",
      "M24 Banco PSA Finance Brasil S.A.",
      "747 Banco Rabobank International Brasil S.A.",
      "088-4 Banco Randon S.A.",
      "356 Banco Real S.A.",
      "633 Banco Rendimento S.A.",
      "741 Banco Ribeirão Preto S.A.",
      "M16 Banco Rodobens S.A.",
      "072 Banco Rural Mais S.A.",
      "453 Banco Rural S.A.",
      "422 Banco Safra S.A.",
      "033 Banco Santander (Brasil) S.A.",
      "250 Banco Schahin S.A.",
      "743 Banco Semear S.A.",
      "749 Banco Simples S.A.",
      "366 Banco Société Générale Brasil S.A.",
      "637 Banco Sofisa S.A.",
      "012 Banco Standard de Investimentos S.A.",
      "464 Banco Sumitomo Mitsui Brasileiro S.A.",
      "082-5 Banco Topázio S.A.",
      "M20 Banco Toyota do Brasil S.A.",
      "M13 Banco Tricury S.A.",
      "634 Banco Triângulo S.A.",
      "M14 Banco Volkswagen S.A.",
      "M23 Banco Volvo (Brasil) S.A.",
      "655 Banco Votorantim S.A.",
      "610 Banco VR S.A.",
      "370 Banco WestLB do Brasil S.A.",
      "021 BANESTES S.A. Banco do Estado do Espírito Santo",
      "719 Banif-Banco Internacional do Funchal (Brasil)S.A.",
      "755 Bank of America Merrill Lynch Banco Múltiplo S.A.",
      "744 BankBoston N.A.",
      "073 BB Banco Popular do Brasil S.A.",
      "078 BES Investimento do Brasil S.A.-Banco de Investimento",
      "069 BPN Brasil Banco Múltiplo S.A.",
      "070 BRB - Banco de Brasília S.A.",
      "092-2 Brickell S.A. Crédito, financiamento e Investimento",
      "104 Caixa Econômica Federal",
      "477 Citibank N.A.",
      "081- Concórdia Banco S.A.",
      "097-3 Cooperativa Central de Crédito Noroeste Brasileiro Ltda.",
      "085-x Cooperativa Central de Crédito Urbano-CECRED",
      "099-x Cooperativa Central de Economia e Credito Mutuo das Unicreds",
      "090-2 Cooperativa Central de Economia e Crédito Mutuo das Unicreds",
      "089-2 Cooperativa de Crédito Rural da Região de Mogiana",
      "087-6 Cooperativa Unicred Central Santa Catarina",
      "098-1 Credicorol Cooperativa de Crédito Rural",
      "487 Deutsche Bank S.A. - Banco Alemão",
      "751 Dresdner Bank Brasil S.A. - Banco Múltiplo",
      "064 Goldman Sachs do Brasil Banco Múltiplo S.A.",
      "062 Hipercard Banco Múltiplo S.A.",
      "399 HSBC Bank Brasil S.A. - Banco Múltiplo",
      "168 HSBC Finance (Brasil) S.A. - Banco Múltiplo",
      "492 ING Bank N.V.",
      "652 Itaú Unibanco Holding S.A.",
      "341 Itaú Unibanco S.A.",
      "079 JBS Banco S.A.",
      "488 JPMorgan Chase Bank",
      "014 Natixis Brasil S.A. Banco Múltiplo",
      "753 NBC Bank Brasil S.A. - Banco Múltiplo",
      "086-8 OBOE Crédito Financiamento e Investimento S.A.",
      "254 Paraná Banco S.A.",
      "409 UNIBANCO - União de Bancos Brasileiros S.A.",
      "230 Unicard Banco Múltiplo S.A.",
      "091-4 Unicred Central do Rio Grande do Sul",
      "084 Unicred Norte do Paraná"
    ],
    noError: null,
    required: null,
    textarea: null,
    hasMessages: false,
    termosUso: false,
    second: false,
    vertical: "center",
    horizontal: "center",
    artista: {}
  }),
  computed: {
    messageClass() {
      return {
        "md-invalid": this.hasMessages
      };
    }
  },
  methods: {
    exibeTermosDeUso() {
      console.log(this.second);
      this.second = true;
      console.log(this.second);
    },

    gravar() {
      if (this.termosUso === true) {
        this.$http
          .put("artistas/alterar", this.artista)
          .then(res=> {
            console.log("feito")
          }).catch((error)=>{
        console.error(error);
        this.$swal({
          position:'top',
          type: 'error',
          title: "Oops!",
          text: 'Verifique as informações abaixo e tente novamente mais tarde',
          toast: true,
          timer: 3000,
          showConfirmButton: false
        });
        this.loading = false;
      })
      }
    }
  },
  mounted() {
    this.$http
      .get("artistas/?id=" + this.$route.params.id)
      .then(response => (this.artista = response.data));

    // this.$http.get('banco').then(response => (this.bancos = response.data))
    //   console.log(this.artista)
  }
};
</script>

<style scoped>
.md-layout-item {
  height: 40px !important;
  margin-top: 8px;
  margin-bottom: 8px;
}

.content {
  width: 600px;
  height: 700px;
}

.t {
  height: 80px;
  background-color: #9c27b0 !important;
}
</style>