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
      <div>
        <div id="details">
          <img id="illustration"
          :src="getImgPath('images', props.project.illustration)"
          :alt="`Image d'illustration du projet ${ props.project.name }`">
          <div id="type">
            <p v-for="type in props.project.type">{{ type }}</p>
          </div>
          <div id="team">
            <img :src="getImgPath('icons', props.project.team)"
            :alt="`Icônographie pour équipe en ${ props.project.team }`">
            <p>Projet en {{ props.project.team }}</p>
          </div>
          <div id="environment">
            <img :src="getImgPath('icons', props.project.environment)"
            :alt="`Icônographie pour équipe en ${ props.project.environment }`">
            <p>Cadre {{ props.project.environment }}</p>
          </div>
          <div id="skills">
            <ul>
              <li v-for="skill in props.project.skills">&#9733; {{ skillTab[skill][0] }}</li>
            </ul>
          </div>
        </div>
        <div id="content">
          <h1>{{ props.project.name }}</h1>
          <p id="date">{{ props.project.date[0] + ' - ' + props.project.date[1] }}</p>
          <p v-for="paragraph in props.project.content">
            {{ paragraph }}
          </p>
          <div id="links">
            <a v-for="link in props.project.links"
            :href="parseLink(link[0])" target="_blank">
              {{ link[1] }}
            </a>
          </div>
        </div>
      </div>
      <div id="technologies">
        <img v-for="techIcon in props.project.allTech"
        :src="getImgPath('icons', techIcon)"
        :alt="`Logo de ${ techIcon }`">
      </div>
    </div>
  </div>

</template>


<style scoped>

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
      scrollbar-width: none;

      & div {
        display: grid;
        flex: 1;
        grid-template-columns: 26% 74%;

        & div#details {
          display: flex;
          flex-direction: column;
          margin-top: 1rem;

          & img#illustration {
            border-radius: 20px;
            float: left;
            height: 290px;
            margin: auto;
            object-fit: contain;
            width: 290px;
          }

          & div#type {
            display: inline-flex;
            flex-grow: 0;
            margin-top: 1.5rem;

            & p {
              background-color: var(--color-background-transparent);
              border: 1px dashed var(--color-border);
              border-radius: 8px;
              font-size: 1rem;
              height: 1.5rem;
              line-height: 1.3rem;
              margin: auto;
              padding: 0 0.3rem;
              text-align: center;
              white-space: nowrap;
            }

          }

          & div#team, div#environment {
            margin-left: 1rem;
            margin-top: 1rem;

            & img {
              height: 55px;
              margin: auto;
              width: 55px;
            }

            & p {
              font-size: 1rem;
              margin-bottom: auto;
              margin-left: 1rem;
              margin-top: auto;
            }

          }

          & div#skills ul {
            font-size: 0.95rem;
            margin-top: 1.5rem;
            line-height: 1.5;
            list-style: none;
            padding-left: 1rem;
            white-space: nowrap;
          }

        }

        & div#content {
          display: flex;
          flex-direction: column;
          font-size: 1.1rem;
          line-height: 1.5;

          & h1 {
            font-size: 2.2rem;
            font-weight: bold;
            text-align: center;
          }

          & p#date {
            font-size: 1.2rem;
            font-weight: lighter;
            margin-bottom: 1.5rem;
            text-align: center;
          }

          & p {
            margin-bottom: 1rem;
            margin-left: 1rem;
            padding: 0 2rem;

            &:first-child { margin-top: 1rem; }

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

      & div#technologies {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;

        & img {
          height: 90px;
          border-radius: 10px;
          margin: auto;
          width: 90px;
        }

      }

    }

  }

  html[data-theme="dark"] div#details div img { filter: invert(1); }

</style>