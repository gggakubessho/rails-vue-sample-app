<template>
  <div class="board-view">
    <KbnBoardNavigation @logout="handleLogout" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import KbnBoardNavigation from '../molecules/KbnBoardNavigation.vue'

export default {
  name: 'KbnBoardView',
  components: {
    KbnBoardNavigation,
  },
  data() {
    return {
      message: 'KbnBoardView!',
    }
  },
  computed: {

  },
  methods: {
    handleLogout() {

    },
  },

}
</script>

<style scoped>

</style>
