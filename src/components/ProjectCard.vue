<script setup>
import { getImgPath } from '@/components/FileManager.js'
import { skillTab } from '@/components/SkillManager.js'

const props = defineProps(['project'])

function parseLink(link) {
  if (link.includes('getImgPath')) {
    link = link.match(/getImgPath\('(.*)', '(.*)'\)/)
    link = getImgPath(link[1], link[2])
  }
  return link
}
</script>


<template>

  <div id="projectDiv" @click.self="$emit('hideProjectDiv')">

    <div>

      <div id="type">
        <p v-for="type in props.project.type">{{ type }}</p>
      </div>

      <h1>{{ props.project.name }}</h1>

      <p id="date">{{ props.project.date[0] + ' - ' + props.project.date[1] }}</p>

      <div id="details">

        <div id="team">
          <img :src="getImgPath('icons', props.project.team)"
            :alt="`Icônographie pour équipe en ${props.project.team}`">
          <p>Projet en {{ props.project.team }}</p>
        </div>

        <div id="environment">
          <img :src="getImgPath('icons', props.project.environment)"
            :alt="`Icônographie pour équipe en ${props.project.environment}`">
          <p>Cadre {{ props.project.environment }}</p>
        </div>

        <div id="skills">
          <ul>
            <li v-for="skill in props.project.skills">&#9733; {{ skillTab[skill][0] }}</li>
          </ul>
        </div>

      </div>

      <img id="illustration" :src="getImgPath('images', props.project.illustration)"
        :alt="`Image d'illustration du projet ${props.project.name}`">

      <div id="technologies">
        <img v-for="techIcon in props.project.allTech" :src="getImgPath('icons', techIcon)"
          :alt="`Logo de ${techIcon}`">
      </div>

      <div id="content">

        <p v-for="paragraph in props.project.content">
          {{ paragraph }}
        </p>

        <div id="links">
          <a v-for="link in props.project.links" :href="parseLink(link[0])" target="_blank">
            {{ link[1] }}
          </a>
        </div>

      </div>

    </div>

  </div>

</template>


<style scoped>
div#projectDiv {
  backdrop-filter: blur(1px);
  background-color: rgba(10, 10, 10, 0.4);
  bottom: 0;
  cursor: pointer;
  min-height: 100vh;
  min-width: 100vw;
  left: 0;
  overflow: hidden;
  padding: 3rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  &>div {
    background: var(--color-background);
    border: 2px solid var(--color-link);
    border-radius: 40px;
    box-shadow: 0 18px 30px -10px black;
    color: var(--color-text);
    cursor: auto;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 7% 63% 30%;
    margin: auto;
    max-width: 1280px;
    min-height: 100%;
    max-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 1rem;
    scrollbar-width: none;

    & div#type {
      display: inline-flex;
      margin-top: 1rem;

      & p {
        background-color: var(--color-background-transparent);
        border: 1px dashed var(--color-border);
        border-radius: 8px;
        font-size: 1.2rem;
        height: 1.7rem;
        line-height: 1.5rem;
        margin: 0 auto;
        padding: 0 0.3rem;
        text-align: center;
        white-space: nowrap;
      }

    }

    & h1 {
      font-size: 2.2rem;
      font-weight: bold;
      text-align: center;
    }

    & p#date {
      font-size: 1.2rem;
      margin-top: 1rem;
      text-align: center;
    }

    & div#details {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
      margin-top: 2rem;

      & div#team,
      div#environment {
        display: inline-flex;
        margin-left: 1rem;
        margin-bottom: 1rem;

        & img {
          height: 70px;
          width: 70px;
        }

        & p {
          font-size: 1.05rem;
          margin-bottom: auto;
          margin-left: 1rem;
          margin-top: auto;
        }

      }

      & div#skills ul {
        font-size: 1.05rem;
        margin-top: 3rem;
        line-height: 1.6;
        list-style: none;
        padding-left: 1rem;
        white-space: nowrap;
      }

    }

    & img#illustration {
      border-radius: 20px;
      height: 470px;
      margin: auto;
      object-fit: contain;
      width: 470px;
    }

    & div#technologies {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-right: 1rem;

      & img {
        height: 80px;
        border-radius: 10px;
        margin: auto;
        width: 80px;
      }

    }

    & div#content {
      display: grid;
      font-size: 1.1rem;
      grid-column: span 3;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 80% 20%;
      line-height: 1.5;

      & p {
        margin: 0 1rem;
        margin-top: 1rem;
      }

      & div#links {
        display: flex;
        font-size: 1.1rem;
        grid-column: span 2;
        line-height: 1.5;
        padding: 0 2rem;

        & a {
          margin: auto;
          padding: 0.4rem 0.7rem;
        }

      }

    }

  }

}

html[data-theme="dark"] div#details div img {
  filter: invert(1);
}
</style>