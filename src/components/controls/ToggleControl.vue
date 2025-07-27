<template>
  <div class="control-row">
    <label>
      <input
        type="checkbox"
        :checked="active"
        @change="toggle"
        :aria-label="label"
      />
      <span>{{ label }}</span>
    </label>
    <div class="desc">{{ desc }}</div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { state } from '../../store/settings.js'
const props = defineProps(['stateKey', 'label', 'desc'])
const active = computed(() => state[props.stateKey])
const toggle = () => (state[props.stateKey] = !state[props.stateKey])
</script>
<style scoped>
.control-row { display: flex; flex-direction: column; margin-bottom: 16px; }
input[type="checkbox"] { accent-color: #5d68e2; margin-right: 8px; width: 22px; height: 22px; }
.label { font-size: 1.02em; font-weight: 500; }
.desc { font-size: 0.89em; color: #666; margin-left: 4px; margin-top: 2px; }
</style>
