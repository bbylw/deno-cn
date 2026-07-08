<template>
  <DocLayout
    title="参考文档"
    eyebrow="Reference"
    description="Deno CLI 命令完整参考、标准库概览、deno.json 配置选项、权限系统、环境变量和 LSP 集成。"
    :sidebarSections="sidebarSections"
  >
    <!-- ===== CLI Commands ===== -->
    <h2 id="cli">CLI 命令</h2>
    <p>Deno 提供了丰富的命令行工具，覆盖开发、测试、构建、部署的完整生命周期。</p>

    <h3 id="cli-core">核心命令</h3>
    <div class="cli-grid">
      <div v-for="cmd in coreCommands" :key="cmd.name" class="cli-card">
        <div class="cli-header">
          <code class="cli-name">{{ cmd.name }}</code>
          <span class="cli-desc">{{ cmd.desc }}</span>
        </div>
        <pre class="cli-usage">{{ cmd.usage }}</pre>
      </div>
    </div>

    <h3 id="cli-tooling">工具命令</h3>
    <div class="cli-grid">
      <div v-for="cmd in toolCommands" :key="cmd.name" class="cli-card">
        <div class="cli-header">
          <code class="cli-name">{{ cmd.name }}</code>
          <span class="cli-desc">{{ cmd.desc }}</span>
        </div>
        <pre class="cli-usage">{{ cmd.usage }}</pre>
      </div>
    </div>

    <h3 id="cli-package">包管理命令</h3>
    <div class="cli-grid">
      <div v-for="cmd in packageCommands" :key="cmd.name" class="cli-card">
        <div class="cli-header">
          <code class="cli-name">{{ cmd.name }}</code>
          <span class="cli-desc">{{ cmd.desc }}</span>
        </div>
        <pre class="cli-usage">{{ cmd.usage }}</pre>
      </div>
    </div>

    <h3 id="cli-all">完整命令列表</h3>
    <table>
      <thead>
        <tr>
          <th>命令</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cmd in allCommands" :key="cmd.name">
          <td><code>{{ cmd.name }}</code></td>
          <td>{{ cmd.desc }}</td>
        </tr>
      </tbody>
    </table>

    <!-- ===== Standard Library ===== -->
    <h2 id="stdlib">标准库</h2>
    <p>Deno 标准库是官方支持的常见工具函数集合，通过 JSR 发布。所有模块都以 <code>@std/</code> 为前缀。</p>

    <h3 id="stdlib-modules">标准库模块</h3>
    <div class="stdlib-grid">
      <a
        v-for="mod in stdlibModules"
        :key="mod.name"
        :href="`https://jsr.io/@std/${mod.name}`"
        target="_blank"
        rel="noopener"
        class="stdlib-card"
      >
        <code class="stdlib-name">@std/{{ mod.name }}</code>
        <span class="stdlib-desc">{{ mod.desc }}</span>
      </a>
    </div>

    <h3 id="stdlib-usage">使用示例</h3>
    <CodeBlock :code="stdlibUsage" lang="ts" title="main.ts" />

    <!-- ===== deno.json Reference ===== -->
    <h2 id="deno-json">deno.json 配置参考</h2>
    <p><code>deno.json</code> 是 Deno 项目的核心配置文件，集成了依赖管理、任务定义、工具配置等功能。</p>

    <h3 id="deno-json-full">完整配置示例</h3>
    <CodeBlock :code="denoJsonFull" lang="json" title="deno.json" />

    <h3 id="deno-json-fields">字段说明</h3>
    <table>
      <thead>
        <tr>
          <th>字段</th>
          <th>类型</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>name</code></td>
          <td>string</td>
          <td>包名（发布到 JSR 时必需）</td>
        </tr>
        <tr>
          <td><code>version</code></td>
          <td>string</td>
          <td>语义化版本号</td>
        </tr>
        <tr>
          <td><code>exports</code></td>
          <td>string | object</td>
          <td>包的导出入口</td>
        </tr>
        <tr>
          <td><code>imports</code></td>
          <td>object</td>
          <td>导入映射，简化模块导入路径</td>
        </tr>
        <tr>
          <td><code>tasks</code></td>
          <td>object</td>
          <td>可执行的任务脚本</td>
        </tr>
        <tr>
          <td><code>compilerOptions</code></td>
          <td>object</td>
          <td>TypeScript 编译器选项</td>
        </tr>
        <tr>
          <td><code>lint</code></td>
          <td>object</td>
          <td>Lint 规则配置</td>
        </tr>
        <tr>
          <td><code>fmt</code></td>
          <td>object</td>
          <td>格式化配置</td>
        </tr>
        <tr>
          <td><code>workspace</code></td>
          <td>string[]</td>
          <td>工作空间成员目录</td>
        </tr>
        <tr>
          <td><code>publish</code></td>
          <td>object</td>
          <td>发布配置（排除/包含文件）</td>
        </tr>
        <tr>
          <td><code>nodeModulesDir</code></td>
          <td>boolean</td>
          <td>是否使用 node_modules 目录</td>
        </tr>
        <tr>
          <td><code>vendor</code></td>
          <td>boolean</td>
          <td>是否将远程依赖缓存到本地 vendor 目录</td>
        </tr>
      </tbody>
    </table>

    <!-- ===== Environment Variables ===== -->
    <h2 id="env-vars">环境变量</h2>
    <p>Deno 支持以下环境变量来配置运行时行为：</p>
    <table>
      <thead>
        <tr>
          <th>变量名</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>DENO_DIR</code></td>
          <td>Deno 缓存目录路径（默认 <code>~/.cache/deno</code>）</td>
        </tr>
        <tr>
          <td><code>DENO_INSTALL_ROOT</code></td>
          <td><code>deno install</code> 安装可执行文件的目录</td>
        </tr>
        <tr>
          <td><code>DENO_NO_UPDATE_CHECK</code></td>
          <td>设为 <code>1</code> 禁用版本更新检查</td>
        </tr>
        <tr>
          <td><code>NO_COLOR</code></td>
          <td>设为任意值禁用彩色输出</td>
        </tr>
        <tr>
          <td><code>DENO_JOB_ID</code></td>
          <td>当前任务的唯一 ID（Deno Deploy 上使用）</td>
        </tr>
        <tr>
          <td><code>HTTP_PROXY</code> / <code>HTTPS_PROXY</code></td>
          <td>代理服务器地址</td>
        </tr>
        <tr>
          <td><code>OTEL_EXPORTER_OTLP_ENDPOINT</code></td>
          <td>OpenTelemetry 导出端点</td>
        </tr>
      </tbody>
    </table>

    <!-- ===== Permissions Reference ===== -->
    <h2 id="permissions-ref">权限参考</h2>
    <p>Deno 的权限系统可以通过命令行标志或代码中的 <code>Deno.permissions</code> API 进行管理。</p>

    <h3 id="permissions-api">权限 API</h3>
    <CodeBlock :code="permsApi" lang="ts" title="main.ts" />

    <h3 id="permissions-config">在 deno.json 中配置权限</h3>
    <CodeBlock :code="permsConfig" lang="json" title="deno.json" />

    <!-- ===== LSP Integration ===== -->
    <h2 id="lsp">LSP 集成</h2>
    <p>Deno 内置了语言服务器协议（LSP）实现，为编辑器和 IDE 提供智能代码补全、诊断、格式化等功能。</p>

    <h3 id="lsp-start">启动 LSP</h3>
    <CodeBlock :code="lspStart" lang="sh" title="终端" />

    <h3 id="lsp-features">LSP 功能</h3>
    <ul>
      <li>代码自动补全（包括 npm 和 JSR 包）</li>
      <li>类型错误诊断和内联提示</li>
      <li>代码格式化（<code>deno fmt</code>）</li>
      <li>导入自动补全和建议</li>
      <li>悬停文档和类型信息</li>
      <li>转到定义、查找引用</li>
      <li>重命名重构</li>
      <li>代码操作（快速修复）</li>
    </ul>

    <h3 id="lsp-config">LSP 配置</h3>
    <CodeBlock :code="lspConfig" lang="json" title="编辑器配置" />
  </DocLayout>
</template>

<script setup>
import DocLayout from '../components/DocLayout.vue'
import CodeBlock from '../components/CodeBlock.vue'

const sidebarSections = [
  {
    title: 'CLI 命令',
    items: [
      { id: 'cli', label: 'CLI 命令' },
      { id: 'cli-core', label: '核心命令' },
      { id: 'cli-tooling', label: '工具命令' },
      { id: 'cli-package', label: '包管理命令' },
      { id: 'cli-all', label: '完整命令列表' }
    ]
  },
  {
    title: '标准库',
    items: [
      { id: 'stdlib', label: '标准库' },
      { id: 'stdlib-modules', label: '标准库模块' },
      { id: 'stdlib-usage', label: '使用示例' }
    ]
  },
  {
    title: '配置参考',
    items: [
      { id: 'deno-json', label: 'deno.json' },
      { id: 'deno-json-full', label: '完整配置' },
      { id: 'deno-json-fields', label: '字段说明' }
    ]
  },
  {
    title: '其他参考',
    items: [
      { id: 'env-vars', label: '环境变量' },
      { id: 'permissions-ref', label: '权限参考' },
      { id: 'lsp', label: 'LSP 集成' }
    ]
  }
]

const coreCommands = [
  {
    name: 'deno run',
    desc: '运行程序',
    usage: `deno run [OPTIONS] <file>
deno run --allow-net server.ts
deno run --watch main.ts
deno run --inspect main.ts`
  },
  {
    name: 'deno serve',
    desc: '启动服务器',
    usage: `deno serve [OPTIONS] <file>
deno serve --port 3000 main.ts
deno serve --hmr server.ts`
  },
  {
    name: 'deno repl',
    desc: '交互式 REPL',
    usage: `deno repl
deno repl --inspect`
  },
  {
    name: 'deno eval',
    desc: '执行代码字符串',
    usage: `deno eval "console.log(1+1)"
deno eval -T "const x: number = 42"`
  }
]

const toolCommands = [
  {
    name: 'deno test',
    desc: '运行测试',
    usage: `deno test
deno test --allow-all
deno test --coverage
deno test --filter "加法" main_test.ts`
  },
  {
    name: 'deno fmt',
    desc: '格式化代码',
    usage: `deno fmt
deno fmt --check
deno fmt main.ts`
  },
  {
    name: 'deno lint',
    desc: '代码检查',
    usage: `deno lint
deno lint --rules
deno lint --fix main.ts`
  },
  {
    name: 'deno bench',
    desc: '基准测试',
    usage: `deno bench
deno bench main_bench.ts`
  },
  {
    name: 'deno compile',
    desc: '编译为可执行文件',
    usage: `deno compile --output=app main.ts
deno compile --target=aarch64-apple-darwin main.ts`
  },
  {
    name: 'deno check',
    desc: '类型检查',
    usage: `deno check main.ts
deno check **/*.ts`
  },
  {
    name: 'deno doc',
    desc: '生成文档',
    usage: `deno doc main.ts
deno doc --html main.ts
deno doc --json main.ts`
  },
  {
    name: 'deno info',
    desc: '查看模块信息',
    usage: `deno info main.ts
deno info https://deno.land/std`
  }
]

const packageCommands = [
  {
    name: 'deno add',
    desc: '添加依赖',
    usage: `deno add @std/assert
deno add npm:express`
  },
  {
    name: 'deno install',
    desc: '安装依赖或可执行文件',
    usage: `deno install                    # 安装项目依赖
deno install jsr:@std/fs        # 安装包
deno install -g jsr:@deno/deployctl  # 全局安装`
  },
  {
    name: 'deno remove',
    desc: '移除依赖',
    usage: `deno remove @std/assert
deno remove npm:express`
  },
  {
    name: 'deno publish',
    desc: '发布到 JSR',
    usage: `deno publish
deno publish --dry-run`
  },
  {
    name: 'deno outdated',
    desc: '检查过时的依赖',
    usage: `deno outdated
deno outdated --update`
  }
]

const allCommands = [
  { name: 'deno add', desc: '添加依赖到 deno.json' },
  { name: 'deno approve-scripts', desc: '批准待执行的脚本' },
  { name: 'deno audit', desc: '安全审计' },
  { name: 'deno bench', desc: '运行基准测试' },
  { name: 'deno bump-version', desc: '更新版本号' },
  { name: 'deno bundle', desc: '打包模块（已废弃，使用 deno compile）' },
  { name: 'deno check', desc: '类型检查' },
  { name: 'deno ci', desc: 'CI 环境中的初始化' },
  { name: 'deno clean', desc: '清理缓存' },
  { name: 'deno compile', desc: '编译为独立可执行文件' },
  { name: 'deno completions', desc: '生成 shell 补全脚本' },
  { name: 'deno coverage', desc: '生成覆盖率报告' },
  { name: 'deno deploy', desc: '部署到 Deno Deploy' },
  { name: 'deno doc', desc: '生成 API 文档' },
  { name: 'deno eval', desc: '执行代码字符串' },
  { name: 'deno fmt', desc: '格式化代码' },
  { name: 'deno info', desc: '查看模块依赖信息' },
  { name: 'deno init', desc: '初始化新项目' },
  { name: 'deno install', desc: '安装依赖或全局可执行文件' },
  { name: 'deno jupyter', desc: 'Jupyter 内核' },
  { name: 'deno lint', desc: '代码检查' },
  { name: 'deno lsp', desc: '启动语言服务器' },
  { name: 'deno pack', desc: '打包项目为 tar 包' },
  { name: 'deno publish', desc: '发布到 JSR' },
  { name: 'deno remove', desc: '移除依赖' },
  { name: 'deno repl', desc: '交互式 REPL' },
  { name: 'deno run', desc: '运行程序' },
  { name: 'deno serve', desc: '启动服务器' },
  { name: 'deno task', desc: '运行 deno.json 中定义的任务' },
  { name: 'deno test', desc: '运行测试' },
  { name: 'deno types', desc: '输出 TypeScript 类型声明' },
  { name: 'deno uninstall', desc: '卸载全局可执行文件' },
  { name: 'deno update', desc: '更新依赖' },
  { name: 'deno upgrade', desc: '升级 Deno 运行时' },
  { name: 'deno watch', desc: '监视模式运行' },
  { name: 'deno why', desc: '解释为什么需要某个依赖' },
  { name: 'deno x', desc: '从 URL 运行可执行文件（deno run -A 的别名）' }
]

const stdlibModules = [
  { name: 'assert', desc: '断言函数' },
  { name: 'async', desc: '异步工具' },
  { name: 'bytes', desc: '字节操作' },
  { name: 'cache', desc: '缓存 API' },
  { name: 'cbor', desc: 'CBOR 编解码' },
  { name: 'cli', desc: '命令行工具' },
  { name: 'collections', desc: '集合工具' },
  { name: 'crypto', desc: '加密' },
  { name: 'csv', desc: 'CSV 解析' },
  { name: 'data-structures', desc: '数据结构' },
  { name: 'datetime', desc: '日期时间' },
  { name: 'dotenv', desc: '环境变量加载' },
  { name: 'encoding', desc: '编码解码' },
  { name: 'expect', desc: '测试期望' },
  { name: 'fmt', desc: '格式化输出' },
  { name: 'front-matter', desc: 'Front Matter 解析' },
  { name: 'fs', desc: '文件系统' },
  { name: 'html', desc: 'HTML 解析' },
  { name: 'http', desc: 'HTTP 工具' },
  { name: 'ini', desc: 'INI 解析' },
  { name: 'json', desc: 'JSON 工具' },
  { name: 'jsonc', desc: 'JSONC 解析' },
  { name: 'log', desc: '日志' },
  { name: 'media-types', desc: 'MIME 类型' },
  { name: 'msgpack', desc: 'MessagePack' },
  { name: 'net', desc: '网络工具' },
  { name: 'path', desc: '路径处理' },
  { name: 'random', desc: '随机数' },
  { name: 'regexp', desc: '正则工具' },
  { name: 'semver', desc: '语义化版本' },
  { name: 'streams', desc: '流处理' },
  { name: 'tar', desc: 'Tar 归档' },
  { name: 'testing', desc: '测试工具' },
  { name: 'text', desc: '文本处理' },
  { name: 'toml', desc: 'TOML 解析' },
  { name: 'ulid', desc: 'ULID 生成' },
  { name: 'uuid', desc: 'UUID 生成' },
  { name: 'webgpu', desc: 'WebGPU' },
  { name: 'xml', desc: 'XML 解析' },
  { name: 'yaml', desc: 'YAML 解析' }
]

const stdlibUsage = `import { assertEquals } from "@std/assert";
import { walk } from "@std/fs";
import { join } from "@std/path";
import { green, bold } from "@std/fmt/colors";

// 遍历目录中的所有 TypeScript 文件
for await (const entry of walk(".", { exts: [".ts"] })) {
  console.log(green(entry.path));
}

// 使用路径工具
const fullPath = join("src", "components", "Button.tsx");

// 断言
assertEquals(1 + 1, 2);
console.log(bold("完成！"));`

const denoJsonFull = `{
  "name": "my-app",
  "version": "1.0.0",
  "exports": {
    ".": "./main.ts",
    "./utils": "./src/utils.ts"
  },
  "imports": {
    "@std/": "jsr:@std/",
    "@myapp/": "./src/",
    "react": "npm:react@^18.0.0"
  },
  "tasks": {
    "dev": "deno run --watch --allow-all main.ts",
    "test": "deno test --allow-all",
    "build": "deno compile --allow-all --output=app main.ts"
  },
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "lib": ["deno.ns", "dom"]
  },
  "lint": {
    "rules": {
      "exclude": ["no-explicit-any"],
      "include": ["prefer-const"]
    }
  },
  "fmt": {
    "indentWidth": 2,
    "lineWidth": 100,
    "semiColons": true
  },
  "nodeModulesDir": true,
  "vendor": false,
  "publish": {
    "exclude": ["tests/", "benchmarks/"]
  },
  "workspace": []
}`

const permsApi = `// 请求权限
const status = await Deno.permissions.request({ name: "read", path: "/data" });
if (status.state === "granted") {
  console.log("已获得读取权限");
}

// 查询权限
const query = await Deno.permissions.query({ name: "net", host: "example.com" });
console.log(query.state); // "granted" | "denied" | "prompt"

// 撤销权限
await Deno.permissions.revoke({ name: "read" });`

const permsConfig = `{
  "permissions": {
    "allow": [
      "read:/data",
      "net:api.example.com"
    ],
    "deny": [
      "write:/etc",
      "run"
    ]
  }
}`

const lspStart = `# 手动启动 LSP（通常由编辑器自动管理）
deno lsp`

const lspConfig = `{
  "deno.enable": true,
  "deno.lint": true,
  "deno.unstable": false,
  "deno.codeLens.test": true,
  "deno.suggest.imports.hosts": {
    "https://deno.land": true,
    "https://jsr.io": true
  }
}`
</script>

<style scoped>
.cli-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}

.cli-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 1rem 1.25rem;
  transition: border-color 0.2s var(--ease-out);
}

.cli-card:hover {
  border-color: var(--border-strong);
}

.cli-header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
}

.cli-name {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--accent);
  background: var(--accent-soft);
  border: 1px solid var(--border-accent);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  white-space: nowrap;
}

.cli-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
}

.cli-usage {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: 1.6;
  color: var(--text-tertiary);
  background: var(--bg-elevated);
  border-radius: var(--radius-sm);
  padding: 0.6rem 0.75rem;
  white-space: pre-wrap;
  overflow-x: auto;
}

.stdlib-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.stdlib-card {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  transition: all 0.2s var(--ease-out);
}

.stdlib-card:hover {
  border-color: var(--border-accent);
  background: var(--accent-soft);
}

.stdlib-name {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent);
  background: none;
  border: none;
  padding: 0;
}

.stdlib-desc {
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

@media (max-width: 768px) {
  .cli-grid {
    grid-template-columns: 1fr;
  }
}
</style>
