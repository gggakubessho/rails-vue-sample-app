<template>
  <i class="material-icons">{{ icon }}</i>
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
      if (name === 'close') {
        icon = 'close'
      } if (name === 'remove') {
        icon = 'delete'
      } if (name === 'add') {
        icon = 'add'
      }
      return icon
    },
  },
}
</script>
