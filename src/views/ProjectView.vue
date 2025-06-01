<script setup>
import { ref } from 'vue'
import { getImgPath } from '@/components/FileManager.js'
import { projectList } from '@/components/ProjectManager.js'
import ProjectCard from '@/components/ProjectCard.vue'

const openProject = ref(false)
let clickedProject = undefined

function showProjectDiv(projectId) {
  clickedProject = projectList[projectId]
  openProject.value = true
}

function toggleProject() {
  openProject.value = false
}
</script>

<template>
  <div id="project-list">
    <div
      class="project"
      v-for="project in projectList"
      :key="project.id"
      @click="showProjectDiv(project.id)"
    >
      <img
        :src="getImgPath('images', project.illustration)"
        :alt="`Image d'illustration du projet ${project.name}`"
      />

      <div class="content-box">
        <p class="name">{{ project.name }}</p>

        <p class="date">{{ project.date[0] + ' - ' + project.date[1] }}</p>

        <div class="type">
          <p v-for="(type, index) in project.type" :key="index">{{ type }}</p>
        </div>

        <div class="technologies">
          <img
            v-for="(techIcon, index) in project.mainTech"
            :key="index"
            :src="getImgPath('icons', techIcon)"
            :alt="`Logo de ${techIcon}`"
          />
        </div>

        <div class="stat-box">
          <img
            :src="getImgPath('icons', project.team)"
            :alt="`Icônographie pour équipe en ${project.team}`"
          />
          <img
            :src="getImgPath('icons', project.environment)"
            :alt="`Icônographie pour cadre ${project.environment}`"
          />
        </div>
      </div>
    </div>
  </div>

  <ProjectCard v-if="openProject" :project="clickedProject" @hideProjectDiv="toggleProject()" />
</template>

<style scoped>
p {
  white-space: nowrap;
}

#project-list {
  display: flex;
  flex-direction: column;
  margin: 1em 0;
  row-gap: 3em;
}

.project {
  border: 0.15em solid var(--color-link);
  border-radius: 1.5em;
  box-shadow: 0 1.2em 1.8em -1em black;
  cursor: pointer;
  display: grid;
  height: 10em;
  margin: auto;
  overflow: hidden;
  padding: 0.5em;
  transition:
    background-color 0.4s,
    transform 0.4s;
  width: 90%;

  &:hover {
    background-color: var(--color-link);
    transform: scale(1.12);
  }
}

.project > img {
  display: none;
}

.content-box {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 25% 15% 60%;
}

.name {
  font-size: 1.5em;
  font-weight: bold;
  grid-column: span 5;
}

.date {
  align-self: center;
  font-size: 1.1em;
  grid-column: span 2;
}

.type {
  align-self: center;
  column-gap: 0.3em;
  display: inline-flex;
  grid-column: span 3;
  place-content: center;
}

.type p {
  background-color: var(--color-background-transparent);
  border: 0.15em dashed var(--color-border);
  border-radius: 0.5em;
  font-size: 1.2em;
  height: 1.4em;
  line-height: 1.4;
  padding: 0 0.2em;
  text-align: center;
  transition: background-color 0.5s;
}

.technologies,
.stat-box {
  display: flex;
  flex-direction: row;
  padding-top: 0.5em;

  img {
    border-radius: 0.5em;
    flex: 1 1 0;
    height: 3.5em;
    max-width: min-content;
    margin: auto;
  }
}

.technologies {
  grid-column: span 3;
}

.stat-box {
  grid-column: span 2;
}

.stat-box img {
  transition: filter 0.5s;

  &:last-child {
    margin-right: 0;
  }
}

[data-theme='dark'] .stat-box img {
  filter: invert(1);
}

.project:hover .technologies img {
  background-color: rgb(255 255 255 / 90%);
}

@media (min-width: 720px) {
  .project {
    column-gap: 0.5em;
    grid-template-columns: max-content auto;
    height: 12em;
  }

  .project > img {
    border-radius: 1em;
    display: block;
    margin: auto;
    max-width: min-content;
    min-height: 100%;
  }

  .type p {
    border: 0.1em dashed var(--color-border);
    height: 1.5em;
  }
}

@media (min-width: 1024px) {
  #project-list {
    column-gap: 4em;
    row-gap: 4em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2em 0;
  }

  .project {
    grid-template-columns: 1fr;
    height: 10em;
    width: 100%;
  }

  .project > img {
    display: none;
  }
}

@media (min-width: 1440px) {
  #project-list {
    column-gap: 5em;
  }

  .project {
    border: 0.1em solid var(--color-link);
    grid-template-columns: max-content auto;
  }

  .project > img {
    display: block;
  }

  .date {
    font-size: 1em;
  }

  .type p {
    font-size: 1.1em;
  }
}
</style>
