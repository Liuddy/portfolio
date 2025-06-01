<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from '@/stores/PreferenceStore.js'

const store = useStore()

onMounted(() => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.getElementById('switch-btn').click()
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
      <input id="switch-btn" type="checkbox" @change="store.$switchTheme()" />
      <span>
        <p class="sun">&#9788;</p>
        <p class="moon">&#9789;</p>
      </span>
    </label>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  font-size: 1.1em;
  gap: 0.2em;
  line-height: 1.5;
  margin-bottom: 0.5em;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  background-color: transparent;
  cursor: auto;
}

label {
  left: 50%;
  line-height: 0.96;
  min-height: 1.1em;
  min-width: 2em;
  position: absolute;
  transform: translate(-50%);
}

label span {
  background-color: var(--color-elt-blue);
  border-radius: 1em;
  color: black;
  cursor: pointer;
  inset: 0;
  padding: 0.05em 0;
  position: absolute;
  transition: transform 0.4s;
  user-select: none;

  &::before {
    background-color: white;
    border-radius: 50%;
    content: '';
    height: 1em;
    margin: 0 0.06em;
    position: absolute;
    transition: transform 0.4s;
    width: 1em;
  }
}

label p {
  font-weight: bold;
  margin: 0 0.07em;
  position: absolute;
  transition: transform 0.35s;

  &.sun {
    visibility: visible;
  }

  &.moon {
    visibility: hidden;
  }
}

label input {
  display: none;

  &:checked + span {
    background-color: var(--color-elt-orange);

    &::before {
      transform: translateX(0.88em);
    }
  }
}

label input:checked + span p {
  transform: translateX(1.16em);

  &.sun {
    visibility: hidden;
  }

  &.moon {
    visibility: visible;
  }
}

@media (min-width: 720px) {
  nav {
    display: inline-flex;
    flex-direction: row;
    margin-bottom: 0;
    place-content: center;
    width: 100%;
  }

  label {
    left: 90%;
    margin-top: 0.5em;
  }
}

@media (min-width: 1024px) {
  label {
    left: 85%;
  }
}
</style>
