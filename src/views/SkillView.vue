<script setup>
  import { getImgPath } from '@/components/FileManager.js'
  import { skillTab, getSkillLevelIcons } from '@/components/SkillManager.js'

  function switchDivClass() {
    for (let openSkill of document.getElementsByClassName('extended'))
      if (openSkill !== event.target.parentNode)
        openSkill.classList.toggle('extended')
    event.target.parentNode.classList.toggle('extended')
  }
</script>


<template>

  <div class="techSkill">

    <div>

      <p @click="switchDivClass()">Maîtrise des technologies</p>

      <div>

        <ul>
          <li v-for="(skill, index) in skillTab[0]">
            <img v-if="index % 2 === 0" :src="getImgPath('icons', skill)"
            :alt="`Logo de ${ skill }`">
            <p v-if="index % 2 === 0"> {{ skill }} </p>
            <p v-if="index % 2 === 0">{{ getSkillLevelIcons(skillTab[0][index + 1]) }}</p>
          </li>
        </ul>

      </div>

    </div>

  </div>

  <div class="skillGrid">

    <div class="skillFlex">

      <div v-for="skillList in skillTab.slice(1, skillTab.length / 2 + 1)">

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

      <div v-for="skillList in skillTab.slice(skillTab.length / 2 + 1)">

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

  div.techSkill {
    margin-bottom: 3.5rem;
    margin-top: 2rem;

    & > div {
      background-color: var(--color-background-darker);
      border: 2px solid var(--color-link);
      border-radius: 31px;
      max-height: 3.81rem;
      overflow: hidden;
      transition:
        background-color 0.5s,
        max-height 0.6s;
      transition-delay: 0s, -0.1s;

      & > p {
        background-color: var(--color-background);
        border: 2px solid var(--color-link);
        border-radius: 40px;
        cursor: pointer;
        font-size: 1.3rem;
        font-weight: bold;
        line-height: normal;
        margin: -2px;
        padding: 1rem 1.5rem;
        text-align: center;
        transition: background-color 0.5s;

        &:hover { text-decoration: underline; }

        &:active {
          background-color: var(--color-link);
          transition: none;
        }

      }

      & > div {
        display: grid;
        grid-template-rows: 0fr;
        overflow: hidden;
        transition: grid-template-rows 0.6s;
        transition-delay: 0s;

        & ul {
          font-size: 1.2rem;
          list-style: none;
          min-height: 0;
          overflow: hidden;
          padding: 1rem;
          padding-bottom: 0.5rem;
          text-align: center;

          & li {
            display: inline-block;
            margin: 0 2rem;
            padding: 2rem;

            &:nth-child(2n) { display: none; }

            & img {
              display: block;
              height: 80px;
              border-radius: 10px;
              margin: auto;
              margin-bottom: 1rem;
              width: 80px;
            }

            & p {
              font-size: 1.1rem;
              line-height: normal;
              text-align: center;

              &:last-child {
                font-size: 1.25rem;
                margin-top: 0.2rem;
              }

            }

          }

        }

      }

      &.extended {
        max-height: 1000vh;
        transition-delay: 0s, 0.2s;

        & > div {
          grid-template-rows: 1fr;
          transition-delay: 0.2s;
        }

      }

    }

  }

  div.skillGrid {
    column-gap: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
        max-height: 3.95rem;
        overflow: hidden;
        transition:
          background-color 0.5s,
          max-height 0.6s;
        transition-delay: 0s;

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
          transition: background-color 0.5s;

          &:hover { text-decoration: underline; }

          &:active {
            background-color: var(--color-link);
            transition: none;
          }

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