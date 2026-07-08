<template>
  <aside class="doc-sidebar">
    <nav class="sidebar-nav">
      <div v-for="section in sections" :key="section.title" class="sidebar-section">
        <h3 class="sidebar-title">{{ section.title }}</h3>
        <ul class="sidebar-list">
          <li v-for="item in section.items" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="sidebar-link"
              :class="{ active: activeId === item.id }"
              @click.prevent="scrollTo(item.id)"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  sections: { type: Array, required: true }
})

const activeId = ref('')
let observer = null

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 90
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(() => {
  const ids = props.sections.flatMap((s) => s.items.map((i) => i.id))
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      })
    },
    { threshold: 0.3, rootMargin: '-90px 0px -70% 0px' }
  )
  ids.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
.doc-sidebar {
  position: sticky;
  top: 90px;
  width: 220px;
  flex-shrink: 0;
  max-height: calc(100vh - 110px);
  overflow-y: auto;
  padding-right: 1.5rem;
}

.sidebar-section {
  margin-bottom: 1.75rem;
}

.sidebar-title {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-tertiary);
  margin-bottom: 0.6rem;
  padding-left: 0.75rem;
}

.sidebar-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar-link {
  display: block;
  font-size: 0.83rem;
  color: var(--text-secondary);
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  border-left: 2px solid transparent;
  transition: all 0.15s var(--ease-out);
}

.sidebar-link:hover {
  color: var(--text-primary);
  background: var(--bg-surface);
}

.sidebar-link.active {
  color: var(--accent);
  border-left-color: var(--accent);
  background: var(--accent-soft);
}

@media (max-width: 1024px) {
  .doc-sidebar {
    display: none;
  }
}
</style>
