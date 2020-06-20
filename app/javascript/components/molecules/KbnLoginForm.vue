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
                <p
                  v-if="progress"
                  class="login-progress"
                >
                  ログイン中...
                </p>
                <p
                  v-if="error"
                  class="login-error"
                >
                  {{ error }}
                </p>
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
      return this.progress
    },
  },
  methods: {
    resetError() {
      this.error = ''
    },
    handleClick(ev) {
      // 子コンポーネントから受け取ったev
      if(this.disableLoginAction) { return }
      this.progress = true
      this.error = 'error'

      this.$nextTick(() => {
        this.onlogin({ user: { email: this.email, password: this.password }})
          .catch(err => {
            this.error = err.message
          })
          .then(() => {
            this.progress = false
          })
      })
    },
  },

}
</script>

<style scoped>
</style>
