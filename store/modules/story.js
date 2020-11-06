export default {
  namespaced: true,
  state() {
    return {
      listStory: []
    }
  },

  mutations: {
    setListStory( state , payload) {
      state.listStory = payload;
    }
  },
  
  actions: {
    async getListStory({ commit }) {
      const resApi = await this.$axios.$get('home');
      if(resApi.type === 'success') {
        commit('setListStory', resApi.data)
      }
    }
  }
}