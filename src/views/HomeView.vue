<script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useStore } from '@/stores/PreferenceStore.js'

  const store = useStore()
  const { preferredTheme } = storeToRefs(store)

  const listHover = ref(false)
  const contactHover = ref(false)
  const aboutHover = ref(false)

  function asyncChange(component, hover) {
    setTimeout(() => {

      switch(component) {
        case 'list':
          listHover.value = hover
          break

        case 'contact':
          contactHover.value = hover
          break

        case 'about':
          aboutHover.value = hover
          break

        default:
          break
      }

    }, 250)
  }
</script>


<template>
  <div id="logoBox">
    <img id="logo1" :src="`/src/assets/images/logo_${preferredTheme}_1.png`" :alt="`Partie 1 du logo version ${preferredTheme}`">
    <img id="logo2" :src="`/src/assets/images/logo_${preferredTheme}_2.png`" :alt="`Partie 2 du logo version ${preferredTheme}`">
  </div>

  <div id="buttonBox">

    <RouterLink :to="{ name: 'list' }">
      <div id="button1" class="button" @mouseover="asyncChange('list', true)" @mouseleave="asyncChange('list', false)">
        <p v-if="!listHover">Projets</p>
        <p class="desc" v-if="listHover">BLALBLALAL</p>
      </div>
    </RouterLink>

    <RouterLink :to="{ name: 'contact' }">
      <div id="button2" class="button" @mouseover="asyncChange('contact', true)" @mouseleave="asyncChange('contact', false)">
        <p v-if="!contactHover">Contact</p>
        <p class="desc" v-if="contactHover">BLALBLALAL</p>
      </div>
    </RouterLink>

    <RouterLink :to="{ name: 'about' }">
      <div id="button3" class="button" @mouseover="asyncChange('about', true)" @mouseleave="asyncChange('about', false)">
        <p v-if="!aboutHover">À propos</p>
        <p class="desc" v-if="aboutHover">BLALBLALAL</p>
      </div>
    </RouterLink>

  </div>
</template>


<style scoped>
  
  div#logoBox {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    place-items: center;
  }

  img {
    opacity: 0;
  }

  img#logo1 {
    animation: fadeUp 1.5s ease-in-out 0.5s both;
  }

  img#logo2 {
    animation: fadeUp 1.5s ease-in-out 1.5s both;
  }

  div#buttonBox {
    display: flex;
    flex-direction: row;
    place-items: center;
  }

  a {
    border-radius: 50%;
    color: var(--color-text);
    height: 150px;
    margin: 0 auto;
    padding: 0;
    width: 150px;

    &:hover {
      background-color: transparent;
    }
  }

  div.button {
    background-color: var(--color-elt-blue);
    border-radius: 50%;
    box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.1), 0 12px 20px -10px rgba(0, 0, 0, 0.5);
    display: flex;
    height: 150px;
    text-align: center;
    width: 150px;
  }

  div#button1 {
    animation: slideUp 1s ease-in-out 3.5s both;
  }

  div#button2 {
    animation: slideUp 1s ease-in-out 4s both;
    background-color: var(--color-elt-orange);
  }

  div#button3 {
    animation: slideUp 1s ease-in-out 4.5s both;
  }

  p {
    margin: auto;
    padding-bottom: 0.1rem;
    padding-right: 0.1rem;
  }

  p.desc {
    transform: rotateY(180deg);
  }

  @keyframes fadeUp {

    from {
      margin-top: 40%;
      opacity: 0;
    }

    50% {
      margin-top: 0;
    }

    95% {
      opacity: 1;
    }

    to {
      margin-top: 0;
      opacity: 1;
    }

  }

  @keyframes slideUp {

    from {
      margin-top: 300%;
    }

    98% {
      margin-top: -1%;
    }

    99% {
      margin-top: 1%;
    }

    to {
      margin-top: 0%;
    }

  }

  @media (hover: hover) {

    div.button {
      animation: turnOut 0.6s ease-in-out;

      &:hover {
        animation: turnIn 0.6s ease-in-out forward;
      }
    }

    @keyframes turnOut {

      from {
        transform: rotateY(0);
      }

      to {
        transform: rotateY(360deg);
      }

    }

    @keyframes turnIn {

      from {
        transform: rotateY(0);
      }

      to {
        transform: rotateY(180deg);
      }

    }

  }

</style>