<script setup lang="ts">
import EthCurrency from '@/components/icons/EthCurrency.vue'
import Button from '@/components/Button/Button.vue'
import Input from '@/components/Input/Input.vue'
import Coin from '@/components/icons/Coin.vue'

import { useMobile } from '@/helpers/useMobile'
import { h, markRaw } from 'vue'

const coinRaw = markRaw(h(Coin, { width: 18 }))
const ethCurrencyRaw = markRaw(EthCurrency)

const isMobile = useMobile()
</script>
<template>
  <aside :class="$style.root">
    <div :class="$style.tabs">
      <div :class="[$style.tab, $style.active]">Bet</div>
      <div :class="$style.tab">Autobet</div>
    </div>
    <div :class="$style.content">
      <Input
        v-if="isMobile"
        label="Bet Amount"
        placeholder="Amount"
        :suffix="ethCurrencyRaw"
        value=""
      />
      <div :class="$style.bet" v-else>
        <Input label="Bet Amount" placeholder="Enter Amount" :suffix="coinRaw" value="" />
        <div :class="$style['fast-buttons']">
          <Button variant="secondary" full-width>min</Button>
          <Button variant="secondary" full-width>½</Button>
          <Button variant="secondary" full-width>+5</Button>
          <Button variant="secondary" full-width>2X</Button>
          <Button variant="secondary" full-width>max</Button>
        </div>
      </div>
      <Button full-width size="large">Play</Button>
    </div>
  </aside>
</template>
<style module scoped lang="scss">
@import '@/assets/css/mixins';

.root {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 29px 20px 20px;
  background-color: var(--color-blue-900);

  @include mobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 13px;
    flex-direction: unset;
    justify-content: unset;
    align-items: flex-end;
  }
}

.bet {
  display: grid;
  row-gap: 12px;
}

.fast-buttons {
  display: flex;
  align-items: center;
  column-gap: 11px;
}

.tabs {
  display: flex;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
  font-weight: 500;
  flex: 1;
  height: 75px;
  background-color: var(--token-background-brand-default);
  color: var(--color-purple-500);

  @include mobile {
    font-size: var(--font-size-md);
    border-radius: 12px 12px 0 0;
    height: 60px;
  }

  &.active {
    background-color: var(--color-blue-900);
    color: var(--token-text-default);
  }
}
</style>
