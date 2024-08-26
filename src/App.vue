<template>
  <v-app id="inspire">
    <!-- <v-main v-show="pageCharge"> -->
    <v-main v-show="pageCharge">
      <!-- End Header Area -->
      <HeaderGeneral />
      <router-view></router-view>
      <!-- Start Footer Area  -->
      <FooterGeneral />
      <!-- End Footer Area  -->
    </v-main>
    <v-fab-transition v-show="pageCharge">
      <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        color="white"
        fixed
        width="50"
        height="50"
        bottom
        right
        @click="toTop"
      >
        <i class="fa fa-angle-up"></i>
      </v-btn>
    </v-fab-transition>
    <div
      class="loader"
      v-show="!pageCharge"
    >
      <v-progress-circular
        class="progress"
        :size="200"
        :width="10"
        indeterminate
      >
        <img
        style="width: 80%;"
                src="./assets/images/logo/PNUD_Loader.jpg"
                alt="Arias"
              >
      </v-progress-circular>
    </div>
  </v-app>
</template>

<script>
import HeaderGeneral from "./components/header/HeaderGeneral.vue";
import FooterGeneral from "./components/footer/FooterGeneral.vue";
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    HeaderGeneral,
    FooterGeneral
  },
  data: () => ({
    id: '',
    fab: false,
    bannerClass: 'breadcrumb-area rn-bg-color ptb--120 bg_image ',
    imgBanner: ''
  }),
  computed: {
    ...mapState('app', ['layout', 'pageCharge', 'language']),
  },
  mounted() {
    window.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    ...mapMutations('app', ['setId']),
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    handleClickOutside(event) {
      // if(!event.target.toString().includes('SVGPathElement')){
      //   this.setId('esv')
      // }
    }
  },
};
</script>

<style scoped>
.v-btn--is-elevated.v-btn--fab {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
.v-btn--icon.v-size--default .v-icon,
.v-btn--fab.v-size--default .v-icon {
  height: 30px;
  font-size: 30px;
  width: 30px;
}
.v-btn--fab.v-btn--fixed {
  z-index: 99;
}
.fa-angle-up {
  display: block;
  line-height: 48px;
  font-size: 22px;
  font-weight: 600;
  color: #de1519;
}
.v-btn--absolute.v-btn--bottom,
.v-btn--fixed.v-btn--bottom {
  bottom: 60px;
}

.v-btn--absolute.v-btn--right,
.v-btn--fixed.v-btn--right {
  right: 20px;
}
</style>
