import Vue from "vue";
import axios from "axios";
import MockAdapter from 'axios-mock-adapter'

var mock = new MockAdapter(axios, { delayResponse: 500 });

mock.onGet("/new-week").reply(200, require('../mock/newWeek.json'));
mock.onGet("/orders").reply(200, require('../mock/pedidos.json'));
mock.onPost("/upload").reply(200, {success:true});
mock.onPost("/validate-token").reply(200, {});
mock.onPost("/user/create").reply(200, {});
mock.onAny().passThrough();

//axios.defaults.baseURL = process.env.VUE_APP_API_URL;

axios.defaults.baseURL ="https://ovideo.herokuapp.com/";
if(localStorage.getItem("token") != null){
    axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
}

// axios.interceptors.request.use((config) => {
//     if(localStorage.getItem("token") != null){
//         config.headers.common['Authorization'] = localStorage.getItem("token");
//     }
//     return config;
// });

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})