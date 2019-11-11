import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    logged:localStorage.getItem("token")!=null
  },
  mutations:{
    setLoggedTrue: (state)=>{
      state.logged = true;
    },
    setLoggedFalse: (state)=>{
      state.logged = false;
    }
  },
  getters:{
    
  }
})

export default store;