<template>
 <div class="card-expansion">
    <md-card>
      <md-card-media>
          <app class="video"></app>
      </md-card-media>

     
    </md-card>
</div>
  
</template>

<style lang="scss" scoped>
  .md-card {
    width: 400px;
    height: 450px;
    margin: 2px;
    display: inline-block;
    vertical-align: top;
    align-content: center;
    padding: 10px, 20px, 30px;
  }

</style>

<script>
import VideoPlayer from './VideoPlayer'
import App from "@/components/VideoPlayer"

export default {
    components:{
        VideoPlayer,
        App
    },
    name: 'MediaCover'
}
</script>