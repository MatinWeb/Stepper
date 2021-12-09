import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    informations: {
      name: null,
      lastName: null,
      email: null,
      phone: null,
      address: null
    }
  },
  mutations: {
    setInfo(state, info) {

      Object.keys(info).forEach((key) => {

        Vue.set(state.informations, key, info[key])
      })
      console.log(state.informations);
    },
  },

})
