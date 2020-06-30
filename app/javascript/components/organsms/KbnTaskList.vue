<template>
  <div class="task-list">
    <KbnTaskListHeader
      :name="name"
      @add="shown = true"
    />
    <ul class="task-list-items">
      <draggable
        v-model="draggableItems"
        :options="{ group: 'items' }"
        @change="handleChange"
        @end="handleEnd"
      >
        <li
          v-for="item in draggableItems"
          :key="item.id"
        >
          <KbnTaskCard
            v-bind="item"
            @remove="handleRemove"
          />
        </li>
      </draggable>
    </ul>
  </div>
</template>

<script>
import KbnTaskListHeader from '../molecules/KbnTaskListHeader.vue'
import KbnTaskCard from '../molecules/KbnTaskCard.vue'
import KbnTaskForm from '../molecules/KbnTaskForm'
import draggable from 'vuedraggable'

export default {
  name: 'KbnTaskList',

  components: {
    KbnTaskListHeader,
    KbnTaskCard,
    KbnTaskForm,
    draggable
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
    handleRemove({ id, tasklist_id }) {

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
