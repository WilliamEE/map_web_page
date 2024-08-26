// import configs from '../../configs'
import actions from './actions'
import mutations from './mutations'

// const { product, time, theme, currencies } = configs

// state initial values
const state = {
  id:'esv',
  pageCharge: false
  
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
