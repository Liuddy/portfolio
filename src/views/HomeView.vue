<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/PreferenceStore.js'
import { getImgPath } from '@/components/FileManager.js'

function endAnimations() {
  document.getElementsByTagName('html')[0].removeEventListener('click', endAnimations)
  document.getElementsByTagName('header')[0].classList.remove('homeFade')
  document.getElementsByTagName('footer')[0].classList.remove('homeFade')
  Array.from(document.getElementsByClassName('btnAnim'))
    .forEach(elt => elt.classList.remove('btnAnim'))
  Array.from(document.getElementsByClassName('logoAnim'))
    .forEach(elt => {
      elt.classList.remove('logoAnim')
      elt.style.marginTop = 0
      elt.style.opacity = 1
    })
}

onMounted(() => {
  document.getElementsByTagName('body')[0].id = 'home'
  document.getElementsByTagName('header')[0].classList.add('homeFade')
  document.getElementsByTagName('footer')[0].classList.add('homeFade')
  document.getElementsByTagName('html')[0].addEventListener('click', endAnimations)
})

onUnmounted(() => {
  document.getElementsByTagName('body')[0].id = ''
  document.getElementsByTagName('header')[0].classList.remove('homeFade')
  document.getElementsByTagName('footer')[0].classList.remove('homeFade')
  document.getElementsByTagName('html')[0].removeEventListener('click', endAnimations)
})

const { preferredTheme } = storeToRefs(useStore())

function getLogoPath() { return getImgPath('logo', preferredTheme.value) }
</script>


<template>

  <div id="logoBox">
    <img class="logoAnim" :src="getLogoPath()" :alt="`Partie Lomé Bordes du logo version ${preferredTheme}`">
    <img class="logoAnim" :src="getImgPath('logo', 'portfolio')" :alt="`Partie portfolio du logo`">
  </div>

  <div id="buttonBox">
    <RouterLink :to="{ name: 'project' }" class="btnAnim">
      <div>
        <div class="btn">
          <p>PROJETS</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'skill' }" class="btnAnim">
      <div>
        <div class="btn">
          <p>COMPÉTENCES</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'about' }" class="btnAnim">
      <div>
        <div class="btn">
          <p>À PROPOS</p>
        </div>
      </div>
    </RouterLink>
  </div>

</template>


<style>
#home {
  overflow: hidden;

  .homeFade {
    animation: fadeIn 1s 4s both;
    opacity: 0;
  }
}

/* Header and Footer animation */
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
#logoBox {
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;
  place-items: center;
}

#buttonBox {
  display: flex;
  flex-direction: row;
}

img {
  opacity: 0;

  &.logoAnim:first-child {
    animation: fadeUp 2.25s ease-in-out 0.25s both;
  }

  &.logoAnim:nth-child(2) {
    animation: fadeUp 2.25s ease-in-out 0.75s both;
  }
}

a {
  border-radius: 50%;
  color: var(--color-text);
  display: block;
  height: 150px;
  margin: 0 auto;
  padding: 0;
  width: 150px;

  &:nth-child(2) .btn {
    background-color: var(--color-elt-orange);
  }

  &.btnAnim:first-child {
    animation: slideUp 1s ease-in-out 1.75s backwards;
  }

  &.btnAnim:nth-child(2) {
    animation: slideUp 1s ease-in-out 2.25s backwards;
  }

  &.btnAnim:last-child {
    animation: slideUp 1s ease-in-out 2.75s backwards;
  }

  &:hover {
    background-color: transparent;
  }

  &>div {
    border-radius: 50%;
  }

  .btn {
    background-color: var(--color-elt-blue);
    border-radius: 50%;
    box-shadow: inset 0 0 45px rgba(255, 255, 255, 0.1), 0 12px 20px -10px black;
    display: flex;
    height: 150px;
    width: 150px;
  }

  p {
    font-size: 1.1em;
    font-weight: bold;
    margin: auto;
    padding: 9px;
    text-align: center;
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

  89% {
    transform: scale(1);
  }

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
  #buttonBox a>div .btn {
    animation: turnOut 0.6s ease-in-out;
  }

  #buttonBox a>div:hover .btn,
  #buttonBox a>div:hover p {
    animation: turnIn 0.6s ease-in-out forwards;
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

  /* Button animation on hover out */
  @keyframes turnOut {
    from {
      transform: rotateY(0);
    }

    to {
      transform: rotateY(360deg);
    }
  }
}
</style>