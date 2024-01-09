<script setup lang="ts">
import { h, markRaw, ref } from 'vue'
import Coin from '@/components/icons/Coin.vue'
import Button from '@/components/Button/Button.vue'
import PlusRect from '@/components/icons/PlusRect.vue'
import Crash from '@/components/icons/games/Crash.vue'
import Dice from '@/components/icons/games/Dice.vue'
import Plinko from '@/components/icons/games/Plinko.vue'
import Roulette from '@/components/icons/games/Roulette.vue'
import Tower from '@/components/icons/games/Tower.vue'
import Wheel from '@/components/icons/games/Wheel.vue'
import Slots from '@/components/icons/games/Slots.vue'
import Hilo from '@/components/icons/games/Hilo.vue'
import Mines from '@/components/icons/games/Mines.vue'
import Keno from '@/components/icons/games/Keno.vue'
import profilePicture from '@/assets/images/profile-picture-placeholder-01.png'
import ProfilePicture from '@/features/shared/view/ProfilePicture/ProfilePicture.vue'
import { useMobile } from '@/helpers/useMobile'
import Ham from '@/components/icons/Ham.vue'

const balance = ref(778.35)

const navItems = [
  { label: 'Crash', to: '/', icon: markRaw(Crash) },
  { label: 'Dice', to: '/a', icon: markRaw(Dice) },
  { label: 'Plinko', to: '/b', icon: markRaw(Plinko) },
  { label: 'Roulette', to: '/c', icon: markRaw(Roulette) },
  { label: 'Tower', to: '/d', icon: markRaw(Tower) },
  { label: 'Wheel', to: '/e', icon: markRaw(Wheel) },
  { label: 'Slots', to: '/f', icon: markRaw(Slots) },
  { label: 'Hilo', to: '/j', icon: markRaw(Hilo) },
  { label: 'Mines', to: '/h', icon: markRaw(Mines) },
  { label: 'Keno', to: '/i', icon: markRaw(Keno) }
]

const isMobile = useMobile()

const coinRaw = markRaw(h(Coin, { width: isMobile ? 16 : 18 }))
</script>
<template>
  <header :class="$style.root">
    <div :class="$style.left">
      <Button v-if="isMobile" variant="secondary">
        <Ham />
      </Button>
      <img
        v-if="!isMobile"
        src="@/assets/images/svg/logo.svg"
        alt="WinWin logo"
        width="66"
        height="44"
      />
      <ul :class="$style.nav" v-if="!isMobile">
        <li v-for="(item, i) in navItems" :key="i">
          <div :class="[$style['nav-item'], { [$style.active]: item.to === '/' }]">
            <component :is="item.icon" :class="$style.icon" />
            <span>{{ item.label }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div :class="$style.right">
      <div :class="$style.buttons">
        <Button
          :end-icon="coinRaw"
          variant="secondary"
          :style="
            !isMobile && {
              'background-color': 'var(--color-blue-600)'
            }
          "
        >
          <span :class="$style['balance-label']">{{ balance }}</span>
        </Button>
        <Button>
          <div :class="$style['top-up']">
            <PlusRect />
            <span>Пополнить</span>
          </div>
        </Button>
      </div>
      <ProfilePicture :url="profilePicture" />
    </div>
  </header>
</template>
<style scoped module lang="scss">
@import '@/assets/css/mixins';

.root {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 75px;
  min-height: 75px;
  border-bottom: 1px solid var(--color-blue-800);

  @include mobile {
    border-bottom: none;
    padding: 0 12px;
    height: 60px;
  }
}

.left {
  display: flex;
  align-items: center;
  column-gap: 33px;
}

.right {
  display: flex;
  align-items: center;
  column-gap: 20px;

  @include mobile {
    column-gap: 8px;
  }
}

.nav {
  display: flex;
  list-style: none;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding: 12px 32px 12px 26px;
  font-weight: 600;

  &.active {
    .icon {
      color: var(--color-blue-400);
    }

    &::after {
      content: '';
      position: absolute;
      width: 102px;
      left: 50%;
      bottom: -14px;
      height: 2px;
      background-color: var(--color-blue-400);
      border-radius: 10px;
      transform: translateX(-50%);
    }
  }

  &:not(.active) {
    color: var(--token-text-secondary);
  }
}

.buttons {
  display: flex;
  align-items: center;
  column-gap: 12px;

  @include mobile {
    column-gap: 8px;
  }
}

.balance-label {
  color: var(--color-yellow-500);
}

.top-up {
  display: flex;
  align-items: center;
  column-gap: 4px;
}
</style>
