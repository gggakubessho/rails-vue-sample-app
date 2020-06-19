<template>
  <main>
    <center>
      <div class="section" />
      <h5>Kanban App</h5>
      <div class="section" />
      <div class="container">
        <div
          class="z-depth-1 grey lighten-4 row"
          style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;"
        >
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  autocomplete="off"
                  class="validate"
                  @focus="resetError"
                >
                <label for="email">Enter your email</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  id="pwassword"
                  v-model="password"
                  type="password"
                  autocomplete="off"
                  class="validate"
                  @focus="resetError"
                >
                <label for="password">Enter your password</label>
              </div>
            </div>
            <br>
            <center>
              <div class="row">
                <KbnButton
                  :disabled="disableLoginAction"
                  @click="handleClick"
                >
                  ログイン
                </KbnButton>
              </div>
            </center>
          </form>
        </div>
      </div>
    </center>
  </main>
</template>

<script>
import KbnButton from '../atoms/KbnButton.vue'

export default {
  name: 'KbnLoginForm',
  components: {
    KbnButton,
  },
  props: {
    onlogin: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      email: '',
      password: '',
      progress: false,
      error: '',
    }
  },
  computed: {
    disableLoginAction() {

    },
  },
  methods: {
    resetError() {

    },
    handleClick(ev) {
      // 子コンポーネントから受け取ったev
    },
  },

}
</script>

<style scoped>
</style>
