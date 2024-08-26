<template>
    <div>
      <!-- Start Contact Area  -->
      <div class="rn-contact-area rn-section-gap bg_color--1 initial-office">
        <div class="contact-form--1">
          <v-container>
            <Contact :data="aboutData">
              <img
                slot="contact-img"
                :src="aboutData.src"
                alt="trydo"
              />
            </Contact>
          </v-container>
        </div>
      </div>
      <!-- End Contact Area  -->
      <!-- Start Offices Area  -->
      <div class="rn-contact-area rn-section-gap bg_color--1 pt-0">
        <div class="contact-form--1">
          <v-container>
            <v-row>
              <v-col lg="12">
                <div class="section-title section-title--2 text-center" >
                  <h2 class="heading-title office-title mt-4 mb-0">{{ $t('contactUs.titleOffice') }}</h2>
                </div>
              </v-col>
            </v-row>
          </v-container>
            <Office />
        </div>
      </div>
      <!-- End Offices Area  -->
    </div>
  </template>

  <script>
    import Contact from "../components/contact/Contact.vue";
    import Office from "../components/office/Office.vue";

    import { mapMutations, mapState } from 'vuex'

    export default {
      components: { 
        Contact,
        Office 
    },
      data() {
        return {
          layout: {
            type: 2,
            titleEs: '',
            titleEn: '',
            descriptionEs: '',
            descriptionEn: '',
            image: ''
          },
          dataPage: [],
          aboutData: {
            titleEs: '',
            titleEn: '',
            src: '',
            firstParagraphEs: '',
            firstParagraphEn: '',
            secondParagraphEs: '',
            secondParagraphEn: ''
          },
        };
      },
      created () {
        this.setChargedPage(false)
        this.initialize()
      },
      computed: {
        ...mapState('app', ['language']),
      },
      async mounted() {
      },
      methods: {
        ...mapMutations('app', ['setLayout', 'setChargedPage']),
        initialize(){
          this.list()
        },
        list(){
          const me = this

          this.$http
            .get('api/PageInformations/GetPageInformationsByCodeFE/13')
            .then((response) => {
              me.dataPage = response.data[0]
              //General information
              me.layout.titleEs = me.dataPage.pageInformationTitle
              me.layout.titleEn = me.dataPage.pageInformationTitleEn
              me.layout.descriptionEs = me.dataPage.information
              me.layout.descriptionEn = me.dataPage.informationEn
              me.layout.image = me.dataPage.imageBanner
              me.setLayout(me.layout)

              //About Us first paragraph
              me.aboutData.titleEs = me.dataPage.pageParagraphs[0].pageParagraphTitle
              me.aboutData.titleEn = me.dataPage.pageParagraphs[0].pageParagraphTitleEn
              me.aboutData.firstParagraphEs = me.dataPage.pageParagraphs[0].firstParagraph
              me.aboutData.firstParagraphEn = me.dataPage.pageParagraphs[0].firstParagraphEn
              me.aboutData.secondParagraphEs = me.dataPage.pageParagraphs[0].secondParagraph
              me.aboutData.secondParagraphEn = me.dataPage.pageParagraphs[0].secondParagraphEn
              me.aboutData.src = me.dataPage.pageParagraphs[0].pageParagraphImage

              me.setChargedPage(true)
            })
            .catch((error) => {
              console.log(error)
            })
        },
      }
    };
  </script>
  
  <style></style>
  