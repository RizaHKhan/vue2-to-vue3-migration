<template>
  <div id="app">
    <Promise :loading="loading">
      <AddTask @add="handleAdd" />
      <Tasks :tasks="tasks" @delete="handleDelete" />
      <pre>
        {{ tasks }}
      </pre>
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
</style>
