<!--

*** HOW TO USE ***

1:  import Instagram from '@/components/Instagram'
2:  <instagram :url='"https://api.instagram.com/oembed?url=https://www.instagram.com/p/BQ0UzPRFvsE/"'></instagram>

-->

<template>
  <div class="instagram">
    <!-- <p>{{ title }}</p> -->
    <img :src="this.picture" :alt="title">
  </div>
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Instagram',
  data () {
    return {
      picture: '',
      title: ''
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      Axios.get(this.url)
      .then((response) => {
        this.picture = response.data.thumbnail_url
        this.title = response.data.title
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  props: [
    'url'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .instagram {
        img {
            width: 100%;
        }
      &::after {
        content: "";
        display: inline-block;
        width: 375px;
        height: 120px;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.0), #000000 65%, #000000);
        margin-top: -5px;
      }
    }
</style>
