<script setup lang="ts">
import DefaultHeader from '@/features/layouts/Default/DefaultHeader.vue';

</script>

<template>
  <div class="layout pb-10">
    <header class="sticky top-0 z-10">
      <default-header  />
    </header>
    <slot />
  </div>
</template>

<style lang="scss" scoped>

</style>
