<template>
      <v-row class="custom-row" dense>
        <v-col cols="12" :class="style1">
              <h1 class="highlight-municipality-title highlight-main-name" v-html="name"></h1>
        </v-col>
        <v-col cols="4">
          <v-col cols="12 pb-4 pl-0">
          <v-card
            dark
            :class="style2"
          >
            <v-card-title class="highlight-title">
              Extension Territorial
            </v-card-title>

            <v-card-subtitle v-html="highlight1value" class="highlight-value"></v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12 pb-4 pl-0">
          <v-card
            :class="style3"
          >
            <v-card-title class="highlight-title">
              Densidad Poblacional
            </v-card-title>

            <v-card-subtitle v-html="highlight2value" class="highlight-value-secondary"></v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="12 pb-4 pl-0">
          <v-card
            :class="style3"
          >
            <v-card-title class="highlight-title">
              Número de distritos
            </v-card-title>

            <v-card-subtitle v-html="highlight3value" class="highlight-value-secondary"></v-card-subtitle>
          </v-card>
        </v-col>
      </v-col>
      <v-col cols="8" class="highlight-image-col">
        <img :src="image" alt="Header Image" class="highlight-image" />
      </v-col>  
    </v-row>
</template>

<script>
import item from '../../municipalities/municipality'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'CustomCountry',
  data() {
      return {
        information: {},
        municipalities: item.municipalities,
        style1: '',
        style2: '',
        style3: '',
        image: '',
        name: '',
        highlight1value: '',
        highlight2value: '',
        highlight3value: '',
      };
    },
  created(){
    this.chargeInfo(this.id)
  },
  watch:{
    id(val){
      this.chargeInfo(val)
    },
    information(val) {
      this.style1 = this.getClass('highlight-color')
      this.style2 =this.getClass('highlight1')
      this.style3 =this.getClass('highlight-secondary')
      this.image =this.getImage()
    },
  },
  computed: {
    ...mapState('app', ['id']),
  },
  methods: {
    ...mapMutations('app', ['setId']),
    chargeInfo(val){
      const index = this.municipalities.findIndex(municipality => municipality.abbreviation === val);
      this.information = this.municipalities[index]
      this.name = this.information.name
      this.highlight1value = this.information.highlight1.value
      this.highlight2value = this.information.highlight2.value
      this.highlight3value = this.information.highlight3.value
    },
    getClass(initial) {
      // console.log(this.information)
      return `${initial} ${this.information.abbreviation.slice(0, 2)}`
    },
    getImage() {
      return require('../../assets/images/municipalities/'+ this.information.abbreviation +'.jpg')
    }
  }
};
</script>
