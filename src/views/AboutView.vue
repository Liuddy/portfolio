<script setup>
import { getImgPath } from '@/components/FileManager.js'

function getMyAge() {
  let diff_ms = Date.now() - new Date(2004, 2, 9).getTime()
  return Math.abs(new Date(diff_ms).getUTCFullYear() - 1970) // Diff between age and 1970 (UNIX epoch)
}
</script>

<template>
  <section>
    <div class="text-container">
      <h2>Qui suis-je ?</h2>
      <p>
        Je m'appelle Lomé Bordes, aussi connu sous le pseudonyme de Liuddy. Développeur français de
        {{ getMyAge() }} ans, j'ai découvert mon attrait pour la programmation vers la fin du
        collège et j'essaie de m'épanouir à travers ce domaine depuis. Actuellement, je suis en
        troisième année d'études en BUT Informatique à l'Université Lyon 1.
      </p>
      <p>
        Je suis particulièrement passionné de jeux vidéo, mais je connais aussi un grand intérêt
        pour les sites web, la philosophie et diverses formes d'expression artistique. Je considère
        le média vidéoludique comme une forme d'art à part entière et j'aspire à en faire un jour
        mon domaine de profession.
      </p>
      <a href="https://www.linkedin.com/in/lom%C3%A9-bordes-a64a76250" target="_blank">
        <img :src="getImgPath('icons', 'linkedin')" alt="Logo de LinkedIn" />
      </a>
      <a href="mailto:Liuddy@outlook.fr">
        <img :src="getImgPath('icons', 'mail')" alt="Icône de mail" />
      </a>
    </div>
    <div class="image-container">
      <img :src="getImgPath('images', 'lome_photo')" alt="Photo de Lomé" />
    </div>
  </section>

  <section>
    <div class="text-container">
      <h2>Quel est ce site ?</h2>
      <p>
        Le site web que vous consultez présentement a été conçu dans le but d'exposer chacun de mes
        projets significatifs et de donner un aperçu de ma personne. Les projets retenus ici sont
        majoritairement de l'ordre de l'informatique, mais certains projets d'un autre genre peuvent
        également s'y retrouver.
      </p>
      <p>
        J'ai choisi de réaliser mon portfolio sous forme de site web car cela en permet une
        diffusion simple et rapide, mais aussi car le site en lui-même peut donner un petit aperçu
        de ce que je suis capable de développer. L'image à gauche, utilisée comme icône de l'onglet
        du site, est simplement une illustration que j'utilise comme marque de fabrique depuis des
        années parce que je suis fan de panda roux.
      </p>
      <p>
        Sinon, vous pouvez retrouver sur ce site une liste non exhaustive de mes compétences, et
        peut-être même quelques <span class="secret">secrets</span>.
      </p>
    </div>
    <div class="image-container">
      <img :src="getImgPath('images', 'red_panda_icon')" alt="Image d'icône du Portfolio" />
    </div>
  </section>
</template>

<style scoped>
h2 {
  width: 100%;
}

p {
  line-height: 1.35;
  margin: 0.5em 1em 0;

  &:last-child {
    margin-bottom: 1em;
  }

  .secret {
    cursor: help;
  }
}

a img {
  border-radius: 1em;
  height: 4em;
  margin-right: 2em;
  margin-top: 1.5em;
}

section {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}

.image-container {
  height: auto;
  overflow: hidden;
  padding: 0.5em;
  place-self: center;
}

.image-container img {
  display: block;
  border-radius: 2em;
  margin: auto;
  max-width: 60%;
  transition: transform 0.4s;
}

.text-container {
  padding: 0.5em;
  place-items: center;
}

a {
  background: transparent;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  display: contents;

  &:last-child img {
    margin-right: 0;
  }
}

@media (min-width: 1024px) {
  section:first-child {
    display: grid;
    grid-template-columns: 74% 26%;
  }

  section:last-child {
    display: grid;
    grid-template-columns: 26% 74%;
  }

  section:last-child .image-container {
    order: -1;
  }

  .image-container img {
    min-width: 100%;
  }

  .text-container {
    place-items: initial;
  }

  .text-container p:last-child {
    margin-bottom: 0;
  }
}

@media (hover: hover) {
  .image-container img:hover {
    transform: scale(1.4);
  }
}
</style>
