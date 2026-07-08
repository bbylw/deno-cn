<template>
  <div class="code-block" :class="{ 'has-header': title }">
    <div v-if="title" class="code-header">
      <div class="code-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span class="code-title">{{ title }}</span>
      <button class="copy-btn" @click="copyCode" :class="{ copied: isCopied }">
        <svg v-if="!isCopied" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="copy-icon">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="copy-icon">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>
    </div>
    <div class="code-body">
      <button v-if="!title" class="copy-btn-floating" @click="copyCode" :class="{ copied: isCopied }" aria-label="复制代码">
        <svg v-if="!isCopied" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="copy-icon">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="copy-icon">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>
      <pre><code :class="`language-${lang}`" v-html="highlighted"></code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  code: { type: String, required: true },
  lang: { type: String, default: 'ts' },
  title: { type: String, default: '' }
})

const isCopied = ref(false)

const highlighted = computed(() => {
  return syntaxHighlight(props.code, props.lang)
})

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    isCopied.value = true
    setTimeout(() => (isCopied.value = false), 2000)
  } catch (e) {
    // fallback
  }
}

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

function syntaxHighlight(code, lang) {
  // Simple regex-based highlighting
  let result = escapeHtml(code)

  // Comments
  result = result.replace(/(\/\/.*$)/gm, '<span class="tok-comment">$1</span>')

  // Strings
  result = result.replace(/(["'`])((?:\\.|(?!\1).)*)\1/g, '<span class="tok-string">$1$2$1</span>')

  // Keywords
  const keywords = ['import', 'from', 'export', 'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'async', 'await', 'class', 'new', 'try', 'catch', 'throw', 'typeof', 'instanceof', 'default', 'interface', 'type', 'enum', 'extends', 'implements', 'public', 'private', 'protected', 'readonly', 'static', 'void', 'null', 'undefined', 'true', 'false', 'this', 'super']
  const kwRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g')
  result = result.replace(kwRegex, '<span class="tok-keyword">$1</span>')

  // Numbers
  result = result.replace(/\b(\d+\.?\d*)\b/g, '<span class="tok-number">$1</span>')

  // Function calls
  result = result.replace(/\b([a-zA-Z_]\w*)(\s*\()/g, '<span class="tok-fn">$1</span>$2')

  // Deno API
  const denoApis = ['Deno', 'Response', 'Request', 'console']
  const denoRegex = new RegExp(`\\b(${denoApis.join('|')})\\.`, 'g')
  result = result.replace(denoRegex, '<span class="tok-deno">$1</span>.')

  // Shell comments
  if (lang === 'sh' || lang === 'shell' || lang === 'bash') {
    result = result.replace(/<span class="tok-keyword">.*?<\/span>/g, (match) => {
      return match.replace(/<span class="tok-keyword">|<\/span>/g, '')
    })
  }

  return result
}
</script>

<style scoped>
.code-block {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg-elevated);
  position: relative;
  margin: 1.25rem 0;
}

.code-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border);
}

.code-dots {
  display: flex;
  gap: 6px;
}

.code-dots span {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: var(--text-dim);
}

.code-dots span:nth-child(1) { background: #ff5f57; }
.code-dots span:nth-child(2) { background: #febc2e; }
.code-dots span:nth-child(3) { background: #28c840; }

.code-title {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-tertiary);
  flex: 1;
}

.copy-btn,
.copy-btn-floating {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  color: var(--text-tertiary);
  transition: all 0.2s var(--ease-out);
}

.copy-btn {
  padding: 5px;
}

.copy-btn-floating {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px;
  opacity: 0;
  z-index: 5;
}

.code-block:hover .copy-btn-floating {
  opacity: 1;
}

.copy-btn:hover,
.copy-btn-floating:hover {
  color: var(--accent);
  border-color: var(--border-accent);
  background: var(--accent-soft);
}

.copy-btn.copied,
.copy-btn-floating.copied {
  color: var(--accent);
  border-color: var(--border-accent);
}

.copy-icon {
  width: 15px;
  height: 15px;
}

.code-body {
  position: relative;
  overflow-x: auto;
}

.code-body pre {
  padding: 1.1rem 1.25rem;
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-primary);
  min-width: fit-content;
}

.code-body code {
  font-family: var(--font-mono);
}

:deep(.tok-comment) { color: var(--text-dim); font-style: italic; }
:deep(.tok-string) { color: #a5d6a7; }
:deep(.tok-keyword) { color: var(--coral); }
:deep(.tok-number) { color: var(--amber); }
:deep(.tok-fn) { color: var(--sky); }
:deep(.tok-deno) { color: var(--accent); font-weight: 500; }
</style>
