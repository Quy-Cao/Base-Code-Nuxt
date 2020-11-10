<template>
  <div>
    <div>
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb pl-0 mb-0">
          <li class="breadcrumb-item"><nuxt-link to="/">Trang chủ</nuxt-link></li>
          <li class="breadcrumb-item"><nuxt-link to="/home">Home</nuxt-link></li>
        </ol>
      </nav>
    </div>
    <div class="d-flex flex-wrap">
      <div class="card mr-4 mb-4" style="width: 18rem;" v-for="storyNew in listStory" :key="storyNew.id">
        <img class="card-img-top" :src="`https://www.nae.vn/ttv/ttv/public/images/story/${storyNew.image}.jpg`" alt="Card image cap" height="300">
        <div class="card-body">
          <h2 class="card-title text-truncate" data-toggle="tooltip" data-placement="top" :title="storyNew.name">{{ storyNew.name }}</h2>
          <p class="card-text text-truncate" data-toggle="tooltip" data-placement="top" :title="storyNew.introduce">{{ storyNew.introduce }}</p>
          <button class="btn btn-success float-right mt-2" @click="handleClickRead(storyNew.id)">Đọc truyện</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex';

  export default {
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
      handleClickRead(idStory) {
        this.$router.push(`home/${idStory}/details`);
      }
    }
  }
</script>