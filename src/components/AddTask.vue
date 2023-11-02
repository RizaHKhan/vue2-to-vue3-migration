<template>
  <div class="add-task">
    <input v-model="task" placeholder="Enter new task here" type="text" />
    <Button variant="info" @click="handleAdd">
      Add
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from "./Button.vue";

const emit = defineEmits(['add'])
const task = ref<string>('')

  const handleAdd = () => {
    if (!task.value) return
    emit("add", task.value)
    task.value = ""
  }
</script>

<style scoped>
.add-task {
  display: flex;
  grid-gap: 5px;
}

@media only screen and (max-width: 500px) {
  .add-task {
    flex-direction: column;
  }
}

input {
  padding: 5px;
  font-size: 15px;
}
</style>
