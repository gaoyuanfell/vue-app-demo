import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        zIndex: 10000
    },
    getters: {
        getZindex: state => {
            return state.zIndex++
        }
    },
    modules: {
        home
    },
})
