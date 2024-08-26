<template>
  <v-row>
    <v-col
      v-for="(country, i) in countries"
      :key="i"
      lg="4"
      md="4"
      sm="4"
      cols="12"
      class="col-country"
    >
      <div>
        <div>
          <router-link to="/contact-us" class="header-country text-subtitle-1">
            {{ country.countryName }}
          </router-link>
        </div>
        <div class="body-country d-flex">
          <v-icon
            color="white"
            x-small
          >
            mdi mdi-phone-outline
          </v-icon>
          <div class="header-country text-body-1">
            {{ country.countryPhoneNumber }}
          </div>
        </div>
        <div class="body-country d-flex second">
          <v-icon
            color="white"
            x-small
          >
            mdi mdi-email-outline
          </v-icon>
          <div class="header-country text-body-1">
            {{ country.countryEmail }}
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
    <script>
    import { mapState } from 'vuex'
      export default {
        data() {
          return {
            countries: []
          };
        },
        created () {
        this.initialize()
        },
        computed: {
          ...mapState('app', ['language']),
        },
        methods: {
          initialize(){
            this.list()
          },
          list(){
            const me = this

            this.$http
              .get('api/Countries/GetCountriesFE')
              .then((response) => {
                me.countries = response.data
              })
              .catch((error) => {
                console.log(error)
              })
          }
        }
      };
    </script>
    