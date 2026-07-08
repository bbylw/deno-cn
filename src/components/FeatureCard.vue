<template>
  <div
    class="feature-card"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div class="card-glow" :style="glowStyle" />
    <div class="card-content">
      <div class="card-icon" v-html="icon" />
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-desc">{{ description }}</p>
      <div v-if="links && links.length" class="card-links">
        <a v-for="link in links" :key="link.url" :href="link.url" target="_blank" rel="noopener" class="card-link">
          {{ link.label }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="link-arrow">
            <path d="M7 17L17 7M17 7H8M17 7v9" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  links: { type: Array, default: () => [] }
})

const mouseX = ref(50)
const mouseY = ref(50)

const glowStyle = computed(() => ({
  background: `radial-gradient(circle 200px at ${mouseX.value}% ${mouseY.value}%, var(--accent-soft) 0%, transparent 70%)`,
  opacity: mouseX.value === 50 && mouseY.value === 50 ? 0 : 1
}))

const onMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width) * 100
  mouseY.value = ((e.clientY - rect.top) / rect.height) * 100
}

const onMouseLeave = () => {
  mouseX.value = 50
  mouseY.value = 50
}
</script>

<style scoped>
.feature-card {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  overflow: hidden;
  transition: border-color 0.3s var(--ease-out), transform 0.3s var(--ease-out);
}

.feature-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}

.card-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: opacity 0.3s var(--ease-out);
  z-index: 0;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-soft);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-md);
  margin-bottom: 1.25rem;
  color: var(--accent);
}

.card-icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: var(--text-primary);
}

.card-desc {
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--text-secondary);
  margin-bottom: 0;
}

.card-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.2s var(--ease-out);
}

.card-link:hover {
  color: var(--accent);
}

.link-arrow {
  width: 12px;
  height: 12px;
}
</style>
