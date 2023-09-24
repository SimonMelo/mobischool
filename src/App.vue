<script setup>

</script>

<template>
  <header>

  </header>

  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cuprum&display=swap');

html {
  font-size: 62.5%;
}

body{
  background:#FFE925;
}

*{
  padding: 0;
  margin:0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
