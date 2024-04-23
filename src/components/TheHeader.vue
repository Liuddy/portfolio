<script setup>
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useStore } from '@/stores/PreferenceStore.js'

  const store = useStore()
  store.$switch() // TODO: changer à l'aide d'un bouton réactif
</script>


<template>
  <header>
    <nav v-if="$route.name !== 'home'">
      <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
      <RouterLink :to="{ name: 'list' }">Projets</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
      <RouterLink :to="{ name: 'about' }">À propos</RouterLink>
    </nav>
  </header>
</template>


<style scoped>

  header {
    display: flex;
    flex-direction: row;
    line-height: 1.5;
    margin-bottom: 2rem;
    place-items: center;
  }

  nav {
    font-size: 1rem;
    text-align: center;
    width: 100%;
  }

  nav a {
    border-left: 1px solid var(--color-background);
    display: inline-block;
    padding: 0 1rem;

    &:first-of-type {
      border: 0;
    }
  }

  nav a.router-link-exact-active {
    color: var(--color-text);

    &:hover {
      background-color: transparent;
    }
  }

</style>