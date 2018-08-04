import Vue from 'vue';
import Vuex from 'vuex';
import French from './data/french.json'
import English from './data/english.json';
import Spanish from './data/spanish.json';
import getters from './getters'

Vue.use(Vuex)

const state = {
    userLang: (navigator.language.substr(0,2) || navigator.userLanguage.substr(0,2)).toUpperCase(),
    lang: '',
    data: French
}

const mutations = {
    languageSwitcher (state,data) {
        switch (state.lang || state.userLang) {
            case 'FR':
                state.data = French;
                break;
            case 'EN':
                state.data = English;
                break;
            case 'ES':
                state.data = Spanish;
                break;
            default:
                break;
        }
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})