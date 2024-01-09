<script setup lang="ts">
export type InputProps = {
  value: string
  placeholder?: string
  label?: string
  suffix?: any
}

defineProps<InputProps>()
</script>
<template>
  <div :class="$style.root">
    <span v-if="label" :class="$style.label">{{ label }}</span>
    <div :class="$style['input-wrapper']">
      <input type="text" :class="$style.input" :placeholder="placeholder" />
      <span :class="$style.suffix">
        <component :is="suffix"></component>
      </span>
    </div>
  </div>
</template>
<style scoped module lang="scss">
.root {
  display: flex;
  flex-direction: column;
  row-gap: 13px;
}

.input-wrapper {
  position: relative;
  background-color: var(--token-background-brand-default);
  overflow: hidden;
  height: 60px;
  border-radius: 12px;
}

.input {
  padding-left: 18px;
  font-size: var(--font-size-md);
  color: var(--token-text-default);
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;

  &::placeholder {
    opacity: 1;
    color: var(--color-purple-700);
  }
}

.label {
  font-weight: 500;
}

.suffix {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
