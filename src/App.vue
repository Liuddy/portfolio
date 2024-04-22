<script setup>
  import { RouterView } from 'vue-router'
  import TheHeader from '@/components/TheHeader.vue'
  import TheFooter from '@/components/TheFooter.vue'
</script>


<template>
  <TheHeader v-if="$route.name !== 'home'"/>

  <main>
    <RouterView/>
  </main>

  <TheFooter/>
</template>


<style scoped>

  main {
    flex: 1;
    min-width: 100%;
  }

</style>