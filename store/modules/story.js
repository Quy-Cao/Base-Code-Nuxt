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
      if(resApi.message === 'succes') {
        commit('setListStory', resApi.story_news)
      }
    },
  }
}