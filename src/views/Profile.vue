<template>
  <div class="profile">
    <Sidebar @page="change"></Sidebar>
    <div class="page">
      <Pedidos v-if="openPage == 'orders'"></Pedidos>
      <Videos  v-if="openPage == 'videos'"></Videos>
    </div>
  </div>
</template>

<script>
import Sidebar from "./profile/Sidebar"
import Pedidos from "./profile/Pedidos"
import Videos from "./profile/Videos"
export default {
  components: {
    Sidebar,
    Pedidos,
    Videos
  },
  data() {
    return {
      openPage: null
    };
  },
  props: {
  },
  computed: {
  },
  methods:{
    change(item){
      console.log(item)
      this.$router.push(`/profile/${item}`)
      this.openPage = item;
    }
  },
  mounted(){
    if(this.$route.path == "/profile/orders"){
      this.openPage = "orders"
    }
  }
};
</script>

<style lang="scss" scoped>
  .profile{
    .page{
      display: inline-block;
      padding: 20px;
      width: 80%;
    }
  }
</style>
