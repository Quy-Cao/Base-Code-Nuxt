<template>
  <div style="background: #d6d4d4">
    <div>
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb pl-0 mb-0">
          <li class="breadcrumb-item"><nuxt-link to="/">Trang chủ</nuxt-link></li>
          <li class="breadcrumb-item"><nuxt-link to="/home">Home</nuxt-link></li>
          <li class="breadcrumb-item">Story information </li>
        </ol>
      </nav>
    </div>
    <div class="d-flex">
      <div>
        <img :src="`https://www.nae.vn/ttv/ttv/public/images/story/${storyInfo.image}.jpg`" width="300" height="400"/>
      </div>
      <div class="ml-3">
        <h2 class="mb-3 mt-3">{{ storyInfo.name }}</h2>
        <p class="alert alert-primary mb-3" role="alert" style="width: 200px">{{ storyInfo.author }}</p>
        <div>
          <h4 class="mb-3 text-truncate" style="max-width: 780px">{{ storyInfo.introduce }}</h4>
        </div>
        <h3>{{ storyInfo.count_chapter }} chương</h3>
        <button class="btn btn-danger mt-3">Đọc từ đầu</button>
      </div>
    </div>
    <div class="mt-3 mb-3">
      <h2>Thông tin chi tiết</h2>
    </div>
    <div>
      <div class="alert alert-primary" role="alert">
        {{ storyInfo.introduce }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        storyInfo: {}
      }
    },
    async fetch() {
      let resApi = await fetch(`https://playful-archduke.glitch.me/api/story/info?id_story=${this.$route.params.slug}`).then(res => res.json());
      if(resApi.type == 'success') {
        this.storyInfo = resApi.data;
      }
      console.log(this.storyInfo);
    }
  }
</script>