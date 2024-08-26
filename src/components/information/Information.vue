<template>
    <v-row class="custom-row" dense>
      <v-col cols="12" :class="style1">
            <h1 class="information-municipality-title information-main-name" v-html="title"></h1>
      </v-col>
    <v-col cols="12" 
          sm="6">
      <v-col cols="12 pb-4 pl-0">
        <v-card
          :class="style3"
        >
          <v-card-title class="information-title" v-html="categories.category1">
          </v-card-title>

          <v-card-subtitle v-html="highlightTable1" class="information-value-secondary"></v-card-subtitle>
          <div class="pl-3 pr-3 pb-3">
            <v-data-table
            dense
            :headers="headers"
            :items="category1Data"
            item-key="name"
            class="custom-table"
            hide-default-header
            hide-default-footer
            ></v-data-table>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12 pb-4 pl-0">
        <v-card
          :class="style3"
        >
          <v-card-title class="information-title" v-html="categories.category3">
          </v-card-title>

          <v-card-subtitle v-html="highlightTable3" class="information-value-secondary"></v-card-subtitle>
          <div class="pl-3 pr-3 pb-3">
            <v-data-table
            dense
            :headers="headers"
            :items="category3Data"
            item-key="name"
            class="custom-table"
            hide-default-header
            hide-default-footer
            ></v-data-table>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12 pb-4 pl-0">
        <v-card
          :class="style3"
        >
          <v-card-title class="information-title" v-html="categories.category4">
          </v-card-title>

          <v-card-subtitle v-html="highlightTable4" class="information-value-secondary"></v-card-subtitle>
          <div class="pl-3 pr-3 pb-3">
            <v-data-table
            dense
            :headers="headers"
            :items="category4Data"
            item-key="name"
            class="custom-table"
            hide-default-header
            hide-default-footer
            ></v-data-table>
          </div>
        </v-card>
      </v-col>
    </v-col>
    <v-col cols="12" 
          sm="6">
      <v-col cols="12 pb-4 pl-0">
        <v-card
          :class="style3"
        >
          <v-card-title class="information-title" v-html="categories.category2">
          </v-card-title>

          <v-card-subtitle v-html="highlightTable2" class="information-value-secondary"></v-card-subtitle>
          <div class="pl-3 pr-3 pb-3">
            <v-data-table
            dense
            :headers="headers"
            :items="category2Data"
            item-key="name"
            class="custom-table"
            hide-default-header
            hide-default-footer
            ></v-data-table>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12 pb-4 pl-0">
        <v-card
          :class="style3"
        >
          <v-card-title class="information-title" v-html="categories.category5">
          </v-card-title>

          <v-card-subtitle v-html="highlightTable5" class="information-value-secondary"></v-card-subtitle>
          <div class="pl-3 pr-3 pb-3">
            <v-data-table
            dense
            :headers="headers"
            :items="category5Data"
            item-key="name"
            class="custom-table"
            hide-default-header
            hide-default-footer
            ></v-data-table>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12 pb-4 pl-0">
        <v-card
          :class="style3"
        >
          <v-card-title class="information-title" v-html="categories.category6">
          </v-card-title>

          <v-card-subtitle v-html="highlightTable6" class="information-value-secondary"></v-card-subtitle>
          <div class="pl-3 pr-3 pb-3">
            <v-data-table
            dense
            :headers="headers"
            :items="category6Data"
            item-key="name"
            class="custom-table"
            hide-default-header
            hide-default-footer
            ></v-data-table>
          </div>
        </v-card>
      </v-col>
    </v-col>
    <v-col cols="12">
      <p class="simple-p">Fuente: (a) Encuesta de Hogares de Propósitos Múltiples (EHPM) 2023. ONEC; (b) Estimaciones y proyecciones de población por municipio según edad simple: 2023. Revisión 2021. ONEC; (c) Reporte diario de
        homicidios durante 2023. Policía Naciona Civil.</p>
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
      categories: item.categories,
      style1: '',
      style2: '',
      style3: '',
      image: '',
      title: '',
      highlight1value: '',
      highlight2value: '',
      highlight3value: '',
      highlightTable1: '',
      highlightTable2: '',
      highlightTable3: '',
      highlightTable4: '',
      highlightTable5: '',
      highlightTable6: '',
      category1Data: [], 
      category2Data: [], 
      category3Data: [], 
      category4Data: [], 
      category5Data: [], 
      category6Data: [], 
      headers: [
        { text: 'Description', value: 'description', align: 'start' },
        { text: 'Value', value: 'value', align: 'end' },
      ],
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
    this.style1 = this.getClass('information-color')
    this.style2 =this.getClass('highlight1')
    this.style3 =this.getClass('information-secondary')
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
    this.title = "Principales indicadores Socioeconómicos de " + this.information.name
    this.highlight1value = this.information.highlight1.value
    this.highlight2value = this.information.highlight2.value
    this.highlight3value = this.information.highlight3.value
    this.highlightTable1 = this.information.highlightTable1
    this.highlightTable2 = this.information.highlightTable2
    this.highlightTable3 = this.information.highlightTable3
    this.highlightTable4 = this.information.highlightTable4
    this.highlightTable5 = this.information.highlightTable5
    this.highlightTable6 = this.information.highlightTable6
    this.category1Data = this.information.category1 
    this.category2Data = this.information.category2
    this.category3Data = this.information.category3 
    this.category4Data = this.information.category4 
    this.category5Data = this.information.category5 
    this.category6Data = this.information.category6 
  },
  getClass(initial) {
    return `${initial} ${this.information.abbreviation.slice(0, 2)}`
  },
  getImage() {
    return require('../../assets/images/municipalities/'+ this.information.abbreviation +'.jpg')
  }
}
};
</script>
