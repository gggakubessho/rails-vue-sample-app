<template>
  <button
    class="col s12 btn btn-large waves-effect "
    :class="classes"
    :disabled="disabled"
    type="button"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'KbnButton',

  props: {
    type: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const cls = this.type === 'txt' ? (`-${this.type}`) : ''
      return [`kbn-button${cls}`]
    },
  },
  methods: {
    handleClick(ev) {
      this.$emit('click', ev)
    },
  },
}
</script>

<style scoped>

</style>
