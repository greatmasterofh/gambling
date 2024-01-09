<script setup lang="ts">
import Card from '@/features/game/view/Card/Card.vue'
import CircleButton from '@/features/game/view/ArrowButton/ArrowButton.vue'
import Coin from '@/components/icons/Coin.vue'
import { ref } from 'vue'

const shownUp = ref(false)
</script>
<template>
  <div :class="$style.root">
    <div :class="$style.content">
      <div :class="$style['card-slot']"></div>
      <div :class="$style['content-inner']">
        <div :class="$style['button-wrapper']">
          <div :class="$style['button-wrapper-button']">
            <CircleButton direction="down" @click="shownUp = true" />
          </div>
          <span>Low or Same</span>
          <span :class="$style.price">
            <span :class="$style['price-win']">Win</span>
            <span :class="$style['price-price']">$275.43</span>
            <Coin width="16" />
          </span>
        </div>
        <div :class="$style.cards">
          <div :class="$style['card-slot']"><Card symbol="club" :number="8" animated /></div>
          <div :class="[$style['card-slot'], shownUp && $style.appear]">
            <div :class="[$style.trajectory, shownUp && $style.play]">
              <Card
                symbol="club"
                :number="6"
                :class="[$style['main-card'], shownUp && $style.show]"
                animated
              />
            </div>
          </div>
          <div :class="$style['card-slot']">
            <Card symbol="club" :number="7" animated />
          </div>
        </div>
        <div :class="$style['button-wrapper']">
          <div :class="$style['button-wrapper-button']">
            <CircleButton direction="up" @click="shownUp = true" />
          </div>
          <span>High or Same</span>
          <span :class="$style.price">
            <span :class="$style['price-win']">Win</span>
            <span :class="$style['price-price']">$275.43</span>
            <Coin width="16" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped module lang="scss">
@import '@/features/game/view/Card/card-vars';
@import '@/assets/css/mixins';
$row-gap: 50px;

.root {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  @include mobile {
    padding-top: 41px;
    align-items: unset;

    .content-inner {
      column-gap: 0;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  row-gap: $row-gap;
  align-items: center;
  perspective: 890px;
}

.content-inner {
  display: flex;
  align-items: center;
  column-gap: 45px;
}

.cards {
  display: flex;
  align-items: center;
  column-gap: 20px;

  @include mobile {
    width: $card-width-mobile;
    height: $card-height-mobile;
    position: relative;
  }
}

.card-slot {
  position: relative;
  width: $card-width;
  height: $card-height;
  opacity: 0.3;
  transition: 500ms;

  &.appear {
    opacity: 1;
  }

  @include mobile {
    opacity: 1;
    width: $card-width-mobile;
    height: $card-height-mobile;
    position: absolute;

    &:first-child {
      transform: translateY(4px);
      z-index: 2;
    }

    &:last-child {
      transform: translateY(8px);
    }

    &:nth-child(2) {
      z-index: 3;
    }
  }
}

.trajectory {
  &.play {
    transition-timing-function: ease-out;
    transition-duration: 300ms;
    transition-delay: $card-transition-duration;
    transform: translate(0, calc(-100% - $row-gap));
  }

  @include mobile {
    position: relative;

    &.play {
      transform: translate(0, -4px);
    }
  }
}

.main-card {
  &.show {
    transform: rotateY(360deg);
  }
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  @include mobile {
    row-gap: unset;
    padding: 0 16px 0 23px;
    font-size: var(--font-size-xs);

    &-button {
      margin-bottom: 6px;
    }
  }
}

.price {
  display: flex;
  align-items: center;
  font-weight: 500;
  column-gap: 4px;

  &-win {
    color: var(--token-text-secondary);
  }

  &-price {
    display: flex;
    align-items: center;
    column-gap: 4px;
    color: var(--color-yellow-500);
  }
}
</style>
