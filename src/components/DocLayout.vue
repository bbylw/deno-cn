<template>
  <div class="doc-page">
    <div class="container doc-container">
      <DocSidebar :sections="sidebarSections" />
      <div class="doc-content">
        <header class="doc-header">
          <p v-if="eyebrow" class="doc-eyebrow">{{ eyebrow }}</p>
          <h1 class="doc-title">{{ title }}</h1>
          <p v-if="description" class="doc-description">{{ description }}</p>
        </header>
        <div class="doc-body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DocSidebar from './DocSidebar.vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  eyebrow: { type: String, default: '' },
  sidebarSections: { type: Array, default: () => [] }
})
</script>

<style scoped>
.doc-page {
  padding-top: 3rem;
  padding-bottom: 4rem;
}

.doc-container {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.doc-content {
  flex: 1;
  min-width: 0;
  max-width: 820px;
}

.doc-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border);
}

.doc-eyebrow {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.doc-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
}

.doc-description {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 65ch;
}

.doc-body :deep(h2) {
  font-size: 1.6rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  scroll-margin-top: 90px;
}

.doc-body :deep(h3) {
  font-size: 1.2rem;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  scroll-margin-top: 90px;
}

.doc-body :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.75;
}

.doc-body :deep(ul),
.doc-body :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.doc-body :deep(li) {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.doc-body :deep(li a) {
  color: var(--accent);
}

.doc-body :deep(blockquote) {
  border-left: 3px solid var(--accent);
  padding: 0.75rem 1.25rem;
  margin: 1.5rem 0;
  background: var(--accent-soft);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

.doc-body :deep(blockquote p) {
  margin: 0;
  color: var(--text-primary);
}

.doc-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-size: 0.875rem;
}

.doc-body :deep(th),
.doc-body :deep(td) {
  padding: 0.75rem 1rem;
  border: 1px solid var(--border);
  text-align: left;
}

.doc-body :deep(th) {
  background: var(--bg-surface);
  font-weight: 600;
  color: var(--text-primary);
}

.doc-body :deep(td) {
  color: var(--text-secondary);
}

.doc-body :deep(.note) {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.doc-body :deep(.note strong) {
  color: var(--text-primary);
}

@media (max-width: 1024px) {
  .doc-container {
    flex-direction: column;
  }

  .doc-content {
    max-width: 100%;
  }
}
</style>
