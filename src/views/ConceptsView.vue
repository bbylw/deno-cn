<template>
  <DocLayout
    title="核心概念"
    eyebrow="Concepts"
    description="深入理解 Deno 的设计理念——TypeScript 支持、安全模型、模块系统、配置文件、工作空间和稳定性保证。"
    :sidebarSections="sidebarSections"
  >
    <!-- ===== TypeScript ===== -->
    <h2 id="typescript">TypeScript</h2>
    <p>Deno 对 TypeScript 提供一等公民支持。你不需要安装 TypeScript 编译器（<code>tsc</code>），不需要配置 <code>tsconfig.json</code>，也不需要构建步骤——直接运行 <code>.ts</code> 文件即可。</p>

    <h3 id="ts-features">TypeScript 功能</h3>
    <p>Deno 内置的 TypeScript 支持包括：</p>
    <ul>
      <li><strong>类型检查</strong>——运行时自动进行类型检查，也可用 <code>deno check</code> 单独检查</li>
      <li><strong>类型导出</strong>——使用 <code>deno doc</code> 生成 API 文档</li>
      <li><strong>JSDoc 支持</strong>——完整的 JSDoc 类型标注支持</li>
      <li><strong>路径映射</strong>——通过 <code>deno.json</code> 中的 <code>imports</code> 实现导入映射</li>
    </ul>

    <CodeBlock :code="tsExample" lang="ts" title="user.ts" />

    <h3 id="ts-config">TypeScript 配置</h3>
    <p>虽然 Deno 不需要 <code>tsconfig.json</code>，但你可以在 <code>deno.json</code> 中自定义编译器选项：</p>
    <CodeBlock :code="tsConfig" lang="json" title="deno.json" />

    <!-- ===== Security ===== -->
    <h2 id="security">安全模型</h2>
    <p>Deno 最重要的设计理念之一是<strong>默认安全</strong>。代码运行在沙箱中，默认没有文件系统、网络、环境变量或高精度时间的访问权限。所有需要权限的操作都必须显式授权。</p>

    <h3 id="permissions">权限标志</h3>
    <table>
      <thead>
        <tr>
          <th>标志</th>
          <th>缩写</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--allow-read</code></td>
          <td><code>-R</code></td>
          <td>允许文件系统读取</td>
        </tr>
        <tr>
          <td><code>--allow-write</code></td>
          <td><code>-W</code></td>
          <td>允许文件系统写入</td>
        </tr>
        <tr>
          <td><code>--allow-net</code></td>
          <td><code>-N</code></td>
          <td>允许网络访问</td>
        </tr>
        <tr>
          <td><code>--allow-env</code></td>
          <td><code>-E</code></td>
          <td>允许环境变量访问</td>
        </tr>
        <tr>
          <td><code>--allow-run</code></td>
          <td><code>-S</code></td>
          <td>允许子进程执行</td>
        </tr>
        <tr>
          <td><code>--allow-sys</code></td>
          <td><code>-Y</code></td>
          <td>允许系统信息访问</td>
        </tr>
        <tr>
          <td><code>--allow-ffi</code></td>
          <td><code>-F</code></td>
          <td>允许 FFI（外部函数接口）</td>
        </tr>
        <tr>
          <td><code>--allow-all</code></td>
          <td><code>-A</code></td>
          <td>允许所有权限（不推荐在生产中使用）</td>
        </tr>
      </tbody>
    </table>

    <h3 id="granular-permissions">细粒度权限</h3>
    <p>你可以指定具体的权限范围，而非全部开放：</p>
    <CodeBlock :code="granularPerms" lang="sh" title="终端" />

    <h3 id="interactive-permissions">交互式权限</h3>
    <p>不使用任何 <code>--allow-*</code> 标志运行时，Deno 会在需要权限时弹出提示：</p>
    <CodeBlock :code="interactivePerms" lang="sh" title="终端" />

    <div class="note">
      <strong>注意：</strong>交互式权限提示仅在交互式终端中可用。在 CI/CD 或脚本中，请使用显式标志。
    </div>

    <!-- ===== Modules ===== -->
    <h2 id="modules">模块系统</h2>
    <p>Deno 使用标准的 ES 模块（ESM），与浏览器完全一致。没有 <code>require()</code>，没有 CommonJS，只有 <code>import</code> 和 <code>export</code>。</p>

    <h3 id="module-sources">模块来源</h3>
    <ul>
      <li><strong>JSR</strong>——<code>jsr:@scope/package</code>，现代 TypeScript 包注册表</li>
      <li><strong>npm</strong>——<code>npm:package-name</code>，兼容 npm 生态</li>
      <li><strong>URL</strong>——<code>https://...</code>，直接从 URL 导入</li>
      <li><strong>本地文件</strong>——<code>./module.ts</code> 或 <code>/abs/path.ts</code></li>
      <li><strong>Node 内置</strong>——<code>node:fs</code>、<code>node:path</code> 等</li>
    </ul>

    <h3 id="import-map">导入映射</h3>
    <p>在 <code>deno.json</code> 中定义导入映射，简化导入路径：</p>
    <CodeBlock :code="importMap" lang="json" title="deno.json" />

    <p>然后在代码中使用简短名称：</p>
    <CodeBlock :code="importMapUsage" lang="ts" title="main.ts" />

    <!-- ===== Config Files ===== -->
    <h2 id="config-files">配置文件</h2>
    <p><code>deno.json</code> 是 Deno 项目的核心配置文件，相当于 <code>package.json</code> + 工具配置的合体。</p>

    <h3 id="deno-json-structure">deno.json 结构</h3>
    <CodeBlock :code="denoJsonFull" lang="json" title="deno.json" />

    <h3 id="tasks">任务定义</h3>
    <p>使用 <code>tasks</code> 字段定义可复用的脚本命令：</p>
    <CodeBlock :code="tasksExample" lang="json" title="deno.json" />

    <p>运行任务：</p>
    <CodeBlock :code="runTask" lang="sh" title="终端" />

    <!-- ===== Workspaces ===== -->
    <h2 id="workspaces">工作空间</h2>
    <p>Deno 支持工作空间（monorepo），允许多个包共享同一个依赖和配置。在根目录的 <code>deno.json</code> 中定义：</p>
    <CodeBlock :code="workspaceConfig" lang="json" title="deno.json (根目录)" />

    <p>目录结构：</p>
    <CodeBlock :code="workspaceStructure" lang="plaintext" title="项目结构" />

    <!-- ===== Stability ===== -->
    <h2 id="stability">稳定性和发布</h2>
    <p>Deno 遵循语义化版本（SemVer）。以下是各 API 的稳定性级别：</p>

    <h3 id="api-stability">API 稳定性级别</h3>
    <table>
      <thead>
        <tr>
          <th>级别</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Stable</strong></td>
          <td>稳定 API，遵循 SemVer，不会引入破坏性变更</td>
        </tr>
        <tr>
          <td><strong>Unstable</strong></td>
          <td>实验性 API，需要 <code>--unstable</code> 标志，可能随时变更</td>
        </tr>
      </tbody>
    </table>

    <h3 id="release-cycle">发布周期</h3>
    <p>Deno 采用频繁的发布节奏：</p>
    <ul>
      <li><strong>每周</strong>——发布 Canary 版本（每日构建）</li>
      <li><strong>每六周</strong>——发布新的次要版本（如 2.0 → 2.1）</li>
      <li><strong>补丁版本</strong>——按需发布 bug 修复</li>
    </ul>

    <h3 id="node-compat-concept">Node.js 兼容性</h3>
    <p>Deno 内置了 Node.js 兼容层，支持大多数 Node.js 内置模块和 npm 包。你可以使用 <code>node:</code> 前缀导入 Node.js 内置模块：</p>
    <CodeBlock :code="nodeBuiltin" lang="ts" title="main.ts" />

    <p>兼容层支持的关键模块包括：<code>fs</code>、<code>path</code>、<code>os</code>、<code>http</code>、<code>crypto</code>、<code>stream</code> 等。</p>
  </DocLayout>
</template>

<script setup>
import DocLayout from '../components/DocLayout.vue'
import CodeBlock from '../components/CodeBlock.vue'

const sidebarSections = [
  {
    title: 'TypeScript',
    items: [
      { id: 'typescript', label: 'TypeScript' },
      { id: 'ts-features', label: 'TypeScript 功能' },
      { id: 'ts-config', label: 'TypeScript 配置' }
    ]
  },
  {
    title: '安全模型',
    items: [
      { id: 'security', label: '安全模型' },
      { id: 'permissions', label: '权限标志' },
      { id: 'granular-permissions', label: '细粒度权限' },
      { id: 'interactive-permissions', label: '交互式权限' }
    ]
  },
  {
    title: '模块与配置',
    items: [
      { id: 'modules', label: '模块系统' },
      { id: 'module-sources', label: '模块来源' },
      { id: 'import-map', label: '导入映射' },
      { id: 'config-files', label: '配置文件' },
      { id: 'deno-json-structure', label: 'deno.json 结构' },
      { id: 'tasks', label: '任务定义' }
    ]
  },
  {
    title: '其他',
    items: [
      { id: 'workspaces', label: '工作空间' },
      { id: 'stability', label: '稳定性' },
      { id: 'release-cycle', label: '发布周期' },
      { id: 'node-compat-concept', label: 'Node.js 兼容性' }
    ]
  }
]

const tsExample = `interface User {
  id: number;
  name: string;
  email: string;
}

export function createUser(data: Omit<User, "id">): User {
  return {
    id: crypto.randomUUID(),
    ...data,
  };
}

export async function fetchUser(id: string): Promise<User> {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
}`

const tsConfig = `{
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "lib": ["deno.ns", "dom"]
  }
}`

const granularPerms = `# 只允许读取特定目录
deno run --allow-read=/data main.ts

# 只允许访问特定域名
deno run --allow-net=deno.land,github.com main.ts

# 只允许写入特定文件
deno run --allow-write=/tmp/output.txt main.ts

# 组合多个细粒度权限
deno run --allow-read=/data --allow-net=api.example.com main.ts`

const interactivePerms = `$ deno run main.ts
┌ ⚠️  Deno requests read access to "/data/users.json".
├ Requested by Deno.serve()
├ Run again with --allow-read to bypass this prompt.
└ Allow? [y/n/A] (y = yes, allow; n = no, deny; A = allow all read permissions) >`

const importMap = `{
  "imports": {
    "@std/": "jsr:@std/",
    "@myapp/": "./src/",
    "react": "npm:react@^18.0.0"
  }
}`

const importMapUsage = `import { assertEquals } from "@std/assert";
import { handler } from "@myapp/handler.ts";
import { useState } from "react";`

const denoJsonFull = `{
  "name": "my-app",
  "version": "1.0.0",
  "exports": "./main.ts",
  "imports": {
    "@std/assert": "jsr:@std/assert@^1.0.0"
  },
  "tasks": {
    "dev": "deno run --watch main.ts",
    "test": "deno test"
  },
  "compilerOptions": {
    "strict": true
  },
  "lint": {
    "rules": {
      "exclude": ["no-explicit-any"]
    }
  },
  "fmt": {
    "indentWidth": 2,
    "lineWidth": 100
  }
}`

const tasksExample = `{
  "tasks": {
    "dev": "deno run --allow-all --watch main.ts",
    "test": "deno test --allow-all",
    "build": "deno compile --output=app main.ts",
    "deploy": "deployctl deploy --project=my-app main.ts",
    "db:migrate": "deno run --allow-all scripts/migrate.ts"
  }
}`

const runTask = `deno task dev
deno task test
deno task build`

const workspaceConfig = `{
  "workspace": [
    "./packages/server",
    "./packages/client",
    "./packages/shared"
  ]
}`

const workspaceStructure = `my-monorepo/
├── deno.json              # 根配置，定义工作空间
├── packages/
│   ├── server/
│   │   ├── deno.json
│   │   └── main.ts
│   ├── client/
│   │   ├── deno.json
│   │   └── app.ts
│   └── shared/
│       ├── deno.json
│       └── types.ts`

const nodeBuiltin = `import { readFile } from "node:fs/promises";
import { join } from "node:path";

const content = await readFile(join("data", "config.json"), "utf-8");
console.log(JSON.parse(content));`
</script>
