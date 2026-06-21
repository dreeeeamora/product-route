# DECISIONS.md — 架构决策记录

---

## D001: 一个仓库，双语文档，不拆成两个仓库

Date: 2026-06-19

Decision:
Product Route 的中文和英文 Skill 包、文档、示例、测试全部放在同一个仓库中，不拆分为两个独立仓库。

Reason:
- 规则 ID（S01-S12、R01-R09、G01-G08）是中英文版本共享的稳定接口
- JSON Schema 和结构化输出格式是语言无关的
- 拆成两个仓库会增加 ID 对齐和维护成本
- 单一仓库让双语同步更可见

Tradeoff:
- 仓库体积更大，文件更多
- 需要明确的目录约定防止中英文规则混用
- 用户需要被告知只安装其中一个运行包

Status: Accepted

---

## D002: 仓库双语，但运行单语

Date: 2026-06-19

Decision:
仓库可以同时包含中文和英文文档、Skill 包、示例。但在任何一次 Skill 运行中，只能加载一种语言的规则文件。不允许中文 Skill 包引用英文规则，反之亦然。

Reason:
- 避免 Agent 在不同语言的规则之间混淆
- 双语内容有微妙差异，混用可能产生不一致的判断
- 用户应根据自己的语言环境选择对应的运行包

Tradeoff:
- 维护者需要确保两种语言版本的规则在逻辑上等价
- 英文版本可能滞后于中文版本
- 需要额外的构建步骤来验证两种语言版本的 ID 一致性

Status: Accepted

---

## D003: 开源核心规则，保留外部案例库和自动调研作为扩展

Date: 2026-06-19

Decision:
Product Route 的核心评分、路由、风险门槛规则完全开源。外部案例库、竞品调研自动化、关键词数据、历史决策记录等功能通过 Provider 接口和 MCP 工具预留，不作为核心 Skill 的必要依赖。

Reason:
- 核心 Skill 必须能在离线、无 API Key、无外部服务的情况下独立运行
- 外部数据源的质量和可用性不稳定，不应阻塞核心路由判断
- Provider 接口允许用户自行接入内部数据源
- MCP 工具可以由社区贡献

Tradeoff:
- 没有外部数据时，证据置信度可能较低，更多产品想法会被路由到 R09（先调研）
- 高级用户需要额外配置才能获得最佳效果
- 商业案例库的价值无法在开源版本中直接体现

Status: Accepted

---

## D004: Skill 本体放在 skills/，bundle 放在 dist/，src 只放辅助脚本

Date: 2026-06-19

Decision:
- `skills/` 目录存放 Skill 包的源文件（SKILL.md + references/ + examples/）
- `dist/` 目录存放构建产物（单文件 Prompt Bundle）
- `src/` 目录只存放构建和校验辅助脚本，不包含任何评分规则或路由逻辑

Reason:
- Skill 的规则逻辑应该以 Markdown 形式存在，方便非程序员阅读和修改
- TypeScript 脚本只负责构建和校验，不参与运行时决策
- 清晰分离源文件、构建产物、辅助工具

Tradeoff:
- 规则分散在多个 Markdown 文件中，编辑时需要在文件间跳转
- 构建步骤增加了贡献门槛
- 但单文件 Bundle 确保了分发和使用时的便利性

Status: Accepted
