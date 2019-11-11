<template>
  <div class="wrapper">
    <div class="page-header header-filter">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <img :src="background" alt />
              <!--   <div class="md-layout md-gutter md-alignment-center">
                  <h3>" Um slogan top deve ficar aqui" </h3>        
              </div>-->
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item"></div>
              <div class="md-layout-item">
                <md-button
                  @click="redirectToCategorias"
                  class="botao"
                >Encontre sua Celebridade</md-button>
                <br />
              </div>
              <div class="md-layout-item"></div>
            </div>
            <div class="md-layout md-gutter md-alignment-center-center" v-if="showLoading">
                <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
            </div>
          </div>
        </div>
      </div>
    </div>
    <WeekNew></WeekNew>
    <Featured></Featured>
    <Reactions></Reactions>
  </div>
</template>

<script>
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/NavigationSection";
import SmallNavigation from "./components/SmallNavigationSection";
import Tabs from "./components/TabsSection";
import NavPills from "./components/NavPillsSection";
import Notifications from "./components/NotificationsSection";
import TypographyImages from "./components/TypographyImagesSection";
import JavascriptComponents from "./components/JavascriptComponentsSection";
import Card from "@/components/Card";
import VideoPlayer from "@/components/VideoPlayer";
import WeekNew from "./components/WeekNew";
import Featured from "./components/Featured";
import Reactions from "./components/Reactions";
export default {
  components: {
    BasicElements,
    Navigation,
    SmallNavigation,
    Tabs,
    NavPills,
    Notifications,
    TypographyImages,
    JavascriptComponents,
    Card,
    VideoPlayer,
    WeekNew,
    Featured,
    Reactions
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    },
    background: {
      type: String,
      default: require("@/assets/gif/Ovideo.gif")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false,
      amount: 100,
      showLoading: false
    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = true;
      }
    },
    redirectToCategorias() {
      this.showLoading = true;
      setTimeout(() => {
        this.$router.push("/categorias");
      }, 3000);
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  }
};
</script>
<style lang="scss">
.page-header {
  background-image: url("../assets/img/AGORA.png");
  /*background: #fc00ff;  /* fallback for old browsers 
background: -webkit-linear-gradient(to right, #00dbde, #fc00ff);  Chrome 10-25, Safari 5.1-6 
background: linear-gradient(to right, #00dbde, #fc00ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.player {
  position: absolute !important;
  width: 100%;
  height: 60%;
}
.vjs-custom-skin {
  height: 60% !important;
}

.vjs-custom-skin /deep/ .video-js {
  height: 60%;
}

.brand {
  width: 600px;
}

.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }

  .md-raised{
    border-radius: 10px !important ;
    height: 50px !important;
    font-size: 16px !important;
  }
  .md-raised .md-primary{
    background: white !important;  
  }

   .md-layout-item .botao{
    background: white !important;
    border-radius: 5px !important;
    border-style: solid !important;
    color: black !important
  }
}
</style>
