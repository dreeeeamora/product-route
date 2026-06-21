# Product Route · 产品路线判断 Skill

> **An evidence-based AI skill that routes product ideas to the right execution mode.**
> **基于证据的 AI Skill，用来把产品想法路由到合适的推进模式。**

It doesn't ask "Is this a good idea?" — it asks "What should happen next?"

[中文文档](README.zh-CN.md) | [English Docs](README.en.md)

---

## What It Does

Product Route evaluates a product idea through a fixed pipeline:

```
Evidence → Score → Risk Gate → Route → MVP Boundary → Validation Action
```

It routes ideas into one of **9 modes**:

| ID | Name |
|---|---|
| R01 | Entry Tool / 入口工具 |
| R02 | Shelf Service / 货架服务 |
| R03 | Internal Infrastructure / 内部基础设施 |
| R04 | Third-party Wrapper / 第三方封装 |
| R05 | Sales-led Service / 销售型服务 |
| R06 | Content / Community Product / 内容或社区产品 |
| R07 | High-risk Infrastructure, Defer / 高风险基础设施暂缓 |
| R08 | Feature Only, Not Standalone / 只适合做功能 |
| R09 | Research First / 先调研 |

## Quick Start

```bash
# Install as Skill package
skills/product-route.zh-CN/   # Chinese runtime
skills/product-route.en/      # English runtime

# Or use as single-file bundle
dist/product-route.zh-CN.bundle.md
dist/product-route.en.bundle.md
```

**Language rule:** The repo is bilingual. Each runtime is monolingual. Never load both language packages in one session.

## What This Is NOT

- ❌ Startup idea scorer
- ❌ Business plan generator
- ❌ Investment advice tool

## License

MIT
