<template>
  <div>
    <!-- Start 404 Page  -->
    <div class="error-page-inner bg_color--4">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner">
              <h1 >404!</h1>
              <h3 >{{ $t('pageNotFound.title') }}</h3>
              <span>{{ $t('pageNotFound.subtitle') }}</span>
              <div >
                <router-link to="/"
                  >{{ $t('pageNotFound.button') }}</router-link
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>

  import { mapMutations} from 'vuex'

  export default {
    data() {
      return {};
    },
  };
</script>
