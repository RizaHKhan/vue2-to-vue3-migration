<template>
  <div>
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
input {
  padding: 5px;
  font-size: 15px;
}
</style>
