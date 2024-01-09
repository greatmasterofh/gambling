<script setup lang="ts">
import WaterfallUp from '@/components/icons/WaterfallUp.vue'
import { ref } from 'vue'
const ping = ref(65)
</script>
<template>
  <div :class="$style.root">
    <WaterfallUp width="32" height="32" />
    <div>
      <div :class="$style.label">PING</div>
      <div :class="$style.value">{{ ping }}</div>
    </div>
  </div>
</template>
<style scoped module lang="scss">
.root {
  display: flex;
  align-items: center;
  column-gap: 12px;
}

.label {
  color: var(--token-text-tertiary);
  font-size: var(--font-size-sm);
}

.value {
  font-weight: 700;
}
</style>
