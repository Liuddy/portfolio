<script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useStore } from '@/stores/PreferenceStore.js'

  document.getElementsByTagName('body')[0].id = 'home'
  document.getElementsByTagName('header')[0].className = 'homeFade'
  document.getElementsByTagName('footer')[0].className = 'homeFade'

  const store = useStore()
  const { preferredTheme } = storeToRefs(store)

  const btnHover = ref('none')

  function asyncChange(component) {
    setTimeout(() => {
      btnHover.value = component
    }, 250)
  }
</script>


<template>
  <div id="logoBox">
    <img :src="`/src/assets/images/logo_${preferredTheme}_1.png`" :alt="`Partie 1 du logo version ${preferredTheme}`">
    <img :src="`/src/assets/images/logo_${preferredTheme}_2.png`" :alt="`Partie 2 du logo version ${preferredTheme}`">
  </div>

  <div id="buttonBox">

    <RouterLink :to="{ name: 'list' }">
      <div @mouseover="asyncChange('list')" @mouseleave="asyncChange('none')">
        <p v-if="btnHover != 'list'">Projets</p>
        <p class="desc" v-if="btnHover === 'list'">Une liste de mes projets avec un système de filtre et de recherche.</p>
      </div>
    </RouterLink>

    <RouterLink :to="{ name: 'contact' }">
      <div @mouseover="asyncChange('contact')" @mouseleave="asyncChange('none')">
        <p v-if="btnHover != 'contact'">Contact</p>
        <p class="desc" v-if="btnHover === 'contact'">Un formulaire pour prendre contact avec moi via mail.</p>
      </div>
    </RouterLink>

    <RouterLink :to="{ name: 'about' }">
      <div @mouseover="asyncChange('about')" @mouseleave="asyncChange('none')">
        <p v-if="btnHover != 'about'">À propos</p>
        <p class="desc" v-if="btnHover === 'about'">Un peu plus d'informations sur ce site web et moi-même.</p>
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

    from {
      opacity: 0;
    }

    to {
      opacity: 1;
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
      opacity: 0;

      &:first-child {
        animation: fadeUp 2.25s ease-in-out 0.25s both;
      }

      &:nth-child(2) {
        animation: fadeUp 2.5s ease-in-out 0.75s both;
      }

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

      &:first-child {
        animation: slideUp 1s ease-in-out 1.75s backwards;
      }

      &:nth-child(2) {
        animation: slideUp 1s ease-in-out 2.25s backwards;

        & div {
          background-color: var(--color-elt-orange);
        }

      }

      &:last-child {
        animation: slideUp 1s ease-in-out 2.75s backwards;
      }

      &:hover {
        background-color: transparent;
      }

      & div {
        background-color: var(--color-elt-blue);
        border-radius: 50%;
        box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.1), 0 12px 20px -10px rgba(0, 0, 0, 1);
        display: flex;
        height: 150px;
        width: 150px;

        & p {
          font-weight: bold;
          margin: auto;
          padding: 9px;
          text-align: center;

          &.desc {
            font-weight: normal;
            transform: rotateY(180deg);
          }

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

    25% {
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

  /* Buttons animation */
  @keyframes slideUp {

    from {
      margin-top: 100%;
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

    div#buttonBox div {
      animation: turnOut 0.6s ease-in-out;

      &:hover {
        animation: turnIn 0.6s ease-in-out forwards;
      }

    }

    /* Button animation on hover out */
    @keyframes turnOut {

      from {
        transform: rotateY(0);
      }

      to {
        transform: rotateY(360deg);
      }

    }

    /* Button animation on hover in */
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