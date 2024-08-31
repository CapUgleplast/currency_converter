<script setup lang="ts">

import SelectDropdown from "@/shared/ui/SelectDropdown.vue";
import {useCurrencyStore} from "@/store/currencies";
import {computed} from "vue";

const store = useCurrencyStore()

store.fetchAvailableCurrencies()

const globalCurrency = computed(() => {
  return store.getGlobalCurrency.alias
})

const availableCurrs = computed(()=> {
  return store.getAvailableCurrencies.map(item => item.alias)
})

const setGlobalCurrency = (alias: string) => {
  store.setGlobalCurrency(alias)
}

</script>

<template>
  <div >
     <SelectDropdown :options="availableCurrs"
                     @change="setGlobalCurrency"
                     :model-value="globalCurrency"
                     class="text-dark-light uppercase md:w-20 rounded-md px-2 py-1"
     />
  </div>
</template>

<style scoped>

</style>