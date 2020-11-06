<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        base-code
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <!-- <button @click="handleClick">Call API</button> -->
        <button @click="testStore"> Click </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
    }
  },
  
  async created() {
    await this.getListStory();
  },

  computed: {
    ...mapState({
      listStory: state => state.story.listStory
    })
  },
  
  methods: {
    ...mapActions({
      getListStory: 'story/getListStory'
    }),
    testStore() {
      // this.$store.commit('setAuth', 'ok auth');
      console.log(this.$store.state.auth);
    }
  }
}
</script>

