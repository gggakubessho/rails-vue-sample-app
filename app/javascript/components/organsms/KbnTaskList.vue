<template>
  <div class="task-list">
    KbnTaskList
  </div>
</template>

<script>
import KbnTaskListHeader from '../molecules/KbnTaskListHeader.vue'
import KbnTaskCard from '../molecules/KbnTaskCard.vue'
import KbnTaskForm from '../molecules/KbnTaskForm'

export default {
  name: 'KbnTaskList',

  components: {
    KbnTaskListHeader,
    KbnTaskCard,
    KbnTaskForm,
  },

  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      shown: false,
    }
  },

  computed: {
    draggableItems: {
      get() { return this.items },
      set(value) {

      },
    },
  },

  methods: {
    handleRemove({ id, listId }) {

    },

    handleChange({ added, removed }) {

    },

    handleEnd() {

    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul li {
  margin: 8px;
  padding: 4px;
  border: thin solid black;
  border-radius: 0.5em;
}
</style>
