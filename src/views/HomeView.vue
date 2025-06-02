<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useStore } from '@/stores/PreferenceStore.js'
import { getImgPath } from '@/components/FileManager.js'

function endAnimations() {
  document.getElementsByTagName('html')[0].removeEventListener('click', endAnimations)
  document.getElementsByTagName('header')[0].classList.remove('home-fade')
  document.getElementsByTagName('footer')[0].classList.remove('home-fade')
  Array.from(document.getElementsByClassName('logo-anim')).forEach((elt) =>
    elt.classList.remove('logo-anim')
  )
  Array.from(document.getElementsByClassName('btn-anim')).forEach((elt) =>
    elt.classList.remove('btn-anim')
  )
}

onMounted(() => {
  document.getElementsByTagName('body')[0].id = 'home'
  document.getElementsByTagName('header')[0].classList.add('home-fade')
  document.getElementsByTagName('footer')[0].classList.add('home-fade')
  document.getElementsByTagName('html')[0].addEventListener('click', endAnimations)
})

onUnmounted(() => {
  document.getElementsByTagName('body')[0].id = ''
  document.getElementsByTagName('header')[0].classList.remove('home-fade')
  document.getElementsByTagName('footer')[0].classList.remove('home-fade')
  document.getElementsByTagName('html')[0].removeEventListener('click', endAnimations)
})

const { preferredTheme } = storeToRefs(useStore())

function getLogoPath() {
  return getImgPath('logo', preferredTheme.value)
}
</script>

<template>
  <div id="logo-box">
    <img
      class="logo-anim"
      :src="getLogoPath()"
      :alt="`Partie Lomé Bordes du logo version ${preferredTheme}`"
    />
    <img
      class="logo-anim"
      :src="getImgPath('logo', 'portfolio')"
      :alt="`Partie portfolio du logo`"
    />
  </div>

  <div id="button-box">
    <RouterLink :to="{ name: 'project' }" class="btn-anim">
      <div>
        <div class="btn">
          <p>PROJETS</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'skill' }" class="btn-anim">
      <div>
        <div class="btn">
          <p>COMPÉTENCES</p>
        </div>
      </div>
    </RouterLink>
    <RouterLink :to="{ name: 'about' }" class="btn-anim">
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
}

#home .home-fade {
  animation: fade-in 1s 2.5s both;
  opacity: 0;
}

/* Header and Footer animation */
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

<style scoped>
#logo-box {
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;
  place-items: center;
}

#button-box {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1em;
}

img {
  max-height: 30vh;
  width: 80%;

  &:nth-child(2) {
    max-height: 15vh;
  }

  &.logo-anim {
    opacity: 0;

    &:first-child {
      animation: fade-up 1.5s ease-in-out 0.2s both;
    }

    &:nth-child(2) {
      animation: fade-up 1.5s ease-in-out 0.4s both;
    }
  }
}

a .btn {
  background-color: var(--color-elt-blue);
  border-radius: 50%;
  box-shadow:
    inset 0 0 2em rgb(255 255 255 / 20%),
    0 1.2em 1.8em -1em black;
  display: flex;
  height: 7.5em;
  width: 7.5em;
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

  &.btn-anim:first-child {
    animation: slide-up 1s ease-in-out 0.7s backwards;
  }

  &.btn-anim:nth-child(2) {
    animation: slide-up 1s ease-in-out 1.1s backwards;
  }

  &.btn-anim:last-child {
    animation: slide-up 1s ease-in-out 1.5s backwards;
  }

  &:hover {
    background-color: transparent;
  }
}

a p {
  font-size: 0.9em;
  font-weight: bold;
  margin: auto;
  text-align: center;
}

a > div {
  border-radius: 50%;
}

/* Title animation */
@keyframes fade-up {
  0% {
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

  100% {
    margin-top: 0;
    opacity: 1;
  }
}

/* Buttons animation */
@keyframes slide-up {
  0% {
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

  100% {
    margin-top: 0%;
    transform: scale(1);
  }
}

@media (min-width: 720px) {
  #logo-box {
    margin-bottom: 8vh;
  }

  #button-box {
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
  #logo-box {
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
  #logo-box {
    margin-bottom: 2vh;
  }

  img {
    width: 50%;
  }
}

@media (hover: hover) {
  #button-box a > div .btn {
    animation: turn-out 0.6s ease-in-out;
  }

  #button-box a > div:hover .btn,
  #button-box a > div:hover p {
    animation: turn-in 0.6s ease-in-out forwards;
  }

  /* Button animation on hover in */
  @keyframes turn-in {
    from {
      transform: rotateY(0);
    }

    to {
      transform: rotateY(180deg);
    }
  }

  /* Button animation on hover out */
  @keyframes turn-out {
    from {
      transform: rotateY(0);
    }

    to {
      transform: rotateY(360deg);
    }
  }
}
</style>
