<template>
  <div>
    <md-dialog :md-active.sync="showDialog" class="modal">
      <md-dialog-title>Detalhes do pedido</md-dialog-title>
      <div class="detail-text">
        <h5>O cliente pediu o seguinte vídeo:</h5>
        <p>{{detail}}</p>
      </div>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Fechar</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  export default {
    name: 'ModalDetalhes',
    data: () => ({
      showDialog: false,
      detail: ""
    })
  }
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
    min-height: 400px;
  }
  .detail-text{
    padding: 5px 20px;
    height: 260px;
  }
</style>