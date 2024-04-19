<script setup>
  import { RouterLink } from 'vue-router'
</script>


<template>
  <header>
    <nav>
      <RouterLink to="{ name: 'home' }">Accueil</RouterLink>
      <RouterLink to="{ name: 'list' }">Projets</RouterLink>
      <RouterLink to="{ name: 'contact' }">Contact</RouterLink>
    </nav>
  </header>
</template>


<style scoped>

  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

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

  @media (min-width: 1024px) {

    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }

  }

</style>