import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import SignIn from "./views/SignIn.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Categoria from "./views/myComponents/Categorias.vue";
import Detalhes from "./views/myComponents/DetalhesItem.vue";
import FormCadastro from "./views/myComponents/FormCadastroArtista.vue";
import CadastroArtista from "./views/myComponents/CadastroArtista.vue";
import MainHeader from "./layout/MainHeader.vue"
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

let router = null;

function authenticated(to, from, next){
  if(localStorage.getItem("token") != null){
    let formData = new FormData();
    let token  = localStorage.getItem("token").split(" ");
    formData.append('token', token[1]);

    axios.post('/security', formData).then(response=>{
      axios.post('/security/obter-perfil', formData).then(response=>{
        let artist = response.data.filter((role=>{
          return role.authority == "ROLE_ARTISTA"
        }))

        if(artist.length > 0){
          if(to.name == "login"){
            next("/profile");
          }      
          next();
        }else{
          if(to.name == "profile"){
            next("/categorias");
          }

          next();
        }
      })
    }).catch(()=>{
      next("/login");
      localStorage.removeItem("token")
    })
  }else{
    if(to.name != "login"){
      next("/login");
      localStorage.removeItem("token")
    }

    next();
  }
}

Vue.use(Router);

 router = new Router({
  mode:'history',
  routes: [
    {
      path: "/cadastrar-artista",
      name: "CadastroArtista",
      components: {
        default: CadastroArtista
      }
    },
    {
      path: "/finalize-seu-cadastro/:id",
      name: "formulario",
      components: {
        default: FormCadastro,
        header:MainHeader,
        footer:MainFooter
      }
    },
    {
      path: "/detalhes/:id",
      name: "detalhes",
      components: {
        header:MainHeader,
        default: Detalhes
      }
    },
    {
      path: "/categorias",
      name: "categorias",
      components: {
        header:MainHeader,
        default: Categoria,
        footer: MainFooter
      }
    },
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: authenticated,
      components: { default: Login },
     
    },
    {
      path: "/inscrever-se",
      name: "inscrever-se",
      components: { default: SignIn },
     
    },
    {
      path: "/profile",
      name: "profile",
      components: { header:MainHeader, default: Profile },
      beforeEnter: authenticated,
      props: {
      }
    },
    {
      path: "/profile/orders",
      name: "orders",
      components: { header:MainHeader, default: Profile },
      beforeEnter: authenticated,
      props: {
      }
    },
    {
      path: "/profile/videos",
      name: "videos",
      components: { header:MainHeader, default: Profile },
      beforeEnter: authenticated,
      props: {
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;