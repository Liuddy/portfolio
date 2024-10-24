<script setup>
  import { getImgPath } from '@/components/FileManager.js'

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
      <h1>{{ props.project.name }}</h1>
      <p id="date">{{ props.project.date[0] + ' - ' + props.project.date[1] }}</p>
      <div>
        <img id="illustration"
        :src="getImgPath('images', props.project.illustration)"
        :alt="`Image d'illustration du projet ${ props.project.name }`">
        <div id="content">
          <p v-for="paragraph in props.project.content">
            {{ paragraph }}
          </p>
          <a v-for="link in props.project.links"
          :href="parseLink(link[0])" target="_blank">
            {{ link[1] }}
          </a>
        </div>
      </div>
      <div id="technologies">
        <img v-for="techIcon in props.project.allTech"
        :src="getImgPath('icons', techIcon)"
        :alt="`Logo de ${ techIcon }`"
        style="height: 90px; border-radius: 10px; margin: auto; width: 90px;">
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

          & p {
            margin-bottom: 1rem;

            &:first-child { margin-top: 1rem; }
          }

          & a {
            margin: 0.5rem;
            padding: 0.5rem;
          }

        }

      }

      & div#technologies {
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
      }

    }

  }

</style>