<template>
  <div class="control-row">
    <label>
      {{ label }}
      <select :value="active" @change="setValue" :aria-label="label">
        <option v-for="opt in options" :value="opt.value" :key="opt.value">{{ opt.label }}</option>
      </select>
    </label>
    <div class="desc">{{ desc }}</div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { state } from '../../store/settings.js'
const props = defineProps(['stateKey', 'label', 'desc', 'options'])
const active = computed(() => state[props.stateKey])
const setValue = e => (state[props.stateKey] = e.target.value)
</script>
<style scoped>
select { margin-left: 8px; font-size:1em; padding: 2px 6px; border-radius:5px;}
</style>
