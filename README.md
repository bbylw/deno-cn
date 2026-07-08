# Deno

[![](https://img.shields.io/crates/v/deno.svg)](https://crates.io/crates/deno)
[![Twitter badge][]][Twitter link] [![Bluesky badge][]][Bluesky link]
[![Discord badge][]][Discord link] [![YouTube badge][]][YouTube link]

<img align="right" src="https://deno.land/logo.svg" height="150px" alt="the deno mascot dinosaur standing in the rain">

[Deno](https://deno.com)
([/ˈdiːnoʊ/](https://ipa-reader.com/?text=%CB%88di%CB%90no%CA%8A)，读作
`dee-no`) 是一个默认安全、开发者体验出色的 JavaScript、TypeScript 和
WebAssembly 运行时。它构建于 [V8](https://v8.dev/)、[Rust](https://www.rust-lang.org/)
和 [Tokio](https://tokio.rs/) 之上。

在[文档](https://docs.deno.com/runtime/manual)中了解更多关于 Deno 运行时的内容。

## 安装

使用下面任一命令在你的系统上安装 Deno 运行时。请注意，安装 Deno 的方式有很多种——完整的安装选项列表可
[在此查看](https://docs.deno.com/runtime/manual/getting_started/installation)。

Shell（Mac、Linux）：

```sh
curl -fsSL https://deno.land/install.sh | sh
```

PowerShell（Windows）：

```powershell
irm https://deno.land/install.ps1 | iex
```

[Homebrew](https://formulae.brew.sh/formula/deno)（Mac）：

```sh
brew install deno
```

[Chocolatey](https://community.chocolatey.org/packages/deno)（Windows）：

```powershell
choco install deno
```

[WinGet](https://winstall.app/apps/DenoLand.Deno)（Windows）：

```powershell
winget install --id=DenoLand.Deno
```

[Scoop](https://scoop.sh/#/apps?q=deno&id=678d8fb557b611df996989c675b1099630a5bbee)
（Windows）：

```powershell
scoop install main/deno
```

### 从源码构建并安装

从源码构建 Deno 的完整说明可
[在此查看](https://github.com/denoland/deno/blob/main/.github/CONTRIBUTING.md#building-from-source)。

## 你的第一个 Deno 程序

Deno 可用于许多不同的应用场景，但最常用于构建 Web 服务器。创建一个名为 `server.ts` 的文件，并写入以下
TypeScript 代码：

```ts
Deno.serve((_req: Request) => {
  return new Response("Hello, world!");
});
```

使用以下命令运行你的服务器：

```sh
deno run --allow-net server.ts
```

这将在 [http://localhost:8000](http://localhost:8000) 上启动一个本地 Web 服务器。

在[文档](https://docs.deno.com/runtime/manual)中了解更多关于编写和运行 Deno 程序的内容。

## 更多资源

- **[Deno 文档](https://docs.deno.com)**：Deno 运行时、[Deno Deploy](https://deno.com/deploy)
  等的官方指南与参考文档。
- **[Deno 标准库](https://jsr.io/@std)**：Deno 程序官方支持的常见工具函数。
- **[JSR](https://jsr.io/)**：面向现代 JavaScript 和 TypeScript 的开源包注册表。
- **[开发者博客](https://deno.com/blog)**：来自 Deno 团队的产品更新、教程等内容。

## 贡献

感谢你的帮助！若要参与贡献，请阅读我们的
[贡献指南](.github/CONTRIBUTING.md)。

[Build status - Cirrus]: https://github.com/denoland/deno/workflows/ci/badge.svg?branch=main&event=push
[Build status]: https://github.com/denoland/deno/actions
[Twitter badge]: https://img.shields.io/twitter/follow/deno_land.svg?style=social&label=Follow
[Twitter link]: https://twitter.com/intent/follow?screen_name=deno_land
[Bluesky badge]: https://img.shields.io/badge/Follow-whitesmoke?logo=bluesky
[Bluesky link]: https://bsky.app/profile/deno.land
[YouTube badge]: https://img.shields.io/youtube/channel/subscribers/UCqC2G2M-rg4fzg1esKFLFIw?style=social
[YouTube link]: https://www.youtube.com/@deno_land
[Discord badge]: https://img.shields.io/discord/684898665143206084?logo=discord&style=social
[Discord link]: https://discord.gg/deno
