<script setup lang="ts">
import Middle from '@/features/game/view/Middle/Middle.vue'
import Sidebar from '@/features/game/view/Sidebar/Sidebar.vue'
import Footer from '@/features/game/view/Footer/Footer.vue'
import { useMobile } from '@/helpers/useMobile'
const isMobile = useMobile()
</script>
<template>
  <div :class="$style.root">
    <div :class="$style.body">
      <Middle />
      <Footer v-if="isMobile" />
      <div :class="$style.sidebar">
        <Sidebar />
      </div>
    </div>
    <Footer v-if="!isMobile" />
  </div>
</template>
<style scoped module lang="scss">
@import '@/assets/css/mixins';

.root {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.body {
  display: grid;
  grid-template-columns: auto 385px;
  height: inherit;

  @include mobile {
    display: flex;
    grid-template-columns: unset;
    flex-direction: column;
  }
}

.sidebar {
  @include mobile {
    padding: 21px;
  }
}
</style>
