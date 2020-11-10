<template>
  <div>
    <template v-if="isLoading">
      <div class="fade-loading h-100 w-100"></div>
      <div class="loading-box">
          <img src="../assets/images/Spinner-1s-200px (2).svg" alt="">
      </div>
    </template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <nuxt-link class="navbar-brand" to="/">Nuxtjs</nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <nuxt-link to="/home" class="nav-link">Home</nuxt-link>
            </li>
          </ul>
          <select @change="handleChangeLangugage" class="btn btn-primary mr-3">
            <option v-for="lang in $i18n.locales" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
          </select>
          <button class="btn btn-success my-2 my-sm-0 mr-3" @click="handleClick">Logout</button>
        </div>
      </nav>
    </div>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
  const Cookies = process.client ? require('js-cookie') : undefined;
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        langs: ['en', 'ja']
      }
    },
    computed: {
      ...mapState({
        isLoading: state => state.isLoading,
      })
    },
    methods: {
      handleClick() {
        setTimeout(() => {
          this.$store.commit("setAuth");
          Cookies.remove('auth');
          this.$router.push("/login");
        }, 1000);
      },
      handleChangeLangugage(e) {
        this.$i18n.setLocale(e.target.value);
      }
    }
  }
</script>

