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
  Array.from(document.getElementsByClassName('logoAnim')).forEach((elt) =>
    elt.classList.remove('logoAnim')
  )
  Array.from(document.getElementsByClassName('btnAnim')).forEach((elt) =>
    elt.classList.remove('btnAnim')
  )
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

function getLogoPath() {
  return getImgPath('logo', preferredTheme.value)
}
</script>

<template>
  <div id="logoBox">
    <img
      class="logoAnim"
      :src="getLogoPath()"
      :alt="`Partie Lomé Bordes du logo version ${preferredTheme}`"
    />
    <img
      class="logoAnim"
      :src="getImgPath('logo', 'portfolio')"
      :alt="`Partie portfolio du logo`"
    />
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
    animation: fadeIn 1s 2.5s both;
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
  margin-bottom: 2vh;
  place-items: center;
}

#buttonBox {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1em;
}

img {
  width: 80%;

  &.logoAnim {
    opacity: 0;

    &:first-child {
      animation: fadeUp 1.5s ease-in-out 0.2s both;
    }

    &:nth-child(2) {
      animation: fadeUp 1.5s ease-in-out 0.4s both;
    }
  }
}

a {
  border-radius: 50%;
  color: var(--color-text);
  display: block;
  height: 7.5em;
  margin: 0 auto;
  padding: 0;
  width: 7.5em;

  &:nth-child(2) .btn {
    background-color: var(--color-elt-orange);
  }

  &.btnAnim:first-child {
    animation: slideUp 1s ease-in-out 0.7s backwards;
  }

  &.btnAnim:nth-child(2) {
    animation: slideUp 1s ease-in-out 1.1s backwards;
  }

  &.btnAnim:last-child {
    animation: slideUp 1s ease-in-out 1.5s backwards;
  }

  &:hover {
    background-color: transparent;
  }

  & > div {
    border-radius: 50%;
  }

  .btn {
    background-color: var(--color-elt-blue);
    border-radius: 50%;
    box-shadow:
      inset 0 0 2em rgba(255, 255, 255, 0.2),
      0 1.2em 1.8em -1em black;
    display: flex;
    height: 7.5em;
    width: 7.5em;
  }

  p {
    font-size: 0.9em;
    font-weight: bold;
    margin: auto;
    text-align: center;
  }
}

/* Title animation */
@keyframes fadeUp {
  from {
    margin-top: 100%;
    opacity: 0;
  }

  30% {
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

@media (min-width: 720px) {
  #logoBox {
    margin-bottom: 8vh;
  }

  #buttonBox {
    flex-direction: row;
    flex: 0;
  }

  a,
  .btn {
    min-height: 8em;
    min-width: 8em;

    p {
      font-size: 1em;
    }
  }
}

@media (min-width: 1024px) {
  #logoBox {
    margin-bottom: 5vh;
  }

  img {
    width: 60%;
  }

  a,
  .btn {
    min-height: 9em;
    min-width: 9em;

    p {
      font-size: 1.1em;
    }
  }
}

@media (min-width: 1440px) {
  #logoBox {
    margin-bottom: 2vh;
  }

  img {
    width: 50%;
  }
}

@media (hover: hover) {
  #buttonBox a > div .btn {
    animation: turnOut 0.6s ease-in-out;
  }

  #buttonBox a > div:hover .btn,
  #buttonBox a > div:hover p {
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
