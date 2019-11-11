<script>
import Media from '@dongido/vue-viaudio'

export default {
  name: 'app',
  components: {
    Media
  },
    props:{
    videoWith: String,
    videoHeight: String,
    videoMarginL: String,
    videoMarginL: String,
    src: String,
  }
    }

</script>

<template>
  
    <Media 
	    :style="{width: `${videoWith}`, height:`${videoHeight}`, marginLeft:`${videoMarginL}`, marginTop:`${videoMarginL}`}"
      :kind="'video'"
      :controls="true"
      :src="src"
      :autoplay="true"
    />
  
</template>

