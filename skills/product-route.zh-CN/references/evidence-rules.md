# 证据规则

## 证据等级

| 等级 | 名称 | 定义 | 示例 |
|---|---|---|---|
| A | 直接证据 | 真实用户行为、真实付费、用户访谈、历史数据、公开可验证数据 | 用户访谈录音、付费记录、GA 数据、行业报告 |
| B | 间接强证据 | 成熟竞品、公开价格、社区讨论、明确搜索词、公开案例 | 竞品定价页、Reddit/HN 讨论、Google Trends、公开案例研究 |
| C | 间接弱证据 | 个人经验、合理推理、间接证据 | 「我以前做过类似的」、「按理说应该有人需要」 |
| D | 无证据 | 只有灵感，没有外部证据 | 「我觉得可能有市场」、「听说有人需要」 |

---

## 缺证据惩罚规则

### 规则 E01：维度分数上限

如果某个评分维度没有 A 级或 B 级证据支撑，该维度的原始分数最高只能打 3 分。

### 规则 E02：D 级证据上限

如果某个评分维度只有 D 级证据（无外部证据），该维度的原始分数最高只能打 2 分。

### 规则 E03：关键维度不足 → R09

如果以下 5 个关键维度中有 3 个以上的证据等级为 D，最终路由必须是 R09（信息不足，先调研）：

- S01 触发场景明确度
- S02 痛点强度
- S05 付费意愿证据
- S06 用户群体明确度
- S07 获客路径清晰度

### 规则 E04：整体置信度评级

根据证据的整体质量，给出评估的置信度：

| 置信度 | 条件 |
|---|---|
| A（高） | 所有关键维度都有 A 级证据，且非关键维度至少 B 级 |
| B（中高） | 关键维度至少有 B 级证据，大部分非关键维度有 B 级或以上 |
| C（中低） | 部分关键维度只有 C 级证据 |
| D（低） | 多数关键维度只有 C 或 D 级证据 |

---

## 证据来源类型（source_type）

| source_type | 说明 |
|---|---|
| `manual` | 手动收集的证据 |
| `web_research` | 通过网络搜索获得的证据 |
| `interview` | 通过用户访谈获得的证据 |
| `competitor_observation` | 通过竞品观察获得的证据 |
| `case_library` | 从案例库中检索的证据 |
| `mcp_tool` | 通过 MCP 工具获得的证据 |
| `internal_history` | 从内部历史决策记录中获得的证据 |
| `external_provider` | 通过外部 Provider 获得的证据 |
| `unverified` | 来源未验证的证据 |

---

## 证据表格式

每份评估报告中的证据表必须使用以下格式：

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |

其中：
- **ID**: E001, E002, E003 ... 按顺序编号
- **类型**: 正面证据 / 反面证据（反证）
- **来源类型**: 使用上述 source_type 之一
- **内容**: 一句话描述证据内容
- **置信度**: A / B / C / D
- **支持的评分维度**: 如 S01, S02, S05

---

## 反证表格式

反证是主动寻找的负面信号，必须包含在评估报告中：

| ID | 反证/风险 | 影响 | 置信度 |

其中：
- **ID**: CE001, CE002, CE003 ...
- **反证/风险**: 描述反面证据或风险信号
- **影响**: 说明对哪些评分维度或路由有负面影响
- **置信度**: A / B / C / D

---

## MCP 证据接入规则

### 核心原则

MCP 工具不是核心依赖。核心 Skill 必须在没有 MCP 的情况下正常运行。

MCP 工具只允许提供外部证据，不允许直接决定评分、路由或 MVP 边界。

MCP 工具结果不得绕过以下流程：

```
Evidence → Score → Confidence Penalty → Risk Gate → Route → MVP Boundary
```

### 当 MCP 未连接时

1. `external_evidence.mcp.connected` 必须为 `false`
2. `mcp_enabled` 必须为 `false`
3. 不得伪造 MCP 返回结果
4. 不得声称已经查询案例库、竞品库、关键词库或历史决策库
5. 相关证据必须标记为 `unverified`
6. 如果关键证据不足，优先路由到 R09 信息不足，先调研

### 当 MCP 已连接时

MCP 返回的信息必须转化为 Evidence Table 条目，格式如下：

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E0XX | 正面证据 | mcp_tool | ... | B | S04, S05 |

**MCP 证据默认置信度：**

| MCP 来源 | 默认置信度 | 说明 |
|---|---|---|
| 真实用户历史行为 | A | 直接行为数据 |
| 内部历史决策记录 | A 或 B | 取决于记录的完整性和时效性 |
| 案例库匹配 | B | 经过策划和验证的案例 |
| 竞品搜索 | B | 自动搜索的竞品信息 |
| 关键词建议 | B 或 C | 取决于数据来源（搜索 API = B，推断 = C） |
| 趋势扫描 | C | 趋势数据需要结合其他证据 |
| 来源不明或无法验证 | D | 必须降级 |

---

## Provider 证据接入规则

### 核心原则

Provider 不是核心依赖。Provider 只用于提高证据覆盖率和置信度。

所有 Provider 输出必须转化为 Evidence Table 条目，不得直接决定评分或路由。

### 当 Provider 未连接时

1. `provider_status` 中对应 Provider 状态为 `not_connected`
2. 不得编造 Provider 返回数据
3. 相关证据来源标记为 `unverified`

### Provider 默认置信度

| Provider | source_type | 默认置信度 |
|---|---|---|
| Case Library | case_library | B |
| Competitor Research | external_provider 或 competitor_observation | B |
| Keyword Research | external_provider | B 或 C |
| Pricing Lookup | external_provider | B |
| Decision History | internal_history | A 或 B |

---

## 没有联网、没有 MCP、没有 Provider 时的处理

当 Skill 运行环境不具备联网、MCP 或外部 Provider 时，必须遵守以下规则：

1. **标记未验证** — 所有无法验证的证据，source_type 标注为 `unverified`
2. **外部证据连接状态为 `not_connected`** — `external_evidence` 中所有字段的 `connected` 为 `false`
3. **不得伪造竞品、案例、价格、关键词** — 不能用训练数据中的模糊记忆当作证据
4. **输出人工调研关键词** — 为每个信息缺口提供具体的搜索关键词，供用户手动调研
5. **降低置信度** — 整体置信度通常不得高于 C，除非用户手动提供了足够 A/B 级证据
6. **不得推荐立即完整开发** — 在证据未验证之前，不得给出「立即开发完整产品」的建议
7. **关键证据不足时优先 R09** — 如果关键维度中有 3 个以上证据不足，应路由到 R09 信息不足，先调研

### 人工调研关键词输出格式

当无法联网时，针对每个信息缺口输出：

```
🔍 人工调研关键词：
- [维度] → 搜索词 1, 搜索词 2, 搜索词 3
```

示例：
```
🔍 人工调研关键词：
- S05 付费意愿 → "policy page generator pricing", "privacy policy tool subscription", "legal page SaaS pricing"
- S06 用户群体 → "ios app store policy requirements", "who needs privacy policy hosting", "SaaS compliance checklist"
```

---

## evidence_mode 与 mcp_enabled 关系

`evidence_mode` 描述当前评估的证据来源模式，`mcp_enabled` 描述 MCP 工具是否可用。两者必须一致。

| evidence_mode | mcp_enabled | 说明 |
|---|---|---|
| `manual_only` | `false` | 纯手动证据，无 MCP、无 Provider |
| `manual_plus_mcp` | `true` | 手动证据 + MCP 工具辅助 |
| `manual_plus_provider` | `false`（可以为 false） | 手动证据 + Provider（不需要 MCP） |
| `automated_research` | `true` 或 `false` | 自动调研，必须说明具体工具来源 |

规则：

1. `manual_only` → `mcp_enabled` 必须为 `false`
2. `manual_plus_mcp` → `mcp_enabled` 必须为 `true`
3. `manual_plus_provider` → `mcp_enabled` 可以为 `false`
4. `automated_research` → 必须说明具体工具来源（MCP 工具名、Provider 名或 API 名）
5. `mcp_enabled = true` 时，Evidence Table 必须至少有一条 `source_type = mcp_tool` 的证据

---

## X01 · 外部证据只作为证据

MCP、Provider、Case Library、Competitor Research、Keyword Research、Pricing Lookup、Decision History 都只能提供证据，不得直接决定评分、路由、MVP 边界或最终建议。

所有外部结果必须先进入 Evidence Table，再经过以下完整流程：

```
Evidence → Score → Confidence Penalty → Risk Gate → Route → MVP Boundary
```

违反本规则的情况包括但不限于：

- 「案例库显示类似产品都走 R02，所以这个也应该是 R02」→ 错误，证据必须进入评分体系
- 「竞品搜索发现市场很大，建议立即开发完整产品」→ 错误，必须经过评分和风险门槛
- 「关键词搜索量很高，所以这个产品值得做」→ 错误，关键词只是 S01/S07 的证据

外部证据的唯一合法用途：

- 作为 Evidence Table 的一行
- 提高对应评分维度的置信度
- 不能跳过评分 → 不能跳过风险门槛 → 不能直接给路由
