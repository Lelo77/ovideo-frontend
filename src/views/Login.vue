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
                <h4 style="display: block;width: 100%;">Login</h4>
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
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Senha</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <md-button slot="footer" @click="login" class="md-simple md-success md-lg">
                Entrar
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
  bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
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
    login(){
      this.loading = true;
      this.$http.post("login",{
        email:this.email,
        senha:this.password
      }).then(response=>{
        localStorage.setItem("token",response.headers.authorization)
        this.$store.commit("setLoggedTrue");

        let formData = new FormData();
        let token  = response.headers.authorization.split(" ");
        formData.append('token', token[1]);

        this.$http.post('/security/obter-perfil', formData).then(response=>{
          let artist = response.data.filter((role=>{
            return role.authority == "ROLE_ARTISTA"
          }))

          if(artist.length > 0){
            this.$router.push("/profile"); 
          }else{
            this.$router.push("/categorias"); 
          }
        });
      }).catch((error)=>{
        console.error(error);
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
      .then(()=>{
        this.loading = false;
      })
    }
  }
};
</script>

<style lang="css"></style>
