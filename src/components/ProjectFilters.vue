<script setup>
import { getImgPath } from '@/components/FileManager.js'

const emit = defineEmits(['refreshProjectList'])

function toggleFilters() {
    document.getElementById('div-filters').classList.toggle('show')
}

function resetFilters() {
    let params = {
        types: [],
        team: 'all',
        environment: 'all',
        skills: []
    }
    for (let type of document.getElementsByName('type'))
        if (type.checked)
            type.checked = false
    for (let team of document.getElementsByName('team'))
        if (team.value == 'all') {
            team.checked = true
            break
        }
    for (let env of document.getElementsByName('environment'))
        if (env.value == 'all') {
            env.checked = true
            break
        }
    for (let skill of document.getElementsByName('skill'))
        if (skill.checked)
            skill.checked = false
    emit('refreshProjectList', params)
    toggleFilters()
}

function sendFiltersQuery() {
    let params = {
        types: [],
        team: null,
        environment: null,
        skills: []
    }
    for (let type of document.getElementsByName('type'))
        if (type.checked)
            params.types.push(type.value)
    for (let team of document.getElementsByName('team'))
        if (team.checked) {
            params.team = team.value
            break
        }
    for (let env of document.getElementsByName('environment'))
        if (env.checked) {
            params.environment = env.value
            break
        }
    for (let skill of document.getElementsByName('skill'))
        if (skill.checked)
            params.skills.push(skill.value)
    emit('refreshProjectList', params)
    toggleFilters()
}
</script>

<template>
    <img
        id="filter-btn"
        :src="getImgPath('icons', 'filters')"
        :alt="`Icône de loupe pour rechercher`"
        @click="toggleFilters()"
    />
    <div id="div-filters" @click.self="toggleFilters()">
        <div>
            <fieldset id="types">
                <legend>Type</legend>
                <label>
                    <input type="checkbox" name="type" value="Site web"/>
                    Site web
                </label>
                <label>
                    <input type="checkbox" name="type" value="Application"/>
                    Application
                </label>
                <label>
                    <input type="checkbox" name="type" value="App. web"/>
                    App. web
                </label>
                <label>
                    <input type="checkbox" name="type" value="App. mobile"/>
                    App. mobile
                </label>
                <label>
                    <input type="checkbox" name="type" value="Jeu vidéo"/>
                    Jeu vidéo
                </label>
            </fieldset>
            <fieldset id="team">
                <legend>Format</legend>
                <label>
                    <input type="radio" name="team" value="solo"/>
                    Solo
                </label>
                <label>
                    <input type="radio" name="team" value="groupe"/>
                    Groupe
                </label>
                <label>
                    <input type="radio" name="team" value="all" checked/>
                    Tout
                </label>
            </fieldset>
            <fieldset id="environment">
                <legend>Environnement</legend>
                <label>
                    <input type="radio" name="environment" value="personnel"/>
                    Personnel
                </label>
                <label>
                    <input type="radio" name="environment" value="universitaire"/>
                    Universitaire
                </label>
                <label>
                    <input type="radio" name="environment" value="professionnel"/>
                    Professionnel
                </label>
                <label>
                    <input type="radio" name="environment" value="all" checked/>
                    Tout
                </label>
            </fieldset>
            <fieldset id="skills">
                <legend>Compétences impliquées</legend>
                <label>
                    <input type="checkbox" id="skill-1" name="skill" value="1"/>
                    Réaliser une application
                </label>
                <label>
                    <input type="checkbox" id="skill-5" name="skill" value="5"/>
                    Gérer des données
                </label>
                <label>
                    <input type="checkbox" id="skill-2" name="skill" value="2"/>
                    Optimiser une application
                </label>
                <label>
                    <input type="checkbox" id="skill-6" name="skill" value="6"/>
                    Concevoir une idée
                </label>
                <label>
                    <input type="checkbox" id="skill-3" name="skill" value="3"/>
                    Maintenir une application
                </label>
                <label>
                    <input type="checkbox" id="skill-7" name="skill" value="7"/>
                    Conduire un projet
                </label>
                <label>
                    <input type="checkbox" id="skill-4" name="skill" value="4"/>
                    Administrer un système
                </label>
                <label>
                    <input type="checkbox" id="skill-8" name="skill" value="8"/>
                    Travailler en équipe
                </label>
            </fieldset>
            <div id="btnDiv">
                <input type="button" value="Filtrer" @click="sendFiltersQuery()"/>
                <input type="button" value="Réinitialiser" @click="resetFilters()"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
#filter-btn {
    cursor: pointer;
    display: none;
    height: 1.8em;
    left: 10%;
    position: absolute;
    top: 1em;
    transition:
        filter 0.5s,
        transform 0.1s;

    &:active {
        transform: scale(1.2);
    }
}

#div-filters {
    bottom: 0;
    cursor: pointer;
    display: none;
    left: -100%;
    overflow: hidden;
    position: fixed;
    right: 100%;
    top: 0;
    transition:
        left 0.7s,
        right 0.7s;
    z-index: 1;

    &.show {
        left: 0;
        right: 0;
        transition:
            left 0.5s,
            right 0.5s;
    }
}

#div-filters > div {
    backdrop-filter: blur(0.3em);
    background-color: rgb(10 10 10 / 60%);
    box-shadow: -3em 1em 8em 1em black;
    column-gap: 0.6em;
    cursor: auto;
    display: grid;
    row-gap: 0.3em;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: 15% 30% 45% 5%;
    max-height: 100%;
    max-width: 100%;
    min-height: 100%;
    min-width: 100%;
    overflow: hidden;
    padding: 1em;
}

fieldset {
    align-items: center;
    background-color: rgb(10 10 10 / 40%);
    border-color: var(--color-link);
    border-radius: 2em;
    color: white;
    display: grid;
    padding: 1em;
    row-gap: 1em;
}

#types {
    grid-row: span 2;
    grid-template-columns: auto auto;
}

#team {
    grid-column: span 2;
    grid-template-columns: repeat(3, auto);
}

#environment {
    grid-column: span 2;
    grid-template-columns: auto auto;
}

#skills {
    grid-template-columns: auto auto;
    grid-column: span 3;
}

legend {
    font-size: 1em;
    font-weight: bold;
    text-align: center;
}

label {
    cursor: pointer;
    font-size: 0.8em;
    margin-left: 1em;
    margin-right: auto;
    max-width: fit-content;
}

input {
    cursor: pointer;
}

#btnDiv {
    display: flex;
    grid-column: span 3;
}

#btnDiv input {
    background-color: rgb(10 10 10 / 40%);
    border: 0.1em solid var(--color-link);
    border-radius: 3em;
    color: white;
    font-size: 0.8em;
    font-weight: bold;
    line-height: 1;
    margin: auto;
    margin-top: 0.4em;
    padding: 0.4em;
    width: 22%;

    &:active {
        background-color: var(--color-link);
    }
}

[data-theme='dark'] #filter-btn {
  filter: invert(1);
}

@media (min-width: 720px) {
    #filter-btn, #div-filters {
        display: inherit;
    }
}

@media (min-width: 1024px) {
    #filter-btn {
        left: 18%;
        top: 2em;
    }

    #div-filters > div {
        column-gap: 1em;
        grid-template-rows: 15% 28% 45% 5%;
        max-width: 60%;
        min-width: 60%;
        row-gap: 0.5em;
    }

    #types {
        grid-template-columns: auto;
    }


    legend {
        font-size: 1.1em;
    }

    label {
        font-size: 1em;
    }

    #btnDiv input {
        font-size: 1em;
        padding: 0.5em;
        width: 30%;
    }
}

@media (min-width: 1440px) {
    #div-filters > div {
        column-gap: 1.5em;
        grid-template-rows: 15% 25% 45% 5%;
        max-width: 50%;
        min-width: 50%;
        row-gap: 1em;
    }

    legend {
        font-size: 1.2em;
    }

    label {
        font-size: 1.09em;
    }

    #btnDiv input {
        margin-top: 0.1em;
    }
}
</style>
