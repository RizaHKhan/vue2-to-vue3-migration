<template>
  <div>
    <Hourglass v-if="loading" />
    <slot v-else />
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
