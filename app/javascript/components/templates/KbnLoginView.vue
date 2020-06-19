<template>
  <div class="login-view">
    <KbnLoginForm :onlogin="handleLogin" />
  </div>
</template>

<script>
import KbnLoginForm from '../molecules/KbnLoginForm.vue'

export default {
  name: 'KbnLoginView',
  components: {
    KbnLoginForm,
  },
  methods: {
    handleLogin() {

    },
    throwReject() {},
  },
}
</script>

<style scoped>
</style>
