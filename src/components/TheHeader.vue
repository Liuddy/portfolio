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
      <RouterLink :to="{ name: 'skill' }">Compétences</RouterLink>
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
nav {
  display: inline-flex;
  font-size: 1.15rem;
  gap: 0.2rem;
  margin-left: 2rem;
  place-content: center;
  text-align: center;
  width: 100%;

  a.router-link-exact-active {
    color: var(--color-text);
    background-color: transparent;
    cursor: auto;
  }
}

label {
  display: inline-block;
  margin-left: auto;
  min-height: 20px;
  min-width: 38px;
  position: relative;

  input {
    display: none;

    &:checked+span {
      background-color: var(--color-elt-orange);

      &::before {
        transform: translateX(18px);
      }

      p {
        transform: translateX(23px);

        &.sun {
          visibility: hidden;
        }

        &.moon {
          visibility: visible;
        }
      }
    }
  }

  span {
    background-color: var(--color-elt-blue);
    border-radius: 20px;
    color: black;
    cursor: pointer;
    inset: 0;
    position: absolute;
    transition: transform 0.4s;
    user-select: none;

    &::before {
      background-color: white;
      border-radius: 50%;
      bottom: 2px;
      content: "";
      height: 16px;
      left: 2px;
      position: absolute;
      transition: transform 0.4s;
      width: 16px;
    }
  }

  p {
    bottom: -0.4px;
    font-size: 14px;
    font-weight: bold;
    left: 2.5px;
    position: absolute;
    transition: transform 0.35s;

    &.sun {
      visibility: visible;
    }

    &.moon {
      visibility: hidden;
    }
  }
}
</style>