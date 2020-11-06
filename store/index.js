import Vue from 'vue';
import Vuex from 'vuex';

import story from './modules/story';
import cp from 'cookie-parser';

const cookieparser = process.server ? cp  : undefined;

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    modules: {
      story
    },

    state() {
      return {
        auth: null,
        isLoading:false
      }
    },

    mutations: {
      setAuth (state, auth) {
        state.auth = auth
      },
      setLoading(state, payload) {
        state.isLoading = payload
      }
    },

    actions: {
      nuxtServerInit ({ commit, state }, { req }) {
        let auth = null;
        let checkCookie = req.headers.cookie.split("auth=")[1];
        if (checkCookie) {
          auth = cookieparser.JSONCookies(checkCookie)
          // console.log('parsed',typeof parsed);
          // try {
          //   auth = JSON.parse(parsed)
          //   console.log(auth);
          // } catch (err) {
          //   // No valid cookie found
          // }
        }
        commit('setAuth', auth)
        console.log(state);
      }
    }
  })
}

export default store;