import { reactive, watch, ref } from 'vue'
import * as cssHelpers from '../utils/cssHelpers.js'

const defaultState = {
  contrast: false,
  highlightLinks: false,
  bigText: false,
  textSize: 100,
  textSpacing: false,
  pauseAnimations: false,
  hideImages: false,
  dyslexiaFont: false,
  bigCursor: false,
  showTooltips: false,
  outlineHeadings: false,
  widgetTheme: 'light'
}

export const state = reactive({ ...defaultState })
export const liveAnnouncement = ref("")

const saved = localStorage.getItem('accessWidgetSettings')
if (saved) Object.assign(state, JSON.parse(saved))

for (const key of Object.keys(defaultState)) {
  watch(() => state[key], (val) => {
    cssHelpers.applyFeature(key, val)
    localStorage.setItem('accessWidgetSettings', JSON.stringify(state))
    if (
      typeof val === 'boolean' &&
      [
        'contrast', 'highlightLinks', 'bigText', 'pauseAnimations', 'hideImages',
        'dyslexiaFont', 'bigCursor', 'showTooltips', 'outlineHeadings', 'textSpacing'
      ].includes(key)
    ) {
      liveAnnouncement.value = `${key.replace(/([A-Z])/g,' $1')} ${val ? 'enabled' : 'disabled'}`
    }
    if (key === 'textSize') {
      liveAnnouncement.value = `Text Size set to ${val}%`
    }
    if (key === 'widgetTheme') {
      liveAnnouncement.value = `Widget theme changed to ${val}`
    }
  }, { immediate: true })
}
