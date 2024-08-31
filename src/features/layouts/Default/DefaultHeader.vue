<script setup lang="ts">
import GlobalCurrencySetter from "@/features/currency/GlobalCurrencySetter.vue";

</script>

<template>
  <div class="bg-black">
    <div class="container flex flex-row justify-between text-light p-3.5 mx-auto">
        <nav class="flex gap-2.5">
          <router-link class="btn-dark" to="/" >Главная</router-link>
          <router-link class="btn-dark" to="convert">Ковертер</router-link>
        </nav>

        <div class="global-currency">
          <GlobalCurrencySetter />
        </div>
    </div>
  </div>
</template>

<style scoped>

</style>