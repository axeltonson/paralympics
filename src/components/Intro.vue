<template>
  <div class="intro">
    <p>Intro</p>
    <div>
      <share></share>
      <!-- TODO: Composant de changement de portrait à faire -->
    </div>
  </div>
</template>

<script>
import Share from '@/components/Share'

export default {
  name: 'Intro',
  data () {
    return {}
  },
  components: {
    Share
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.landing {
    p {
        font-size: 60px;
    }
}
</style>