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
    <div class="project" v-for="project in projectList" :key="project.id"
    @click="showProjectDiv(project.id)">
      <img :src="getImgPath('images', project.illustration)"
      :alt="`Image d'illustration du projet ${ project.name }`">
      <div class="contentBox">
        <p class="name">{{ project.name }}</p>
        <p class="date">{{ project.date[0] + ' - ' + project.date[1] }}</p>
        <div class="technologies">
          <img v-for="techIcon in project.mainTech"
          :src="getImgPath('icons', techIcon)"
          :alt="`Logo de ${ techIcon }`">
        </div>
        <p class="description">{{ project.description }}</p>
      </div>
    </div>
  </div>

  <ProjectCard v-if="openProject" :project="clickedProject"
  @hideProjectDiv="toggleProject()"/>

</template>


<style scoped>

  div#projectList {
    display: grid;
    grid-gap: 1.5rem 2.5rem;
    grid-template-columns: 1fr 1fr;
    margin: 2rem 0;
    place-items: center;

    & div.project {
      align-self: center;
      border: 2px solid var(--color-link);
      border-radius: 30px;
      box-shadow: 0 12px 20px -10px black;
      color: var(--color-text);
      display: grid;
      grid-template-columns: 40% 60%;
      height: 200px;
      margin: auto;
      max-width: 600px;
      min-width: 400px;
      padding: 0.5rem;
      transition: 0.4s;
      width: fit-content;

      &:hover {
        background-color: var(--color-link);
        transform: scale(1.1);

        & img { background-color: rgba(255, 255, 255, 0.9); }

      }

      & > img {
        border-radius: 20px;
        height: 180px;
        object-fit: contain;
        width: 180px;
      }

      & div.contentBox {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 20% 17% 63%;
        place-items: left;

        & p.name {
          font-size: 1.5rem;
          font-weight: bold;
          grid-column: span 2;
        }

        & p.date {
          font-size: 0.9rem;
          font-weight: lighter;
        }

        & div.technologies {
          display: flex;
          flex-direction: row;
          margin-left: auto;

          & img {
            height: 30px;
            border-radius: 5px;
            margin-bottom: auto;
            margin-left: 3px;
            margin-top: auto;
            width: 30px;
          }

        }

        & p.description {
          grid-column: span 2;
          margin-top: 8px;
        }
      }

    }

  }

  @media (max-width: 1280px) {

    div#projectList { grid-template-columns: 1fr; }

  }

</style>