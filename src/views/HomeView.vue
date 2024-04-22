<script setup>
  import { RouterLink } from 'vue-router'
</script>


<template>
  <h1>Portfolio de Lomé Bordes</h1>

  <RouterLink :to="{ name: 'list' }">
    <div>
      <p>Projets</p>
    </div>
  </RouterLink>

  <RouterLink :to="{ name: 'contact' }">
    <div>
      <p>Contact</p>
    </div>
  </RouterLink>

  <RouterLink :to="{ name: 'about' }">
    <div>
      <p>À propos</p>
    </div>
  </RouterLink>
</template>


<style scoped>
  
  h1 {
    animation: 2s ease-in-out alternate slideIn;
  }

  a {
    border-radius: 50%;
    display: block;
    height: 100px;
    margin: 2rem;
    padding: 0;
    width: 100px;

    &:hover {
      background-color: transparent;
    }
  }

  div {
    background-color: greenyellow;
    border-radius: 50%;
    box-shadow: -0.5rem 1rem 0.5rem black;
    display: flex;
    height: 100px;
    text-align: center;
    width: 100px;
  }

  p {
    margin: auto;
    padding-bottom: 0.1rem;
    padding-right: 0.1rem;
  }

  @keyframes slideIn {

    from {
      color: transparent;
      margin-left: 70%;
    }

    95% {
      color: var(--color-text);
      margin-left: -2%;
    }

    to {
      margin-left: 0%;
    }

  }

  @media (hover: hover) {

    div {
      animation: 0.8s ease both turnOut;

      &:hover {
        animation: 0.6s ease both turnIn;
      }
    }

    @keyframes turnOut {

      from {
        box-shadow: 0.5rem 1rem 0.5rem black;
        transform: rotateY(180deg);
      }

      40% {
        box-shadow: 0.4rem 1rem 0.5rem black;
      }

      60% {
        box-shadow: -0.4rem 1rem 0.5rem black;
      }

      to {
        box-shadow: -0.5rem 1rem 0.5rem black;
        transform: rotateY(360deg);
      }

    }

    @keyframes turnIn {

      from {
        box-shadow: -0.5rem 1rem 0.5rem black;
        transform: rotateY(0);
      }

      40% {
        box-shadow: -0.4rem 1rem 0.5rem black;
      }

      60% {
        box-shadow: 0.4rem 1rem 0.5rem black;
      }

      to {
        box-shadow: 0.5rem 1rem 0.5rem black;
        transform: rotateY(180deg);
      }

    }

  }

</style>