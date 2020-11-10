<template>
  <div class="container">
    <h1>Sign in</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value="quycao@gmail.com">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value="test">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
    </form>
    <button class="btn btn-primary" @click="postLogin">Submit</button>
  </div>
</template>

<script>
const Cookies = process.client ? require('js-cookie') : undefined
export default {
  middleware: "notAuthenticated",
  methods: {
    postLogin() {
      setTimeout(() => {
        const auth = {
          accessToken: "someStringGotFromApiServiceWithAjax"
        };
        this.$store.commit("setAuth", auth);
        Cookies.set('auth', JSON.stringify(auth.accessToken));
        this.$router.push("/");
      }, 1000);
      
    }
  }
};
</script>
