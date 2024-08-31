<script setup lang="ts">
import Converter from "@/widgets/Converter/Converter.vue";
import {useCurrencyStore} from "@/store/currencies";
import {computed} from "vue";

const store = useCurrencyStore()

store.fetchCurrencies()

const currencies = computed(() => {
  return store.getCurrencies
})

const names = computed(() => {
  return store.getCurrenciesNames
})
</script>

<template>
<div class="container mx-auto">
  <h1 class="text-center mt-10 text-5xl font-semibold">Конвертер валют</h1>
  <div class="flex items-center justify-center mt-5">
    <Converter :currencies="currencies"
               :aliasList="names"
               v-if="names.length"
    />
    <div v-else class="rounded-xl bg-neutral border border-light w-[240px] h-[159px]" />
  </div>
</div>
</template>

<style scoped>

</style>