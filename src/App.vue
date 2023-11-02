<template>
  <div id="app">
    <h3>Your Tasks</h3>
    <Promise :loading="loading">
      <AddTask @add="handleAdd" />
      <Tasks :tasks="tasks" @delete="handleDelete" @complete="handleComplete" />
    </Promise>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue'
import { ITask, ICollection } from './types'
import api from "./services/api";
import Collection from "./models/Collection";
import Task from "./models/Task.js";
import Promise from "./components/Promise.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

const loading = ref(false)
const tasks: Ref<ICollection<ITask>> = ref(new Collection<ITask>())

onMounted(async () => {
    try {
      loading.value = true;
      const response = await api.tasks() as ITask[]
      response.forEach(task => {
        tasks.value.add(new Task(task));
      })
    } finally {
      loading.value = false;
    }
})

const handleDelete = (index: number) => {
  tasks.value.delete(index);
}

const handleAdd = (title: string) => {
  tasks.value.add(new Task({ title, completed: false} as ITask));
}

const handleComplete = (index: number) => {
  const task: ITask = tasks.value.collection[index];
  task.complete()
}
</script>

<style>
#app {
  font-family: "avenir", helvetica, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-fonimpot-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h3 {
  text-align: left;
}
</style>
