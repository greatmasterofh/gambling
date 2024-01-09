<script setup lang="ts">
import Club from '@/components/icons/Club.vue'
import { useMobile } from '@/helpers/useMobile'
import type { Card as TCard } from '@/features/game/model'
import type { CSSProperties } from 'vue'

export type CardProps = TCard & {
  animated?: boolean
  numberStyles?: CSSProperties
  symbolStyles?: CSSProperties
}

const isMobile = useMobile()

defineProps<CardProps>()
</script>
<template>
  <div :class="[$style.root, animated && $style.animate]">
    <div :class="$style['face-up']">
      <div :class="$style.content">
        <span :class="$style.number" :style="numberStyles">{{ number }}</span>
        <Club
          v-if="symbol === 'club'"
          :width="isMobile ? 31 : 47"
          :height="isMobile ? 30 : 50"
          :style="symbolStyles"
        />
      </div>
    </div>
    <div :class="$style['face-down']">
      <div :class="$style.pattern" />
    </div>
  </div>
</template>
<style scoped module lang="scss">
@import '@/assets/css/mixins';
@import 'card-vars';
.root {
  width: $card-width;
  height: $card-height;
  position: relative;
  transition: transform $card-transition-duration cubic-bezier(0.1, 0.4, 0.7, 1);

  &.animate {
    transform-style: preserve-3d;
    transform: rotateY(180deg);
  }

  @include mobile {
    width: $card-width-mobile;
    height: $card-height-mobile;
    box-shadow: 0 0 6px rgba(#000, 0.6);
    border-radius: 12px;

    .face-up {
      padding-top: 13px;
      padding-left: 13px;
    }

    .face-up,
    .face-down {
      border-radius: 12px;
    }

    .number {
      font-size: 32px;
    }
  }
}

.face-up {
  display: flex;
  justify-content: flex-start;
  position: absolute;
  padding-left: 20px;
  padding-top: 10px;
}

.face-down {
  position: relative;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
  padding: 9px;
}

.face-up,
.face-down {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: var(--color-neutral-0);
  backface-visibility: hidden;
}

.pattern {
  --pattern-gradient-color-a: #3085e8;
  --pattern-gradient-color-b: #1660b6;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  background-image: url('@/assets/images/face-down-pattern.png'),
    linear-gradient(to bottom, var(--pattern-gradient-color-a), var(--pattern-gradient-color-b));
  background-size: cover;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 8px;
}

.number {
  letter-spacing: 0.1px;
  font-weight: 600;
  font-size: 48px;
  color: #000;
}
</style>
