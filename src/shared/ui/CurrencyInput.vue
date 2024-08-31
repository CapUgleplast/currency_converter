<script setup lang="ts">
const model = defineModel()
const emit = defineEmits(['input'])

const inputEmit = () => {
    emit('input', model.value)
}

</script>

<template>
    <input class="py-1 ps-2.5 pe-1 rounded"
           v-model="model"
           @input="inputEmit"
           type="number"/>
</template>

<style scoped>

</style>