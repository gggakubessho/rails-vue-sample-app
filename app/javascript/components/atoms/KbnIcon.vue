<template>
  <span :class="classes">
    {{ icon }}
  </span>
</template>

<script>
export default {
  name: 'KbnIcon',

  props: {
    name: {
      type: String,
      required: true,
      validator: (value) => ['close', 'remove', 'add'].indexOf(value) !== -1,
    },
  },

  computed: {
    classes() {
      return ['kbn-icon', this.name]
    },

    icon() {
      const name = this.name
      let icon = ''
      if (name === 'close' || name === 'remove') {
        icon = 'x'
      } if (name === 'add') {
        icon = '+'
      }
      return icon
    },
  },
}
</script>
