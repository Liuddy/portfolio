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

function toggleProject() { openProject.value = false }
</script>


<template>

  <div id="projectList">

    <div class="project" v-for="project in projectList" :key="project.id" @click="showProjectDiv(project.id)">
      <img :src="getImgPath('images', project.illustration)" :alt="`Image d'illustration du projet ${project.name}`">

      <div class="contentBox">
        <p class="name">{{ project.name }}</p>

        <p class="date">{{ project.date[0] + ' - ' + project.date[1] }}</p>

        <div class="type">
          <p v-for="type in project.type">{{ type }}</p>
        </div>

        <div class="technologies">
          <img v-for="techIcon in project.mainTech" :src="getImgPath('icons', techIcon)" :alt="`Logo de ${techIcon}`">
        </div>

        <div class="statBox">
          <img :src="getImgPath('icons', project.team)" :alt="`Icônographie pour équipe en ${project.team}`">
          <img :src="getImgPath('icons', project.environment)" :alt="`Icônographie pour cadre ${project.environment}`">
        </div>
      </div>

    </div>

  </div>

  <ProjectCard v-if="openProject" :project="clickedProject" @hideProjectDiv="toggleProject()" />

</template>


<style scoped>
html[data-theme="dark"] div.statBox img {
  filter: invert(1);
}

#projectList {
  column-gap: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem 0;
  place-items: center;
  row-gap: 4rem;
}

.project {
  align-self: center;
  border: 2px solid var(--color-link);
  border-radius: 30px;
  box-shadow: 0 12px 20px -10px black;
  color: var(--color-text);
  cursor: pointer;
  display: grid;
  grid-template-columns: 33.5% 66.5%;
  height: 200px;
  margin: auto;
  max-width: 600px;
  min-width: 600px;
  padding: 0.5rem;
  transition: 0.4s;

  &:hover {
    background-color: var(--color-link);
    transform: scale(1.12);

    .technologies img {
      background-color: rgba(255, 255, 255, 0.9);
    }
  }

  &>img {
    border-radius: 20px;
    height: 180px;
    object-fit: contain;
    width: 180px;
  }
}

.contentBox {
  display: grid;
  grid-template-columns: 5;
  grid-template-rows: 25% 20% 55%;
  place-items: left;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  grid-column: span 5;
  white-space: nowrap;
}

.date {
  font-size: 1rem;
  grid-column: span 2;
  white-space: nowrap;
}

.type {
  display: inline-flex;
  grid-column: span 3;
  place-content: center;

  p {
    background-color: var(--color-background-transparent);
    border: 1px dashed var(--color-border);
    border-radius: 7px;
    font-size: 1.1rem;
    height: 1.5rem;
    line-height: 1.4rem;
    margin-right: 0.3rem;
    padding: 0 0.2rem;
    text-align: center;
    transition: background-color 0.5s;
    white-space: nowrap;

    &:last-child {
      margin-right: 0;
    }
  }
}

.technologies,
.statBox {
  display: flex;
  flex-direction: row;
  grid-column: span 3;
  margin: 0 auto;

  img {
    height: 65px;
    border-radius: 5px;
    margin-bottom: auto;
    margin-right: 0.8rem;
    margin-top: auto;
    width: 65px;
  }
}

.statBox {
  grid-column: span 2;

  img {
    transition: filter 0.5s;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>