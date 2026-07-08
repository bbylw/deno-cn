<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-inner">
      <router-link to="/" class="logo" @click="closeMobile">
        <svg class="logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="1.5" />
          <path d="M16 7 C13 12 11 15 11 18 C11 21 13 23 16 23 C19 23 21 21 21 18 C21 15 19 12 16 7 Z" fill="currentColor" />
        </svg>
        <span class="logo-text">Deno</span>
        <span class="logo-badge">CN</span>
      </router-link>

      <div class="nav-links" :class="{ open: mobileOpen }">
        <router-link
          v-for="link in links"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          @click="closeMobile"
        >
          {{ link.label }}
        </router-link>
      </div>

      <div class="nav-actions">
        <a
          href="https://github.com/denoland/deno"
          target="_blank"
          rel="noopener"
          class="nav-icon-link"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" class="icon">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
          </svg>
        </a>
        <a
          href="https://docs.deno.com"
          target="_blank"
          rel="noopener"
          class="nav-cta"
        >
          官方文档
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="cta-arrow">
            <path d="M7 17L17 7M17 7H8M17 7v9" />
          </svg>
        </a>
        <button class="mobile-toggle" @click="toggleMobile" aria-label="菜单">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { path: '/getting-started', label: '入门指南' },
  { path: '/guides', label: '指南' },
  { path: '/concepts', label: '核心概念' },
  { path: '/advanced', label: '高级功能' },
  { path: '/reference', label: '参考文档' },
  { path: '/contributing', label: '贡献' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
}

const closeMobile = () => {
  mobileOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  z-index: 100;
  transition: all 0.3s var(--ease-out);
  background: transparent;
}

.navbar.scrolled {
  background: rgba(10, 10, 9, 0.72);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--border);
}

.navbar-inner {
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: -0.03em;
  flex-shrink: 0;
}

.logo:hover {
  color: var(--text-primary);
}

.logo-icon {
  width: 28px;
  height: 28px;
  color: var(--accent);
  filter: drop-shadow(0 0 8px var(--accent-glow));
}

.logo-badge {
  font-size: 0.65rem;
  font-weight: 700;
  background: var(--accent-soft);
  border: 1px solid var(--border-accent);
  color: var(--accent);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  letter-spacing: 0.05em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s var(--ease-out);
  position: relative;
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--bg-surface);
}

.nav-link.router-link-exact-active {
  color: var(--accent);
  background: var(--accent-soft);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.nav-icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  border: 1px solid var(--border);
  transition: all 0.2s var(--ease-out);
}

.nav-icon-link:hover {
  color: var(--text-primary);
  border-color: var(--border-strong);
  background: var(--bg-surface);
}

.icon {
  width: 18px;
  height: 18px;
}

.nav-cta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--bg-base);
  background: var(--accent);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s var(--ease-out);
  white-space: nowrap;
}

.nav-cta:hover {
  background: #6fff4a;
  color: var(--bg-base);
  box-shadow: 0 0 20px var(--accent-glow);
}

.cta-arrow {
  width: 14px;
  height: 14px;
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 38px;
  height: 38px;
  background: none;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  cursor: pointer;
  padding: 0 9px;
}

.mobile-toggle span {
  display: block;
  height: 2px;
  background: var(--text-primary);
  border-radius: 1px;
  transition: all 0.3s var(--ease-out);
}

.mobile-toggle[aria-expanded='true'] span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.mobile-toggle[aria-expanded='true'] span:nth-child(2) {
  opacity: 0;
}

.mobile-toggle[aria-expanded='true'] span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 900px) {
  .mobile-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(10, 10, 9, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
    padding: 1rem;
    gap: 0.25rem;
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s var(--ease-out);
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-link {
    width: 100%;
    padding: 0.75rem 1rem;
  }

  .nav-cta {
    display: none;
  }
}
</style>
