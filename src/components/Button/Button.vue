<script setup lang="ts">
import type { CSSProperties } from 'vue'

type ButtonVariant = 'default' | 'secondary'
type ButtonSize = 'medium' | 'large'

export type ButtonProps = {
  style?: CSSProperties
  htmlType?: 'button' | 'submit'
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  startIcon?: any
  endIcon?: any
}

withDefaults(defineProps<ButtonProps>(), {
  htmlType: 'button',
  size: 'medium',
  variant: 'default'
})
</script>
<template>
  <button
    :type="htmlType"
    :class="[
      $style.root,
      $style[`size-${size}`],
      $style[`variant-${variant}`],
      { [$style['full-width']]: fullWidth }
    ]"
    :style="style"
  >
    <span :class="$style.inner">
      <component :is="startIcon"></component>
      <slot></slot>
      <component :is="endIcon"></component>
    </span>
  </button>
</template>
<style lang="scss" scoped module>
@import '@/assets/css/mixins';

.root {
  font-family: var(--font-family-default);
  font-weight: 400;
  color: var(--token-text-default);
  padding: 0 16px;
  border: none;
  outline: none;
  cursor: pointer;
  white-space: nowrap;

  &.full-width {
    width: 100%;
  }

  &.variant {
    &-default {
      background: linear-gradient(180deg, var(--color-blue-400), var(--color-blue-500));
      box-shadow: inset 0 0 0 1px var(--color-blue-300);
    }
    &-secondary {
      background-color: var(--color-blue-700);
      color: var(--color-purple-400);
    }
  }

  &.size {
    &-medium {
      height: 40px;
      border-radius: 8px;
      font-size: var(--font-size-md);
      font-weight: 500;

      .inner {
        column-gap: 8px;
      }
    }
    &-large {
      height: 73px;
      border-radius: 12px;
      font-size: var(--font-size-lg);

      .inner {
        column-gap: 4px;
      }
    }
  }

  @include mobile {
    padding: 0 12px;

    &.variant {
      &-secondary {
        background-color: var(--color-blue-900);
      }
    }

    &.size {
      &-medium {
        height: 36px;
      }

      &-large {
        height: 60px;
      }
    }
  }
}

.inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
