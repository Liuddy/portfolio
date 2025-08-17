<script setup>
import { onMounted, onUnmounted } from 'vue'
import { getImgPath } from '@/components/FileManager.js'
import { skillTab } from '@/components/SkillManager.js'

onMounted(() => {
  document.getElementsByTagName('body')[0].id = 'project-card'
})

onUnmounted(() => {
  document.getElementsByTagName('body')[0].id = ''
})

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
  <div id="project-div" @click.self="$emit('hideProjectDiv')">
    <div>
      <div id="type">
        <p v-for="(type, index) in props.project.type" :key="index">{{ type }}</p>
      </div>

      <h1>{{ props.project.name }}</h1>

      <p id="date">{{ props.project.date[0] + ' - ' + props.project.date[1] }}</p>

      <div id="details">
        <div>
          <img
            :src="getImgPath('icons', props.project.team)"
            :alt="`Icônographie pour équipe en ${props.project.team}`"
          />
          <p>Projet en {{ props.project.team }}</p>
        </div>

        <div>
          <img
            :src="getImgPath('icons', props.project.environment)"
            :alt="`Icônographie pour équipe en ${props.project.environment}`"
          />
          <p>Cadre {{ props.project.environment }}</p>
        </div>

        <ul>
          <li v-for="(skill, index) in props.project.skills" :key="index">
            &#9733; {{ skillTab[skill][0] }}
          </li>
        </ul>
      </div>

      <img
        id="illustration"
        :src="getImgPath('images', props.project.illustration[0])"
        :alt="`Image d'illustration du projet ${props.project.name}`"
      />

      <div id="technologies">
        <img
          v-for="(techIcon, index) in props.project.allTech"
          :key="index"
          :src="getImgPath('icons', techIcon)"
          :alt="`Logo de ${techIcon}`"
        />
      </div>

      <div id="description">
        <p v-for="(paragraph, index) in props.project.description" :key="index">
          {{ paragraph }}
        </p>

        <div id="links">
          <a
            v-for="(link, index) in props.project.links"
            :key="index"
            :href="parseLink(link[0])"
            target="_blank"
          >
            {{ link[1] }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#project-card {
  overflow: hidden;
}
</style>

<style scoped>
#project-div {
  backdrop-filter: blur(0.1em);
  background-color: rgb(10 10 10 / 40%);
  cursor: pointer;
  inset: 0;
  overflow: hidden;
  padding: 2em;
  position: fixed;
}

#project-div > div {
  align-items: center;
  background: var(--color-background);
  border: 0.2em solid var(--color-link);
  border-radius: 3em;
  box-shadow: 0 1.5em 3em -1em black;
  cursor: auto;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow-y: auto;
  padding: 1em;
  padding-bottom: 0.2em;
  row-gap: 1em;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  scrollbar-width: none;
}

#type {
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  column-gap: 0.3em;
  display: inline-flex;
  text-align: center;
}

#type p {
  background-color: var(--color-background-transparent);
  border: 0.15em dashed var(--color-border);
  border-radius: 0.5em;
  font-size: 1.2em;
  height: 1.5em;
  line-height: 1.4;
  margin: 0 auto;
  padding: 0 0.3em;
  white-space: nowrap;
}

h1 {
  font-size: 2.2em;
  text-align: center;
  white-space: nowrap;
}

#date {
  font-size: 1.2em;
  text-align: center;
  white-space: nowrap;
}

#details {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
}

#details div {
  display: inline-flex;
  margin-bottom: 1em;
}

#details img {
  height: 3.5em;
}

#details p {
  margin: auto 0 auto 1em;
}

#details ul {
  line-height: 1.6;
  list-style: none;
  white-space: nowrap;
}

#illustration {
  border-radius: 2em;
  margin: auto;
  max-width: 90%;
  min-width: 90%;
}

#technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
}

#technologies img {
  height: 4em;
  border-radius: 0.5em;
  margin: auto;
}

#description {
  display: flex;
  flex-direction: column;
  height: 100%;
  line-height: 1.5;
  row-gap: 1em;
}

#links {
  display: flex;
  font-size: 1.1em;
  line-height: 1.5;
  flex-wrap: wrap;
  row-gap: 0.2em;
}

#links a {
  margin: auto;
  white-space: nowrap;
}

[data-theme='dark'] #details img {
  filter: invert(1);
}

@media (min-width: 720px) {
  #type p {
    border: 0.1em dashed var(--color-border);
  }

  #details {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    column-gap: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
  }

  #details div {
    flex-direction: column;
    margin-bottom: 0;
  }

  #details p {
    margin: 0;
  }

  #details ul {
    grid-row: span 2;
    order: -1;
  }
}

@media (min-width: 1024px) {
  #project-div {
    padding: 3em;
  }

  #project-div > div {
    display: grid;
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: 5% auto auto;
    max-width: 90%;
    min-width: 90%;
  }

  #details {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    column-gap: 0;
    display: flex;
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-left: 1em;
    place-items: initial;
  }

  #details div {
    display: inline-flex;
    flex-direction: row;
    margin-bottom: 1em;
  }

  #details p {
    margin: auto 0 auto 1em;
  }

  #details ul {
    order: 0;
  }

  #technologies {
    display: grid;
    gap: 0;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    margin-right: 1em;
  }

  #technologies img {
    margin: auto 0 auto auto;
  }

  #description {
    display: grid;
    grid-column: span 3;
    grid-template-columns: 1fr 1fr;
    padding: 0 1em;
    row-gap: 0.2em;
  }

  #description p {
    margin-left: 0.7em;

    &:first-child {
      margin-left: 0;
      margin-right: 0.7em;
    }
  }

  #links {
    grid-column: span 2;
  }
}

@media (min-width: 1440px) {
  #project-div > div {
    border: 0.15em solid var(--color-link);
    max-width: 80%;
    min-width: 80%;
  }
}
</style>
