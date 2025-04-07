<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useStore } from '@/stores/PreferenceStore.js'
  import { getImgPath } from '@/components/FileManager.js'

  onMounted(() => {
    document.getElementsByTagName('body')[0].id = 'home'
    document.getElementsByTagName('header')[0].classList.add('homeFade')
    document.getElementsByTagName('footer')[0].classList.add('homeFade')
  })

  onUnmounted(() => {
    document.getElementsByTagName('body')[0].id = ''
    document.getElementsByTagName('header')[0].classList.remove('homeFade')
    document.getElementsByTagName('footer')[0].classList.remove('homeFade')
  })

  const { preferredTheme } = storeToRefs(useStore())

  function getLogoPath() { return getImgPath('logo', preferredTheme.value) }
</script>


<template>

  <div id="logoBox">
    <img :src="getLogoPath()" :alt="`Partie Lomé Bordes du logo version ${ preferredTheme }`">
    <img :src="getImgPath('logo', 'portfolio')" :alt="`Partie portfolio du logo`">
  </div>

  <div id="buttonBox">

    <RouterLink :to="{ name: 'project' }">
      <div>
        <p>PROJETS</p>
      </div>
    </RouterLink>

    <RouterLink :to="{ name: 'skill' }">
      <div>
        <p>COMPÉTENCES</p>
      </div>
    </RouterLink>

    <RouterLink :to="{ name: 'about' }">
      <div>
        <p>À PROPOS</p>
      </div>
    </RouterLink>

  </div>
  
</template>


<style>
  
  body#home {
    overflow: hidden;

    & .homeFade {
      animation: fadeIn 1s 4s both;
      opacity: 0;
    }
  }

  @keyframes fadeIn {

    from { opacity: 0; }

    to { opacity: 1; }

  }

  @media (min-width: 1980px) {

    body#home main {
      zoom: 1.25;
    }

  }

</style>


<style scoped>
  
  div#logoBox {
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
    place-items: center;

    & img {
      object-fit: contain;
      opacity: 0;

      &:first-child { animation: fadeUp 2.25s ease-in-out 0.25s both; }

      &:nth-child(2) { animation: fadeUp 2.25s ease-in-out 0.75s both; }

    }

  }

  div#buttonBox {
    display: flex;
    flex-direction: row;
    place-items: north;

    & a {
      border-radius: 50%;
      color: var(--color-text);
      display: block;
      height: 150px;
      margin: 0 auto;
      padding: 0;
      width: 150px;

      &:first-child { animation: slideUp 1s ease-in-out 1.75s backwards; }

      &:nth-child(2) {
        animation: slideUp 1s ease-in-out 2.25s backwards;

        & div { background-color: var(--color-elt-orange); }

      }

      &:last-child { animation: slideUp 1s ease-in-out 2.75s backwards; }

      &:hover { background-color: transparent; }

      & div {
        background-color: var(--color-elt-blue);
        border-radius: 50%;
        box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.1), 0 12px 20px -10px black;
        display: flex;
        height: 150px;
        width: 150px;

        & p {
          font-size: 1.1rem;
          font-weight: bold;
          margin: auto;
          padding: 9px;
          text-align: center;
        }

      }

    }

  }

  /* Title animation */
  @keyframes fadeUp {

    from {
      margin-top: 40%;
      opacity: 0;
    }

    25% { opacity: 0; }

    50% { margin-top: 0; }

    95% { opacity: 1; }

    to {
      margin-top: 0;
      opacity: 1;
    }

  }

  /* Buttons animation */
  @keyframes slideUp {

    from { margin-top: 100%; }

    89% { transform: scale(1); }

    90% {
      margin-top: -1%;
      transform: scale(1.05, 0.95);
    }

    93% {
      margin-top: -1%;
      transform: scale(1.1, 0.9);
    }

    97% {
      margin-top: 1%;
      transform: scale(0.95, 1.05);
    }

    to {
      margin-top: 0%;
      transform: scale(1);
    }

  }

  @media (hover: hover) {

    div#buttonBox div {
      animation: turnOut 0.6s ease-in-out;

      &:hover {
        animation: turnIn 0.6s ease-in-out forwards;

        & p { animation: turnIn 0.6s ease-in-out forwards; }
      }

    }

    /* Button animation on hover out */
    @keyframes turnOut {

      from { transform: rotateY(0); }

      to { transform: rotateY(360deg); }

    }

    /* Button animation on hover in */
    @keyframes turnIn {

      from { transform: rotateY(0); }

      to { transform: rotateY(180deg); }

    }

  }

</style>