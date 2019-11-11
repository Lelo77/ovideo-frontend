<template>
  <div class="wrapper">
    <div class="section page-header" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card style="background: #556270;  /* fallback for old browsers */
              background: -webkit-linear-gradient(to right, #FF6B6B, #556270);  /* Chrome 10-25, Safari 5.1-6 */
              background: linear-gradient(to right, #FF6B6B, #556270); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
              ">
              <div class="md-layout md-gutter md-alignment-center card-title" slot="title">
                <img  style="width:50px" slot="title" class="card-title" src="@/assets/img/Ovideo.png"><br>
              </div>
              
               <div class="md-layout md-gutter md-alignment-center card-title" slot="title">
                <h4 style="display: block;width: 100%;">Inscrever-se</h4>
                <div style="display:block" class="md-alignment-center-center" v-if="loading">
                    <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
                </div>
              </div>
              
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email</label>
                <md-input v-model="email" type="email"></md-input>
                <small style="color:rgb(255, 120, 120);position:absolute; margin: 40px 0 0 80px;" v-if="emailError != ''">{{emailError}}</small>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Senha</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Confirme sua Senha</label>
                <md-input v-model="confirmation" type="password"></md-input>
                <small style="color:rgb(255, 120, 120);position:absolute; margin: 40px 0 0 80px;" v-if="passwordError != ''">{{passwordError}}</small>
              </md-field>
              <md-button slot="footer" @click="create" class="md-simple md-success md-lg">
                Inscrever-se
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard
  },
  bodyClass: "signin-page",
  data() {
    return {
      firstname: null,
      email: "",
      emailError: "",
      password: "",
      confirmation: "",
      passwordError: "",
      loading:false
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/AGORA.png")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods:{
    create(){
      this.emailError = "";
      this.passwordError = "";

      if(this.password == ""){
        this.passwordError = "Você precisa digitar uma senha";        
      }

      if(this.password != this.confirmation && this.passwordError == ""){
        this.passwordError = "As senhas e a confirmação não são iguais. Verifique!";
      }

      if(this.email == ""){
        this.emailError = "Você precisa digitar um e-mail.";
      }

      if(this.passwordError != "" || this.emailError != ""){
        return;
      }

      let data = {
        email:this.email,
        password: this.password,
        confirmation: this.confirmation
      }

      this.$http.post('/user/create', data).then(response=>{
        this.$swal({
          position:'top',
          type: 'success',
          title: "Sucesso!",
          text: 'Seu cadastro foi criado!',
          toast: true,
          timer: 3000,
          showConfirmButton: false
        });        
      })
    }
  }
};
</script>

<style lang="css"></style>
