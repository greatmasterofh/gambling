<script setup lang="ts">
import Header from '@/features/shared/view/RootLayout/Header/Header.vue'
</script>
<template>
  <div :class="$style.root">
    <Header />
    <div :class="$style.content">
      <slot></slot>
    </div>
  </div>
</template>
<style scoped module lang="scss">
.root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex-grow: 1;
}
</style>
