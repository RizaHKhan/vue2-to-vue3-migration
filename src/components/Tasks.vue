<template>
  <div>
    <div
      class="grid"
      v-for="({ title, completed }, index) in tasks.collection"
      :key="index"
    >
      <div class="col">
        <p>
          {{ title }}
        </p>
      </div>
      <div class="col">
        <div class="status" :class="{ completed: completed }"></div>
      </div>
      <div class="col">
        <Button variant="danger" @click="$emit('delete', index)">Delete</Button>
        <Button variant="success" @click="$emit('complete', index)"
          >Complete</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Tasks",
  components: {
    Button
  },
  props: {
    tasks: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 100px 0.5fr;
}

.col {
  display: flex;
  flex-direction: row;
  grid-gap: 5px;
  margin-bottom: 10px;
  align-content: center;
  margin: auto 0;
}

.status {
  height: 20px;
  width: 20px;
  background: orange;
  margin: auto;
}
.status.completed {
  background: green;
}
</style>
