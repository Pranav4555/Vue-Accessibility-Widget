<template>
  <div :class="themeClass">
    <!-- Widget Controls -->
    <FloatingButton @toggle-menu="menuOpen = !menuOpen" />
    <MenuPanel v-if="menuOpen" @close="menuOpen = false" />
    
    <!-- ARIA Live Region -->
    <div id="aria-live" style="position:absolute;left:-9999px;" aria-live="polite">
      {{ liveAnnouncement }}
    </div>

    <!-- Accessibility Demo Content -->
    <div style="max-width:600px;margin:64px auto;padding:24px;border-radius:16px;background:#f4f4fb;">
      <h1>Main Heading</h1>
      <p>
        This paragraph contains a
        <a href="#">Test Link</a> and another
        <a href="#" title="About link">About us</a>.
      </p>

      <h2>Section Heading</h2>
      <img :src="catImage" alt="Kitten image" style="width:150px;height:auto" />

      <h3>Animation Demo</h3>
      <div class="spinBox"></div>

      <h4>More Links and Images</h4>
      <a href="#" title="Another link">Another Link</a>
      <img :src="vueLogo" alt="Vue logo image" style="width:40px;height:auto;margin-left:8px;" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import FloatingButton from './components/FloatingButton.vue'
import MenuPanel from './components/MenuPanel.vue'
import { state, liveAnnouncement } from './store/settings.js'

// ✅ Import images correctly for Vite
import catImage from './assets/cat.png'
import vueLogo from './assets/vue.svg'

const menuOpen = ref(false)
const themeClass = computed(() => `theme-${state.widgetTheme}`)
</script>

<style>
/* Theme Styles */
.theme-light .menu-panel { background: #fff; color: #222; }
.theme-dark .menu-panel { background: #1a1a1a; color: #fff; }
.theme-contrast .menu-panel { background: #000; color: #ff0; border: 3px solid #ff0; }

/* Animation Box */
.spinBox {
  width: 50px;
  height: 50px;
  margin: 16px 0;
  border: 6px solid #b4aee8;
  border-radius: 50%;
  border-top: 6px solid #7c42ed;
  animation: spin 1.2s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
