<script setup>
  import { getImgPath } from '@/components/FileManager.js'
  import { skillTab, switchClassList } from '@/components/SkillManager.js'
</script>


<template>
  <p style="font-weight: bold; margin-bottom: 1rem;">[Page en cours de construction...]</p>
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
  <p style="font-size: 1.2rem; font-weight: bold; margin-top: 4rem;">Compétences du référentiel</p>
  <p>Dans le cadre de ma formation en BUT Informatique, j'ai décidé de
  suivre le parcours RA (Réalisation d'Applications : conception, développement, validation).
  Pour cette formation est proposé un référentiel national de compétences. Retrouvez ci-dessous
  chacune des 6 compétences existantes avec une sous-liste des aptitudes correspondantes que
  je sais avoir acquis durant ces deux dernières.</p>
  <div id="skillFlex">
    <div v-for="skillList in skillTab">
      <p @click="switchClassList()">{{ skillList[0] }}</p>
      <ul class="collapsed">
        <li v-for="skill in skillList.slice(1)">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>


<style scoped>

  P {
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

  div#skillFlex {
    border: 2px solid var(--color-link);
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    padding: 0;
    width: 100%;

    & p {
      border-bottom: 2px solid var(--color-link);
      font-size: 1.3rem;
      font-weight: bold;
      line-height: normal;
      margin: 0;
      padding: 1rem 0;
      text-align: center;

      &:hover {
        text-decoration: underline;
      }

    }

    & div:last-child p { border-bottom: 0px solid var(--color-link); }

    & ul {
      background-color: var(--color-background-darker);
      border-bottom: 2px solid var(--color-link);
      display: grid;
      font-size: 1.2rem;
      grid-gap: 1rem;
      grid-template-columns: 1fr 1fr;
      padding: 1rem 3rem;
      transition: background-color 0.5s;
    }

    & div:last-child ul {
      border-top: 2px solid var(--color-link);
      border-bottom: 0px solid var(--color-link);
      border-bottom-left-radius: 40px;
      border-bottom-right-radius: 40px;
    }

    & ul.collapsed { display: none; }

    & ul.extended { display: grid; }

  }

</style>