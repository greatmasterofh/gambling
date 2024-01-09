<script setup lang="ts">
export type ProfilePictureProps = {
  url: string
}

defineProps<ProfilePictureProps>()
</script>
<template>
  <div :class="$style.root">
    <img :src="url" alt="profile picture" :class="$style.img" />
  </div>
</template>
<style module scoped lang="scss">
@import '@/assets/css/mixins';
.root {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;

  @include mobile {
    width: 36px;
    height: 36px;
  }
}

.img {
  width: inherit;
  height: inherit;
  object-fit: cover;
}
</style>
