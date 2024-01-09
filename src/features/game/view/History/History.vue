<script setup lang="ts">
import { ref } from 'vue'
import HistoryItem, { type HistoryItemProps } from '@/features/game/view/History/HistoryItem.vue'
import placeholder02 from '@/assets/images/profile-picture-placeholder-02.png'
import placeholder03 from '@/assets/images/profile-picture-placeholder-03.png'
import { type Card, type Session, SessionDirection, type User } from '@/features/game/model'

const cardClub: Card = { number: 10, symbol: 'club' }
const userSavana: User = { id: '000', name: 'Savana' }
const userSavanaSession: Session = {
  amount: 567.5,
  card: cardClub,
  user: userSavana,
  direction: SessionDirection.SESSION_DIRECTION_DOWN
}
const userEleanor: User = { id: '010', name: 'Eleanor' }
const userEleanorSession: Session = {
  amount: 400.5,
  card: cardClub,
  user: userEleanor,
  direction: SessionDirection.SESSION_DIRECTION_UP
}

const history = ref<Array<HistoryItemProps>>([
  { user: userSavana, image: { url: placeholder02 }, session: userSavanaSession },
  { user: userEleanor, image: { url: placeholder03 }, session: userEleanorSession },
  { user: userEleanor, image: { url: placeholder03 }, session: userEleanorSession },
  { user: userSavana, image: { url: placeholder02 }, session: userSavanaSession },
  { user: userEleanor, image: { url: placeholder03 }, session: userEleanorSession },
  { user: userSavana, image: { url: placeholder02 }, session: userSavanaSession },
  { user: userEleanor, image: { url: placeholder03 }, session: userEleanorSession },
  { user: userEleanor, image: { url: placeholder03 }, session: userEleanorSession },
  { user: userSavana, image: { url: placeholder02 }, session: userSavanaSession }
])
</script>
<template>
  <ul :class="$style.root">
    <li v-for="(item, i) in history" :key="i" :class="$style.item">
      <HistoryItem v-bind="item" />
    </li>
  </ul>
</template>
<style scoped module lang="scss">
@import '@/assets/css/mixins';

.root {
  display: flex;
  align-items: center;
  column-gap: 12px;
  overflow-x: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @include mobile {
    .item {
      &:first-child {
        margin-left: 70px;
      }
      &:last-child {
        margin-right: 20px;
      }
    }
  }
}

.item {
  list-style: none;
}
</style>
