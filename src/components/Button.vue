<template>
  <button
    :class="{
      success: variant === 'success',
      danger: variant === 'danger',
      info: variant === 'info'
    }"
    type="button"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  variant?: string
}

withDefaults(defineProps<IProps>(), {
  variant: 'success'
})
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
