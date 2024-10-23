<script setup>
  import { onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import { useStore } from '@/stores/PreferenceStore.js'

  const store = useStore()

  onMounted(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.getElementById('switchBtn').click()
  })
</script>


<template>
  <header>
    <nav v-if="$route.name !== 'home'">
      <RouterLink :to="{ name: 'home' }">Accueil</RouterLink>
      <RouterLink :to="{ name: 'project' }">Projets</RouterLink>
      <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
      <RouterLink :to="{ name: 'about' }">À propos</RouterLink>
    </nav>

    <label>
      <input id="switchBtn" type="checkbox" @change="store.$switchTheme()">
      <span>
        <p class="sun">&#9788;</p>
        <p class="moon">&#9789;</p>
      </span>
    </label>
  </header>
</template>


<style scoped>

  header {
    display: flex;
    flex-direction: row;
    line-height: 1.5;
    margin-bottom: 2rem;
    min-width: 100%;
    place-items: center;

    & nav {
      font-size: 1rem;
      margin-left: 38px;
      text-align: center;
      width: 100%;

      & a {
        display: inline-block;
        margin-left: 1px;
        padding: 0 1rem;

        &:first-of-type { margin-left: 0; }

        &.router-link-exact-active {
          color: var(--color-text);

          &:hover { background-color: transparent; }

        }

      }

    }

    & label {
      display: inline-block;
      margin-left: auto;
      min-height: 20px;
      min-width: 38px;
      position: relative;

      & input {
        display: none;

        &:checked + span {
          background-color: var(--color-elt-orange);

          &::before { transform: translateX(18px); }

          & p {
            transform: translateX(23px);

            &.sun { visibility: hidden; }

            &.moon { visibility: visible; }

          }

        }

      }

      & span {
        background-color: var(--color-elt-blue);
        border-radius: 20px;
        bottom: 0;
        color: black;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: 0.4s;

        &::before {
          background-color: white;
          border-radius: 50%;
          bottom: 2px;
          content: "";
          height: 16px;
          left: 2px;
          position: absolute;
          transition: 0.4s;
          width: 16px;
        }

        & p {
          bottom: -0.4px;
          font-size: 14px;
          font-weight: bold;
          left: 2.5px;
          position: absolute;
          transition: transform 0.35s;

          &.sun { visibility: visible; }

          &.moon { visibility: hidden; }

        }
        
      }

    }
    
  }

</style>