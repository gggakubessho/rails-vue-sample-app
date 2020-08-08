<template>
  <header>
    <nav class="board-navigation">
      <div class="nav-wrapper ">
        <h1>
          <a
            href="#"
            class="brand-logo"
          >Kanban App</a>
        </h1>
        <ul
          id="nav-mobile"
          class="right hide-on-med-and-down"
        >
          <li>
            <KbnButton
              @click="$emit('logout')"
            >
              ログアウト
            </KbnButton>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import KbnButton from '../atoms/KbnButton.vue'

export default {
  name: 'KbnBoardNavigation',

  components: {
    KbnButton,
  },
}
</script>

<style scoped>

</style>
