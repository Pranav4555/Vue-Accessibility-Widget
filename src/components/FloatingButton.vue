<template>
  <button
    class="floating-btn"
    @click="$emit('toggle-menu')"
    aria-label="Open accessibility menu"
    tabindex="0"
  >
    <svg width="36" height="36" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="22" fill="#333"/>
      <text x="50%" y="56%" text-anchor="middle" fill="#FFF" font-size="20" font-family="Arial" dy=".3em">A</text>
    </svg>
  </button>
</template>
<style scoped>
.floating-btn {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0 4px 24px rgba(0,0,0,0.26);
  background: #202124;
  color: #fff;
  border: none;
  z-index: 2147483647;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s;
}
.floating-btn:focus, .floating-btn:hover { background: #444; outline: none; }
</style>
