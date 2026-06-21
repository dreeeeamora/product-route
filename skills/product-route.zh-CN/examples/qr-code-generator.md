# 示例评估：二维码生成器

## 产品想法

做一个二维码生成器，用户可以输入文本、URL、联系方式，生成可定制的二维码图片。支持颜色、Logo 嵌入、不同格式导出（PNG、SVG、PDF）。

---

## 目标用户

- 市场营销人员（生成活动链接二维码）
- 小型商家（生成 WiFi 二维码、菜单二维码）
- 普通用户（分享链接、名片）

---

## 触发场景

- 需要把网址生成二维码放到海报/传单上
- 需要生成 WiFi 登录二维码给客人
- 需要把名片信息生成二维码
- 活动签到用的二维码

---

## 证据表

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E001 | 正面证据 | competitor_observation | 大量免费二维码生成器存在且流量极高（QR Code Monkey, QR Code Generator 等） | A | S04, S07 |
| E002 | 正面证据 | web_research | "qr code generator" 是高搜索量关键词 | B | S01, S07 |
| E003 | 正面证据 | competitor_observation | 免费竞品功能完整，但多数有广告或水印 | A | S04 |
| E004 | 反面证据 | competitor_observation | 大多数二维码生成器免费，付费版本难以差异化 | A | S05 |
| E005 | 反面证据 | web_research | 浏览器原生支持二维码（Chrome 分享功能），操作系统内置（iOS 相机） | B | S02, S04 |

---

## 反证表

| ID | 反证/风险 | 影响 | 置信度 |
|---|---|---|---|
| CE001 | 用户几乎不愿意为二维码生成付费 | S05 付费意愿极低 | A |
| CE002 | 浏览器和 OS 内置功能在蚕食独立二维码工具的空间 | S02 痛点强度下降 | B |
| CE003 | 市场竞争极激烈，SEO 难度高 | S07 获客路径有挑战 | A |
| CE004 | 作为单一功能产品，用户粘性极低 | S03 使用频率低 | A |

---

## 评分表

| 维度 ID | 维度 | 分数 | 依据 | 命中锚点 | 置信度 |
|---|---|---|---|---|---|
| S01 | 触发场景明确度 | 4 | 海报、WiFi、名片 — 明确触发事件 | 明确触发事件，如分享、下载、打印、活动 | A |
| S02 | 痛点强度 | 2 | 免费方案够用，不一定需要独立工具 | 省一点时间 | A |
| S03 | 使用频率 | 2 | 偶尔使用，非日常高频 | 每月 1-3 次 | A |
| S04 | 替代方案成熟度 | 5 | 免费竞品极多，浏览器和 OS 内置 | 多个成熟竞品 | A |
| S05 | 付费意愿证据 | 1 | 几乎没有用户愿意为二维码生成付费 | 无付费信号 | A |
| S06 | 用户群体明确度 | 4 | 营销人员、商家、普通用户 — 群体明确 | 具体画像 | A |
| S07 | 获客路径清晰度 | 4 | SEO 搜索量高，但竞争激烈 | 3 条以上路径 | A |
| S08 | 交付复杂度 | 1 | 1-2 周单人可交付 | 1-2 周 MVP | A |
| S09 | 责任风险 | 1 | 基本没有风险 | 基本无风险 | A |
| S10 | 维护成本 | 1 | 基本不需要维护 | 极简单 | A |
| S11 | 复用价值 | 4 | 可以作为产品工具箱的入口组件 | 可复用到多场景 | B |
| S12 | 当前阶段适配度 | 4 | 技术简单、快速可交付 | 高度匹配 | A |

---

## 置信度惩罚

关键维度（S01, S02, S05, S06, S07）均有 A 级证据。无触发惩罚。

**整体置信度：B**（示例证据无真实可追溯来源链接，最高建议 B）

---

## 风险门槛

### 命中的风险门槛

无。S09 = 1，S08 = 1，远低于触发阈值。

### 未命中的风险门槛

所有 G01-G08 均未命中 — 二维码生成器不涉及支付、认证、邮件、隐私、视频、通知、客服、基础设施等高风险领域。

---

## 路由判断

**主路由：** R01 — 入口工具

**副路由：** 无

**命中的路由规则：**
- S03 >= 4 ... 不满足（S03=2）。但：
- S05 <= 2 且 S07 >= 4 → R01 入口工具（规则 7）
- S03 >= 4 且 S02 <= 3 且 S05 <= 2 → 不满足（S03=2）
- 手动判断：低频、弱痛点、弱付费、强获客 → 经典的 R01 入口工具

**为什么不是其它路线：**
- R02：付费意愿太弱（S05=1），不适合作为付费 SaaS
- R03：用户明确，不是内部工具
- R04：不需要封装第三方
- R05：不需要销售介入
- R06：核心是工具，不是内容
- R07：无高风险
- R08：虽然是单一功能，但二维码生成器有独立使用场景 — 但也可作为工具箱的一部分
- R09：证据充足，不需要更多调研

---

## MVP 边界

**第一版只做什么：**
1. 文本/URL/联系人生成二维码
2. PNG 和 SVG 导出
3. 基础颜色定制
4. 响应式页面，移动端友好

**明确不做什么：**
1. 不做用户注册和付费系统
2. 不做批量生成
3. 不做分析追踪
4. 不做 API 服务

**依赖第三方服务：**
| 服务 | 用途 | 替代方案 |
|---|---|---|
| 静态托管（Vercel/Cloudflare） | 页面托管 | GitHub Pages |

**不承诺：**
1. 不承诺永久存储
2. 不承诺高可用 SLA

---

## 不做清单

1. ❌ 不做用户注册和登录
2. ❌ 不做付费订阅
3. ❌ 不做二维码扫描分析
4. ❌ 不做批量生成
5. ❌ 不做 API 服务
6. ❌ 不做团队协作功能

---

## 最低成本验证动作

### 动作 1：搭建免费入口页

**目标：** 验证二维码生成器的搜索流量和用户使用

**具体步骤：**
1. 用 2 天搭建一个简单的二维码生成网页
2. 部署到 Vercel 或 Cloudflare Pages
3. 提交到 Google Search Console
4. 观察自然搜索流量
5. 在页面底部放一个「还需要什么工具？」的反馈链接

**预计时间：** 2 天

---

### 动作 2：搜索关键词研究

**目标：** 了解二维码相关的搜索需求和竞争情况

**具体步骤：**
1. 用 Google Keyword Planner 或 Ahrefs 免费版搜索 "qr code generator"
2. 搜索长尾关键词："wifi qr code generator", "qr code with logo", "qr code svg"
3. 搜索中文关键词："二维码生成器"、"WiFi 二维码"、"名片二维码"
4. 记录搜索量和竞争度

**预计时间：** 1 天

---

### 动作 3：竞品分析

**目标：** 了解竞品模式和可差异化空间

**具体步骤：**
1. 使用前 5 个搜索结果中的二维码生成器
2. 记录每个的功能、限制、付费点、广告策略
3. 查看竞品的流量来源（Similarweb 免费版）
4. 确定是否有差异化空间（如：更好的 UX、无水印、开源）

**预计时间：** 1 天

---

## 外部证据缺口

- 还缺 "qr code generator" 的精确搜索量和 CPC
- 还缺竞品的流量和收入数据
- 还缺用户对「更好的二维码工具」是否有需求的直接证据

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
  "idea": "做一个二维码生成器，用户可以输入文本、URL，生成可定制的二维码图片",
  "main_route": "R01",
  "main_route_label": "入口工具",
  "secondary_route": null,
  "secondary_route_label": null,
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 2,
    "usage_frequency": 2,
    "alternative_maturity": 5,
    "payment_evidence": 1,
    "user_clarity": 4,
    "acquisition_clarity": 4,
    "delivery_complexity": 1,
    "liability_risk": 1,
    "maintenance_cost": 1,
    "reuse_value": 4,
    "stage_fit": 4
  },
  "risk_gates": [],
  "matched_rules": [
    "S05<=2 AND S07>=4 → R01"
  ],
  "blocked_by": [],
  "next_action": "搭建免费入口页 + 搜索关键词研究 + 竞品分析",
  "do_not_build": [
    "用户注册和登录系统",
    "付费订阅系统",
    "二维码扫描分析",
    "批量生成功能",
    "API 服务",
    "团队协作功能"
  ],
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
