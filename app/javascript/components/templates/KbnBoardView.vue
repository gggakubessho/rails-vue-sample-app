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
  data () {
    return {
      progress: false,
      message: ''
    }
  },
  computed: {

  },
  methods: {
    setProgress (message) {
      this.progress = true
      this.message = message
    },
    resetProgress () {
      this.progress = false
      this.message = ''
    },
    handleLogout () {
      this.setProgress('ログオフ中...')

      return this.$store.dispatch('logout')
        .then(() => {
          this.$router.push({ path: '/login' })
        })
        .catch(err => Promise.reject(err))
        .then(() => {
          this.resetProgress()
        })
    }
  },

}
</script>

<style scoped>

</style>
