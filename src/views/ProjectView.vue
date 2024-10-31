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

        <div class="type">
          <p v-for="type in project.type">{{ type }}</p>
        </div>

        <img class="team" :src="getImgPath('icons', project.team)"
        :alt="`Icônographie pour équipe en ${ project.team }`">
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
    column-gap: 3.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2rem 0;
    place-items: center;
    row-gap: 3rem;

    & div.project {
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
      min-width: 400px;
      padding: 0.5rem;
      transition: 0.4s;
      width: fit-content;

      &:hover {
        background-color: var(--color-link);
        transform: scale(1.12);

        & div.technologies img { background-color: rgba(255, 255, 255, 0.9); }

      }

      & > img {
        border-radius: 20px;
        height: 180px;
        object-fit: contain;
        width: 180px;
      }

      & div.contentBox {
        display: grid;
        grid-template-columns: 5;
        grid-template-rows: 20% 17% 63%;
        place-items: left;

        & p.name {
          font-size: 1.5rem;
          font-weight: bold;
          grid-column: span 2;
        }

        & div.type {
          display: inline-flex;
          grid-column: span 2;
          margin-top: 0.5rem;

          & p {
            background-color: var(--color-background-transparent);
            border: 1px dashed var(--color-border);
            border-radius: 7px;
            font-size: 0.9rem;
            height: 1.3rem;
            line-height: 1.2rem;
            margin-right: 0.2rem;
            padding: 0 0.2rem;
            text-align: center;
            transition: background-color 0.5s;
            white-space: nowrap;
          }

        }

        & img.team {
          height: 25px;
          margin-left: auto;
          margin-right: 3px;
          margin-top: 0.3rem;
          transition: filter 0.5s;
          width: 25px;
        }

        & p.date {
          font-size: 0.9rem;
          font-weight: lighter;
          grid-column: span 2;
          white-space: nowrap;
        }

        & div.technologies {
          display: flex;
          flex-direction: row;
          grid-column: span 3;
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
          font-size: 1rem;
          grid-column: span 5;
          margin-top: 8px;
        }
      }

    }

  }

  html[data-theme="dark"] img.team { filter: invert(1); }

  @media (max-width: 1280px) {

    div#projectList { grid-template-columns: 1fr; }

  }

</style>