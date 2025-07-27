import { createApp } from 'vue'
import App from './App.vue'
function mountWidget() {
  if (document.getElementById('accessibility-widget')) return
  const container = document.createElement('div')
  container.id = 'accessibility-widget'
  document.body.appendChild(container)
  createApp(App).mount(container)
  window.__ACCESSIBILITY_WIDGET__ = true
}
if (!window.__ACCESSIBILITY_WIDGET__) {
  mountWidget()
}
