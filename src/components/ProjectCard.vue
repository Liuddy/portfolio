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

        <div>
          <img :src="getImgPath('icons', props.project.team)"
            :alt="`Icônographie pour équipe en ${props.project.team}`">
          <p>Projet en {{ props.project.team }}</p>
        </div>

        <div>
          <img :src="getImgPath('icons', props.project.environment)"
            :alt="`Icônographie pour équipe en ${props.project.environment}`">
          <p>Cadre {{ props.project.environment }}</p>
        </div>

        <ul>
          <li v-for="skill in props.project.skills">&#9733; {{ skillTab[skill][0] }}</li>
        </ul>

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
html[data-theme="dark"] #details img {
  filter: invert(1);
}

#projectDiv {
  backdrop-filter: blur(1px);
  background-color: rgba(10, 10, 10, 0.4);
  bottom: 0;
  cursor: pointer;
  min-height: 100vh;
  min-width: 100vw;
  left: 0;
  overflow: hidden;
  padding: 3em;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;

  &>div {
    background: var(--color-background);
    border: 2px solid var(--color-link);
    border-radius: 40px;
    box-shadow: 0 18px 30px -10px black;
    cursor: auto;
    display: grid;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 7% 63% 30%;
    margin: auto;
    max-width: 75%;
    max-height: 100%;
    min-height: 100%;
    overflow-y: auto;
    padding: 1em;
    scrollbar-width: none;
  }
}

#type {
  display: inline-flex;
  margin-top: 1em;

  p {
    background-color: var(--color-background-transparent);
    border: 1px dashed var(--color-border);
    border-radius: 8px;
    font-size: 1.2em;
    height: 1.7em;
    line-height: 1.5;
    margin: 0 auto;
    padding: 0 0.3em;
    text-align: center;
    white-space: nowrap;
  }
}

h1 {
  font-size: 2.2em;
  font-weight: bold;
  text-align: center;
}

#date {
  font-size: 1.2em;
  margin-top: 1em;
  text-align: center;
}

#details {
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  margin-top: 2em;

  div {
    display: inline-flex;
    margin-left: 1em;
    margin-bottom: 1em;
  }

  img {
    height: 70px;
    width: 70px;
  }

  p {
    font-size: 1.05em;
    margin: auto 0 auto 1em;
  }

  ul {
    font-size: 1.05em;
    margin-top: 3em;
    line-height: 1.6;
    list-style: none;
    padding-left: 1em;
    white-space: nowrap;
  }
}

#illustration {
  border-radius: 20px;
  height: 470px;
  margin: auto;
  width: 470px;
}

#technologies {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-right: 1em;

  img {
    height: 80px;
    border-radius: 10px;
    margin: auto;
    width: 80px;
  }
}

#content {
  display: grid;
  font-size: 1.1em;
  grid-column: span 3;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80% 20%;
  line-height: 1.5;

  p {
    margin: 1em 1em 0 1em;
  }
}

#links {
  display: flex;
  font-size: 1.1em;
  grid-column: span 2;
  line-height: 1.5;
  padding: 0 2em;

  a {
    margin: auto;
  }
}
</style>