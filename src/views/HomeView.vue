<template>
  <div class="home">
    <!-- ===== Hero ===== -->
    <section class="hero">
      <div class="container hero-inner">
        <ScrollReveal>
          <div class="hero-badge">
            <span class="badge-dot" />
            <span>Deno 2.x · 默认安全 · TypeScript 原生支持</span>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <h1 class="hero-title">
            下一代 JavaScript<br />
            运行时 <span class="gradient-text">Deno</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <p class="hero-subtitle">
            Deno（读作 <code>dee-no</code>）是一个默认安全、开发者体验出色的 JavaScript、TypeScript 和 WebAssembly 运行时。构建于 V8、Rust 和 Tokio 之上，开箱即用地提供完整的工具链。
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div class="hero-actions">
            <router-link to="/getting-started" class="btn btn-primary">
              快速开始
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-arrow">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </router-link>
            <a href="https://github.com/denoland/deno" target="_blank" rel="noopener" class="btn btn-secondary">
              <svg viewBox="0 0 24 24" fill="currentColor" class="btn-github">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/>
              </svg>
              GitHub
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class="hero-terminal">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span></span><span></span><span></span>
              </div>
              <span class="terminal-title">终端 — deno</span>
            </div>
            <div class="terminal-body">
              <div class="terminal-line">
                <span class="prompt">$</span>
                <span class="command">curl -fsSL https://deno.land/install.sh | sh</span>
              </div>
              <div class="terminal-output">Downloading Deno... ✓</div>
              <div class="terminal-line">
                <span class="prompt">$</span>
                <span class="command">deno --version</span>
              </div>
              <div class="terminal-output">deno 2.1.4</div>
              <div class="terminal-output">v8 13.3.152.5</div>
              <div class="terminal-output">typescript 5.7.2</div>
              <div class="terminal-line">
                <span class="prompt">$</span>
                <span class="command">deno run --allow-net server.ts</span>
              </div>
              <div class="terminal-output accent">Listening on http://localhost:8000/</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- ===== Features Bento ===== -->
    <section class="section features-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-eyebrow">核心优势</span>
            <h2 class="section-title">为什么选择 Deno？</h2>
            <p class="section-desc">Deno 将现代 JavaScript 开发所需的一切整合到一个高性能运行时中——无需配置，无需安装额外工具。</p>
          </div>
        </ScrollReveal>

        <div class="bento-grid reveal-stagger" ref="featuresGrid">
          <FeatureCard
            v-for="feature in features"
            :key="feature.title"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
            :links="feature.links"
          />
        </div>
      </div>
    </section>

    <!-- ===== Quick Start ===== -->
    <section class="section quick-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-eyebrow">快速开始</span>
            <h2 class="section-title">三分钟上手 Deno</h2>
            <p class="section-desc">从安装到运行你的第一个 Deno 程序，只需几步。</p>
          </div>
        </ScrollReveal>

        <div class="quick-steps">
          <ScrollReveal>
            <div class="step">
              <div class="step-num">01</div>
              <div class="step-body">
                <h3>安装 Deno</h3>
                <p>使用以下命令在你的系统上安装 Deno 运行时。</p>
                <CodeTabs :tabs="installTabs" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div class="step">
              <div class="step-num">02</div>
              <div class="step-body">
                <h3>创建项目</h3>
                <p>使用 <code>deno init</code> 脚手架工具快速创建一个新项目。</p>
                <CodeBlock
                  :code="initCode"
                  lang="sh"
                  title="终端"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div class="step">
              <div class="step-num">03</div>
              <div class="step-body">
                <h3>运行你的程序</h3>
                <p>创建一个 <code>server.ts</code> 文件，然后运行它。注意 <code>--allow-net</code> 标志——Deno 默认安全，需要显式授权网络访问。</p>
                <CodeBlock
                  :code="serverCode"
                  lang="ts"
                  title="server.ts"
                />
                <CodeBlock
                  :code="runCode"
                  lang="sh"
                  title="终端"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- ===== Ecosystem ===== -->
    <section class="section ecosystem-section">
      <div class="container">
        <ScrollReveal>
          <div class="section-header">
            <span class="section-eyebrow">生态系统</span>
            <h2 class="section-title">完整的开发生态</h2>
            <p class="section-desc">Deno 拥有不断增长的工具和资源生态系统，帮助你构建和部署现代应用。</p>
          </div>
        </ScrollReveal>

        <div class="ecosystem-grid reveal-stagger" ref="ecosystemGrid">
          <a
            v-for="item in ecosystem"
            :key="item.title"
            :href="item.url"
            target="_blank"
            rel="noopener"
            class="eco-card"
          >
            <div class="eco-icon" v-html="item.icon" />
            <h3 class="eco-title">{{ item.title }}</h3>
            <p class="eco-desc">{{ item.description }}</p>
            <span class="eco-link">
              访问
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="eco-arrow">
                <path d="M7 17L17 7M17 7H8M17 7v9" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="section cta-section">
      <div class="container">
        <ScrollReveal>
          <div class="cta-box">
            <h2 class="cta-title">准备好开始了吗？</h2>
            <p class="cta-desc">深入阅读文档，了解 Deno 的安全模型、内置工具链和完整 API。</p>
            <div class="cta-actions">
              <router-link to="/getting-started" class="btn btn-primary">阅读入门指南</router-link>
              <router-link to="/guides" class="btn btn-ghost">浏览所有指南</router-link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ScrollReveal from '../components/ScrollReveal.vue'
import FeatureCard from '../components/FeatureCard.vue'
import CodeBlock from '../components/CodeBlock.vue'
import CodeTabs from '../components/CodeTabs.vue'

const featuresGrid = ref(null)
const ecosystemGrid = ref(null)

const features = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z"/><path d="M9 12l2 2 4-4"/></svg>',
    title: '默认安全',
    description: '代码在沙箱中运行，默认没有文件、网络或环境访问权限，直到你显式授权。告别依赖供应链的安全隐患。',
    links: [{ label: '安全模型', url: 'https://docs.deno.com/runtime/fundamentals/security/' }]
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    title: 'TypeScript 原生支持',
    description: '直接运行 .ts 文件——无需 tsc，无需构建步骤，无需配置。TypeScript 是一等公民，不是附加品。',
    links: [{ label: 'TypeScript 指南', url: 'https://docs.deno.com/runtime/fundamentals/typescript/' }]
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    title: '完整内置工具链',
    description: '格式化、Lint、测试、基准测试、打包编译——全部内置。无需配置 devDependencies，无需 wire up 任何工具。',
    links: [{ label: '工具链概览', url: 'https://docs.deno.com/runtime/lint_and_format/' }]
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    title: 'Web 标准优先',
    description: '基于 Web 标准 API 构建——Request、Response、fetch、URL 等。你学到的是平台本身，而不是某个框架的专有 API。',
    links: [{ label: 'HTTP 服务器', url: 'https://docs.deno.com/runtime/fundamentals/http_server/' }]
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    title: '现代模块系统',
    description: 'ES 模块 + URL 导入，支持 JSR 注册表和 npm 包。从 Node.js 无缝迁移，渐进式混合使用。',
    links: [{ label: 'JSR 注册表', url: 'https://jsr.io' }, { label: '包管理', url: 'https://docs.deno.com/runtime/packages/' }]
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    title: '高性能',
    description: '构建于 V8 引擎、Rust 和 Tokio 异步运行时之上，提供出色的启动速度和持续性能表现。',
    links: [{ label: 'Deno Deploy', url: 'https://deno.com/deploy' }]
  }
]

const installTabs = [
  { label: 'macOS / Linux', code: 'curl -fsSL https://deno.land/install.sh | sh', lang: 'sh', title: '终端' },
  { label: 'Windows (PowerShell)', code: 'irm https://deno.land/install.ps1 | iex', lang: 'powershell', title: 'PowerShell' },
  { label: 'Homebrew', code: 'brew install deno', lang: 'sh', title: '终端' },
  { label: 'WinGet', code: 'winget install --id=DenoLand.Deno', lang: 'powershell', title: 'PowerShell' }
]

const initCode = `$ deno init my_project

my_project/
├── deno.json       # 项目配置：任务、依赖、lint/fmt 设置
├── main.ts          # 基于 Deno.serve 的小型 HTTP 服务器
└── main_test.ts     # 测试文件`

const serverCode = `Deno.serve((_req: Request) => {
  return new Response("Hello, world!");
});`

const runCode = `$ deno run --allow-net server.ts
Listening on http://localhost:8000/`

const ecosystem = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    title: 'Deno 官方文档',
    description: 'Deno 运行时、Deno Deploy 等的官方指南与参考文档。',
    url: 'https://docs.deno.com'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
    title: 'Deno 标准库',
    description: 'Deno 程序官方支持的常见工具函数集合，覆盖断言、异步、文件系统等。',
    url: 'https://jsr.io/@std'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6"/><path d="M8 6l-6 6 6 6"/></svg>',
    title: 'JSR 包注册表',
    description: '面向现代 JavaScript 和 TypeScript 的开源包注册表，原生支持类型。',
    url: 'https://jsr.io'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    title: '开发者博客',
    description: '来自 Deno 团队的产品更新、教程、深度技术文章等内容。',
    url: 'https://deno.com/blog'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    title: 'Deno Deploy',
    description: '从你的代码到全球边缘网络，零配置部署 Deno 应用。',
    url: 'https://deno.com/deploy'
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    title: 'VS Code 集成',
    description: '官方 VS Code 扩展提供自动补全、内联错误提示、格式化保存等功能。',
    url: 'https://docs.deno.com/runtime/reference/vscode/'
  }
]

const setupReveal = (el) => {
  if (!el) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  )
  observer.observe(el)
}

onMounted(() => {
  setupReveal(featuresGrid.value)
  setupReveal(ecosystemGrid.value)
})
</script>

<style scoped>
/* ===== Hero ===== */
.hero {
  padding: 5rem 0 4rem;
  position: relative;
  overflow: hidden;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: var(--accent-soft);
  border: 1px solid var(--border-accent);
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 1.75rem;
}

.badge-dot {
  width: 7px;
  height: 7px;
  background: var(--accent);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent);
  animation: pulse-glow 2s ease-in-out infinite;
}

.hero-title {
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.04em;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 60ch;
  margin-bottom: 2.5rem;
}

.hero-subtitle code {
  color: var(--accent);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s var(--ease-out);
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--accent);
  color: var(--bg-base);
}

.btn-primary:hover {
  background: #6fff4a;
  color: var(--bg-base);
  box-shadow: 0 0 30px var(--accent-glow);
  transform: translateY(-1px);
}

.btn-secondary {
  background: var(--bg-surface);
  color: var(--text-primary);
  border: 1px solid var(--border-strong);
}

.btn-secondary:hover {
  background: var(--bg-hover);
  border-color: var(--text-dim);
}

.btn-ghost {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border);
}

.btn-ghost:hover {
  color: var(--text-primary);
  border-color: var(--border-strong);
  background: var(--bg-surface);
}

.btn-arrow {
  width: 18px;
  height: 18px;
  transition: transform 0.2s var(--ease-out);
}

.btn-primary:hover .btn-arrow {
  transform: translateX(3px);
}

.btn-github {
  width: 18px;
  height: 18px;
}

/* ===== Terminal ===== */
.hero-terminal {
  width: 100%;
  max-width: 680px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-strong);
  background: var(--bg-elevated);
  box-shadow: var(--shadow-lg);
  text-align: left;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.6rem 1rem;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border);
}

.terminal-dots {
  display: flex;
  gap: 7px;
}

.terminal-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-dots span:nth-child(1) { background: #ff5f57; }
.terminal-dots span:nth-child(2) { background: #febc2e; }
.terminal-dots span:nth-child(3) { background: #28c840; }

.terminal-title {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

.terminal-body {
  padding: 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  line-height: 1.8;
}

.terminal-line {
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
}

.prompt {
  color: var(--accent);
  font-weight: 700;
}

.command {
  color: var(--text-primary);
}

.terminal-output {
  color: var(--text-tertiary);
  padding-left: 1.25rem;
}

.terminal-output.accent {
  color: var(--accent);
}

/* ===== Sections ===== */
.section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  margin-bottom: 1rem;
}

.section-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 55ch;
  margin: 0 auto;
}

/* ===== Bento Grid ===== */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

@media (max-width: 900px) {
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: 1fr;
  }
}

/* ===== Quick Start ===== */
.quick-steps {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.step-num {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-md);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-body {
  flex: 1;
}

.step-body h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.step-body p {
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

/* ===== Ecosystem ===== */
.ecosystem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.eco-card {
  display: block;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  transition: all 0.3s var(--ease-out);
  color: inherit;
}

.eco-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
  background: var(--bg-surface);
}

.eco-icon {
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

.eco-icon :deep(svg) {
  width: 22px;
  height: 22px;
}

.eco-title {
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  color: var(--text-primary);
}

.eco-desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.eco-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-tertiary);
  transition: color 0.2s var(--ease-out);
}

.eco-card:hover .eco-link {
  color: var(--accent);
}

.eco-arrow {
  width: 12px;
  height: 12px;
  transition: transform 0.2s var(--ease-out);
}

.eco-card:hover .eco-arrow {
  transform: translate(2px, -2px);
}

@media (max-width: 900px) {
  .ecosystem-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .ecosystem-grid {
    grid-template-columns: 1fr;
  }
}

/* ===== CTA ===== */
.cta-box {
  text-align: center;
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-xl);
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: radial-gradient(ellipse at center, var(--accent-soft) 0%, transparent 70%);
  pointer-events: none;
}

.cta-title {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  margin-bottom: 1rem;
  position: relative;
}

.cta-desc {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  position: relative;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

@media (max-width: 640px) {
  .step {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
