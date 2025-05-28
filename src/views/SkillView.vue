<script setup>
import { getImgPath } from '@/components/FileManager.js'
import { skillTab, getSkillLevelIcons } from '@/components/SkillManager.js'

function switchDivClass(divClass) {
  for (let openSkill of document.getElementsByClassName(divClass))
    if (openSkill !== event.target.parentNode)
      openSkill.classList.toggle(divClass)
  if (divClass === 'extended')
    for (let openSkill of document.getElementsByClassName('extendedTech'))
      if (openSkill !== event.target.parentNode)
        openSkill.classList.toggle('extendedTech')
  event.target.parentNode.classList.toggle(divClass)
}
</script>


<template>

  <div class="techList">

    <div class="techFlex">

      <p @click="switchDivClass('extended')">Maîtrise des technologies</p>

      <div v-for="techList in skillTab[0]">

        <p @click="switchDivClass('extendedTech')">{{ techList[0] }}</p>

        <div>
          <ul>
            <li v-for="(tech, index) in techList.slice(1)">
              <img v-if="index % 2 === 0" :src="getImgPath('icons', tech)" :alt="`Logo de ${tech}`">
              <p v-if="index % 2 === 0"> {{ tech }} </p>
              <p v-if="index % 2 === 0">{{ getSkillLevelIcons(techList[index + 2]) }}</p>
            </li>
          </ul>
        </div>

      </div>

    </div>

  </div>

  <div class="skillGrid">

    <div class="skillFlex">

      <div v-for="skillList in skillTab.slice(1, skillTab.length / 2 + 1)">

        <p @click="switchDivClass('extended')">
          {{ skillList[0] }}
          <span>{{ getSkillLevelIcons(skillList[1]) }}</span>
        </p>

        <ul>
          <li v-for="(skill, index) in skillList.slice(2)">
            <p v-if="index % 2 === 0">
              {{ skill }}
              <span>{{ getSkillLevelIcons(skillList[index + 3]) }}</span>
            </p>
          </li>
        </ul>

      </div>

    </div>

    <div class="skillFlex">

      <div v-for="skillList in skillTab.slice(skillTab.length / 2 + 1)">

        <p @click="switchDivClass('extended')">
          {{ skillList[0] }}
          <span>{{ getSkillLevelIcons(skillList[1]) }}</span>
        </p>

        <ul>
          <li v-for="(skill, index) in skillList.slice(2)">
            <p v-if="index % 2 === 0">
              {{ skill }}
              <span>{{ getSkillLevelIcons(skillList[index + 3]) }}</span>
            </p>
          </li>
        </ul>

      </div>

    </div>

  </div>

</template>


<style scoped>
.techList {
  margin-bottom: 3.5em;
  margin-top: 2em;
}

.techFlex {
  background-color: var(--color-background-darker);
  border: 2px solid var(--color-link);
  border-radius: 31px;
  max-height: 3.81em;
  overflow: hidden;
  transition:
    background-color 0.5s,
    max-height 1.5s;
  transition-delay: 0s, -1s;

  &.extended {
    max-height: 1000vh;
    transition-delay: 0s, 0.2s;
  }

  &.extended>div {
    grid-template-rows: 1fr;
    transition-delay: 0.2s;
  }

  &>p {
    background-color: var(--color-background);
    border: 2px solid var(--color-link);
    border-radius: 40px;
    cursor: pointer;
    font-size: 1.3em;
    font-weight: bold;
    margin: -2px;
    padding: 1rem 1.5em;
    text-align: center;
    transition: background-color 0.5s;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      background-color: var(--color-link);
      transition: none;
    }
  }

  &>div {
    border-bottom: 1px solid var(--color-link);
    border-radius: 26px;
    display: flex;
    flex-direction: column;
    max-height: 3.5em;
    overflow: hidden;
    transition: max-height 0.3s;
    transition-delay: -0.1s;

    &:last-child {
      border: none;
    }

    &.extendedTech {
      max-height: 1000vh;
    }

    &.extendedTech div {
      grid-template-rows: 1fr;
      transition-delay: 0.2s;
    }

    &>p {
      cursor: pointer;
      font-size: 1.25em;
      margin: -1px;
      padding: 1rem 1.5em;
      text-align: center;

      &:hover {
        text-decoration: underline;
      }

      &:active {
        color: var(--color-link);
        transition: none;
      }
    }

    &>div {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows 0.6s;
      transition-delay: 0s;
    }
  }

  ul {
    font-size: 1.2em;
    list-style: none;
    overflow: hidden;
    padding: 1em;
    padding-bottom: 0.5em;
    padding-top: 0;
    text-align: center;

    li {
      display: inline-block;
      margin: 0 2em;
      padding: 2em;

      &:nth-child(2n) {
        display: none;
      }

      img {
        display: block;
        height: 80px;
        border-radius: 10px;
        margin: auto;
        margin-bottom: 1em;
        width: 80px;
      }

      p {
        font-size: 1.1em;
        text-align: center;

        &:last-child {
          font-size: 1.25em;
          margin-top: 0.2em;
        }
      }
    }
  }
}

.skillGrid {
  column-gap: 4em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  width: 100%;
}

.skillFlex {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  row-gap: 3.5em;

  div {
    background-color: var(--color-background-darker);
    border: 2px solid var(--color-link);
    border-radius: 31px;
    max-height: 3.95em;
    overflow: hidden;
    transition:
      background-color 0.5s,
      max-height 0.6s;
    transition-delay: 0s;

    &.extended {
      max-height: 100%;
      transition-delay: 0s, 0.2s;
    }

    &>p {
      background-color: var(--color-background);
      border: 2px solid var(--color-link);
      border-radius: 40px;
      display: flex;
      cursor: pointer;
      font-size: 1.3em;
      font-weight: bold;
      margin: -2px;
      padding: 1rem 1.5em;
      transition: background-color 0.5s;

      &:hover {
        text-decoration: underline;
      }

      &:active {
        background-color: var(--color-link);
        transition: none;
      }
    }
  }

  span {
    font-size: 1.45em;
    margin-left: auto;
    pointer-events: none;
  }

  ul {
    font-size: 1.2em;
    list-style: none;
    padding: 2em;
    padding-bottom: 0.5em;

    p {
      display: flex;
      font-size: 1.1em;
      margin-bottom: 1.5em;
      text-align: left;
    }

    span {
      padding-left: 1.5em;
      font-size: 1.25em;
    }
  }
}
</style>