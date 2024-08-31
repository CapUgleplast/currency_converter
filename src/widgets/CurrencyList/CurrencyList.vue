<script setup lang="ts">

import type {PropType} from "vue";
import type CurrencyModel from "@/entities/Currency/currency.model";

const props = defineProps({
  value: {
    type: Object,
    default: {}
  },
  globalCurr: {
    type: Object as PropType<CurrencyModel>,
    default: {}
  }
})


</script>

<template>
<div class="currency-list px-3">
  <section class="p-7 md:px-24 px-10 rounded-xl bg-secondary
                  border border-light shadow-xl flex flex-col gap-y-2.5">
    <div v-for="(item, idx) in value"
         :key="idx"
         class="flex items-center justify-center gap-2 text-xl"
    >
      <p class="uppercase">
        1
        <span class="font-medium">
          {{idx.toString().split('-')[0]}}
        </span>
      </p>
      <span> = </span>
      <p class="uppercase">
        {{item}}
        <span class="font-medium">
          {{globalCurr.alias}}
        </span>
      </p>
    </div>
  </section>
</div>
</template>

<style scoped>

</style>