<template>
  <div>
    <md-dialog :md-active.sync="showDialog" class="modal">
      <md-dialog-title>Upload de vídeo</md-dialog-title>
      <div class="modal-body">
        <h5>Selecione o arquivo que deseja enviar:</h5>
        <input type="file" id="file" ref="file" @change="handleFile()">
      </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="upload()">Enviar</md-button>
        <md-button style="background-color:rgb(255, 60, 60) !important" class="close-btn" @click="showDialog = false">Fechar</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'ModalUpload',
    data: () => ({
      showDialog: false,
      id: null,
      file: null
    }),
    methods:{
      handleFile(){
        this.file = this.$refs.file.files[0];
      },
      upload(){
        let formData = new FormData();
        formData.append('file', this.file);
        formData.append('id', this.id);

        this.$http.post( '/upload',formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(()=>{
          this.$parent.load();
          this.$swal({
            type: 'success',
            title: "Sucesso!",
            text: 'Seu arquivo foi enviado com sucesso.'
          });
          this.showDialog = false;
        })
        .catch(()=>{
          this.$swal({
            position:'top',
            type: 'error',
            title: "Oops!",
            text: 'Ocorreu um erro ao fazer seu upload, contacte o administrador do sistema.',
            toast: true,
            timer: 3000,
            showConfirmButton: false
          });
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
    min-width: 500px;
    min-height: 400px;
  }
  .modal-body{
    padding: 5px 20px;
    height: 260px;
  }
</style>