<template>
    <v-row
      align="center"
      class="row--35"
    >
      <v-col
        lg="12"
        md="12"
        sm="12"
        cols="12"
      >
        <svg-map 
          :map="mapa"
          :location-class="getLocationClass"
				  @mouseover="pointLocation"
				  @mouseout="unpointLocation"
				  @mousemove="moveOnLocation" 
          @click="clickLocation"
          class="svg-map-new"
        />
        <div
          class="examples__block__map__tooltip hidden-xs-only"
          :style="tooltipStyle"
        >
        <v-row >
          <v-col md="12" lg="12" cols="12" class="title-modal">
            {{ municipality.name }}
          </v-col>
        </v-row>
        </div>
      </v-col>
    </v-row>
</template>

<script>
  import { SvgMap } from "vue-svg-map";
  import mapa from "../../assets/images/svg/ElSalvador";
  import { getLocationName } from '../../utilities'
  import municipalityItem from '../../municipalities/municipality'
  import { mapState, mapMutations } from 'vuex'

  export default {
    // props: ['data'],
    // props: {
    //     id: {
    //       type: String,
    //       default: ''
    //     }
    //   },
    components: {
      SvgMap
    },
    data() {
      return {
        mapa,
        pointedLocation: null,
        municipality: {},
			  tooltipStyle: null,
        index: null,
        municipalities: municipalityItem.municipalities,
      };
    },
    created () {
        this.initialize()
      },
    computed: {
        ...mapState('app', ['id']),
      },
    methods: {
      ...mapMutations('app', ['setId', 'setPageCharge']),
      initialize(){
          this.setPageCharge(true)
      },
		pointLocation(event) {
      const index = this.municipalities.findIndex(municipality => municipality.abbreviation === event.target.id);

      this.municipality = this.municipalities[index]
		},
		unpointLocation(event) {
			this.pointedLocation = null
			this.tooltipStyle = { display: 'none' }
		},
		moveOnLocation(event) {
      //In this case we have the functionality in all the municipalities without belize
			this.tooltipStyle = {
				display: 'block',
				top: `${event.clientY + 10}px`,
				left: `${event.clientX - 100}px`,
			}
		},
		getLocationClass(location, index) {
      return `svg-map__location ${location.id.slice(0, 2)}`
		},
    clickLocation(event) {
      
			this.clickedLocation = getLocationName(event.target)
      // //In this case we have the functionality in all the municipalities without belize
      const index = this.municipalities.findIndex(municipality => municipality.abbreviation === event.target.id);
      // console.log(this.municipalities[index].abbreviation)
      // this.$emit('update-id', this.municipalities[index].abbreviation);
      this.setId(this.municipalities[index].abbreviation);

      const targetElement = document.getElementById('mun-image');
      //Verificar que el elemento existe antes de intentar desplazar la pantalla
      if (targetElement) {
          // Desplazar la pantalla al elemento
          targetElement.scrollIntoView({ behavior: 'smooth' });
          
          // Enfocar el elemento, si es necesario
          targetElement.focus();
      }
      
			// window.open(this.municipalities[index].offices[0].googleMapsLocation, '_blank')
		},
    clickLocationMobile(url) {
      window.open(url, '_blank')
    }
	},
  };
</script>