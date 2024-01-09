<script setup lang="ts">
import { type Image, type Session, SessionDirection, type User } from '@/features/game/model'
import Coin from '@/components/icons/Coin.vue'
import { useMobile } from '@/helpers/useMobile'
import Card from '@/features/game/view/Card/Card.vue'
import RoadSignAheadOnly from '@/components/icons/RoadSignAheadOnly.vue'

export type HistoryItemProps = {
  user: User
  image: Image
  session: Session
}

const isMobile = useMobile()

const directionClasses = {
  [SessionDirection.SESSION_DIRECTION_UP]: 'up',
  [SessionDirection.SESSION_DIRECTION_DOWN]: 'down'
}

defineProps<HistoryItemProps>()
</script>
<template>
  <div>
    <div v-if="isMobile" :class="$style.sessionA">
      <Card
        v-bind="session.card"
        :class="$style.card"
        :number-styles="{ fontSize: 'var(--font-size-lg)' }"
        :symbol-styles="{ width: 18, height: 18 }"
      />
      <div :class="[$style.direction, $style[directionClasses[session.direction]]]">
        <RoadSignAheadOnly :width="18" />
      </div>
    </div>
    <div v-else :class="$style.sessionB">
      <img v-if="image.url" :src="image.url" alt="profile picture" :class="$style.img" />
      <div :class="$style.content">
        <span v-if="user.name">{{ user.name.slice(0, 3) }}…</span>
        <div :class="$style.amount">
          <span v-if="user?.balance?.amount" :class="$style['balance-label']">
            {{ session.amount.toFixed(2) }}
          </span>
          <Coin :width="16" :height="16" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped module lang="scss">
.sessionA {
  position: relative;
}

.sessionB {
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: var(--color-blue-700);
  height: 40px;
  padding: 0 12px;
  column-gap: 8px;
}

.direction {
  --y: translateY(calc(-50% - 10px));
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: var(--y);
  left: -12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  &.up {
    background-color: var(--color-green-500);
    transform: var(--y) rotate(180deg);
  }

  &.down {
    background-color: var(--color-red-500);
  }
}

.card {
  width: 71px;
  height: 135px;
}

.content {
  display: flex;
  align-items: center;
  column-gap: 11px;
  font-weight: 500;
}

.img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  overflow: hidden;
}

.amount {
  display: flex;
  align-items: center;
  column-gap: 6px;
  color: var(--color-yellow-500);
}
</style>
