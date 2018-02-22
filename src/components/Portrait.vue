<template>
  <div class="portrait">
    <portrait-header></portrait-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import PortraitHeader from '@/components/PortraitHeader'

  export default {
    name: 'Portrait',
    components: {
      PortraitHeader
    }
  }
</script>
