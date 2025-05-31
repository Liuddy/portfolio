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
.techFlex,
.skillFlex div {
  background-color: var(--color-background-darker);
  border-radius: 1.5em;
  max-height: 3.1em;
  outline: 0.15em solid var(--color-link);
  outline-offset: -0.15em;
  overflow: hidden;

  &>p {
    background-color: var(--color-background);
    border: 0.1em solid var(--color-link);
    border-radius: 1.5em;
    cursor: pointer;
    font-size: 1.25em;
    font-weight: bold;
    line-height: 1.3;
    padding: 0.5em 1em;
    transition: background-color 0.5s;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      background-color: var(--color-link);
      transition: none;
    }
  }

  ul {
    font-size: 1.1em;
    list-style: none;
    overflow: hidden;
  }
}

.techFlex {
  margin-bottom: 3.5em;
  margin-top: 1em;
  transition:
    background-color 0.5s,
    max-height 1s;
  transition-delay: 0s, -0.5s;

  &.extended {
    max-height: 500vh;
    transition-delay: 0s, 0.1s;
  }

  &>div {
    border-bottom: 0.05em solid var(--color-link);
    border-radius: 1.5em;
    display: flex;
    flex-direction: column;
    max-height: 3.1em;
    overflow: hidden;
    transition: max-height 0.5s;

    &:last-child {
      border: none;
    }

    &.extendedTech {
      max-height: 500vh;
      transition-delay: 0.2s;
    }

    &.extendedTech div {
      grid-template-rows: 1fr;
      transition-delay: 0.2s;
    }

    &>p {
      cursor: pointer;
      font-size: 1.2em;
      line-height: 1.3;
      padding: 0.5em 1em;

      &:hover {
        text-decoration: underline;
      }

      &:active {
        color: var(--color-link);
        transition: none;
      }
    }

    div {
      display: grid;
      grid-template-rows: 0fr;
      overflow: hidden;
      transition: grid-template-rows 0.6s;
      transition-delay: 0s;
    }
  }

  p {
    text-align: center;
    white-space: nowrap;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    place-items: center;

    li {
      display: inline-block;
      flex: 1 1 0;
      margin: 0 1em;
      padding: 1em 2em 1.5em 2em;

      &:nth-child(2n) {
        display: none;
      }

      img {
        display: block;
        height: 5em;
        border-radius: 1em;
        margin: auto;
        margin-bottom: 1em;
      }

      p:last-child {
        font-size: 1.25em;
        margin-top: 0.15em;
      }
    }
  }
}

.skillFlex {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  row-gap: 3.5em;

  &:first-child {
    margin-bottom: 3.5em;
  }

  div {
    transition:
      background-color 0.5s,
      max-height 0.6s;
    transition-delay: 0s, -0.2s;

    &.extended {
      max-height: 200vh;
      transition-delay: 0s, 0.1s;
    }

    span {
      font-size: 1.2em;
      line-height: 1;
      margin-left: auto;
      pointer-events: none;
    }
  }

  p {
    display: flex;
    text-align: left;
  }

  ul {
    padding: 1.1em;
    padding-bottom: 0;

    p {
      margin-bottom: 1.2em;
    }

    span {
      padding-left: 1em;
      font-size: 1.2em;
    }
  }
}

@media (min-width: 1024px) {
  .techFlex {
    margin-top: 2em;
  }

  .skillGrid {
    column-gap: 3em;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .skillFlex {
      margin-bottom: 0;
    }
  }
}

@media (min-width: 1440px) {
  .techFlex,
  .skillFlex div {
    max-height: 3.2em;
    outline: 0.1em solid var(--color-link);
    outline-offset: -0.1em;

    &>p {
      font-size: 1.3em;
    }

    ul {
      font-size: 1.2em;
    }
  }

  .skillGrid {
    column-gap: 4em;
  }
}
</style>