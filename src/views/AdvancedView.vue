<template>
  <DocLayout
    title="高级功能"
    eyebrow="Advanced"
    description="探索 Deno 的高级功能——FFI 外部函数接口、WebAssembly、Cron 定时任务、Loader Hooks、Docker 部署、CI 集成和 VS Code 配置。"
    :sidebarSections="sidebarSections"
  >
    <!-- ===== FFI ===== -->
    <h2 id="ffi">FFI（外部函数接口）</h2>
    <p>Deno 的 FFI 允许你从 JavaScript/TypeScript 直接调用 C、C++、Rust 等编译语言的动态链接库（<code>.so</code>、<code>.dylib</code>、<code>.dll</code>）。这对于需要高性能计算或访问底层系统 API 的场景非常有用。</p>

    <div class="note">
      <strong>注意：</strong>FFI 需要 <code>--allow-ffi</code> 权限标志，且目前为实验性功能，需要 <code>--unstable-ffi</code> 标志。
    </div>

    <h3 id="ffi-basic">基本用法</h3>
    <CodeBlock :code="ffiBasic" lang="ts" title="ffi.ts" />

    <CodeBlock :code="ffiRun" lang="sh" title="终端" />

    <h3 id="ffi-rust">从 Rust 调用</h3>
    <p>首先创建一个 Rust 动态库：</p>
    <CodeBlock :code="ffiRust" lang="rust" title="lib.rs" />

    <CodeBlock :code="ffiCargo" lang="toml" title="Cargo.toml" />

    <p>然后在 Deno 中调用：</p>
    <CodeBlock :code="ffiRustCall" lang="ts" title="ffi.ts" />

    <!-- ===== WebAssembly ===== -->
    <h2 id="wasm">WebAssembly</h2>
    <p>Deno 原生支持 WebAssembly 模块。你可以直接加载和运行 <code>.wasm</code> 文件。</p>

    <h3 id="wasm-basic">加载 WebAssembly 模块</h3>
    <CodeBlock :code="wasmBasic" lang="ts" title="wasm.ts" />

    <h3 id="wasm-streaming">流式编译</h3>
    <p>使用 <code>WebAssembly.instantiateStreaming</code> 进行流式编译，性能更优：</p>
    <CodeBlock :code="wasmStreaming" lang="ts" title="wasm.ts" />

    <h3 id="wasm-rust">从 Rust 编译 WebAssembly</h3>
    <p>使用 <code>wasm-pack</code> 将 Rust 代码编译为 WebAssembly：</p>
    <CodeBlock :code="wasmRust" lang="rust" title="lib.rs" />

    <CodeBlock :code="wasmPack" lang="sh" title="终端" />

    <!-- ===== Cron ===== -->
    <h2 id="cron">Cron 定时任务</h2>
    <p>Deno 内置了 Cron 定时任务支持，使用标准的 cron 表达式语法。非常适合在 Deno Deploy 上运行定时任务。</p>

    <h3 id="cron-basic">基本用法</h3>
    <CodeBlock :code="cronBasic" lang="ts" title="cron.ts" />

    <h3 id="cron-examples">Cron 表达式示例</h3>
    <table>
      <thead>
        <tr>
          <th>表达式</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>* * * * *</code></td>
          <td>每分钟执行</td>
        </tr>
        <tr>
          <td><code>0 * * * *</code></td>
          <td>每小时整点执行</td>
        </tr>
        <tr>
          <td><code>0 0 * * *</code></td>
          <td>每天午夜执行</td>
        </tr>
        <tr>
          <td><code>0 0 * * 1</code></td>
          <td>每周一午夜执行</td>
        </tr>
        <tr>
          <td><code>*/15 * * * *</code></td>
          <td>每 15 分钟执行</td>
        </tr>
        <tr>
          <td><code>0 9 * * 1-5</code></td>
          <td>工作日每天上午 9 点执行</td>
        </tr>
      </tbody>
    </table>

    <!-- ===== Loader Hooks ===== -->
    <h2 id="loader-hooks">Loader Hooks</h2>
    <p>Loader Hooks 允许你自定义模块加载行为——例如拦截导入、转换源码、从自定义来源加载模块等。</p>

    <h3 id="loader-basic">基本用法</h3>
    <CodeBlock :code="loaderBasic" lang="ts" title="loader.ts" />

    <CodeBlock :code="loaderRun" lang="sh" title="终端" />

    <h3 id="loader-transform">源码转换</h3>
    <p>你可以在加载时转换源码，例如实现 JSX 预处理或自定义语法：</p>
    <CodeBlock :code="loaderTransform" lang="ts" title="loader.ts" />

    <!-- ===== Docker ===== -->
    <h2 id="docker">Docker 部署</h2>
    <p>Deno 提供了官方 Docker 镜像，方便容器化部署。</p>

    <h3 id="docker-basic">基本 Dockerfile</h3>
    <CodeBlock :code="dockerBasic" lang="dockerfile" title="Dockerfile" />

    <h3 id="docker-multistage">多阶段构建</h3>
    <p>使用多阶段构建减小最终镜像大小：</p>
    <CodeBlock :code="dockerMulti" lang="dockerfile" title="Dockerfile" />

    <h3 id="docker-distroless">Distroless 镜像</h3>
    <p>使用 <code>deno compile</code> + distroless 镜像进一步减小体积：</p>
    <CodeBlock :code="dockerDistroless" lang="dockerfile" title="Dockerfile" />

    <!-- ===== CI ===== -->
    <h2 id="ci">持续集成</h2>
    <p>Deno 非常适合在 CI/CD 环境中使用。以下是常见 CI 平台的配置示例。</p>

    <h3 id="ci-github">GitHub Actions</h3>
    <CodeBlock :code="ciGithub" lang="yaml" title=".github/workflows/ci.yml" />

    <h3 id="ci-gitlab">GitLab CI</h3>
    <CodeBlock :code="ciGitlab" lang="yaml" title=".gitlab-ci.yml" />

    <!-- ===== VS Code ===== -->
    <h2 id="vscode">Deno 与 VS Code</h2>
    <p>官方 Deno VS Code 扩展提供了完整的开发体验。</p>

    <h3 id="vscode-install">安装扩展</h3>
    <p>在 VS Code 扩展市场搜索 "Deno" 并安装由 Deno Land 发布的官方扩展。</p>

    <h3 id="vscode-config">推荐配置</h3>
    <CodeBlock :code="vscodeConfig" lang="json" title=".vscode/settings.json" />

    <h3 id="vscode-debugging">调试</h3>
    <p>在 <code>.vscode/launch.json</code> 中配置调试：</p>
    <CodeBlock :code="vscodeDebug" lang="json" title=".vscode/launch.json" />

    <!-- ===== Debugging ===== -->
    <h2 id="debugging">调试</h2>
    <p>Deno 内置了 Chrome DevTools 协议支持，你可以使用 Chrome DevTools 或 VS Code 进行调试。</p>

    <h3 id="debug-inspector">使用 Inspector</h3>
    <CodeBlock :code="debugInspector" lang="sh" title="终端" />

    <p>然后在 Chrome 中打开 <code>chrome://inspect</code>，点击 "inspect" 即可连接调试器。</p>

    <h3 id="debug-breakpoint">断点调试</h3>
    <p>在代码中使用 <code>debugger</code> 语句设置断点：</p>
    <CodeBlock :code="debugBreakpoint" lang="ts" title="debug.ts" />

    <!-- ===== OpenTelemetry ===== -->
    <h2 id="opentelemetry">OpenTelemetry</h2>
    <p>Deno 内置了 OpenTelemetry 支持，可以轻松实现分布式追踪和指标收集。</p>

    <h3 id="otel-basic">基本用法</h3>
    <CodeBlock :code="otelBasic" lang="ts" title="otel.ts" />

    <CodeBlock :code="otelRun" lang="sh" title="终端" />

    <h3 id="otel-traces">追踪 spans</h3>
    <p>使用 <code>Deno.tracing</code> API 创建自定义追踪 spans：</p>
    <CodeBlock :code="otelSpans" lang="ts" title="otel.ts" />
  </DocLayout>
</template>

<script setup>
import DocLayout from '../components/DocLayout.vue'
import CodeBlock from '../components/CodeBlock.vue'

const sidebarSections = [
  {
    title: 'FFI',
    items: [
      { id: 'ffi', label: 'FFI 外部函数接口' },
      { id: 'ffi-basic', label: '基本用法' },
      { id: 'ffi-rust', label: '从 Rust 调用' }
    ]
  },
  {
    title: 'WebAssembly',
    items: [
      { id: 'wasm', label: 'WebAssembly' },
      { id: 'wasm-basic', label: '加载模块' },
      { id: 'wasm-streaming', label: '流式编译' },
      { id: 'wasm-rust', label: '从 Rust 编译' }
    ]
  },
  {
    title: '其他高级功能',
    items: [
      { id: 'cron', label: 'Cron 定时任务' },
      { id: 'loader-hooks', label: 'Loader Hooks' },
      { id: 'docker', label: 'Docker 部署' },
      { id: 'ci', label: '持续集成' },
      { id: 'vscode', label: 'VS Code 集成' },
      { id: 'debugging', label: '调试' },
      { id: 'opentelemetry', label: 'OpenTelemetry' }
    ]
  }
]

const ffiBasic = `// 加载 C 标准库
const lib = Deno.dlopen("libm.so.6", {
  sqrt: {
    parameters: ["f64"],
    result: "f64",
  },
});

const result = lib.symbols.sqrt(9.0);
console.log(\`sqrt(9.0) = \${result}\`); // 3

lib.close();`

const ffiRun = `deno run --allow-ffi --unstable-ffi ffi.ts`

const ffiRust = `// lib.rs
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[no_mangle]
pub extern "C" fn multiply(a: i32, b: i32) -> i32 {
    a * b
}`

const ffiCargo = `[package]
name = "math-lib"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]`

const ffiRustCall = `const lib = Deno.dlopen("./libmath_lib.so", {
  add: { parameters: ["i32", "i32"], result: "i32" },
  multiply: { parameters: ["i32", "i32"], result: "i32" },
});

console.log(lib.symbols.add(3, 4));       // 7
console.log(lib.symbols.multiply(3, 4));  // 12`

const wasmBasic = `// 加载 .wasm 文件
const wasmCode = await Deno.readFile("module.wasm");
const wasmModule = await WebAssembly.instantiate(wasmCode);
const { add } = wasmModule.instance.exports;

console.log(add(2, 3)); // 5`

const wasmStreaming = `const response = await fetch("https://example.com/module.wasm");
const { instance } = await WebAssembly.instantiateStreaming(response);

console.log(instance.exports.add(2, 3));`

const wasmRust = `// lib.rs
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[no_mangle]
pub extern "C" fn fibonacci(n: u32) -> u64 {
    if n <= 1 { return n as u64; }
    let mut a = 0u64;
    let mut b = 1u64;
    for _ in 0..n {
        let temp = a + b;
        a = b;
        b = temp;
    }
    a
}`

const wasmPack = `# 安装 wasm-pack
cargo install wasm-pack

# 编译为 WebAssembly
wasm-pack build --target deno`

const cronBasic = `// 每分钟执行一次
Deno.cron("heartbeat", "* * * * *", () => {
  console.log("心跳检测:", new Date().toISOString());
});

// 每天午夜执行清理
Deno.cron("daily-cleanup", "0 0 * * *", async () => {
  await fetch("https://api.example.com/cleanup");
  console.log("清理完成");
});`

const loaderBasic = `// loader.ts — 自定义模块加载器
Deno.loaderHooks = {
  resolve(specifier, context) {
    if (specifier.startsWith("virtual:")) {
      return { specifier, namespace: "virtual" };
    }
    return context.next(specifier);
  },
  load(specifier, context) {
    if (specifier.startsWith("virtual:")) {
      const code = \`export const name = "\${specifier.slice(8)}";\`;
      return { code, kind: "module" };
    }
    return context.next(specifier);
  },
};`

const loaderRun = `deno run --import=loader.ts main.ts`

const loaderTransform = `Deno.loaderHooks = {
  async load(specifier, context) {
    const result = await context.next(specifier);
    if (result?.kind === "module" && specifier.endsWith(".md")) {
      // 将 Markdown 转换为可导入的模块
      const html = await markdownToHtml(result.code);
      return {
        code: \`export const html = \${JSON.stringify(html)};\`,
        kind: "module",
      };
    }
    return result;
  },
};`

const dockerBasic = `FROM denoland/deno:latest

WORKDIR /app

# 复制依赖文件
COPY deno.json .
RUN deno install --allow-import --entrypoint main.ts

# 复制源码
COPY . .

# 运行
EXPOSE 8000
CMD ["deno", "run", "--allow-net", "main.ts"]`

const dockerMulti = `# 阶段 1：安装依赖
FROM denoland/deno:latest AS deps
WORKDIR /app
COPY deno.json .
RUN deno install --allow-import --entrypoint main.ts

# 阶段 2：构建
FROM deps AS build
COPY . .
RUN deno compile --allow-net --output=app main.ts

# 阶段 3：运行（更小的镜像）
FROM debian:bookworm-slim
WORKDIR /app
COPY --from=build /app/app .
EXPOSE 8000
CMD ["./app"]`

const dockerDistroless = `# 构建阶段
FROM denoland/deno:latest AS build
WORKDIR /app
COPY . .
RUN deno compile --allow-net --output=app --target=x86_64-unknown-linux-gnu main.ts

# 运行阶段 — distroless
FROM gcr.io/distroless/cc-debian12
COPY --from=build /app/app /app
EXPOSE 8000
CMD ["/app"]`

const ciGithub = `name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Deno
        uses: denoland/setup-deno@v2
        with:
          deno-version: v2.x

      - name: Format check
        run: deno fmt --check

      - name: Lint
        run: deno lint

      - name: Type check
        run: deno check **/*.ts

      - name: Test
        run: deno test --allow-all --coverage

      - name: Coverage
        run: deno coverage --lcov > coverage.lcov`

const ciGitlab = `image: denoland/deno:latest

stages:
  - test

test:
  stage: test
  script:
    - deno fmt --check
    - deno lint
    - deno test --allow-all`

const vscodeConfig = `{
  "deno.enable": true,
  "deno.lint": true,
  "deno.unstable": false,
  "deno.suggest.imports.hosts": {
    "https://deno.land": true,
    "https://jsr.io": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "denoland.vscode-deno"
  },
  "[javascript]": {
    "editor.defaultFormatter": "denoland.vscode-deno"
  }
}`

const vscodeDebug = `{
  "version": "0.2.0",
  "configurations": [
    {
      "request": "launch",
      "name": "Deno",
      "type": "node",
      "program": "\${workspaceFolder}/main.ts",
      "cwd": "\${workspaceFolder}",
      "runtimeExecutable": "deno",
      "runtimeArgs": [
        "run",
        "--inspect-wait",
        "--allow-all"
      ],
      "attachSimplePort": 9229
    }
  ]
}`

const debugInspector = `# 使用 --inspect-wait 等待调试器连接后执行
deno run --inspect-wait --allow-all main.ts

# 使用 --inspect 在执行同时允许调试
deno run --inspect --allow-all main.ts

# 指定端口
deno run --inspect=127.0.0.1:9229 --allow-all main.ts`

const debugBreakpoint = `function calculateTotal(items: number[]): number {
  debugger; // 执行会在这里暂停
  return items.reduce((sum, n) => sum + n, 0);
}

const total = calculateTotal([10, 20, 30]);
console.log("Total:", total);`

const otelBasic = `// Deno 内置 OpenTelemetry 支持
// 只需设置 OTEL 导出端点环境变量即可

Deno.serve(async (req: Request) => {
  console.log("处理请求:", req.url);

  return new Response(JSON.stringify({
    message: "Hello from traced Deno app",
    timestamp: Date.now(),
  }), {
    headers: { "content-type": "application/json" },
  });
});`

const otelRun = `# 使用 OpenTelemetry 导出器运行
OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4317 \\
  deno run --unstable-otel main.ts`

const otelSpans = `// 创建自定义追踪 span
const span = Deno.tracing.startSpan("database-query");
try {
  span.setAttribute("db.system", "postgres");
  span.setAttribute("db.operation", "SELECT");

  const result = await db.query("SELECT * FROM users");
  span.setAttribute("db.rows_returned", result.length);

  return result;
} finally {
  span.end();
}`
</script>
