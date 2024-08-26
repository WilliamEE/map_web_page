<template>
    <!-- <div
    v-if="pageCharge"> -->
    <div>
      <div class="map-slider text-center">
        <MapComponent @update-id="handleUpdateId" />
      </div>
      <div id="mun-image">
      <div v-if="id === 'esv'" class="country-section">
        <CustomCountry/>
      </div>
      </div>
      <div v-if="id !== 'esv'" class="munipality-section">
        <CustomMunicipality/>
      </div>
      <div class="information-section" >
        <CustomInformation/>
      </div>
    </div>
  </template>
  
  <script>
    import MapComponent from "../../components/maps/MapComponent.vue";
    import CustomCountry from "../../components/country/Country.vue";
    import CustomMunicipality from "../../components/municipality/Municipality.vue";
    import CustomInformation from "../../components/information/Information.vue";
    import { mapMutations, mapState } from 'vuex'
  
    export default {
      components: {
        MapComponent,
        CustomCountry,
        CustomMunicipality,
        CustomInformation
      },
      data() {
        return {
        };
      },
      created () {
        this.initialize()
      },
      computed: {
        ...mapState('app', ['id']),
      },
      async mounted() {
      },
      methods: {
        ...mapMutations('app', ['setId']),
        initialize(){
        },
        handleUpdateId(newId) {
          // Actualizamos el estado del padre con el mensaje recibido del hijo
          this.setId(this.id)
        },
      }
    };
  </script>
  
  <style scoped>
    .country-section, .munipality-section, .information-section {
      padding: 0% 5% 2% 5%;
    }
  </style>