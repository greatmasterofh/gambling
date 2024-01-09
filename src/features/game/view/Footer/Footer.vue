<script setup lang="ts">
import Ping from '@/features/shared/view/Ping/Ping.vue'
import Keyboard from '@/components/icons/Keyboard.vue'
import Lock from '@/components/icons/Lock.vue'
import Stats from '@/components/icons/Stats.vue'
import QuestionCircle from '@/components/icons/QuestionCircle.vue'
import Settings from '@/components/icons/Settings.vue'
import Button from '@/components/Button/Button.vue'
import History from '@/features/game/view/History/History.vue'
import { useMobile } from '@/helpers/useMobile'

const isMobile = useMobile()
</script>
<template>
  <footer :class="$style.root">
    <div :class="$style.column">
      <div :class="$style['ping-n-button']">
        <Ping />
        <Button variant="secondary" :class="$style['history-button']" v-if="!isMobile">
          История игр
        </Button>
      </div>
      <div :class="$style.history" v-if="!isMobile">
        <History />
      </div>
    </div>
    <div :class="$style.column">
      <Keyboard />
      <Lock />
      <Stats />
      <QuestionCircle />
      <Settings />
    </div>
  </footer>
</template>
<style scoped module lang="scss">
@import '@/assets/css/mixins';
.root {
  display: grid;
  grid-template-columns: minmax(0, 100%) 385px;
  background-color: var(--color-blue-900);
  height: 64px;
  min-height: 64px;
  padding: 0 20px;

  @include mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: unset;
  }
}

.column {
  display: flex;
  align-items: center;
  height: 100%;

  &:first-child {
    column-gap: 32px;
  }

  &:last-child {
    justify-content: end;
    column-gap: 24px;
  }
}

.ping-n-button {
  display: flex;
  align-items: center;
  column-gap: 29px;
}

.history-button {
  width: 155px;
}

.history {
  flex-grow: 1;
  width: 100%;
  max-width: 1192px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 262px;
    pointer-events: none;
    background: linear-gradient(to left, var(--color-blue-900), transparent);
  }
}
</style>
