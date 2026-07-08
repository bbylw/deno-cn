<template>
  <div class="code-tabs">
    <div class="tabs-header">
      <button
        v-for="(tab, i) in tabs"
        :key="i"
        class="tab-btn"
        :class="{ active: activeIndex === i }"
        @click="activeIndex = i"
      >
        {{ tab.label }}
      </button>
    </div>
    <CodeBlock
      :code="tabs[activeIndex].code"
      :lang="tabs[activeIndex].lang || 'sh'"
      :title="tabs[activeIndex].title || ''"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeBlock from './CodeBlock.vue'

const props = defineProps({
  tabs: { type: Array, required: true }
})

const activeIndex = ref(0)
</script>

<style scoped>
.code-tabs {
  margin: 1.25rem 0;
}

.tabs-header {
  display: flex;
  gap: 2px;
  margin-bottom: -1px;
  position: relative;
  z-index: 2;
}

.tab-btn {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-tertiary);
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-bottom: none;
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s var(--ease-out);
}

.tab-btn:hover {
  color: var(--text-secondary);
}

.tab-btn.active {
  color: var(--accent);
  background: var(--bg-elevated);
  border-bottom-color: var(--bg-elevated);
}

.code-tabs :deep(.code-block) {
  border-radius: 0 var(--radius-md) var(--radius-md) var(--radius-md);
}

.code-tabs :deep(.code-block.has-header) {
  border-radius: 0 0 var(--radius-md) var(--radius-md);
}
</style>
