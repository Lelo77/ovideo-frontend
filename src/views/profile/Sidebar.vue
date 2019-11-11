<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in items" :key="item.name" :title="item.name" @click="click(item.emmit)">
        <font-awesome-icon :icon="item.icon" size="2x"/>
        <div>
          <p>{{item.name}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[
        {
          name:"Meus pedidos",
          icon:['fas', 'file-alt'],
          emmit:"orders"
        },
       {
          name:"Meus Vídeos",
          icon:['fas', 'play-circle'],
          emmit:"videos"
        }
      ]
    }
  },
  methods:{
    click(emmit){
      this.$emit("page", emmit);
    }
  }
}
</script>

<style lang="scss">
  .sidebar{
    height: calc(100vh);
    padding-top: 60px;
    width: 20%;
    background-color: rgb(220,220,220);
    display: inline-block;
    ul{
      list-style: none;
      padding: 0;
      li{
        width: 100%;
        padding: 15px 25px;
        border-bottom: 2px solid rgba(0,0,0,0.1);
        cursor: pointer;
        &:hover{
          color: rgba(25,25,25,0.5)
        }
        div{
          display: inline-block;
          padding: 0 20px;
          p{
            font-size: 20px;
            display: table-cell;
          }
        }
      }
    }
  }
</style>