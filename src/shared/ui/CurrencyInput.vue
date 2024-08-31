<script setup lang="ts">
import {watch} from "vue";

const model = defineModel<number>()
const emit = defineEmits(['input'])

const inputEmit = () => {
    emit('input', model.value)
}

watch(model, (value, oldValue) => {
    if(value && value < 0) {
      model.value = 0
    }
})

</script>

<template>
    <input class="py-1 ps-2.5 pe-1 rounded"
           v-model="model"
           @input="inputEmit"
           type="number"/>
</template>

<style scoped>

</style>