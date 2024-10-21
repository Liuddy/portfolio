<script setup>
  import { getImgPath } from '@/components/FileManager.js'
  import { projectList } from '@/components/ProjectManager.js'

  function showProjectDiv(projectId) {
    let project = projectList[projectId]
    let projectDiv = document.getElementById('projectDiv')
    let projectImg = event.currentTarget.firstChild
    let projectTech = ''
    for (let techIcon of project.allTech)
      projectTech += '<img src="' + getImgPath('icons', techIcon)
                  + '" alt="Logo de ' + techIcon
                  + '" style="height: 90px; border-radius: 10px; margin: auto; width: 90px;">'
    projectDiv.getElementsByTagName('h1')[0].innerHTML = project.name
    document.getElementById('date').innerHTML = project.date
    document.getElementById('illustration').src = projectImg.src
    document.getElementById('illustration').alt = projectImg.alt
    document.getElementById('content').innerHTML = project.content
    document.getElementById('technologies').innerHTML = projectTech
    projectDiv.style.visibility = 'visible'
  }

  function hideProjectDiv() {
    if (event.target.id === 'projectDiv')
      document.getElementById('projectDiv').style.visibility = 'hidden'
  }
</script>


<template>

  <div id="projectList">
    <div class="project" v-for="project in projectList" :key="project.id"
    @click="showProjectDiv(project.id)">
      <img :src="getImgPath('images', project.illustration)"
      :alt="`Image d'illustration du projet ${project.name}`">
      <div class="contentBox">
        <p class="name">{{project.name}}</p>
        <p class="date">{{project.date}}</p>
        <div class="technologies">
          <img v-for="techIcon in project.mainTech"
          :src="getImgPath('icons', techIcon)"
          :alt="`Logo de ${techIcon}`">
        </div>
        <p class="description">{{project.description}}</p>
      </div>
    </div>
  </div>

  <div id="projectDiv" @click="hideProjectDiv()">
    <div>
      <h1></h1>
      <p id="date"></p>
      <div>
        <img id="illustration">
        <div id="content"></div>
      </div>
      <div id="technologies"></div>
    </div>
  </div>

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

  div#projectDiv {
    backdrop-filter: blur(1px);
    background-color: rgba(10, 10, 10, 0.4);
    bottom: 0;
    min-height: 100vh;
    min-width: 100vw;
    left: 0;
    overflow: hidden;
    padding: 3rem;
    position: fixed;
    right: 0;
    top: 0;
    visibility: hidden;
    z-index: 1;

    & > div {
      background: var(--color-background);
      border: 2px solid var(--color-link);
      border-radius: 40px;
      box-shadow: 0 18px 30px -10px black;
      color: var(--color-text);
      display: flex;
      flex-direction: column;
      margin: auto;
      max-width: 1280px;
      min-height: 100%;
      max-height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 1rem;

      & h1 {
        font-size: 2.2rem;
        font-weight: bold;
        text-align: center;
      }

      & p#date {
        font-size: 1.2rem;
        font-weight: lighter;
        margin-bottom: 1rem;
        text-align: center;
      }

      & div {
        flex: 1;

        & img#illustration {
          border-radius: 20px;
          float: left;
          height: 280px;
          margin-right: 1.1rem;
          object-fit: contain;
          width: 280px;
        }

        & div#content {
          font-size: 1.1rem;
          line-height: 1.5;
        }

      }

      & div#technologies {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
      }

    }

  }

  @media (max-width: 1280px) {

    div#projectList { grid-template-columns: 1fr; }

  }

</style>