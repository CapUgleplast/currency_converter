<script setup lang="ts">

import {reactive, ref} from "vue";
import CurrencySetter from "@/features/currency/CurrencySetter.vue";

const props = defineProps({
  currencies: {
    type: Object,
    default: {}
  },
  aliasList: {
    type: Array<string>,
    default: []
  },
})

const convertCurrency1 = reactive({ value: 1, alias: props.aliasList[0]})
const convertCurrency2 = reactive({ value: 1, alias: props.aliasList[1]})

const coefficient = ref(0)

const findCF = () => {
  coefficient.value = props.currencies[`${convertCurrency1.alias}-${convertCurrency2.alias}`]
}

const currencyValueMutator1 = () => {
      convertCurrency1.value = Math.round(convertCurrency2.value / coefficient.value * 100) / 100
}

const currencyValueMutator2 = () => {
      convertCurrency2.value =  Math.round(convertCurrency1.value * coefficient.value * 100) / 100
}

const changeCurrency = (number: number) => {
      switch (number){
        case 1: {
          findCF();
          currencyValueMutator2()
          break;
        }
        case 2: {
          findCF();
          currencyValueMutator1()
          break;
        }
      }
}
changeCurrency(1)

</script>

<template>
<div class="converter p-7 rounded-xl bg-secondary border border-light shadow-xl">
  <CurrencySetter v-model="convertCurrency1"
                  :options="aliasList"
                  @change="()=> changeCurrency(1)"
                  @input="currencyValueMutator2"
  />
  <hr class="my-4 border-t border-neutral" />
  <CurrencySetter v-model="convertCurrency2"
                  :options="aliasList"
                  @change="()=> changeCurrency(2)"
                  @input="currencyValueMutator1"
  />
</div>
</template>

<style scoped>

</style>