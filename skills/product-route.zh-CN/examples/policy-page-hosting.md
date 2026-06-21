# 示例评估：政策页托管工具

## 产品想法

给独立开发者、小型 SaaS、App 开发者提供政策页面（隐私政策、服务条款、Cookie 政策）托管服务。用户输入基本信息，生成合规页面，获得公开 URL，支持版本记录和更新。

---

## 目标用户

- 独立 iOS / Android 开发者，需要上架 App Store / Google Play
- 小型 SaaS 产品（1-3 人团队）
- 有公开页面的个人项目作者

---

## 触发场景

- App 提交审核时需要公开的隐私政策 URL
- SaaS 上线前需要服务条款页面
- 第三方登录（OAuth）审核需要政策页面
- 产品被用户或平台要求提供数据处理说明

---

## 证据表

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E001 | 正面证据 | competitor_observation | 已有多个竞品（Termly、Iubenda、Termageddon、GetTerms）存在付费用户 | B | S04, S05 |
| E002 | 正面证据 | web_research | App Store 审核要求公开隐私政策 URL，这是硬性需求 | B | S01, S02 |
| E003 | 正面证据 | web_research | 大量开发者在论坛（Reddit、Stack Overflow、V2EX）询问政策页面方案 | B | S02, S06 |
| E004 | 正面证据 | competitor_observation | 竞品定价在 $10-$100/月不等，表明存在付费市场 | B | S05 |
| E005 | 正面证据 | manual | 个人经验：每次上线 App 都需要隐私政策页面 | C | S01, S03 |

---

## 反证表

| ID | 反证/风险 | 影响 | 置信度 |
|---|---|---|---|
| CE001 | 多数开发者认为隐私政策生成器应该是免费的 | 对 S05 付费意愿有负面影响 | B |
| CE002 | 免费替代方案（GitHub Pages + 模板）存在 | 降低独立产品的付费吸引力 | B |
| CE003 | 用户使用频率低（只在审核或更新时使用） | S03 使用频率低 | A |
| CE004 | 涉及法律文本，有被误解为法律建议的风险 | S09 责任风险 | B |

---

## 评分表

| 维度 ID | 维度 | 分数 | 依据 | 命中锚点 | 置信度 |
|---|---|---|---|---|---|
| S01 | 触发场景明确度 | 4 | App 审核、OAuth 审核、平台要求 — 明确触发事件 | 明确触发事件，如上线、审核 | B |
| S02 | 痛点强度 | 4 | 没有政策页面会阻塞上架，直接影响交付 | 影响上线、交付 | B |
| S03 | 使用频率 | 2 | 用户只在审核、更新时使用，每月可能 1-3 次 | 每月 1-3 次 | A |
| S04 | 替代方案成熟度 | 4 | Termly、Iubenda 等成熟竞品存在 | 成熟竞品存在 | B |
| S05 | 付费意愿证据 | 3 | 竞品有付费用户，但有免费替代 | 中等付费信号 | B |
| S06 | 用户群体明确度 | 4 | App 开发者、小型 SaaS — 群体明确 | 具体画像有证据 | B |
| S07 | 获客路径清晰度 | 3 | SEO、应用商店审核文档引用、开发者社区推荐 | 1-2 条可验证路径 | B |
| S08 | 交付复杂度 | 2 | 模板 + CDN 托管 + 版本管理，1 个月单人可交付 | 1 个月单人 MVP | B |
| S09 | 责任风险 | 3 | 涉及法律文本，但可以明确标注「不是法律建议」 | 中等影响 | B |
| S10 | 维护成本 | 2 | 偶尔更新模板，维护量低 | 偶尔更新 | B |
| S11 | 复用价值 | 5 | 可以作为产品上线工具箱的组件，复用到多个场景 | 天然平台属性 | B |
| S12 | 当前阶段适配度 | 4 | 技术可行，市场有需求，开发成本低 | 高度匹配 | C |

---

## 置信度惩罚

无维度触发惩罚。所有关键维度（S01, S02, S05, S06, S07）均有 B 级证据。

**整体置信度：B**

---

## 风险门槛

### 命中的风险门槛

无触发。S09 = 3（< 4），S08 = 2（< 4），不满足高风险门槛触发条件。

### 未命中的风险门槛

| 门槛 ID | 名称 | 为什么未命中 |
|---|---|---|
| G04 | 隐私与合规风险 | S09 = 3，有中等责任风险。需要明确标注「不是法律建议」，但不触发 G04 硬门槛 |

---

## 路由判断

**主路由：** R02 — 货架服务

**副路由：** R01 — 入口工具

**命中的路由规则：**
- S02 >= 4 且 S03 <= 2 且 S09 <= 3 → R02 货架服务（规则 2）
- S04 >= 4 且 S05 >= 3 且 S08 <= 3 → 可考虑 R02 货架服务（规则 8）

**为什么不是其它路线：**
- R01：付费意愿中等（S05=3），不只是纯免费入口 → R01 可作为副路由
- R03：用户群体明确，不是内部工具
- R04：不封装第三方复杂服务
- R05：不需要销售介入，可自助
- R06：核心是工具，不是内容/社区
- R07：未触发高风险门槛
- R08：可作为独立产品
- R09：关键维度证据充足

---

## MVP 边界

**第一版只做什么：**
1. 隐私政策 / 服务条款 / Cookie 政策模板填写
2. 公开 URL 托管（CDN）
3. 版本记录和更新历史

**明确不做什么：**
1. 不提供法律咨询或合规保证
2. 不做多语言自动翻译（第一版只做单一语言）
3. 不做自定义域名（第一版）

**依赖第三方服务：**
| 服务 | 用途 | 替代方案 |
|---|---|---|
| CDN（Cloudflare/Vercel） | 页面托管 | 任何静态托管 |

**不承诺：**
1. 不承诺法律合规兜底
2. 不承诺 100% 可用性 SLA

---

## 不做清单

1. ❌ 不做法律咨询服务
2. ❌ 不做自动合规检查（需要法律专家）
3. ❌ 不做多语言自动翻译
4. ❌ 不做自定义域名和品牌定制
5. ❌ 不做企业私有化部署
6. ❌ 不做 GDPR 自动扫描和合规认证

---

## 最低成本验证动作

### 动作 1：竞品搜索与价格验证

**目标：** 确认竞品定价和用户付费意愿

**具体步骤：**
1. 搜索 "privacy policy generator for apps pricing"
2. 列出 Termly、Iubenda、GetTerms、Termageddon 的定价页
3. 查看每个竞品的公开定价、功能对比
4. 搜索 "privacy policy generator reddit" 查看用户讨论和抱怨

**预计时间：** 1 天

---

### 动作 2：开发者社区需求验证

**目标：** 确认开发者对政策页面的需求强度

**具体步骤：**
1. 在 Reddit r/iOSProgramming、r/androiddev、r/SaaS 搜索 "privacy policy"
2. 在 V2EX / 知乎 搜索 "隐私政策" 和 "上线审核"
3. 记录开发者表达的痛苦和现有方案的不足
4. 发一条帖子询问「你怎么处理 App 审核要求的隐私政策 URL？」

**预计时间：** 1 天

---

### 动作 3：免费入口页验证

**目标：** 用最小成本测试流量

**具体步骤：**
1. 用 GitHub Pages 搭建一个免费隐私政策生成器页面
2. 只做最简单的表单 + 生成 + 公开 URL
3. 在相关社区分享链接
4. 观察是否有自然流量和使用

**预计时间：** 2 天

---

## 外部证据缺口

- 还缺竞品的用户数、收入规模数据
- 还缺搜索关键词 "privacy policy generator" 的搜索量数据
- 还缺目标用户（独立开发者）的付费意愿直接证据

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
  "idea": "给独立开发者和小型 SaaS 提供政策页面（隐私政策、服务条款）托管服务",
  "main_route": "R02",
  "main_route_label": "货架服务",
  "secondary_route": "R01",
  "secondary_route_label": "入口工具",
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 4,
    "usage_frequency": 2,
    "alternative_maturity": 4,
    "payment_evidence": 3,
    "user_clarity": 4,
    "acquisition_clarity": 3,
    "delivery_complexity": 2,
    "liability_risk": 3,
    "maintenance_cost": 2,
    "reuse_value": 5,
    "stage_fit": 4
  },
  "risk_gates": [],
  "matched_rules": [
    "S02>=4 AND S03<=2 AND S09<=3 → R02",
    "S04>=4 AND S05>=3 AND S08<=3 → R02"
  ],
  "blocked_by": [],
  "next_action": "竞品搜索 + 社区需求验证 + 免费入口页测试",
  "do_not_build": [
    "法律咨询服务",
    "自动合规检查",
    "多语言自动翻译",
    "自定义域名和品牌定制",
    "企业私有化部署"
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
