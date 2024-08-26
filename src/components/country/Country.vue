<template>
      <v-row class="custom-row" dense>
        <v-col cols="4">
          <v-card
            dark
            :class="getClass('highlight1')"
          >
            <v-card-title class="highlight-title">
              Extension Territorial
            </v-card-title>

            <v-card-subtitle v-html="information.highlight1.value" class="highlight-value"></v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            :class="getClass('highlight-secondary')"
          >
            <v-card-title class="highlight-title">
              Densidad Poblacional
            </v-card-title>

            <v-card-subtitle v-html="information.highlight2.value" class="highlight-value-secondary"></v-card-subtitle>
          </v-card>
        </v-col>
        <v-col cols="4">
          <v-card
            :class="getClass('highlight-secondary')"
          >
            <v-card-title class="highlight-title">
              Número de departamentos
            </v-card-title>

            <v-card-subtitle v-html="information.highlight3.value" class="highlight-value-secondary"></v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
</template>

<script>
import item from '../../municipalities/municipality'

export default {
  name: 'CustomCountry',
  data() {
      return {
        information: item.municipalities[0]
      };
    },
  methods: {
    getClass(initial) {
        return `${initial} ${this.information.abbreviation}`
      }
  }
};
</script>
