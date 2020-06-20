<template>
  <div class="task-list-header">
    <div class="title">
      <h2>{{ name }}</h2>
    </div>
    <div class="actions">
      <KbnButton
        type="text"
        @click="$emit('add')"
      >
        <KbnIcon name="add" />
      </KbnButton>
    </div>
  </div>
</template>

<script>
import KbnButton from '@/components/atoms/KbnButton.vue'
import KbnIcon from '@/components/atoms/KbnIcon.vue'

export default {
  name: 'KbnTaskListHeader',

  components: {
    KbnButton,
    KbnIcon,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>
