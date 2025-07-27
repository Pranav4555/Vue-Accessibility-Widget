<template>
  <div class="control-row">
    <label>
      {{ label }}
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="active"
        @input="slide"
        :aria-label="label"
      />
      <span>{{ active }}%</span>
    </label>
    <div class="desc">{{ desc }}</div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { state } from '../../store/settings.js'
const props = defineProps(['stateKey', 'label', 'desc', 'min', 'max', 'step'])
const active = computed(() => state[props.stateKey])
const slide = e => (state[props.stateKey] = +e.target.value)
</script>
<style scoped>
input[type="range"] { margin: 0 8px; vertical-align: middle; }
</style>
