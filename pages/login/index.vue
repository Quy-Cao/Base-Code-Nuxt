<template>
  <div class="container">
    <h1>Sign in to access the secret page</h1>
    <div>
      <label for="email">
        <input id="email" type="email" value="test" />
      </label>
      <label for="password">
        <input id="password" type="password" value="test" />
      </label>
      <button @click="postLogin">
        login
      </button>
      <p>The credentials are not verified for the example purpose.</p>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: " authenticated",
  methods: {
    postLogin(e) {
      setTimeout(() => {
        const auth = {
          accessToken: "someStringGotFromApiServiceWithAjax"
        };
        this.$store.commit("setAuth", auth);
        Cookie.set('auth', JSON.stringify(auth.accessToken));
        this.$router.push("/");
      }, 1000);
      
    }
  }
};
</script>
