<script setup lang="ts">
import RoadSignAheadOnly from '@/components/icons/RoadSignAheadOnly.vue'
type ArrowButtonDirection = 'up' | 'down'

export type ArrowButtonProps = {
  direction: ArrowButtonDirection
}

defineProps<ArrowButtonProps>()
</script>
<template>
  <button :class="[$style.root, $style[`direction-${direction}`]]">
    <RoadSignAheadOnly :class="$style.arrow" />
  </button>
</template>
<style scoped module lang="scss">
@import '@/assets/css/mixins';

$transition-duration: 200ms;

.root {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition:
    background-color $transition-duration,
    border-color $transition-duration;
  border-style: solid;
  border-width: 4px;

  @include mobile {
    width: 48px;
    height: 48px;

    .arrow {
      width: 30px;
      height: 30px;
    }
  }

  &:hover {
    &.direction {
      &-down {
        .arrow {
          transform: scale(1.2) translate(0, 2px);
        }
      }

      &-up {
        .arrow {
          transform: scale(1.2) rotate(180deg) translate(0, 2px);
        }
      }
    }
  }

  &.direction {
    &-down {
      background-color: var(--color-red-500);
      border-color: var(--color-red-600);

      &:hover {
        background-color: var(--color-red-600);
        border-color: var(--color-red-500);
      }
    }

    &-up {
      background-color: var(--color-green-500);
      border-color: var(--color-green-600);

      &:hover {
        background-color: var(--color-green-600);
        border-color: var(--color-green-500);
      }

      .arrow {
        transform: rotate(180deg);
      }
    }
  }
}

.arrow {
  color: var(--token-text-default);
  transition: transform $transition-duration;
  width: 40px;
  height: 40px;
}
</style>
