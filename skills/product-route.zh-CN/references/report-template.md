# Product Route Report 输出模板

> 以下模板为固定输出格式。每份评估报告必须包含所有章节，不可省略。

---

# Product Route Report

## 1. 产品想法复述

> 用一句话复述产品想法，确认理解一致。

**想法：** [一句话描述]

---

## 2. 目标用户

> 描述目标用户画像。

---

## 3. 触发场景

> 描述用户在什么具体场景下会想到使用这个产品。

---

## 4. 证据表

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E001 | 正面证据 | web_research | ... | B | S01, S04 |
| E002 | 正面证据 | competitor_observation | ... | B | S05 |

---

## 5. 反证表

| ID | 反证/风险 | 影响 | 置信度 |
|---|---|---|---|
| CE001 | ... | ... | ... |

---

## 6. 评分表

| 维度 ID | 维度 | 分数 | 依据 | 命中锚点 | 置信度 |
|---|---|---|---|---|---|
| S01 | 触发场景明确度 | | | | |
| S02 | 痛点强度 | | | | |
| S03 | 使用频率 | | | | |
| S04 | 替代方案成熟度 | | | | |
| S05 | 付费意愿证据 | | | | |
| S06 | 用户群体明确度 | | | | |
| S07 | 获客路径清晰度 | | | | |
| S08 | 交付复杂度 | | | | |
| S09 | 责任风险 | | | | |
| S10 | 维护成本 | | | | |
| S11 | 复用价值 | | | | |
| S12 | 当前阶段适配度 | | | | |

---

## 7. 置信度惩罚

> 列出哪些维度因为证据不足被限制了分数。

| 维度 | 原始分数 | 限制后分数 | 原因 | 证据等级 |
|---|---|---|---|---|

**整体置信度评级：** [A / B / C / D]

---

## 8. 风险门槛

### 命中的风险门槛

| 门槛 ID | 名称 | 触发原因 | 窄化建议 |
|---|---|---|---|

### 未命中的风险门槛

| 门槛 ID | 名称 | 为什么未命中 |
|---|---|---|

---

## 9. 路由判断

**主路由：** R0X — [路由名称]

**副路由：** R0X — [路由名称]（可选，最多一个）

**命中的路由规则：**
- [列出具体命中了哪条硬性路由规则]

**为什么不是其它路线：**
- R01：[简要原因]
- R02：[简要原因]
- ...
- R09：[简要原因]

---

## 10. MVP 边界

**第一版只做什么：**

1. ...
2. ...
3. ...

**明确不做什么：**

1. ...
2. ...
3. ...

**依赖哪些第三方服务：**

| 服务 | 用途 | 替代方案 |
|---|---|---|

**不承诺哪些责任：**

1. ...
2. ...

---

## 11. 不做清单

> 至少 5 条当前阶段不应该做的东西。

1. ❌ ...
2. ❌ ...
3. ❌ ...
4. ❌ ...
5. ❌ ...

---

## 12. 最低成本验证动作

> 3 个具体动作，每个能在 1-3 天内完成。不能写「做市场调研」这种泛话。

### 动作 1：[名称]

**目标：** [要验证什么]

**具体步骤：**
1. ...
2. ...
3. ...

**预计时间：** [X 天]

---

### 动作 2：[名称]

**目标：** [要验证什么]

**具体步骤：**
1. ...
2. ...
3. ...

**预计时间：** [X 天]

---

### 动作 3：[名称]

**目标：** [要验证什么]

**具体步骤：**
1. ...
2. ...
3. ...

**预计时间：** [X 天]

---

## 13. 外部证据缺口

### 外部证据连接状态

| 来源 | 状态 | 说明 |
|---|---|---|
| Case Library | not_connected | 未使用相似案例库 |
| Competitor Research | not_connected | 未使用自动竞品调研 |
| Keyword Research | not_connected | 未使用关键词调研 |
| Pricing Lookup | not_connected | 未使用价格基准查询 |
| Decision History | not_connected | 未使用历史决策记录 |
| MCP Tools | not_connected | 未调用 MCP 工具 |

### 当前缺口

- **还缺哪些竞品信息：**
- **还缺哪些搜索关键词：**
- **还缺哪些用户行为证据：**
- **还缺哪些相似案例：**
- **还缺哪些价格基准：**
- **还缺哪些历史复盘记录：**

### 人工调研关键词

```
🔍 人工调研关键词：
- [维度] → 搜索词 1, 搜索词 2, 搜索词 3
```

### 推荐外部工具

如果未来接入 MCP，可以优先使用：

- `product_route.case_search` — 搜索相似案例
- `product_route.competitor_search` — 自动竞品调研
- `product_route.keyword_search` — 关键词搜索量查询
- `product_route.pricing_lookup` — 价格基准查询
- `product_route.history_query` — 历史决策查询

> **核心 Skill 不依赖外部服务即可运行。外部案例库、竞品库、关键词库和 MCP 工具只用于提高证据覆盖率和置信度。**

---

## 14. JSON Result

```json
{
  "schema_version": "0.1.0",
  "skill_version": "0.1.0",
  "runtime_language": "zh-CN",
  "evidence_mode": "manual_only",
  "mcp_enabled": false,
  "idea": "",
  "main_route": "",
  "main_route_label": "",
  "secondary_route": "",
  "secondary_route_label": "",
  "confidence": "",
  "scores": {
    "trigger_clarity": 0,
    "pain_strength": 0,
    "usage_frequency": 0,
    "alternative_maturity": 0,
    "payment_evidence": 0,
    "user_clarity": 0,
    "acquisition_clarity": 0,
    "delivery_complexity": 0,
    "liability_risk": 0,
    "maintenance_cost": 0,
    "reuse_value": 0,
    "stage_fit": 0
  },
  "risk_gates": [],
  "matched_rules": [],
  "blocked_by": [],
  "next_action": "",
  "do_not_build": [],
  "provider_status": {
    "case_library": "not_connected",
    "competitor_research": "not_connected",
    "keyword_research": "not_connected",
    "pricing_lookup": "not_connected",
    "decision_history": "not_connected"
  },
  "external_evidence": {
    "case_library": {
      "connected": false,
      "refs": []
    },
    "competitor_research": {
      "connected": false,
      "refs": []
    },
    "keyword_research": {
      "connected": false,
      "refs": []
    },
    "pricing_lookup": {
      "connected": false,
      "refs": []
    },
    "decision_history": {
      "connected": false,
      "refs": []
    },
    "mcp": {
      "connected": false,
      "resources": []
    }
  }
}
```
