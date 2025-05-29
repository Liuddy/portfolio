<template>
  <div>
    <h1>404 Page introuvable :(</h1>
    <p>La page à laquelle vous essayez d'accéder n'existe pas ou n'a pas été trouvée !</p>
  </div>
</template>


<style scoped>
div {
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
}

h1 {
  margin-top: 15%;
}

p {
  padding-top: 2em;
  text-align: center;
}

@media (min-width: 700px) {
  h1 {
    font-size: 3em;
  }

  p {
    font-size: 1.2em;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 3.5em;
  }

  p {
    font-size: 1.4em;
  }
}

@media (min-width: 1440px) {
  h1 {
    font-size: 4em;
  }

  p {
    font-size: 1.6em;
  }
}
</style>