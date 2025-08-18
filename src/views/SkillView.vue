<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { getImgPath } from '@/components/FileManager.js'
import { skillTab, getSkillLevelIcons } from '@/components/SkillManager.js'

onMounted(() => {
  let url_hash = window.location.hash.slice(1)
  if (url_hash)
    document.getElementById(url_hash).classList.add('extended')
})

function switchDivClass(divClass) {
  let parentElt = event.target.parentNode
  for (let extendedSkill of document.getElementsByClassName(divClass))
    if (extendedSkill !== parentElt) extendedSkill.classList.toggle(divClass)
  if (divClass === 'extended')
    for (let extendedSkill of document.getElementsByClassName('extended-tech'))
      if (extendedSkill !== parentElt) extendedSkill.classList.toggle('extended-tech')
  parentElt.classList.toggle(divClass)
  if (parentElt.classList.contains(divClass))
    setTimeout(() => { parentElt.scrollIntoView() }, 400)
}
</script>

<template>
  <div class="tech-flex">
    <p @click="switchDivClass('extended')">Maîtrise des technologies</p>

    <div v-for="(techList, index) in skillTab[0]" :key="index">
      <p @click="switchDivClass('extended-tech')">{{ techList[0] }}</p>

      <div>
        <ul>
          <li v-for="(tech, index) in techList.slice(1)" :key="index">
            <img v-if="index % 2 === 0" :src="getImgPath('icons', tech)" :alt="`Logo de ${tech}`" />
            <p v-if="index % 2 === 0">{{ tech }}</p>
            <p v-if="index % 2 === 0">{{ getSkillLevelIcons(techList[index + 2]) }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="skill-grid">
    <div class="skill-flex">
      <div v-for="(skillList, index) in skillTab.slice(1, skillTab.length / 2 + 1)" :key="index" :id="index + 1">
        <p @click="switchDivClass('extended')">
          <RouterLink :to="{ name: 'project', query: {skill: index + 1} }">&#8598;</RouterLink>
          <span class="text">{{ skillList[0] }}</span>
          <span>{{ getSkillLevelIcons(skillList[1]) }}</span>
        </p>

        <ul>
          <li v-for="(skill, index) in skillList.slice(2)" :key="index">
            <p v-if="index % 2 === 0">
              {{ skill }}
              <span>{{ getSkillLevelIcons(skillList[index + 3]) }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div class="skill-flex">
      <div v-for="(skillList, index) in skillTab.slice(skillTab.length / 2 + 1)" :key="index" :id="index + Math.floor(skillTab.length / 2) + 1">
        <p @click="switchDivClass('extended')">
          <RouterLink :to="{ name: 'project', query: {skill: index + Math.floor(skillTab.length / 2) + 1} }">&#8598;</RouterLink>
          <span class="text">{{ skillList[0] }}</span>
          <span>{{ getSkillLevelIcons(skillList[1]) }}</span>
        </p>

        <ul>
          <li v-for="(skill, index) in skillList.slice(2)" :key="index">
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
.tech-flex {
  margin-bottom: 3.5em;
  margin-top: 1em;
  transition:
    background-color 0.5s,
    max-height 1s;
  transition-delay:
    0s,
    -0.5s;

  &.extended {
    max-height: 500vh;
    transition-delay: 0s, 0.1s;
  }
}

.skill-flex div {
  transition:
    background-color 0.5s,
    max-height 0.6s;
  transition-delay:
    0s,
    -0.2s;

  &.extended {
    max-height: 200vh;
    transition-delay: 0s, 0.1s;
  }
}

.tech-flex > div {
  border-bottom: 0.05em solid var(--color-link);
  border-radius: 1.5em;
  display: flex;
  flex-direction: column;
  max-height: 3.1em;
  overflow: hidden;
  transition: max-height 0.5s;
}

.tech-flex,
.skill-flex div {
  background-color: var(--color-background-darker);
  border-radius: 1.5em;
  max-height: 3.1em;
  outline: 0.15em solid var(--color-link);
  outline-offset: -0.15em;
  overflow: hidden;
}

.tech-flex > div div {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows 0.6s;
  transition-delay: 0s;
}

.tech-flex .extended-tech div {
  grid-template-rows: 1fr;
  transition-delay: 0.2s;
}

.tech-flex > div:last-child {
  border: none;
}

.tech-flex > .extended-tech {
  max-height: 500vh;
  transition-delay: 0.2s;
}

.tech-flex p {
  text-align: center;
  white-space: nowrap;
}

.skill-flex p {
  display: flex;
  text-align: left;
}

.tech-flex > p,
.skill-flex div > p {
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
}

.skill-flex ul p {
  margin-bottom: 1.2em;
}

.tech-flex > div > p {
  cursor: pointer;
  font-size: 1.2em;
  line-height: 1.3;
  padding: 0.5em 1em;
}

.tech-flex > p:hover {
  text-decoration: underline;
}

.tech-flex > p:active {
  background-color: var(--color-link);
  transition: none;
}

.tech-flex > div > p:hover {
  text-decoration: underline;
}

.tech-flex > div > p:active {
  color: var(--color-link);
  transition: none;
}

.skill-flex div > p:hover :not(a) {
  text-decoration: underline;
}

.skill-flex div > p:active {
  background-color: var(--color-link);
  transition: none;
}

.tech-flex ul {
  display: flex;
  flex-wrap: wrap;
  place-items: center;
}

.tech-flex ul li {
  display: inline-block;
  flex: 1 1 0;
  margin: 0 1em;
  padding: 1em 2em 1.5em;

  &:nth-child(2n) {
    display: none;
  }
}

.tech-flex ul li img {
  display: block;
  height: 5em;
  border-radius: 1em;
  margin: auto;
  margin-bottom: 1em;
}

.tech-flex ul li p:last-child {
  font-size: 1.25em;
  margin-top: 0.15em;
}

.skill-flex {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  row-gap: 3.5em;

  &:first-child {
    margin-bottom: 3.5em;
  }
}

.skill-flex div span {
  pointer-events: none;
}

.skill-flex div span:not(.text) {
  font-size: 1.2em;
  line-height: 1;
  margin-left: auto;
}

.skill-flex div a {
  color: var(--color-text);
  font-size: 1.2em;
  line-height: 1;
  margin-right: 0.5em;
  padding: 0;
  transition: none;

  &:hover {
    background-color: transparent;
    color: var(--color-link);
  }
}

.skill-flex div a:hover ~ span {
  text-decoration: none;
}

.skill-flex ul {
  padding: 1.1em;
  padding-bottom: 0;
}

.skill-flex ul span {
  padding-left: 1em;
  font-size: 1.2em;
}

.tech-flex ul,
.skill-flex ul {
  font-size: 1.1em;
  list-style: none;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .tech-flex {
    margin-top: 2em;
  }

  .skill-grid {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    column-gap: 3em;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .skill-grid .skill-flex {
    margin-bottom: 0;
  }
}

@media (min-width: 1440px) {
  .tech-flex,
  .skill-flex div {
    max-height: 3.2em;
    outline: 0.1em solid var(--color-link);
    outline-offset: -0.1em;

    & > p {
      font-size: 1.3em;
    }

    ul {
      font-size: 1.2em;
    }
  }

  .skill-grid {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    column-gap: 4em;
  }
}
</style>
