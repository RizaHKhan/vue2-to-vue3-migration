<template>
  <div class="add-task">
    <input v-model="task" placeholder="Enter new task here" type="text" />
    <Button variant="info" @click="handleAdd">
      Add
    </Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button
  },
  data() {
    return {
      task: ""
    };
  },
  methods: {
    handleAdd() {
      if (!this.task) return;
      this.$emit("add", this.task);
      this.task = "";
    }
  }
};
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
