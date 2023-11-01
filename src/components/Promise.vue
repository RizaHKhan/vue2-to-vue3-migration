<template>
  <div>
    <Hourglass v-if="loading" />
    <div v-else class="container">
      <slot />
    </div>
  </div>
</template>

<script>
import Hourglass from "@/components/Hourglass.vue";

export default {
  components: {
    Hourglass
  },
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
