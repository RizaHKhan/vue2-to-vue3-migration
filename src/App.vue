<template>
  <div id="app">
    <h3>Your Tasks</h3>
    <Promise :loading="loading">
      <AddTask @add="handleAdd" />
      <Tasks :tasks="tasks" @delete="handleDelete" @complete="handleComplete" />
    </Promise>
  </div>
</template>

<script>
import api from "@/services/api.js";
import Collection from "./models/Collection.js";
import Task from "./models/Task.js";
import Promise from "@/components/Promise.vue";
import Tasks from "@/components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    Promise,
    Tasks,
    AddTask
  },
  data() {
    return {
      loading: false,
      tasks: new Collection()
    };
  },
  async mounted() {
    try {
      this.loading = true;
      const tasks = await api.tasks();
      tasks.forEach(task => {
        this.tasks.add(new Task(task));
      });
    } finally {
      this.loading = false;
    }
  },
  methods: {
    handleDelete(index) {
      this.tasks.delete(index);
    },
    handleAdd(title) {
      this.tasks.add(new Task({ title, completed: false }));
    },
    handleComplete(index) {
      const task = this.tasks.collection[index];

      task.complete();
    }
  }
};
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
