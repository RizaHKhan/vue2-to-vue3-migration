<template>
  <button
    :class="{
      success: variant === 'success',
      danger: variant === 'danger',
      info: variant === 'info'
    }"
    type="button"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "success"
    }
  }
};
</script>

<style scoped>
button {
  border: 0;
  background: 0;
  padding: 10px;
  border-radius: 5px;
  color: white;
}

.success {
  background: green;
}

.danger {
  background: red;
}

.info {
  background: orange;
}
</style>
