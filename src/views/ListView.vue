<script setup>
  import { projectList } from '@/components/ProjectManager.js'

  document.getElementsByTagName('body')[0].id = ''
  document.getElementsByTagName('header')[0].className = ''
  document.getElementsByTagName('footer')[0].className = ''
</script>


<template>
  <div id="projectList">
    <RouterLink v-for="project in projectList" :key="project.id"
    :to="{name: 'project', params: {id: project.id}}">
      <img :src="`/src/assets/images/${project.illustration}`"
      :alt="`Image d'illustration du projet ${project.name}`">
      <div class="contentBox">
        <p class="name">{{project.name}}</p>
        <p class="date">{{project.date}}</p>
        <div class="technologies">
          <img v-for="techIcon in project.technologies"
          :src="`/src/assets/icons/${techIcon}.png`"
          :alt="`Logo de ${techIcon}`">
        </div>
        <p class="description">{{project.description}}</p>
      </div>
    </RouterLink>
  </div>
</template>


<style scoped>

  div#projectList {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
    margin: 2rem 0;
    place-items: center;

    & a {
      align-self: center;
      border: 2px solid var(--color-link);
      border-radius: 30px;
      box-shadow: 0 12px 20px -10px rgba(0, 0, 0, 1);
      color: var(--color-text);
      display: grid;
      grid-template-columns: 45% 55%;
      height: 220px;
      margin: auto;
      padding: 0.5rem;
      width: 490px;

      &:hover {
        transform: scale(1.1);
      }

      & > img {
        border-radius: 20px;
        height: 200px;
        width: 200px;
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
            margin-bottom: auto;
            margin-left: 2px;
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

</style>