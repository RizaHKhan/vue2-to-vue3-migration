<template>
  <div>
    <Hourglass v-if="loading" />
    <div v-else class="container">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Hourglass from "./Hourglass.vue";

interface IProps {
  loading: boolean
}

defineProps<IProps>()
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
