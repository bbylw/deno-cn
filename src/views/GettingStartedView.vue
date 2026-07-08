<template>
  <DocLayout
    title="入门指南"
    eyebrow="Getting Started"
    description="从零开始，在几分钟内创建一个可运行、可测试的 Deno 项目。本指南将带你完成安装、环境配置、项目创建和第一个程序。"
    :sidebarSections="sidebarSections"
  >
    <h2 id="why-deno">为什么选择 Deno？</h2>
    <ul>
      <li><strong>兼容现有 Node.js 项目</strong>——直接在含有 <code>package.json</code> 和 <code>node_modules</code> 的仓库中运行，可与 <code>npm:</code> 导入混合使用。</li>
      <li><strong>现代模块系统</strong>——ES 模块 + URL 导入，JSR 提供类型化包，支持工作空间。</li>
      <li><strong>TypeScript 优先</strong>——直接运行 <code>.ts</code> 文件，无需 <code>tsc</code>，无需构建步骤，无需配置。</li>
      <li><strong>默认安全</strong>——代码在沙箱中运行，没有文件、网络或环境访问权限，直到你授权。</li>
      <li><strong>完整工具链，无需拼装</strong>——内置格式化、Lint、测试运行器、基准测试等，无需配置 <code>devDependencies</code>。</li>
    </ul>

    <h2 id="install">安装 Deno</h2>
    <p>使用以下任一命令在你的系统上安装 Deno 运行时。</p>

    <CodeTabs :tabs="installTabs" />

    <p>安装完成后，验证安装是否成功：</p>
    <CodeBlock :code="verifyCode" lang="sh" title="终端" />

    <div class="note">
      <strong>其他安装方式：</strong>还可以通过 <a href="https://community.chocolatey.org/packages/deno">Chocolatey</a>（<code>choco install deno</code>）、<a href="https://scoop.sh">Scoop</a>（<code>scoop install main/deno</code>）、Docker 等方式安装。完整列表请查看 <a href="https://docs.deno.com/runtime/getting_started/installation/">官方安装文档</a>。
    </div>

    <h2 id="setup-environment">配置你的环境</h2>
    <p>为了获得最佳开发体验，建议配置编辑器支持。Deno 提供了官方的 VS Code 扩展。</p>

    <h3 id="vscode">VS Code</h3>
    <p>在 VS Code 扩展市场搜索 "Deno" 并安装官方扩展。安装后，在项目根目录创建 <code>.vscode/settings.json</code>：</p>
    <CodeBlock :code="vscodeConfig" lang="json" title=".vscode/settings.json" />

    <h3 id="other-editors">其他编辑器</h3>
    <p>Deno 内置了 LSP（语言服务器协议），支持任何兼容 LSP 的编辑器：</p>
    <ul>
      <li><strong>JetBrains IDE（IntelliJ、WebStorm 等）</strong>——安装 Deno 插件</li>
      <li><strong>Neovim / Vim</strong>——使用 <code>deno lsp</code> 配合 LSP 客户端</li>
      <li><strong>Emacs</strong>——使用 lsp-mode 或 eglot</li>
      <li><strong>Sublime Text</strong>——安装 LSP-Deno 包</li>
    </ul>

    <h2 id="create-project">创建项目</h2>
    <p>使用 <code>deno init</code> 脚手架工具快速创建一个新项目：</p>
    <CodeBlock :code="initCode" lang="sh" title="终端" />

    <p>这会创建一个可直接运行的小型项目：</p>
    <CodeBlock :code="projectStructure" lang="plaintext" title="项目结构" />

    <p><code>deno.json</code> 是你的任务、依赖和工具配置所在。可以把它理解为 <code>package.json</code> 加上你的工具配置，合并在一个文件中。</p>

    <h2 id="run-it">运行程序</h2>
    <CodeBlock :code="runCode" lang="sh" title="终端" />

    <p>注意 <code>-N</code>（<code>--allow-net</code> 的缩写）。Deno <a href="#security">默认安全</a>：代码在获得授权之前无法访问网络、文件系统或环境变量。打开 URL 即可看到响应。</p>

    <p><code>main.ts</code> 是 TypeScript 文件，它直接运行了——<strong>无需 <code>tsc</code>，无需构建步骤</strong>。它基于 Web 标准 API <code>Deno.serve</code> 和 <code>Request</code>/<code>Response</code> 构建，所以你在这里学到的是平台本身，而不是某个框架。</p>

    <h2 id="test-it">测试程序</h2>
    <p>项目自带测试文件。使用 <code>deno test</code> 运行测试——测试运行器是内置的，无需安装任何东西：</p>
    <CodeBlock :code="testCode" lang="sh" title="终端" />

    <h2 id="add-dependency">添加依赖</h2>
    <p>从 npm 或 JSR 拉取包：</p>
    <CodeBlock :code="installDepCode" lang="sh" title="终端" />

    <p>然后导入并使用它们：</p>
    <CodeBlock :code="importCode" lang="ts" title="main.ts" />

    <h2 id="toolchain">使用内置工具链</h2>
    <p>格式化、Lint 等功能随运行时一起提供，无需额外设置：</p>
    <CodeBlock :code="toolchainCode" lang="sh" title="终端" />

    <h2 id="first-program">你的第一个 Deno 程序</h2>
    <p>Deno 可用于许多不同的应用场景，但最常用于构建 Web 服务器。创建一个名为 <code>server.ts</code> 的文件：</p>
    <CodeBlock :code="serverCode" lang="ts" title="server.ts" />

    <p>使用以下命令运行你的服务器：</p>
    <CodeBlock :code="runServerCode" lang="sh" title="终端" />

    <p>这将在 <a href="http://localhost:8000">http://localhost:8000</a> 上启动一个本地 Web 服务器。</p>

    <h2 id="build-from-source">从源码构建</h2>
    <p>如果你需要从源码构建 Deno，完整的说明请查看 <a href="https://github.com/denoland/deno/blob/main/.github/CONTRIBUTING.md#building-from-source">贡献指南中的构建说明</a>。</p>

    <h2 id="next-steps">下一步</h2>
    <ul>
      <li><router-link to="/guides">运行代码</router-link>——服务器、任务、Web API 和调试</li>
      <li><router-link to="/guides">管理包</router-link>——依赖、工作空间、发布</li>
      <li><router-link to="/guides">从 Node.js 迁移</router-link>——将现有项目迁移到 Deno</li>
      <li><router-link to="/concepts">核心概念</router-link>——深入理解 TypeScript、安全模型、模块系统</li>
    </ul>
  </DocLayout>
</template>

<script setup>
import DocLayout from '../components/DocLayout.vue'
import CodeBlock from '../components/CodeBlock.vue'
import CodeTabs from '../components/CodeTabs.vue'

const sidebarSections = [
  {
    title: '入门指南',
    items: [
      { id: 'why-deno', label: '为什么选择 Deno？' },
      { id: 'install', label: '安装 Deno' },
      { id: 'setup-environment', label: '配置环境' },
      { id: 'create-project', label: '创建项目' },
      { id: 'run-it', label: '运行程序' },
      { id: 'test-it', label: '测试程序' },
      { id: 'add-dependency', label: '添加依赖' },
      { id: 'toolchain', label: '内置工具链' },
      { id: 'first-program', label: '第一个程序' },
      { id: 'build-from-source', label: '从源码构建' },
      { id: 'next-steps', label: '下一步' }
    ]
  }
]

const installTabs = [
  { label: 'Shell (Mac/Linux)', code: 'curl -fsSL https://deno.land/install.sh | sh', lang: 'sh', title: '终端' },
  { label: 'PowerShell (Windows)', code: 'irm https://deno.land/install.ps1 | iex', lang: 'powershell', title: 'PowerShell' },
  { label: 'Homebrew (Mac)', code: 'brew install deno', lang: 'sh', title: '终端' },
  { label: 'WinGet (Windows)', code: 'winget install --id=DenoLand.Deno', lang: 'powershell', title: 'PowerShell' },
  { label: 'Chocolatey (Windows)', code: 'choco install deno', lang: 'powershell', title: 'PowerShell' },
  { label: 'Scoop (Windows)', code: 'scoop install main/deno', lang: 'powershell', title: 'PowerShell' }
]

const verifyCode = `deno --version
# deno 2.1.4
# v8 13.3.152.5
# typescript 5.7.2`

const vscodeConfig = `{
  "deno.enable": true,
  "deno.lint": true,
  "deno.unstable": false
}`

const initCode = `deno init my_project`

const projectStructure = `my_project/
├── deno.json        # 项目配置：任务、依赖、lint/fmt 设置
├── main.ts          # 基于 Deno.serve 的小型 HTTP 服务器
└── main_test.ts     # 测试文件`

const runCode = `$ cd my_project
$ deno -N main.ts
Listening on http://localhost:8000/`

const testCode = `$ deno test
running 2 tests from ./main_test.ts
returns html on / ... ok (12ms)
returns json on /api ... ok (0ms)

ok | 2 passed | 0 failed (15ms)`

const installDepCode = `deno install express          # 任何 npm 包
deno install jsr:@std/assert   # Deno 标准库（在 JSR 上）`

const importCode = `import { assertEquals } from "@std/assert";

assertEquals(1 + 1, 2);`

const toolchainCode = `deno fmt      # 格式化你的代码
deno lint     # 发现代码问题
deno task     # 运行 deno.json 中定义的脚本`

const serverCode = `Deno.serve((_req: Request) => {
  return new Response("Hello, world!");
});`

const runServerCode = `deno run --allow-net server.ts`
</script>
