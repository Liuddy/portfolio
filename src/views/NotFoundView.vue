<template>
  <div>
    <h1>404 Page not found</h1>
    <p>La page à laquelle vous essayez d'accéder n'existe pas ou n'a pas été trouvée !</p>
  </div>
</template>


<style scoped>
div {
  bottom: 8rem;
  display: flex;
  flex-direction: column;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
  top: 5rem;

  & h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-top: auto;
  }

  & p {
    font-size: 1.6rem;
    margin-bottom: auto;
    padding-top: 2rem;
    text-align: center;
  }

}
</style>