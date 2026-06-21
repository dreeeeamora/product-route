# Product Route Report

## 1. 产品想法复述

> 用一句话复述产品想法，确认理解一致。

**想法：** 为 3-5 人小团队构建内部 CI/CD 统一面板，在一个界面中聚合 GitHub Actions 运行状态、Vercel/Railway 部署日志和环境变量管理，不对外销售。

---

## 2. 目标用户

- 团队内的 3-5 名全栈开发者，日常使用 GitHub Actions 做 CI、Vercel 和 Railway 做部署
- 技术栈涉及前端（Vercel）和后端/服务（Railway），需要在多个平台间切换查看部署状态
- 对内部工具有自主开发和维护能力，不需要外部用户管理、多租户或计费

---

## 3. 触发场景

- 代码推送到 GitHub 后，想在一个面板中看到 Actions 是否通过、Vercel/Railway 是否部署成功，而不是逐个打开 3 个标签页
- 部署失败或报警时，快速定位是 CI 阶段出错（GitHub Actions）还是部署阶段出错（Vercel/Railway）
- 需要修改环境变量（如 API Key、数据库连接串）时，不用分别登录 Vercel 和 Railway 后台
- 发布前检查所有服务的部署状态和环境变量配置是否一致

---

## 4. 证据表

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E001 | 正面证据 | web_research | GitHub Actions、Vercel、Railway 均提供公开 REST API，可用于获取运行状态、部署日志和环境变量 | B | S08 |
| E002 | 正面证据 | web_research | 已有商业 CI/CD 聚合产品（Sleuth、Codefresh、Buildkite Dashboard）验证了统一面板的市场需求 | B | S01, S04 |
| E003 | 正面证据 | web_research | 开发者社区（Reddit r/devops、Hacker News、V2EX）多次出现关于"如何在一个地方看到所有部署状态"的讨论 | B | S02, S06 |
| E004 | 正面证据 | web_research | 商业 CI/CD 聚合工具按座位定价 $15-$50/月，表明存在付费市场（虽然本项目不打算收费） | B | S05 |
| E005 | 正面证据 | manual | 团队当前部署流程：push 代码后分别打开 GitHub / Vercel / Railway 3 个标签页检查状态，每次耗时 3-5 分钟 | C | S02, S03 |
| E006 | 正面证据 | web_research | 多个小团队技术博客（Dev.to、Medium）记录了自建内部部署面板的实践，架构模式可参考 | B | S06, S11 |
| E007 | 正面证据 | manual | API 聚合 + 面板展示的架构可复用到监控聚合、日志聚合、状态页等多种内部工具场景 | C | S11 |
| E008 | 正面证据 | web_research | GitHub API v3/v4、Vercel REST API、Railway GraphQL API 均有稳定版本和文档，学习成本可控 | B | S08, S10 |
| E009 | 正面证据 | manual | 团队 3-5 人均有 Node.js/TypeScript + React 技术栈，与 API 聚合面板的技术需求匹配 | C | S12 |

---

## 5. 反证表

| ID | 反证/风险 | 影响 | 置信度 |
|---|---|---|---|
| CE001 | 团队仅 3-5 人，手动切换 3 个标签页查看部署状态的耗时有限（每次 3-5 分钟），开发统一面板需要 1-2 个月，投入产出比需要评估 | 削弱 S02 痛点强度 | B |
| CE002 | GitHub Actions 本身的 UI 已包含运行日志、状态徽章和通知，Vercel 和 Railway 也有各自的部署面板和 Slack 通知 | 降低统一面板的边际增量价值 | B |
| CE003 | 各平台 API 各自独立迭代（如 GitHub Actions API 的 breaking changes、Vercel API v2 迁移），面板需要持续跟进 API 变更 | 提升 S10 维护成本 | B |
| CE004 | 不对外销售意味着开发和维护成本完全由团队内部承担，无法通过外部收入分摊 | 影响 S12 阶段适配评估 | C |
| CE005 | 存在开源方案如 Concourse CI 监控面板、Drone CI Dashboard 可作为替代，虽然不直接聚合 Vercel/Railway | 削弱 S04 替代方案稀缺性 | C |

---

## 6. 评分表

| 维度 ID | 维度 | 分数 | 依据 | 命中锚点 | 置信度 |
|---|---|---|---|---|---|
| S01 | 触发场景明确度 | 4 | 代码推送、部署启动、环境变量变更、发布前检查——均为明确触发事件 | 明确触发事件，如代码推送、部署启动、环境变量变更、发布前检查 | B |
| S02 | 痛点强度 | 3 | 每次部署需手动在 3 个平台间切换标签页查看状态，造成明显不便，但不影响核心部署功能本身 | 不用会造成明显麻烦，用户会主动寻找替代方案 | B |
| S03 | 使用频率 | 3 | 小团队每周部署 3-5 次（按敏捷迭代节奏），每次部署都会查看面板 | 每周 1-3 次 | B |
| S04 | 替代方案成熟度 | 2 | 目前通过手动切换 GitHub/Vercel/Railway 标签页解决，无直接竞品聚合了这三个特定平台的组合 | 用户用零散的手工方式勉强解决 | B |
| S05 | 付费意愿证据 | 1 | 团队明确只做内部使用，不打算对外销售；市场虽有商业聚合工具存在，但本项目不考虑付费模式 | 没有任何付费信号，用户普遍认为这应该是免费的 | B |
| S06 | 用户群体明确度 | 4 | 用户为团队内 3-5 名开发者，技术栈明确（GitHub Actions + Vercel + Railway），类似团队需求在社区有记录 | 能描述具体画像并有证据支撑 | B |
| S07 | 获客路径清晰度 | 1 | 无外部获客计划，团队明确不做对外销售和推广 | 完全不知道用户从哪里来 | B |
| S08 | 交付复杂度 | 3 | 对接 GitHub REST API + Vercel REST API + Railway GraphQL API + 前端面板，预计 1-2 个月单人可交付 MVP | 1-3 个月，需要 1-2 人 | B |
| S09 | 责任风险 | 2 | 主要是只读面板，环境变量写入可加二次确认；内部使用，出问题不影响外部客户 | 有轻微影响（如体验下降、临时不可用） | B |
| S10 | 维护成本 | 3 | 各平台 API 偶有版本升级（如 Vercel API v2），需定期关注变更日志并适配，但维护量可控 | 需要持续关注，有定期维护需求 | B |
| S11 | 复用价值 | 4 | API 聚合 + 统一面板的架构可复用到监控聚合、日志聚合、状态页、多平台配置管理等多种内部场景 | 大部分可复用到多个场景，或可作为平台基础 | B |
| S12 | 当前阶段适配度 | 3 | 团队有技术能力且存在真实需求，但 1-2 个月的开发投入与当前业务优先级需要权衡 | 基本匹配，但需要调整范围或学习新技能 | C |

---

## 7. 置信度惩罚

> 列出哪些维度因为证据不足被限制了分数。

| 维度 | 原始分数 | 限制后分数 | 原因 | 证据等级 |
|---|---|---|---|---|
| S12 | 4 | 3 | 规则 E01：S12 仅有 C 级证据（个人评估，无外部验证），原始分数最高只能打 3 分 | C |

**整体置信度评级：** B

> 说明：5 个关键维度（S01、S02、S05、S06、S07）均有 B 级证据支撑；12 个评分维度中 10 个有 B 级证据，1 个为 C 级（S12），1 个为 C 级但不触发惩罚（S03 原始分在 C 级上限内）。整体证据质量达到 B 级标准。

---

## 8. 风险门槛

### 命中的风险门槛

无触发。S09 = 2（< 4），S08 = 3（< 4），不满足高风险基础设施门槛触发条件（S09 >= 4 且 S08 >= 4）。

### 未命中的风险门槛

| 门槛 ID | 名称 | 为什么未命中 |
|---|---|---|
| G01 | 支付与资金风险 | 产品不涉及任何支付处理、资金计算或账户余额管理 |
| G02 | 身份认证风险 | 内部工具，无需用户注册、登录或多租户权限隔离；可选接入团队已有的 GitHub OAuth 做身份校验，但不涉及从零造认证系统 |
| G03 | 邮件送达风险 | 产品不涉及发送事务邮件或营销邮件 |
| G04 | 隐私与合规风险 | S09 = 2，仅做只读面板和内网使用，不收集外部用户数据、不跨地区传输数据 |
| G05 | 视频、存储、带宽风险 | 不涉及视频托管、大文件存储或高带宽内容分发 |
| G06 | 核心通知风险 | 不依赖实时 Push/WebSocket 作为核心功能（可选加轮询刷新，但非核心） |
| G07 | 客服可靠性风险 | 不涉及客服系统、工单系统或实时聊天 |
| G08 | 部署与基础设施 SLA 风险 | 内部工具无需承诺高可用 SLA、多区域部署或自动扩缩容 |

---

## 9. 路由判断

**主路由：** R03 — 内部基础设施

**副路由：** 无

**命中的路由规则：**
- 硬性规则 4：S11 >= 4（复用价值 = 4）且 S07 <= 2（获客路径 = 1）→ R03 内部基础设施

**为什么不是其它路线：**
- R01（入口工具）：S07 = 1（远低于 R01 要求的 S07 >= 3），团队无外部获客计划；S05 = 1，且产品定位是内部使用而非对外免费入口；R01 面向外部用户获取流量，与本产品的内部定位根本冲突
- R02（货架服务）：S05 = 1（无付费意愿），远低于 R02 要求的 S05 >= 3；产品不面向外部付费用户，不做标准化自助购买；虽然存在低频强痛点的可能，但硬性规则 4 指向 R03 更适配
- R04（第三方封装）：核心价值是 API 聚合和统一面板，而非封装某个底层复杂服务降低使用门槛；GitHub/Vercel/Railway 本身的 API 并不复杂难用，聚合的价值大于封装的价值
- R05（销售型服务）：完全不需要销售介入、定制接入或合同谈判；无外部付费客户；产品仅限内部使用
- R06（内容或社区产品）：核心价值是工具/面板功能，不是内容、知识或社群关系；无内容创作或社区运营计划
- R07（高风险基础设施，暂缓）：S09 = 2（< 4），S08 = 3（< 4），不触发 R07 门槛；产品是 API 聚合只读面板，不是从零造 CI/CD 平台
- R08（只适合做功能）：跨平台聚合的价值（GitHub + Vercel + Railway 三合一）足以支撑独立产品形态；作为任一单个平台的功能模块都无法解决跨平台聚合的核心痛点
- R09（信息不足，先调研）：5 个关键维度均有 B 级证据，未触发 R09 的 3 个 D 级证据条件；S06 = 4（> 2），S01 = 4（> 2），用户和场景均明确

---

## 10. MVP 边界

**第一版只做什么：**

1. GitHub Actions 运行状态只读面板（最近 20 次 workflow runs，含状态、耗时、分支信息）
2. Vercel + Railway 最新部署状态只读面板（部署状态、时间戳、commit hash）
3. 环境变量集中查看（Vercel + Railway 的 env vars 只读列表，不包含值以降低安全风险）
4. 简单的筛选和搜索（按项目/分支/状态过滤）

**明确不做什么：**

1. 不做环境变量的在线编辑和写回（第一版只读，避免误操作风险）
2. 不做实时 WebSocket 推送（使用定时轮询即可）
3. 不做历史数据和趋势图表
4. 不做多平台部署触发（不通过面板触发 GitHub Actions 或 Vercel/Railway 部署）

**依赖哪些第三方服务：**

| 服务 | 用途 | 替代方案 |
|---|---|---|
| GitHub REST API | 获取 Actions workflow runs 状态、日志摘要 | 无 — 核心数据源 |
| Vercel REST API | 获取部署状态和项目列表 | 无 — 核心数据源 |
| Railway GraphQL API | 获取部署状态和服务列表 | 无 — 核心数据源 |
| SQLite / 本地文件 | 缓存 API 响应，减少请求频率 | 任何轻量存储 |

**不承诺哪些责任：**

1. 不承诺数据实时性（5 分钟轮询间隔，非实时推送）
2. 不承诺外部服务的可用性（GitHub/Vercel/Railway API 宕机时面板不可用属于上游问题）

---

## 11. 不做清单

> 至少 5 条当前阶段不应该做的东西。

1. ❌ **不做对外商业化** — 不建对外官网、不定价、不做 billing 系统、不做注册登录。内部工具阶段完全不需要这些
2. ❌ **不做多租户/多团队支持** — 面板硬编码为当前团队的项目列表，不设计用户管理和权限系统
3. ❌ **不做从零造 CI/CD 平台** — 不尝试替代 GitHub Actions、Vercel 或 Railway 的任何核心功能，只是聚合展示
4. ❌ **不做实时通知（Slack/钉钉/邮件）** — 第一版不做 Webhook 推送或消息通知集成，团队通过面板主动查看
5. ❌ **不做公共 API** — 不对外暴露 REST/GraphQL API，面板仅供内部 HTTP 访问
6. ❌ **不做移动端适配** — 不做响应式设计或移动 App，仅支持桌面浏览器
7. ❌ **不做部署审批流程** — 不添加 deploy approval、release gate 等企业级 DevOps 功能

---

## 12. 最低成本验证动作

> 3 个具体动作，每个能在 1-3 天内完成。不能写「做市场调研」这种泛话。

### 动作 1：API 可行性快速验证

**目标：** 确认 GitHub Actions、Vercel、Railway 的 API 是否能覆盖面板所需的所有数据字段

**具体步骤：**
1. 用 curl 或 Postman 分别调用 GitHub Actions API（`GET /repos/{owner}/{repo}/actions/runs`）、Vercel API（`GET /v9/deployments`）、Railway API（`deployments` 查询）
2. 检查返回的 JSON 结构，确认是否包含：运行状态、耗时、分支名、commit hash、触发人
3. 检查 API 速率限制（GitHub 5000 req/h 已认证，Vercel 无公开硬限制但有软限制）是否满足 5 分钟轮询频率
4. 记录缺失字段（如某平台不返回 commit message 等），决定是接受缺失还是另寻方案

**预计时间：** 1 天

---

### 动作 2：团队部署工作流映射

**目标：** 画出团队当前完整的部署流程，确认面板的核心交互和默认视图

**具体步骤：**
1. 跟团队 3-5 人分别花 15 分钟记录最近 3 次部署的操作步骤（打开哪些页面、查看了哪些信息、做了什么操作）
2. 把每个人的流程画成泳道图，标注耗时和痛点
3. 合并出公共流程，确定面板的默认视图应该展示什么（如"最近一次部署的状态最重要"还是"所有项目的状态概览最重要"）
4. 输出一页纸的《面板信息架构建议》，包含默认首页布局草稿

**预计时间：** 2 天

---

### 动作 3：单平台最小原型

**目标：** 用最快速度做出一个只聚合 GitHub Actions 的单面板页面，验证技术方案和实际体验

**具体步骤：**
1. 用单个 HTML 文件 + 内嵌 JavaScript 调用 GitHub Actions API，展示最近 10 次 workflow runs
2. 用 GitHub Personal Access Token 认证（不建后端，纯前端 fetch）
3. 页面部署到 localhost，团队成员试用一天
4. 收集反馈：这个单平台面板比直接打开 GitHub Actions 页面好在哪？差在哪？还需要什么信息？

**预计时间：** 2 天

---

## 13. 外部证据缺口

### 外部证据连接状态

| 来源 | 状态 | 说明 |
|---|---|---|
| Case Library | not_connected | 未查询相似产品的案例库 |
| Competitor Research | not_connected | 未使用自动竞品调研工具 |
| Keyword Research | not_connected | 未查询关键词搜索量数据 |
| Pricing Lookup | not_connected | 未查询商业 CI/CD 聚合工具的实时定价 |
| Decision History | not_connected | 未查询内部历史决策记录 |
| MCP Tools | not_connected | 未调用任何 MCP 工具 |

### 当前缺口

- **还缺哪些竞品信息：** Sleuth、Codefresh、Buildkite 的具体定价页、用户数、CLI 集成方式；开源替代方案（如 Drone CI Dashboard）的功能对比
- **还缺哪些搜索关键词：** "CI/CD dashboard for small team"、"GitHub Actions Vercel unified panel"、"internal deployment dashboard" 的搜索量和趋势
- **还缺哪些用户行为证据：** 团队当前在 3 个平台之间切换的实际频率和时间分布数据（可通过浏览器插件记录），类似规模团队自建内部工具的成功/失败案例
- **还缺哪些相似案例：** 其他小团队自建 CI/CD 面板的开源项目、技术博客文章中的实现细节和踩坑记录
- **还缺哪些价格基准：** 商业聚合工具的准确月费、免费版限制、按座位 vs 按用量的定价模式对比
- **还缺哪些历史复盘记录：** 团队之前自建内部工具的投入产出复盘（如果有任何之前的内部工具项目）

### 人工调研关键词

```
🔍 人工调研关键词：
- S04 替代方案 → "CI/CD dashboard aggregator", "GitHub Actions Vercel Railway unified view", "multi-platform deployment monitoring"
- S05 付费意愿 → "Sleuth CI/CD pricing", "Codefresh pricing per seat", "deployment dashboard SaaS pricing"
- S06 用户群体 → "small team CI/CD dashboard", "startup internal deployment tool", "自建部署面板 小团队"
- S07 获客路径 → "developer tools distribution channels", "internal dev tools open source", "CI/CD tool marketplace"
- S11 复用价值 → "internal platform engineering dashboard", "developer portal architecture", "API aggregator pattern"
```

### 推荐外部工具

如果未来接入 MCP，可以优先使用：

- `product_route.case_search` — 搜索类似内部基础设施产品的案例
- `product_route.competitor_search` — 自动调研 CI/CD 聚合面板竞品
- `product_route.keyword_search` — 查询开发者工具关键词搜索量
- `product_route.pricing_lookup` — 查询商业 CI/CD 面板定价基准
- `product_route.history_query` — 查询团队历史内部工具项目决策记录

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
  "idea": "为 3-5 人小团队构建内部 CI/CD 统一面板，在一个界面中聚合 GitHub Actions 运行状态、Vercel/Railway 部署日志和环境变量管理，不对外销售",
  "main_route": "R03",
  "main_route_label": "内部基础设施",
  "secondary_route": "",
  "secondary_route_label": "",
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 3,
    "usage_frequency": 3,
    "alternative_maturity": 2,
    "payment_evidence": 1,
    "user_clarity": 4,
    "acquisition_clarity": 1,
    "delivery_complexity": 3,
    "liability_risk": 2,
    "maintenance_cost": 3,
    "reuse_value": 4,
    "stage_fit": 3
  },
  "risk_gates": [],
  "matched_rules": [
    "S11>=4 AND S07<=2 → R03 内部基础设施"
  ],
  "blocked_by": [],
  "next_action": "API 可行性快速验证 + 团队部署工作流映射 + 单平台最小原型",
  "do_not_build": [
    "对外商业化和 billing 系统",
    "多租户/多团队权限管理",
    "实时通知集成（Slack/钉钉/邮件）",
    "公共 API 对外暴露",
    "移动端适配",
    "部署审批流程",
    "从零造 CI/CD 平台替代品"
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
