<template>
  <button
    class=""
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
      const cls = this.type === 'text' ? 'kbn-button-text' : 'col s12 btn btn-small waves-effect'
      return cls
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
.kbn-button-text {
  border: none;
  padding-right: 0;
  padding-left: 0;
  background-color: transparent;
  color: #333333;
}
.btn-small{
  margin: 0 2px;
  padding: 0 10px;
}
</style>
