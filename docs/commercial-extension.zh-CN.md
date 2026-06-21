# 商业扩展指南 · Product Route

## 概述

Product Route 的核心规则完全开源。本文件说明如何在核心规则之上构建商业扩展，以及哪些能力应该作为可选扩展而非核心依赖。

---

## 商业扩展原则

1. **核心 Skill 必须独立运行** — 无外部服务、无 API Key、无案例库也能完成评估
2. **商业扩展只能增强证据覆盖** — 提供更高质量的证据，提高置信度
3. **商业扩展不能改变核心规则** — 评分体系、路由规则、风险门槛不可被扩展覆盖
4. **用户始终可以选择** — 使用哪个 Provider、是否连接 MCP

---

## 可商业化的扩展类型

### 1. 案例库（Case Library）

**价值：** 提供经过验证的产品案例作为参考证据。

**商业形式：**
- 付费订阅案例库
- 企业私有案例库
- 行业垂直案例包

**与核心的关系：** 案例库证据的 source_type 为 `case_library`，置信度可达到 B 级。

### 2. 竞品研究自动化（Competitor Research）

**价值：** 自动搜索和分析竞品，提取定价、功能、用户评价。

**商业形式：**
- API 订阅（按查询计费）
- 竞品数据库
- 行业报告

**与核心的关系：** 通过 `competitor_observation` 或 `external_provider` 来源类型接入。

### 3. 关键词研究（Keyword Research）

**价值：** 提供搜索量、CPC、长尾关键词数据，提高 S01（场景明确度）和 S07（获客路径）的证据质量。

**商业形式：**
- 搜索引擎 API 代理
- 关键词数据库订阅

### 4. 决策历史（Decision History）

**价值：** 记录和检索历史评估，发现模式，避免重复错误。

**商业形式：**
- 企业决策知识库
- 团队协作评估平台

---

## Provider 接口

商业扩展通过 Provider 接口接入。详见 `extensions/providers/` 目录：

- `case-library-provider.interface.md`
- `competitor-research-provider.interface.md`
- `keyword-provider.interface.md`
- `decision-history-provider.interface.md`

Provider 未连接时，Skill 应输出 `external_evidence.xxx.connected: false` 并降级到人工调研模式。

---

## MCP 工具

商业扩展也可以作为 MCP 工具提供。详见 `extensions/mcp/tools.md`。

MCP 工具的优势是 Agent 可以直接调用，无需额外的 API 集成。但 MCP 工具本身也需要后端服务支撑。

---

## 商业模式的边界

以下行为**不被允许**，因为它们违反了 Product Route 的开源核心原则：

1. ❌ 将核心评分规则移到付费墙后面
2. ❌ 商业版本改变路由逻辑（让付费版本给出不同的路由结果）
3. ❌ 隐藏风险门槛检查
4. ❌ 商业扩展在没有证据的情况下提高置信度

以下行为**被鼓励**：

1. ✅ 提供更丰富的案例库和竞品数据
2. ✅ 提供更高效的关键词研究工具
3. ✅ 提供团队协作和决策历史功能
4. ✅ 提供行业定制的案例包和模板
5. ✅ 提供合规性检查的增值服务
