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
          <div
            v-if="error"
            class="alert card red lighten-4 red-text text-darken-4"
          >
            <div class="card-content">
              <p><i class="material-icons">check_circle</i><span>{{ error }}</span></p>
            </div>
          </div>
          <form class="col s12">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|email"
            >
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
                  <p style="color:red;">
                    {{ errors[0] }}
                  </p>
                </div>
              </div>
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
            >
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
                  <p style="color:red;">
                    {{ errors[0] }}
                  </p>
                </div>
              </div>
            </ValidationProvider>
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
      return this.progress
    },
  },
  methods: {
    resetError() {
      this.error = ''
    },
    handleClick() {
      // 子コンポーネントから受け取ったev
      if (this.disableLoginAction) { return }
      this.progress = true

      this.$nextTick(() => {
        this.onlogin({ user: { email: this.email, password: this.password } })
          .catch((err) => {
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

<style lang="scss" scoped>
.alert {
  .card-content {
    padding: 12px;
    span {
      margin-right:4px;
    }
    .material-icons {
      position: relative;
      top: 5px;
      margin-right: 0.5em;
    }
  }
}

</style>
