<script setup lang="ts">
const model = defineModel()
const emit = defineEmits(['change'])

const props = defineProps({
  options: Array<string>,
})

const changeEmit = () => {
    emit('change', model.value)
}

</script>

<template>
  <select class="form-select form-select-lg shadow"
          v-model="model"
          @change="changeEmit"
  >
    <option
        v-for="option in options"
        :value="option">
      {{ option }}
    </option>
  </select>
</template>

<style scoped>

</style>