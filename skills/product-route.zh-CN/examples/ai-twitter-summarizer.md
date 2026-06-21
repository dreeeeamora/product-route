# 示例评估：AI Twitter 内容摘要工具

## 产品想法

做一个 AI 工具，自动抓取和摘要 Twitter/X 上的热门长线程、列表和书签内容，输出结构化摘要。

---

## 目标用户

- 信息过载的 Twitter/X 重度用户
- 需要跟踪行业动态但没时间刷推的产品人/开发者/投资人
- 内容创作者需要素材灵感

---

## 触发场景

- 早上打开手机，想看昨天错过了什么重要讨论
- 收藏了 20 个长线程但没时间读
- 想知道某个话题（如 AI、SaaS、独立开发）本周最热的讨论

---

## 证据表

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E001 | 正面证据 | competitor_observation | 存在类似产品（Nitter、TweetHunter、Typefully 的摘要功能），有用户在付费 | B | S04, S05 |
| E002 | 正面证据 | web_research | Twitter/X 用户普遍抱怨信息过载，"TL;DR" 需求广泛存在 | B | S01, S02 |
| E003 | 反面证据 | competitor_observation | 纯工具型 Twitter 摘要产品留存率低 — 用户来了几次就不用了 | B | S03, S06 |
| E004 | 反面证据 | web_research | 核心价值是摘要内容本身，不是生成工具。用户不会为"生成摘要的功能"付费 | B | S05 |
| E005 | 正面证据 | web_research | 以 Newsletter 形式分发 Twitter 摘要的创作者（如 TLDR 系列）有大量订阅者 | B | S06, S07 |

---

## 反证表

| ID | 反证/风险 | 影响 | 置信度 |
|---|---|---|---|
| CE001 | 纯工具模式留存极低 — 用户用完就走 | S03 使用频率可能虚高 | B |
| CE002 | X/Twitter API 费用高且限制多 | S08 交付复杂度可能上升 | A |
| CE003 | 内容型产品竞争取决于分发能力，不是 AI 能力 | 路由方向：R06 不是 R02 | B |
| CE004 | 摘要质量高度依赖 AI 模型，幻觉风险不可忽视 | S09 责任风险 | B |

---

## 评分表

| 维度 ID | 维度 | 分数 | 依据 | 命中锚点 | 置信度 |
|---|---|---|---|---|---|
| S01 | 触发场景明确度 | 4 | 信息过载、错过讨论、话题跟踪 — 场景明确 | 明确触发事件：每日信息摄入 | B |
| S02 | 痛点强度 | 3 | Twitter 用户确实有"错过重要信息"的焦虑，但不是硬性阻塞 | 明显麻烦，用户主动寻找方案 | B |
| S03 | 使用频率 | 4 | 重度用户每天 1-3 次 | 每天 1-3 次 | B |
| S04 | 替代方案成熟度 | 3 | Nitter、TweetHunter、人工整理 Newsletter 存在，但都不完美 | 有竞品但有缺陷 | B |
| S05 | 付费意愿证据 | 2 | 有 Newsletter 付费订阅案例，但工具付费意愿弱 | 微弱付费信号 | B |
| S06 | 用户群体明确度 | 4 | 信息过载的 Twitter 重度用户 — 可具体定位 | 具体画像有证据 | B |
| S07 | 获客路径清晰度 | 3 | Twitter/X 平台本身 + Newsletter 分发 | 1-2 条可验证路径 | B |
| S08 | 交付复杂度 | 3 | X API + AI 摘要 + 发布流水线，1-3 个月 | 1-3 个月 | B |
| S09 | 责任风险 | 2 | AI 摘要可能出错，但风险可控 | 轻微影响 | B |
| S10 | 维护成本 | 3 | API 变更 + AI 模型更新 + 内容质量监控 | 持续关注 | B |
| S11 | 复用价值 | 3 | 摘要能力可复用到其他平台 | 部分可复用 | C |
| S12 | 当前阶段适配度 | 3 | 需要验证"内容分发"能力而不是 AI 能力 | 基本匹配但需调整 | C |

---

## 置信度惩罚

无维度触发上限惩罚。所有关键维度均至少 B 级。

**整体置信度：B**

---

## 风险门槛

### 命中的风险门槛

无。S09 = 2，S08 = 3，远低于高风险触发阈值。

---

## 路由判断

**主路由：** R06 — 内容或社区产品

**副路由：** 无

**命中的路由规则：**
- 手动判断（不符合现有硬性规则的精确组合）：核心价值是内容输出，不是工具功能。工具只是内容生产的手段，不是用户付费的理由。

**为什么不是其它路线：**
- R01：不是纯工具 — 用户为核心内容而来，不是为生成器而来
- R02：工具型 SaaS 会死 — 用户不会为"摘要生成功能"付费订阅
- R03：面向外部用户，不是内部工具
- R04：不封装第三方服务
- R05：不需要销售介入
- R07：无高风险基础设施
- R08：摘要工具有独立使用场景，但独立产品形态应该是内容输出
- R09：关键证据基本充足

**核心判断逻辑：**
这个产品的成败不取决于 AI 摘要有多准，而取决于：
1. 能不能建立内容分发循环（用户想看 → 订阅 → 收到 → 分享 → 新用户想看）
2. 能不能形成品牌认知（"这个账号/Newsletter 的摘要最靠谱"）
3. 能不能在 Twitter/X 平台规则内持续运营

工具是手段，内容是产品。路由到 R06。

---

## MVP 边界

**第一版只做什么：**
1. 手动 + AI 辅助摘要 10 个热门长线程
2. 格式化为固定模板（TL;DR + 关键观点 + 原文链接）
3. 以 Twitter 线程或 Newsletter 形式发布
4. 固定频率（如每周 3 次）

**明确不做什么：**
1. 不做用户注册和登录
2. 不做自定义 AI 模型训练
3. 不做实时抓取和自动化 pipeline
4. 不做 Web 应用或 Dashboard
5. 不做付费订阅（第一版）

**依赖：**
| 依赖 | 用途 | 替代方案 |
|---|---|---|
| X/Twitter 平台 | 内容分发 | 无 |
| AI 模型（Claude/ChatGPT API） | 摘要生成 | 手动摘要 |

**不承诺：**
1. 不承诺摘要 100% 准确
2. 不承诺日更

---

## 不做清单

1. ❌ 不做用户系统（注册/登录/个人主页）
2. ❌ 不做付费订阅
3. ❌ 不做 Web Dashboard
4. ❌ 不做实时爬虫
5. ❌ 不做多平台抓取（先只做 Twitter/X）
6. ❌ 不做自定义 AI 模型

---

## 最低成本验证动作

### 动作 1：手动内容验证

**目标：** 验证摘要内容是否有受众

**具体步骤：**
1. 手动挑选 10 条本周最热的 AI/SaaS/独立开发相关 Twitter 长线程
2. 用 AI 辅助生成结构化摘要（TL;DR + 3 个关键观点）
3. 以 Twitter 线程形式发布，标注 "AI-assisted summary"
4. 对比这条线程和普通推文的互动量

**预计时间：** 1 天

---

### 动作 2：受众需求确认

**目标：** 确认目标用户是否愿意持续消费摘要内容

**具体步骤：**
1. 在 Twitter/X 上发帖问："如果你可以每天早上收到昨天最重要的 5 条推文摘要，你会订阅吗？"
2. 在相关 Discord/Slack 社区问同样的问题
3. 观察互动量、引用、私信
4. 记录有多少人说"会"、多少人问"怎么做"

**预计时间：** 1 天

---

### 动作 3：最小自动化验证

**目标：** 验证自动化摘要的可行性和质量

**具体步骤：**
1. 用一个简单的脚本（或用 AI Agent）每天抓取 5 条热门线程
2. 跑 AI 摘要
3. 人工校对后发布
4. 观察 1 周的互动数据和订阅增长

**预计时间：** 3 天

---

## 外部证据缺口

- 还缺 Twitter/X 摘要类 Newsletter 的订阅数和增长数据
- 还缺 "twitter thread summarizer" 的搜索量
- 还缺竞品（Nitter、TweetHunter）的留存数据
- 还缺内容型产品的典型转化漏斗数据

> 核心 Skill 不依赖外部服务即可运行。外部案例库只用于提高证据覆盖率和置信度。

---

## JSON Result

```json
{
  "schema_version": "0.1.0",
  "skill_version": "0.1.0",
  "runtime_language": "zh-CN",
  "evidence_mode": "manual_only",
  "mcp_enabled": false,
  "idea": "做一个 AI 工具，自动抓取和摘要 Twitter/X 上的热门长线程、列表和书签内容",
  "main_route": "R06",
  "main_route_label": "内容或社区产品",
  "secondary_route": null,
  "secondary_route_label": null,
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 3,
    "usage_frequency": 4,
    "alternative_maturity": 3,
    "payment_evidence": 2,
    "user_clarity": 4,
    "acquisition_clarity": 3,
    "delivery_complexity": 3,
    "liability_risk": 2,
    "maintenance_cost": 3,
    "reuse_value": 3,
    "stage_fit": 3
  },
  "risk_gates": [],
  "matched_rules": [],
  "blocked_by": [],
  "next_action": "手动内容验证 + 受众需求确认 + 最小自动化",
  "do_not_build": [
    "用户注册和登录系统",
    "付费订阅",
    "Web Dashboard",
    "实时爬虫",
    "多平台抓取",
    "自定义 AI 模型"
  ],
  "provider_status": {
    "case_library": "not_connected",
    "competitor_research": "not_connected",
    "keyword_research": "not_connected",
    "pricing_lookup": "not_connected",
    "decision_history": "not_connected"
  },
  "external_evidence": {
    "case_library": { "connected": false, "refs": [] },
    "competitor_research": { "connected": false, "refs": [] },
    "keyword_research": { "connected": false, "refs": [] },
    "pricing_lookup": { "connected": false, "refs": [] },
    "decision_history": { "connected": false, "refs": [] },
    "mcp": { "connected": false, "resources": [] }
  }
}
```
