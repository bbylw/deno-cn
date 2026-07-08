<template>
  <DocLayout
    title="指南"
    eyebrow="Guides"
    description="深入了解 Deno 的各项功能——从运行代码、管理依赖、构建 HTTP 服务器，到测试、Lint 格式化、从 Node.js 迁移等。"
    :sidebarSections="sidebarSections"
  >
    <!-- ===== Running Code ===== -->
    <h2 id="running-code">运行代码</h2>
    <p>使用 <code>deno run</code> 命令执行 TypeScript 或 JavaScript 文件。Deno 直接运行 TypeScript，无需编译步骤：</p>
    <CodeBlock :code="runBasic" lang="sh" title="终端" />

    <h3 id="watch-mode">监视模式与 HMR</h3>
    <p>使用 <code>--watch</code> 标志在文件变化时自动重启：</p>
    <CodeBlock :code="watchMode" lang="sh" title="终端" />

    <p>对于 Web 开发场景，Deno 还支持 HMR（热模块替换），无需重启整个进程即可更新代码：</p>
    <CodeBlock :code="hmrMode" lang="sh" title="终端" />

    <h3 id="run-stdin">从标准输入运行</h3>
    <p>使用 <code>-</code> 作为文件名，从标准输入读取并执行代码：</p>
    <CodeBlock :code="stdinRun" lang="sh" title="终端" />

    <!-- ===== Dependency Management ===== -->
    <h2 id="dependency-management">依赖管理</h2>
    <p>Deno 支持多种依赖来源——JSR 注册表、npm 包、URL 导入，以及本地文件。所有依赖都在 <code>deno.json</code> 中统一管理。</p>

    <h3 id="jsr-imports">从 JSR 导入</h3>
    <p>JSR 是面向现代 JavaScript 和 TypeScript 的开源包注册表，原生支持类型：</p>
    <CodeBlock :code="jsrImport" lang="ts" title="main.ts" />

    <h3 id="npm-imports">从 npm 导入</h3>
    <p>使用 <code>npm:</code> 前缀导入 npm 包：</p>
    <CodeBlock :code="npmImport" lang="ts" title="main.ts" />

    <h3 id="url-imports">URL 导入</h3>
    <p>直接从 URL 导入模块，无需安装：</p>
    <CodeBlock :code="urlImport" lang="ts" title="main.ts" />

    <h3 id="deno-add">使用 deno add 管理依赖</h3>
    <p>使用 <code>deno add</code> 将依赖添加到 <code>deno.json</code>：</p>
    <CodeBlock :code="denoAdd" lang="sh" title="终端" />

    <p>添加后，<code>deno.json</code> 的 <code>imports</code> 字段会自动更新：</p>
    <CodeBlock :code="denoJsonImports" lang="json" title="deno.json" />

    <h3 id="publishing">发布包到 JSR</h3>
    <p>使用 <code>deno publish</code> 将你的包发布到 JSR：</p>
    <CodeBlock :code="publishCode" lang="sh" title="终端" />

    <!-- ===== Web Development ===== -->
    <h2 id="web-development">Web 开发</h2>
    <p>Deno 内置了完整的 Web 服务器 API。使用 <code>Deno.serve</code> 即可启动一个高性能 HTTP 服务器。</p>

    <h3 id="http-server">HTTP 服务器</h3>
    <p>最简单的 HTTP 服务器只需要几行代码：</p>
    <CodeBlock :code="simpleServer" lang="ts" title="server.ts" />

    <p>基于 Web 标准 API，你可以处理路由、返回 JSON、设置头部等：</p>
    <CodeBlock :code="advancedServer" lang="ts" title="server.ts" />

    <h3 id="streaming-response">流式响应</h3>
    <p>Deno 支持 <code>ReadableStream</code> 进行流式响应：</p>
    <CodeBlock :code="streamServer" lang="ts" title="server.ts" />

    <h3 id="websockets">WebSocket 支持</h3>
    <p>Deno 原生支持 WebSocket：</p>
    <CodeBlock :code="wsServer" lang="ts" title="server.ts" />

    <!-- ===== Testing ===== -->
    <h2 id="testing">测试</h2>
    <p>Deno 内置了功能完整的测试运行器，支持断言、模拟、快照、覆盖率等。无需安装任何测试框架。</p>

    <h3 id="basic-test">基本测试</h3>
    <p>创建以 <code>_test.ts</code> 结尾的文件，使用 <code>Deno.test</code> 定义测试：</p>
    <CodeBlock :code="basicTest" lang="ts" title="main_test.ts" />

    <CodeBlock :code="runTest" lang="sh" title="终端" />

    <h3 id="assertions">断言</h3>
    <p>Deno 标准库提供了丰富的断言函数：</p>
    <CodeBlock :code="assertionTest" lang="ts" title="main_test.ts" />

    <h3 id="mocking">模拟（Mocking）</h3>
    <p>使用 <code>mock</code> 模块创建模拟函数：</p>
    <CodeBlock :code="mockTest" lang="ts" title="main_test.ts" />

    <h3 id="coverage">覆盖率</h3>
    <p>生成测试覆盖率报告：</p>
    <CodeBlock :code="coverageCode" lang="sh" title="终端" />

    <h3 id="doc-tests">文档测试</h3>
    <p>Deno 会自动测试代码中的 JSDoc 示例，确保文档中的代码示例始终有效：</p>
    <CodeBlock :code="docTest" lang="ts" title="utils.ts" />

    <!-- ===== Lint and Format ===== -->
    <h2 id="lint-and-format">Lint 和格式化</h2>
    <p>Deno 内置了代码格式化工具和 Linter，无需配置 Prettier 或 ESLint。</p>

    <h3 id="formatting">格式化</h3>
    <CodeBlock :code="fmtCode" lang="sh" title="终端" />

    <h3 id="linting">Lint</h3>
    <CodeBlock :code="lintCode" lang="sh" title="终端" />

    <p>Deno Lint 内置了大量规则，你也可以在 <code>deno.json</code> 中自定义：</p>
    <CodeBlock :code="lintConfig" lang="json" title="deno.json" />

    <!-- ===== Migrating from Node ===== -->
    <h2 id="migrate-from-node">从 Node.js 迁移</h2>
    <p>Deno 设计之初就考虑了与 Node.js 的兼容性。你可以逐步迁移现有项目，而非一次性重写。</p>

    <h3 id="node-compat">Node.js 兼容性</h3>
    <p>Deno 内置了 Node.js 兼容层，可以直接运行含有 <code>package.json</code> 和 <code>node_modules</code> 的项目：</p>
    <CodeBlock :code="nodeCompat" lang="sh" title="终端" />

    <div class="note">
      <strong>提示：</strong>Deno 支持 <code>npm:</code> 导入和 <code>node:</code> 内置模块。你可以混合使用原生 ES 模块和 npm 包。
    </div>

    <h3 id="migrate-npm">从 npm 迁移</h3>
    <p>如果你的项目使用 npm，可以逐步将依赖迁移到 JSR：</p>
    <CodeBlock :code="migrateNpm" lang="ts" title="迁移前 → 迁移后" />

    <h3 id="migrate-package-json">迁移 package.json</h3>
    <p>将 <code>package.json</code> 中的脚本迁移到 <code>deno.json</code>：</p>
    <CodeBlock :code="migrateScripts" lang="json" title="deno.json" />

    <!-- ===== CLI Apps ===== -->
    <h2 id="cli-apps">构建 CLI 应用</h2>
    <p>Deno 非常适合构建命令行工具。你可以使用标准库的 <code>cli</code> 模块处理参数解析、提示输入等。</p>

    <CodeBlock :code="cliApp" lang="ts" title="cli.ts" />

    <p>使用 <code>deno compile</code> 将你的 CLI 工具编译为独立可执行文件：</p>
    <CodeBlock :code="compileCli" lang="sh" title="终端" />

    <!-- ===== Deploying ===== -->
    <h2 id="deploying">部署应用</h2>
    <p>Deno 应用可以通过多种方式部署：</p>

    <h3 id="deploy-platform">Deno Deploy</h3>
    <p>Deno Deploy 是 Deno 官方的边缘部署平台，全球低延迟：</p>
    <CodeBlock :code="deployCode" lang="sh" title="终端" />

    <h3 id="docker">Docker 部署</h3>
    <CodeBlock :code="dockerCode" lang="dockerfile" title="Dockerfile" />

    <h3 id="compile-binary">编译为二进制文件</h3>
    <p>使用 <code>deno compile</code> 将应用编译为独立可执行文件，无需安装 Deno 即可运行：</p>
    <CodeBlock :code="compileBinary" lang="sh" title="终端" />
  </DocLayout>
</template>

<script setup>
import DocLayout from '../components/DocLayout.vue'
import CodeBlock from '../components/CodeBlock.vue'

const sidebarSections = [
  {
    title: '运行代码',
    items: [
      { id: 'running-code', label: '运行代码' },
      { id: 'watch-mode', label: '监视模式与 HMR' },
      { id: 'run-stdin', label: '从标准输入运行' }
    ]
  },
  {
    title: '依赖管理',
    items: [
      { id: 'dependency-management', label: '依赖管理' },
      { id: 'jsr-imports', label: '从 JSR 导入' },
      { id: 'npm-imports', label: '从 npm 导入' },
      { id: 'url-imports', label: 'URL 导入' },
      { id: 'deno-add', label: '使用 deno add' },
      { id: 'publishing', label: '发布包到 JSR' }
    ]
  },
  {
    title: 'Web 开发',
    items: [
      { id: 'web-development', label: 'Web 开发' },
      { id: 'http-server', label: 'HTTP 服务器' },
      { id: 'streaming-response', label: '流式响应' },
      { id: 'websockets', label: 'WebSocket' }
    ]
  },
  {
    title: '测试',
    items: [
      { id: 'testing', label: '测试' },
      { id: 'basic-test', label: '基本测试' },
      { id: 'assertions', label: '断言' },
      { id: 'mocking', label: '模拟' },
      { id: 'coverage', label: '覆盖率' },
      { id: 'doc-tests', label: '文档测试' }
    ]
  },
  {
    title: '工具与迁移',
    items: [
      { id: 'lint-and-format', label: 'Lint 和格式化' },
      { id: 'migrate-from-node', label: '从 Node.js 迁移' },
      { id: 'cli-apps', label: '构建 CLI 应用' },
      { id: 'deploying', label: '部署应用' }
    ]
  }
]

const runBasic = `deno run main.ts`

const watchMode = `deno run --watch main.ts`

const hmrMode = `deno run --hmr main.ts`

const stdinRun = `echo "console.log('Hello from stdin')" | deno run -`

const jsrImport = `import { assertEquals } from "jsr:@std/assert";

assertEquals(1 + 1, 2);`

const npmImport = `import express from "npm:express@4";

const app = express();
app.get("/", (req, res) => res.send("Hello!"));
app.listen(3000);`

const urlImport = `import { camelCase } from "https://deno.land/x/case/camelCase.ts";

console.log(camelCase("hello world"));`

const denoAdd = `deno add @std/assert
deno add npm:express`

const denoJsonImports = `{
  "imports": {
    "@std/assert": "jsr:@std/assert@^1.0.0",
    "express": "npm:express@^4.18.0"
  }
}`

const publishCode = `deno publish`

const simpleServer = `Deno.serve((_req: Request) => {
  return new Response("Hello, world!");
});`

const advancedServer = `Deno.serve((req: Request) => {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return new Response("首页", {
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  if (url.pathname === "/api") {
    return Response.json({ message: "你好，API" });
  }

  return new Response("Not Found", { status: 404 });
});`

const streamServer = `Deno.serve((_req: Request) => {
  const body = new ReadableStream({
    start(controller) {
      controller.enqueue(new TextEncoder().encode("第一部分\\n"));
      setTimeout(() => {
        controller.enqueue(new TextEncoder().encode("第二部分\\n"));
        controller.close();
      }, 1000);
    },
  });

  return new Response(body);
});`

const wsServer = `Deno.serve((req: Request) => {
  if (req.headers.get("upgrade") !== "websocket") {
    return new Response("需要 WebSocket 升级", { status: 400 });
  }

  const { socket, response } = Deno.upgradeWebSocket(req);
  socket.onopen = () => console.log("WebSocket 已连接");
  socket.onmessage = (e) => {
    socket.send(\`回声: \${e.data}\`);
  };
  socket.onclose = () => console.log("WebSocket 已断开");

  return response;
});`

const basicTest = `import { assertEquals } from "@std/assert";

Deno.test("加法测试", () => {
  assertEquals(1 + 1, 2);
});

Deno.test(async function 异步测试() {
  const result = await fetch("https://example.com");
  assertEquals(result.status, 200);
});`

const runTest = `deno test`

const assertionTest = `import {
  assertEquals,
  assertExists,
  assertThrows,
  assertStringIncludes,
} from "@std/assert";

Deno.test("断言示例", () => {
  assertEquals(1 + 1, 2);
  assertExists({ name: "Deno" });
  assertStringIncludes("Hello Deno", "Deno");
  assertThrows(
    () => { throw new Error("错误"); },
    Error,
    "错误",
  );
});`

const mockTest = `import { mock } from "@std/testing/mock";

Deno.test("模拟测试", () => {
  const fn = mock();
  fn("参数");
  fn("参数");

  assertEquals(fn.calls.length, 2);
  assertEquals(fn.calls[0].args[0], "参数");
});`

const coverageCode = `deno test --coverage
deno coverage`

const docTest = [
  '/**',
  ' * 将两个数字相加。',
  ' *',
  ' * @example',
  ' * ```ts',
  ' * import { add } from "./utils.ts";',
  ' * assertEquals(add(1, 2), 3);  // 这个会被自动测试',
  ' * ```',
  ' */',
  'export function add(a: number, b: number): number {',
  '  return a + b;',
  '}'
].join('\n')

const fmtCode = `deno fmt
deno fmt main.ts          # 格式化指定文件
deno fmt --check          # 只检查，不修改`

const lintCode = `deno lint
deno lint main.ts         # 检查指定文件
deno lint --rules          # 列出所有规则`

const lintConfig = `{
  "lint": {
    "rules": {
      "exclude": ["no-explicit-any"],
      "include": ["prefer-const"]
    }
  }
}`

const nodeCompat = `# 直接运行 Node.js 项目
deno run --allow-read --allow-env index.js

# 使用 npm 包
deno run --allow-read --allow-env --allow-net main.ts`

const migrateNpm = `// 迁移前（npm）
import express from "express";

// 迁移后（JSR）
import { Hono } from "jsr:@hono/hono";`

const migrateScripts = `{
  "tasks": {
    "dev": "deno run --watch main.ts",
    "test": "deno test",
    "build": "deno compile main.ts"
  }
}`

const cliApp = `import { parseArgs } from "@std/cli/parse-args";

const args = parseArgs(Deno.args, {
  string: ["name"],
  default: { name: "世界" },
});

console.log(\`你好，\${args.name}！\`);`

const compileCli = `deno compile --allow-read --allow-write cli.ts

# 生成可执行文件后可以直接运行
./cli --name=Deno`

const deployCode = `# 安装 deployctl
deno install -gArf jsr:@deno/deployctl

# 部署
deployctl deploy --project=my-app main.ts`

const dockerCode = `FROM denoland/deno:latest

WORKDIR /app

# 缓存依赖
COPY deno.json .
RUN deno install --allow-import --entrypoint main.ts

# 复制源码
COPY . .

# 运行
CMD ["deno", "run", "--allow-net", "main.ts"]`

const compileBinary = `# 编译为当前平台的可执行文件
deno compile --allow-net --output=my-server server.ts

# 交叉编译为目标平台
deno compile --allow-net --target=aarch64-apple-darwin --output=my-server server.ts`
</script>
