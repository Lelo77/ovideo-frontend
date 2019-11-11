<template>
  <div class="pedidos">
    <h2>Pedidos</h2>
    <div class="table">
      <table>
        <thead>
          <tr>
            <td style="width: 10%">ID</td>
            <td style="width: 50%">Nome solicitante</td>
            <td style="width: 20%">Status</td>
            <td style="width: 20%">Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr v-if="tableData.length == 0 && !loading">
            <td colspan="4" style="font-weight:bold">Nenhum pedido encontrado</td>
          </tr>
          <tr v-if="loading">
            <td colspan="4" style="font-weight:bold">Carregando...</td>
          </tr>
          <tr v-for="item in tableData" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.solicitante}}</td>
            <td>{{item.status}}</td>
            <td>
              <i class="material-icons" title="Detalhes do vídeo" @click="openDetails(item.detail)">
                description
              </i>
              <i class="material-icons" title="Enviar video" @click="openUpload(item.id)">
                cloud_upload
              </i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ModalDetalhes ref="modalDetalhes"></ModalDetalhes>
    <ModalUpload ref="modalUpload"></ModalUpload>
  </div>  
</template>

<script>
import ModalDetalhes from './ModalDetalhes'
import ModalUpload from './ModalUpload'
export default {
  components:{
    ModalDetalhes,ModalUpload
  },
  data(){
    return{
      tableData:[],
      loading: false
    }
  },
  methods:{
    openDetails(detail){
      this.$refs.modalDetalhes.detail = detail;
      this.$refs.modalDetalhes.showDialog = true;
    },
    openUpload(id){
      this.$refs.modalUpload.id = id;
      this.$refs.modalUpload.showDialog = true;
    },
    load(){
      this.loading = true;
      this.tableData = [];
      this.$http.get('pedidos').then(response=>{
        this.tableData = response.data;
        this.loading = false;
      }).catch(()=>{
        this.$swal({
          position:'top',
          type: 'error',
          title: "Oops!",
          text: 'Ocorreu um problema ao recuperar os dados dos pedidos',
          toast: true,
          timer: 3000,
          showConfirmButton: false
        });
        this.loading = false;
      })
    }
  },
  mounted(){
    this.load();
  }
}
</script>

<style lang="scss">
  .pedidos{
    width: 100%;
    .table{
      padding: 20px;
      width: 100%;
      table{
        width: 100%;
        border-collapse: collapse;

        &,table, th, td {
          border: 1px solid rgba(0,0,0,0.2);
        }
        thead tr td{
          font-weight: bold;
          background: rgba(110, 60, 255, 0.5);
          color: #fff;
        }

        tbody tr{
          background: rgba(0,0,0,0.1);
          &:hover{
            background: rgba(0,0,0,0.13);
          }
        }

        td{
          padding: 5px 15px;
          text-align: center;
          i{
            cursor: pointer;
            padding: 5px;
          }
        }
      }
    }
  }
</style>>