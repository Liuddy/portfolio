<script setup>
  import { getImgPath } from '@/components/FileManager.js'
</script>


<template>

  <p>Bienvenue sur mon portfolio en ligne ! Moi, c'est Lomé Bordes, jeune développeur passionné
  de sites web et de jeux vidéo, connaissant aussi un grand intérêt pour la philosophie et
  certaines formes d'art. Actuellement, je suis étudiant à l'IUT Informatique de l'Université
  Lyon 1, en deuxième année.</p>
  <p>Le site web que vous consultez présentement (à ce propos, merci beaucoup) a été conçu
  dans le but de présenter chacun de mes projets significatifs et de donner un aperçu de ma
  personne. Les projets retenus ici sont majoritairement informatiques, mais certains projets
  rédactionnels et autres peuvent s'y retrouver si cela me semble pertinent.</p>
  <a href="https://www.linkedin.com/in/lom%C3%A9-bordes-a64a76250" target="_blank"><img :src="getImgPath('icons', 'linkedin')" alt="Logo de LinkedIn"></a>
  <a :href="getImgPath('files', 'cv')" target="_blank"><img :src="getImgPath('icons', 'cv')" alt="Icône de CV"></a>

</template>


<style scoped>

  p {
    font-size: 1.1rem;
    line-height: 1.25;
    margin: 1rem 0;
  }

  a {

    &:hover {
      background: transparent;
      color: var(--color-link);
    }

    & img {
      height: 90px;
      margin-top: 1rem;
      width: 90px;
    }

  }

</style>