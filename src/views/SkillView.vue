<script setup>
  import { skillTab, getSkillLevelIcons } from '@/components/SkillManager.js'

  function switchDivClass() {
    for (let openSkill of document.getElementsByClassName('extended'))
      if (openSkill !== event.target.parentNode)
        openSkill.classList.toggle('extended')
    event.target.parentNode.classList.toggle('extended')
  }
</script>


<template>

  <div id="skillGrid">

    <div class="skillFlex">

      <div v-for="skillList in skillTab.slice(0, skillTab.length / 2)">

        <p @click="switchDivClass()">
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

      <div v-for="skillList in skillTab.slice(skillTab.length / 2)">

        <p @click="switchDivClass()">
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

  div#skillGrid {
    column-gap: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    padding: 0;
    width: 100%;

    div.skillFlex {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      row-gap: 3.5rem;

      & div {
        background-color: var(--color-background-darker);
        border: 2px solid var(--color-link);
        border-radius: 31px;
        max-height: 3.8rem;
        overflow: hidden;
        transition:
          background-color 0.5s,
          max-height 0.6s;
        transition-delay: 0;

        &.extended {
          max-height: 100%;
          transition-delay: 0s, 0.2s;
        }

        & > p {
          background-color: var(--color-background);
          border: 2px solid var(--color-link);
          border-radius: 40px;
          display: flex;
          cursor: pointer;
          font-size: 1.3rem;
          font-weight: bold;
          line-height: normal;
          margin: -2px;
          padding: 1rem 1.5rem;
          text-align: center;

          &:hover { text-decoration: underline; }

          &:active { background-color: var(--color-link); }

          &:not(:active) { transition: background-color 0.5s; }

        }
        
        & span {
          font-size: 1.45rem;
          margin-left: auto;
          pointer-events: none;
        }

        & ul {
          font-size: 1.2rem;
          list-style: none;
          padding: 2rem;
          padding-bottom: 0.5rem;

          & p {
            display: flex;
            font-size: 1.1rem;
            line-height: normal;
            margin-bottom: 1.5rem;
            text-align: left;
        
            & span {
              padding-left: 1.5rem;
              font-size: 1.25rem;
            }

          }

        }

      }

    }

  }

</style>