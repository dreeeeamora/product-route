---
name: product-route.zh-CN
description: >
  Product Route 产品路线判断 Skill — 当用户需要评估产品想法、产品定位、MVP 边界、
  推进模式、风险分类，或者需要判断一个产品想法应该走哪种产品路线（入口工具、货架服务、
  内部基础设施、第三方封装、销售型服务、内容社区、高风险暂缓、仅功能、先调研）时使用。
  也在用户提到「这个产品该怎么做」「帮我看看这个想法」「产品定位」「MVP 规划」
  「技术选型方向」「推进策略」时触发。不是创业点子打分器，不是商业计划生成器，
  而是基于证据的产品想法路由工具。
runtime_language: zh-CN
compatibility: no_external_dependencies
---

# Product Route Skill · 中文运行包

> runtime_language: zh-CN

## When to Use

当用户提出以下需求时，使用本 Skill：

- 评估一个产品想法或产品方向
- 判断产品应该以什么模式推进（工具 / SaaS / 内部设施 / 内容等）
- 定义 MVP 边界
- 识别产品中的高风险基础设施
- 判断一个想法适合独立产品还是作为功能模块
- 在信息不足时，获得结构化的调研方向

触发短语示例：
- 「帮我看看这个产品想法」
- 「这个方向应该怎么推进」
- 「这个适合做独立产品吗」
- 「MVP 应该做什么」
- 「这个想法有什么风险」

## When NOT to Use

本 Skill 不适用于以下场景：

- 法律意见、合规审查
- 财务建议、投资决策
- 精确市场规模预测
- 商业计划书撰写
- 在没有任何证据的情况下鼓励用户立即开发
- 替代用户做最终决策

## Required Process

每次评估必须严格按照以下步骤执行，不可跳过任何一步：

1. **复述产品想法** — 用一句话确认你理解的产品想法
2. **建立证据表** — 列出当前已知的所有证据，标注类型和来源
3. **建立反证表** — 主动寻找反面证据和风险信号
4. **12 维评分** — 读取 `references/scoring-rules.md`，逐项评分
5. **置信度惩罚** — 读取 `references/evidence-rules.md`，对证据不足的维度降分
6. **风险门槛检查** — 读取 `references/risk-gates.md`，检查是否触发 G01-G08
7. **路由判断** — 读取 `references/routing-rules.md`，决定主路由和副路由
8. **输出报告** — 按 `references/report-template.md` 格式输出完整报告

## Required References

以下文件是本 Skill 的核心规则，在评估过程中必须读取：

- `references/scoring-rules.md` — 12 维评分体系
- `references/routing-rules.md` — 9 种路由规则
- `references/evidence-rules.md` — 证据等级与惩罚机制
- `references/risk-gates.md` — 8 个风险门槛
- `references/report-template.md` — 输出模板

## Hard Rules（硬性规则）

这些规则在任何情况下都不可违反：

1. **先证据，后评分** — 不得在没有证据的情况下给出高分
2. **没有证据不得给高分** — 任何维度若无 A/B 级证据，最高只能打 3 分
3. **不得只用总分决策** — 必须结合维度组合和规则匹配
4. **高风险基础设施必须先过 risk gates** — S09 >= 4 且 S08 >= 4 时，必须路由到 R07 或 R04
5. **一次评估只允许一个主路由，最多一个副路由**
6. **自然语言输出中文** — 报告正文使用中文
7. **JSON key 使用英文** — 结构化输出中的字段名必须是英文
8. **不得混用英文规则文件** — 本次运行只加载中文规则文件

## Output Must Include

每份评估报告必须包含以下章节：

1. Idea Restatement（产品想法复述）
2. Target User（目标用户）
3. Trigger Scenario（触发场景）
4. Evidence Table（证据表）
5. Counter Evidence（反证表）
6. Scores（12 维评分表）
7. Confidence Penalties（置信度惩罚说明）
8. Risk Gates（风险门槛检查结果）
9. Route Decision（路由判断）
10. MVP Boundary（MVP 边界）
11. Do Not Build（不做清单 — 至少 5 条）
12. Validation Actions（最低成本验证动作 — 3 个具体动作）
13. External Evidence Gaps（外部证据缺口）
14. JSON Result（结构化 JSON，key 使用英文）

---

## 示例参考

参见 `examples/` 目录中的示例评估：

- `policy-page-hosting.md` — 政策页托管工具（R02 货架服务）
- `full-video-hosting-risk.md` — 完整视频托管平台（R07 高风险基础设施）
- `qr-code-generator.md` — 二维码生成器（R01 入口工具）
