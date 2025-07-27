<template>
  <div class="panel-outer" @keydown.esc="$emit('close')">
    <div class="menu-panel" tabindex="0" aria-modal="true" role="dialog">
      <button class="close-btn" @click="$emit('close')" aria-label="Close accessibility menu">&times;</button>
      <h2 tabindex="0">Accessibility Tools</h2>
      <section v-for="section in controlSections" :key="section.name">
        <h3>{{ section.label }}</h3>
        <div>
          <component
            v-for="control in section.controls"
            :is="getControlComponent(control.type)"
            v-bind="control"
            :key="control.stateKey"
          />
        </div>
      </section>
      <div class="panel-actions">
        <button @click="exportSettings" class="small-btn">Export Settings</button>
        <input type="file" accept="application/json" @change="importSettings" style="display:none" ref="importFile" />
        <button @click="triggerImport" class="small-btn">Import Settings</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import ToggleControl from './controls/ToggleControl.vue'
import SliderControl from './controls/SliderControl.vue'
import SelectControl from './controls/SelectControl.vue'
import { controlSections } from '../utils/controlsConfig.js'
import { state } from '../store/settings.js'
import { ref } from 'vue'
const getControlComponent = (type) => {
  if (type === 'slider') return SliderControl
  if (type === 'select') return SelectControl
  return ToggleControl
}
const importFile = ref(null)
const exportSettings = () => {
  const data = JSON.stringify(state)
  const blob = new Blob([data], { type: "application/json" })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'accessibility-settings.json'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
const importSettings = (e) => {
  const file = e.target.files[0]
  if (file) {
    file.text().then(txt => {
      try {
        Object.assign(state, JSON.parse(txt))
      } catch { }
    })
  }
}
const triggerImport = () => {
  importFile.value.click()
}
</script>
<style scoped>
.panel-outer {
  position: fixed;
  right: 24px;
  bottom: 90px;
  z-index: 2147483647;
  background: transparent;
  max-width: 100vw;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
}
.menu-panel {
  width: 340px;
  max-width: 94vw;
  max-height: 90vh;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.24);
  padding: 22px 16px 14px 16px;
  font-family: 'Inter', Arial, sans-serif;
  outline: none;
  position: relative;
  box-sizing: border-box;
  overflow-y: auto;
}
.close-btn {
  position: absolute;
  right: 16px; top: 16px;
  background: none;
  border: none;
  font-size: 2.0rem;
  cursor: pointer;
  color: #888;
}
h2 { font-size: 1.2rem; margin-bottom: 18px;}
h3 { margin: 20px 0 8px 0; font-size: 1rem; color: #393939;}
.panel-actions {
  margin-top: 16px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.small-btn {
  font-size: 0.98em;
  padding: 3px 14px;
  border-radius: 7px;
  border: none;
  background: #eee;
  color: #424242;
  cursor: pointer;
  transition: background 0.15s;
}
.small-btn:hover { background: #1976d2; color: #fff; }
@media (max-width: 480px) {
  .menu-panel {
    width: 98vw;
    left: 1vw;
    right: 1vw;
    min-width: unset;
    padding: 14px 4vw;
    font-size: 0.96em;
    border-radius: 8px;
    max-width: 98vw;
    max-height: 92vh;
  }
  .panel-outer {
    bottom: 5vw;
    right: 1vw;
    left: 0;
  }
}
</style>
