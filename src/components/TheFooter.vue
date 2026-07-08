<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="footer-logo-icon">
              <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="1.5" />
              <path d="M16 7 C13 12 11 15 11 18 C11 21 13 23 16 23 C19 23 21 21 21 18 C21 15 19 12 16 7 Z" fill="currentColor" />
            </svg>
            <span>Deno 中文文档</span>
          </router-link>
          <p class="footer-desc">
            默认安全、开发者体验出色的 JavaScript、TypeScript 和 WebAssembly 运行时。构建于 V8、Rust 和 Tokio 之上。
          </p>
        </div>

        <div class="footer-links">
          <div class="footer-col" v-for="col in columns" :key="col.title">
            <h4>{{ col.title }}</h4>
            <ul>
              <li v-for="link in col.links" :key="link.label">
                <router-link v-if="link.internal" :to="link.url">{{ link.label }}</router-link>
                <a v-else :href="link.url" target="_blank" rel="noopener">{{ link.label }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          本中文文档由社区维护，内容基于
          <a href="https://docs.deno.com/runtime/manual" target="_blank" rel="noopener">Deno 官方文档</a>
          翻译整理。Deno 是开源项目，遵循 MIT 许可证。
        </p>
        <div class="social-links">
          <a href="https://github.com/denoland/deno" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
          </a>
          <a href="https://discord.gg/deno" target="_blank" rel="noopener" aria-label="Discord">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.3 12.3 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
          </a>
          <a href="https://www.youtube.com/@deno_land" target="_blank" rel="noopener" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const columns = [
  {
    title: '文档',
    links: [
      { label: '入门指南', url: '/getting-started', internal: true },
      { label: '指南', url: '/guides', internal: true },
      { label: '核心概念', url: '/concepts', internal: true },
      { label: '高级功能', url: '/advanced', internal: true },
      { label: '参考文档', url: '/reference', internal: true }
    ]
  },
  {
    title: '资源',
    links: [
      { label: 'Deno 官方文档', url: 'https://docs.deno.com' },
      { label: 'Deno 标准库', url: 'https://jsr.io/@std' },
      { label: 'JSR 包注册表', url: 'https://jsr.io' },
      { label: '开发者博客', url: 'https://deno.com/blog' },
      { label: 'Deno Deploy', url: 'https://deno.com/deploy' }
    ]
  },
  {
    title: '社区',
    links: [
      { label: 'GitHub', url: 'https://github.com/denoland/deno' },
      { label: 'Discord', url: 'https://discord.gg/deno' },
      { label: 'Bluesky', url: 'https://bsky.app/profile/deno.land' },
      { label: '参与贡献', url: '/contributing', internal: true }
    ]
  }
]
</script>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: rgba(10, 10, 9, 0.6);
  backdrop-filter: blur(12px);
  margin-top: 6rem;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 3.5rem 2rem 2rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 3rem;
  margin-bottom: 2.5rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.footer-logo-icon {
  width: 26px;
  height: 26px;
  color: var(--accent);
}

.footer-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
  max-width: 36ch;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.footer-col h4 {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-col a {
  font-size: 0.875rem;
  color: var(--text-secondary);
  transition: color 0.2s var(--ease-out);
}

.footer-col a:hover {
  color: var(--accent);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.copyright {
  font-size: 0.8rem;
  color: var(--text-tertiary);
  max-width: 60ch;
  line-height: 1.5;
}

.copyright a {
  color: var(--text-secondary);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.copyright a:hover {
  color: var(--accent);
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  color: var(--text-tertiary);
  border: 1px solid var(--border);
  transition: all 0.2s var(--ease-out);
}

.social-links a:hover {
  color: var(--accent);
  border-color: var(--border-accent);
  background: var(--accent-soft);
}

.social-links svg {
  width: 18px;
  height: 18px;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
