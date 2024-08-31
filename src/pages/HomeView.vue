<script setup lang="ts">
import CurrencyList from '@/widgets/CurrencyList/CurrencyList.vue';
import {useCurrencyStore} from "@/store/currencies";
import {computed} from "vue";
import type CurrencyModel from "@/entities/Currency/currency.model";

const store = useCurrencyStore()

store.fetchCurrencies()

const currencies = computed(() => {
  return store.getFilteredCurrencies
})

const globalCurrency = computed<CurrencyModel>(() => {
  return store.getGlobalCurrency
})
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-center mt-10 text-5xl font-semibold">
      Текущий курс валют к
      <br />
      <span class="uppercase text-primary leading-relaxed">
        {{ globalCurrency.alias }}
      </span>
    </h1>
    <CurrencyList class="flex justify-center mt-5"
                  :value="currencies"
                  :global-curr="globalCurrency"
    />
  </div>
</template>
