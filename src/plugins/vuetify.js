import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);



export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#de1519',
                success: '#3EB75E',
                accent: '#FF7F5C',
                teal: '#26B0A1',
                warning: '#FF8F3C',
                error: '#FF585A',
                cyan: '#42D3D5',
            },
        },
    },
    // lang: {
    //     current: config.locales.locale,
    //     // To use Vuetify own translations without Vue-i18n comment the next line
    //     t: (key, ...params) => i18n.t(key, params)
    // },
    icons: {
        iconfont: 'mdi', 
    }
});