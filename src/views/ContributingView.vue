<template>
  <DocLayout
    title="参与贡献"
    eyebrow="Contributing"
    description="Deno 是一个开源项目，欢迎所有人参与贡献。无论是报告 bug、提交功能请求、改进文档还是提交代码，每一份贡献都很有价值。"
    :sidebarSections="sidebarSections"
  >
    <h2 id="overview">概览</h2>
    <p>Deno 是一个完全开源的项目，遵循 MIT 许可证。项目的源代码托管在 <a href="https://github.com/denoland/deno" target="_blank" rel="noopener">GitHub</a> 上。我们欢迎各种形式的贡献：</p>
    <ul>
      <li>报告 Bug 或提交功能请求</li>
      <li>改进文档和示例代码</li>
      <li>提交代码修复和新功能</li>
      <li>帮助回答社区中的问题</li>
      <li>翻译文档</li>
    </ul>

    <h2 id="before-contributing">贡献之前</h2>
    <p>在开始贡献之前，请先：</p>
    <ul>
      <li>阅读 <a href="https://github.com/denoland/deno/blob/main/.github/CONTRIBUTING.md">贡献指南</a></li>
      <li>搜索现有的 <a href="https://github.com/denoland/deno/issues">Issues</a> 和 <a href="https://github.com/denoland/deno/pulls">Pull Requests</a>，避免重复</li>
      <li>加入 <a href="https://discord.gg/deno">Discord 社区</a>，与团队和其他贡献者交流</li>
    </ul>

    <h2 id="reporting-bugs">报告 Bug</h2>
    <p>如果你发现了 Bug，请 <a href="https://github.com/denoland/deno/issues/new?labels=bug">在 GitHub 上创建 Issue</a>。为了帮助我们更快地定位问题，请在 Issue 中包含以下信息：</p>
    <ul>
      <li>Deno 版本（<code>deno --version</code> 的输出）</li>
      <li>操作系统和版本</li>
      <li>复现步骤</li>
      <li>预期行为和实际行为</li>
      <li>最小复现示例（如果可能）</li>
    </ul>

    <h2 id="feature-requests">功能请求</h2>
    <p>如果你有新功能的想法，请先在 <a href="https://github.com/denoland/deno/discussions">GitHub Discussions</a> 中讨论。在讨论成熟后，可以创建正式的 Feature Request Issue。</p>

    <h2 id="development-setup">开发环境搭建</h2>
    <p>如果你想从源码构建 Deno 并参与开发，需要以下前置条件：</p>

    <h3 id="prerequisites">前置条件</h3>
    <ul>
      <li><strong>Rust</strong>（最新稳定版）——<a href="https://rustup.rs">rustup</a> 安装</li>
      <li><strong>Python 3</strong>——用于构建脚本</li>
      <li><strong>CMake</strong>——用于 V8 构建</li>
      <li><strong> protoc</strong>——Protocol Buffers 编译器</li>
    </ul>

    <h3 id="clone-build">克隆并构建</h3>
    <CodeBlock :code="cloneBuild" lang="sh" title="终端" />

    <h3 id="build-options">构建选项</h3>
    <CodeBlock :code="buildOptions" lang="sh" title="终端" />

    <h2 id="architecture">架构概览</h2>
    <p>Deno 的架构由以下主要部分组成：</p>
    <table>
      <thead>
        <tr>
          <th>组件</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>V8 引擎</strong></td>
          <td>Google 的 JavaScript 和 WebAssembly 引擎，负责执行 JS/TS 代码</td>
        </tr>
        <tr>
          <td><strong>Rust 核心层</strong></td>
          <td>Deno 的核心运行时，处理权限、资源管理、FFI 等</td>
        </tr>
        <tr>
          <td><strong>Tokio</strong></td>
          <td>Rust 的异步运行时，提供高性能的异步 I/O</td>
        </tr>
        <tr>
          <td><strong>swc</strong></td>
          <td>超快的 TypeScript/JavaScript 编译器，用于 TS → JS 转换</td>
        </tr>
        <tr>
          <td><strong>deno_ast</strong></td>
          <td>AST 解析和处理库，用于 Lint、格式化等功能</td>
        </tr>
      </tbody>
    </table>

    <h3 id="key-directories">关键目录</h3>
    <CodeBlock :code="keyDirs" lang="plaintext" title="源码目录结构" />

    <h2 id="style-guide">代码风格指南</h2>
    <p>Deno 项目遵循严格的代码风格指南，确保代码质量和一致性。</p>

    <h3 id="typescript-style">TypeScript 风格</h3>
    <ul>
      <li>使用 TypeScript 的严格模式</li>
      <li>优先使用 <code>const</code>，避免 <code>var</code></li>
      <li>使用 <strong>interface</strong> 而非 <code>type</code> 定义对象类型</li>
      <li>公共 API 必须有 JSDoc 注释</li>
      <li>每个文件末尾保留一个空行</li>
    </ul>

    <h3 id="rust-style">Rust 风格</h3>
    <ul>
      <li>使用 <code>cargo fmt</code> 格式化代码</li>
      <li>使用 <code>cargo clippy</code> 检查代码</li>
      <li>遵循 <a href="https://rust-lang.github.io/api-guidelines/">Rust API 指南</a></li>
      <li>所有公共函数必须有文档注释</li>
    </ul>

    <h2 id="testing-guide">测试指南</h2>
    <p>所有代码变更必须包含相应的测试。Deno 项目有几种类型的测试：</p>
    <ul>
      <li><strong>单元测试</strong>——<code>cli/tests/unit/</code> 目录下的测试</li>
      <li><strong>集成测试</strong>——<code>cli/tests/integration/</code> 目录下的测试</li>
      <li><strong>快照测试</strong>——CLI 输出的快照对比</li>
    </ul>

    <p>运行测试：</p>
    <CodeBlock :code="runTests" lang="sh" title="终端" />

    <h2 id="submitting-pr">提交 Pull Request</h2>
    <ol>
      <li>Fork <a href="https://github.com/denoland/deno">denoland/deno</a> 仓库</li>
      <li>创建特性分支：<code>git checkout -b my-feature</code></li>
      <li>编写代码并添加测试</li>
      <li>运行格式化和检查：<code>./tools/format.py && ./tools/lint.py</code></li>
      <li>确保所有测试通过：<code>cargo test</code></li>
      <li>提交并推送：<code>git push origin my-feature</code></li>
      <li>创建 Pull Request，描述你的变更</li>
    </ol>

    <div class="note">
      <strong>PR 标题格式：</strong>请使用 <code>类型: 简短描述</code> 的格式，例如 <code>fix: 修复 HTTP 服务器内存泄漏</code> 或 <code>feat: 添加 WebSocket 压缩支持</code>。
    </div>

    <h2 id="community">社区</h2>
    <p>加入 Deno 社区，与其他开发者和核心团队交流：</p>
    <ul>
      <li><a href="https://discord.gg/deno" target="_blank" rel="noopener">Discord</a>——实时聊天和帮助</li>
      <li><a href="https://github.com/denoland/deno/discussions" target="_blank" rel="noopener">GitHub Discussions</a>——深入讨论和问答</li>
      <li><a href="https://bsky.app/profile/deno.land" target="_blank" rel="noopener">Bluesky</a>——最新动态</li>
      <li><a href="https://www.youtube.com/@deno_land" target="_blank" rel="noopener">YouTube</a>——教程和演讲视频</li>
      <li><a href="https://deno.com/blog" target="_blank" rel="noopener">开发者博客</a>——产品更新和深度文章</li>
    </ul>

    <h2 id="more-resources">更多资源</h2>
    <ul>
      <li><a href="https://docs.deno.com">Deno 官方文档</a>——运行时、Deno Deploy 等的官方指南与参考文档</li>
      <li><a href="https://jsr.io/@std">Deno 标准库</a>——Deno 程序官方支持的常见工具函数</li>
      <li><a href="https://jsr.io">JSR</a>——面向现代 JavaScript 和 TypeScript 的开源包注册表</li>
      <li><a href="https://deno.com/blog">开发者博客</a>——来自 Deno 团队的产品更新、教程等内容</li>
    </ul>
  </DocLayout>
</template>

<script setup>
import DocLayout from '../components/DocLayout.vue'
import CodeBlock from '../components/CodeBlock.vue'

const sidebarSections = [
  {
    title: '参与贡献',
    items: [
      { id: 'overview', label: '概览' },
      { id: 'before-contributing', label: '贡献之前' },
      { id: 'reporting-bugs', label: '报告 Bug' },
      { id: 'feature-requests', label: '功能请求' }
    ]
  },
  {
    title: '开发指南',
    items: [
      { id: 'development-setup', label: '开发环境搭建' },
      { id: 'prerequisites', label: '前置条件' },
      { id: 'clone-build', label: '克隆并构建' },
      { id: 'architecture', label: '架构概览' },
      { id: 'style-guide', label: '代码风格指南' },
      { id: 'testing-guide', label: '测试指南' },
      { id: 'submitting-pr', label: '提交 Pull Request' }
    ]
  },
  {
    title: '其他',
    items: [
      { id: 'community', label: '社区' },
      { id: 'more-resources', label: '更多资源' }
    ]
  }
]

const cloneBuild = `# 克隆仓库
git clone https://github.com/denoland/deno.git
cd deno

# 构建项目（首次构建可能需要较长时间）
cargo build --release

# 构建完成后，可执行文件在 target/release/deno
./target/release/deno --version`

const buildOptions = `# Debug 构建（更快编译，更慢运行）
cargo build

# 指定 V8 构建模式
V8_FROM_SOURCE=1 cargo build --release

# 使用缓存加速构建
cargo build --release --locked`

const keyDirs = `deno/
├── cli/                # CLI 入口和命令实现
│   ├── args/           # 命令行参数解析
│   ├── tools/          # 各子命令实现（fmt, lint, test 等）
│   └── tests/          # 测试文件
├── core/               # Deno 核心运行时
├── ext/                # 内置扩展（fetch, fs, net 等）
├── runtime/            # 运行时实现
├── deno_ast/           # AST 解析库
├── deno_lockfile/      # 锁文件处理
├── deno_npm/           # npm 包管理
├── deno_semver/        # 语义化版本
├── ops/                # Op 定义（JS ↔ Rust 通信）
└── tools/              # 构建和开发工具脚本`

const runTests = `# 运行 Rust 测试
cargo test

# 运行 JS 集成测试
cargo build --release
./target/release/deno test cli/tests/unit/

# 运行特定测试
cargo test -- --test integration
./target/release/deno test cli/tests/unit/args_test.ts`
</script>
