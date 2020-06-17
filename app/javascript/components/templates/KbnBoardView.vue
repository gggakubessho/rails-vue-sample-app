<template>
  <div class="board-view">
    <nav>
      <div class="nav-wrapper">
        <a
          href="#!"
          class="brand-logo center"
        >Logo</a>
        <ul class="left hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li class="active">
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'KbnBoardView',
  data() {
    return {
      message: 'KbnBoardView!',
    }
  },
}
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
