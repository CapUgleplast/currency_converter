<script setup lang="ts">

import SelectDropdown from "@/shared/ui/SelectDropdown.vue";
import type {ConvertCurrencyModel} from "@/entities/Currency/currency.model";
import CurrencyInput from "@/shared/ui/CurrencyInput.vue";

const model = defineModel<ConvertCurrencyModel>({ required: true })

const emit = defineEmits(['input', 'change'])

const props = defineProps({
  options: {
    type: Array<string>,
    default: []
  }
})

const inputEmit = (val: number) => {
  emit('input', val)
}

const changeEmit = (val: number) => {
  emit('change', val)
}

</script>

<template>
  <div class="flex border border-light rounded shadow-md">
    <CurrencyInput class="max-w-32"
                   v-model="model.value"
                   @input="inputEmit"/>

    <SelectDropdown @change="changeEmit"
                    :options="options"
                    v-model="model.alias"
                    class="uppercase shadow-none rounded-e"
    />
  </div>
</template>

<style scoped>

</style>