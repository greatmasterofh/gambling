<script setup lang="ts">
import Game from '@/features/game/view/Game/Game.vue'
import History from '@/features/game/view/History/History.vue'
import { useMobile } from '@/helpers/useMobile'

const isMobile = useMobile()
</script>
<template>
  <div :class="$style.root">
    <Game />
    <div v-if="isMobile" :class="$style.history">
      <History />
    </div>
  </div>
</template>
<style module scoped lang="scss">
@import '@/assets/css/mixins';

.root {
  display: flex;
  flex-direction: column;
  background-image: url('@/assets/images/space-background-01.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border: 1px solid var(--color-blue-800);

  @include mobile {
    height: 360px;
    border: none;
    background-image: url('@/assets/images/space-background-02.png');
  }
}

.history {
  height: 105px;
  overflow: hidden;
}
</style>
