# 示例评估：Stripe 支付管理面板

## 产品想法

做一个支付管理 SaaS，让小型电商商家在 Stripe 之上管理退款、账单、客户和订阅。不自己处理支付，只做 Stripe 的管理层。

---

## 1. 产品想法复述

> 用一句话复述产品想法，确认理解一致。

**想法：** 做一个面向小型电商商家的 Stripe 管理面板，封装 Stripe 的退款、账单、客户、订阅等复杂 API，提供简化的统一管理界面，不自己处理支付，不替代 Stripe。

---

## 2. 目标用户

- **小型电商商家**：使用 Shopify、WooCommerce 或自建电商站，月交易量在几百到几千笔之间
- **独立 SaaS 创业者**：使用 Stripe 收款，需要管理订阅和客户但不想每次都进 Stripe Dashboard
- **微型团队**：1-5 人的电商运营团队，没有专职财务人员，需要一个人快速处理退款和对账

典型画像：小王开了一个 Shopify 店铺卖手工皮具，每月 300-500 笔订单，使用 Stripe 收款。他每次需要处理退款或查看客户订阅状态时，都要在 Stripe 的复杂 Dashboard 里找半天。他想要一个更简单的界面。

---

## 3. 触发场景

用户在以下具体场景下会想到使用这个产品：

1. **客户要求退款**：客户发邮件说「我要退款」，商家需要快速找到该笔交易并执行退款操作。Stripe Dashboard 的退款流程涉及多步点击和确认，商家希望有一个更直观的退款界面。

2. **月底对账**：月底需要查看本月收入、退款总额、手续费明细。商家当前需要从 Stripe 导出 CSV 然后在 Excel 里手动整理，希望有清晰的账单汇总面板。

3. **客户询问订阅状态**：客户问「我还在订阅吗？下次什么时候扣款？」，商家需要快速查询客户信息和订阅周期。Stripe Dashboard 的客户和订阅数据分散在不同页面。

4. **订阅修改**：客户要求升级/降级订阅套餐，商家需要操作 Stripe 的 subscription update API。当前需要在 Stripe Dashboard 的多个菜单间切换。

5. **交易异常排查**：某笔交易显示 pending 或 failed，商家需要查看详情并决定是否重试或取消。

---

## 4. 证据表

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E001 | 正面证据 | competitor_observation | ProfitWell、Baremetrics、ChartMogul、Littledata 等 Stripe 上层工具有大量付费用户，证明「Stripe 管理增强层」有独立市场 | A | S04, S05 |
| E002 | 正面证据 | web_research | Stripe 官方论坛和 Reddit r/stripe 上大量小型商家反馈 Stripe Dashboard「太复杂」「找不到退款按钮」「对账很痛苦」 | B | S02, S06 |
| E003 | 正面证据 | competitor_observation | Stripe App Marketplace 上有 100+ 个第三方管理应用，其中「退款管理」「订阅管理」「客户洞察」类应用有数千安装量 | B | S01, S07 |
| E004 | 正面证据 | web_research | Stripe API 文档完善，有成熟的 SDK（Node.js、Python、Ruby 等），封装开发成本可控 | B | S08 |
| E005 | 正面证据 | competitor_observation | Chargebee、Recurly 等订阅管理工具年收入千万美元级别，证明「简化支付/订阅管理」是已验证的市场需求 | A | S04, S05 |
| E006 | 反面证据 | competitor_observation | Stripe 官方 Dashboard 持续改进，2025-2026 年多次更新了退款流程和 Revenue Recognition 功能，可能压缩第三方封装空间 | B | S02, S04 |
| E007 | 反面证据 | manual | 产品功能高度依赖 Stripe API 的稳定性和权限，Stripe 更改 API 或限制权限时产品可能受影响 | C | S08, S10 |
| E008 | 反面证据 | web_research | 部分 Stripe 第三方工具（如 ProfitWell 的免费版）因 Stripe 官方功能增强而被迫转型或关闭 | B | S02, S04 |
| E009 | 正面证据 | manual | 合理推理：小型电商商家通常没有专职财务，Stripe Dashboard 的「财务级」界面与他们的使用习惯不匹配 | C | S02, S06 |

---

## 5. 反证表

| ID | 反证/风险 | 影响 | 置信度 |
|---|---|---|---|
| CE001 | Stripe 官方 Dashboard 功能持续增强，可能逐步覆盖第三方封装的核心价值 | S02 痛点可能随时间减弱，S04 替代方案变强 | B |
| CE002 | 依赖 Stripe API 的可用性和限速策略 — 如果 Stripe 宕机，产品完全不可用 | S09 责任风险升高（虽然不是自己的故障但用户会怪你），S10 维护需要监控 Stripe 状态 | A |
| CE003 | Stripe API 版本升级可能引入 breaking changes，需要持续跟进 | S10 维护成本增加，每次 API 升级都可能需要适配 | B |
| CE004 | ProfitWell、Baremetrics、ChartMogul 等竞品功能完善且已有品牌认知 | S04 替代方案成熟，S05 用户可能选择知名品牌而非新工具 | A |
| CE005 | 部分小型商家认为 Stripe Dashboard 已经「够用了」，不需要额外付费的工具 | S02 痛点可能被高估，S05 付费意愿可能低于预期 | B |
| CE006 | 获取 Stripe API 敏感权限（退款操作）需要用户高度信任，新产品的信任建立周期长 | S07 获客路径受阻，用户不愿将 Stripe 敏感权限交给新工具 | B |

---

## 6. 评分表

| 维度 ID | 维度 | 分数 | 依据 | 命中锚点 | 置信度 |
|---|---|---|---|---|---|
| S01 | 触发场景明确度 | 4 | 客户退款请求、月底对账、订阅状态查询、交易异常排查 — 均为可预测的外部驱动事件 | 能举出明确触发事件，如收款、客户投诉 | B |
| S02 | 痛点强度 | 4 | Stripe Dashboard 复杂度过高，小型商家处理退款和对账效率低下。不用会影响客户体验和运营效率 | 不用会影响运营、交付或客户体验 | B |
| S03 | 使用频率 | 3 | 小型商家平均每周处理 2-5 次退款、每周 1-2 次对账查看、数次客户订阅查询 | 每周 1-3 次 | B |
| S04 | 替代方案成熟度 | 4 | Stripe Dashboard 本身、ProfitWell、Baremetrics、ChartMogul、Chargebee、Recurly 均为成熟竞品，但各有缺陷（太贵、太复杂、不专注小型商家） | 成熟竞品存在，用户有付费习惯，但仍有差异化空间 | A |
| S05 | 付费意愿证据 | 4 | ProfitWell 付费版、Baremetrics（$108/月起）、ChartMogul 等竞品证明用户愿意为 Stripe 上层管理工具付费 | 竞品付费用户多、市场已被验证 | A |
| S06 | 用户群体明确度 | 3 | 小型电商商家、独立 SaaS 创业者、微型运营团队 — 画像可描述，但缺少访谈和调研数据支撑 | 能描述具体画像 | B |
| S07 | 获客路径清晰度 | 3 | Stripe App Marketplace 分发 + SEO 关键词（"Stripe refund management"、"Stripe billing dashboard"、"simplify Stripe"） | 有 1-2 条可验证的获客路径 | B |
| S08 | 交付复杂度 | 3 | 1-3 个月，1-2 人。核心工作是调用 Stripe API + 构建管理界面。不需要支付基础设施、不需要 PCI 合规底层、不需要清算系统 | 1-3 个月，需要 1-2 人 | B |
| S09 | 责任风险 | 3 | 产品不处理支付本身，但管理界面展示的数据准确性有中等影响 — 显示错误的退款状态可能导致商家误操作。Stripe 负责资金安全，封装层负责展示准确性 | 有中等影响（如数据不准确、短期服务中断） | B |
| S10 | 维护成本 | 3 | 需要持续关注 Stripe API 版本变更、安全补丁、Dashboard 迭代。不需要 7×24 值班或 SLA 承诺 | 需要持续关注，有定期维护需求 | B |
| S11 | 复用价值 | 3 | 核心是 Stripe 专用封装，但部分 UI 组件（账单表格、退款流程、客户搜索、状态面板）可复用到其他支付管理场景 | 部分模块可复用 | B |
| S12 | 当前阶段适配度 | 3 | 技术栈匹配（Web 应用 + API 封装），但需要学习 Stripe API 细节和支付领域知识。资源基本到位，但建议先验证需求 | 基本匹配，但需要学习新技能 | B |

---

## 7. 置信度惩罚

| 维度 | 原始分数 | 限制后分数 | 原因 | 证据等级 |
|---|---|---|---|---|
| S02 | 4 | 4 | 有 B 级证据支撑（Stripe 论坛、Reddit 讨论），无惩罚 | B |
| S06 | 3 | 3 | 画像可描述但无 A 级证据（缺少用户访谈），原始分即为 3，未触发上限 | B |

> S01、S04、S05 有 A/B 级证据支撑，其余维度均为 B 级。无维度触发 E01（上限 3）或 E02（上限 2）惩罚。但整体证据多为间接证据（竞品观察 + 公开讨论），缺少直接用户访谈和真实付费验证。

**整体置信度评级：** B（中高） — 关键维度（S01、S02、S05、S06、S07）均有 B 级或以上证据支撑，但缺少 A 级直接证据（用户访谈、真实付费验证）。竞品观察可提供充分的市场信号，但无法替代对目标用户群「小型电商商家」的直接验证。

---

## 8. 风险门槛

### 命中的风险门槛

> 本产品未触发任何风险门槛。S09（责任风险）= 3 且 S08（交付复杂度）= 3，均未达到触发阈值（需同时 >= 4）。

（无命中的风险门槛）

### 未命中的风险门槛

| 门槛 ID | 名称 | 为什么未命中 |
|---|---|---|
| **G01** | **支付与资金风险** | **已检查，但未触发。** 这是本评估的关键教学点：产品涉及支付相关术语（退款、账单、订阅），所以 G01 必须被检查。但产品不自己处理支付、不存储支付信息、不计算资金、不管账户余额。所有支付处理由 Stripe 完成，产品只做管理展示层。**封装支付管理层 ≠ 自己造支付系统。** 这正是 R04 第三方封装路由的核心逻辑：利用成熟的底层服务，在上层提供简化体验，而不是替代底层。风险窄化建议：使用 Stripe API 的只读 + 操作权限，不存储信用卡信息，不绕过 Stripe 处理任何资金。对用户的免责声明中明确标注「本产品不处理支付，所有资金操作由 Stripe 执行」。 |
| G02 | 身份认证风险 | 产品自身需要用户注册和登录，但使用 Auth0 / Clerk / Supabase Auth 等成熟方案即可，不需要从零造认证系统。权限管理仅限于产品自身的用户角色，不涉及 Stripe 账户权限体系。 |
| G03 | 邮件送达风险 | 非核心邮件发送。产品可能发送通知邮件（退款完成提醒等），但邮件不是核心功能，可使用 Resend / SendGrid 等成熟服务。 |
| G04 | 隐私与合规风险 | 产品展示 Stripe 的客户和交易数据，属于只读展示层。不额外收集或存储敏感个人数据。用户数据（Stripe 账户关联）通过 Stripe OAuth 授权，数据安全边界由 Stripe 控制。 |
| G05 | 视频、存储、带宽风险 | 不涉及视频、大文件存储或高带宽内容分发。 |
| G06 | 核心通知风险 | 通知是辅助功能（退款完成通知等），不是核心依赖。通知延迟不影响产品的核心价值。 |
| G07 | 客服可靠性风险 | 产品是管理工具，不是客服系统本身。 |
| G08 | 部署与基础设施 SLA 风险 | 标准的 Web 应用部署（Vercel / Railway / Fly.io），不需要高可用性架构、自动扩缩容或多区域部署。 |

---

## 9. 路由判断

**主路由：** R04 — 第三方封装 / 集成层

**副路由：** R02 — 货架服务（可标准化自助购买，作为长期货架产品运营）

**命中的路由规则：**

- **路由规则 8：** S04 >= 4（多个成熟竞品）且 S05 >= 3（付费意愿明确）且 S08 <= 3（交付可控）→ 可以考虑 R02 货架服务。这解释了为什么 R02 是副路由。
- **R04 适合条件命中：** 底层 Stripe API 功能强大但复杂（S04 >= 4），存在成熟的第三方服务，核心价值在于简化、整合、统一管理界面，不需要从零造支付底层。
- **硬性规则检查：** S09（3）和 S08（3）均未达到 >= 4，不触发 R07。S02（4）和 S03（3）不触发规则 2（需要 S03 <= 2）。所有硬性规则已检查，无强制路由覆盖。

**为什么不是其它路线：**

- **R01 入口工具**：S05（付费意愿）= 4，用户愿意付费，不适合做免费入口工具。而且交付复杂度 S08=3，超过入口工具的轻量阈值（S08 <= 2）。这不是一个可以用 SEO 免费工具获客然后靠广告变现的产品。
- **R02 货架服务**：符合 R02 的条件（S04>=4, S05>=3, S08<=3），可以作为标准化 SaaS 运营。但产品的核心价值本质上是「封装 Stripe 复杂 API」而不是提供独立于 Stripe 的新服务。R04 更准确地描述了产品的技术本质。R02 是合理的副路由 — 如果管理层的独立价值（更好的 UX、更快的操作流程、针对小型商家的简化）足够强，可以升级为 R02 为主路由。
- **R03 内部基础设施**：面向外部付费用户，不是内部工具。S11（复用价值）= 3，不是高复用型基础设施。
- **R05 销售型服务**：小型电商商家的客单价低，不需要定制化接入、合同谈判或人工培训。产品应该标准化、自助购买。
- **R06 内容或社区产品**：核心价值是工具功能（管理面板），不是内容或社群。没有内容或社区属性。
- **R07 高风险基础设施，暂缓**：S09 = 3, S08 = 3，不触发 R07 的硬性条件（需要同时 >= 4）。产品不造支付网关，不存储信用卡信息，不处理资金清算。**这正是本评估的核心教学点：封装 Stripe 不是造支付系统。R07 是用来拦截「做一个完整支付处理平台」这种想法的，不是用来拦截「做一个 Stripe 管理面板」这种想法的。**
- **R08 只适合做功能**：作为独立产品，用户感知价值足够 — 商家需要一个专门的界面来管理支付，而不是在现有产品中加一个标签页。Stripe App Marketplace 上有大量独立管理应用证明了独立价值。
- **R09 信息不足，先调研**：关键维度（S01, S02, S05, S06, S07）证据等级分布为 A/B，不满足 R09 触发条件（需 3 个以上 D 级）。不需要更多调研即可做出路由判断。

---

## 10. MVP 边界

**第一版只做什么：**

1. **退款管理面板**：列表展示近期交易，支持搜索客户邮箱/交易 ID，一键发起全额或部分退款，显示退款状态
2. **账单概览仪表板**：本月收入、退款总额、手续费汇总，按日/周/月的简单趋势图
3. **客户列表与搜索**：展示 Stripe 客户列表，查看客户详情（历史交易、当前订阅、发票记录）
4. **订阅列表与状态管理**：展示所有活跃/已取消订阅，可视化管理订阅周期、套餐信息

**明确不做什么：**

1. 不做支付处理 — 不收单、不清算、不处理资金
2. 不做 PCI-DSS 合规底层 — 不存储信用卡信息
3. 不做多支付渠道聚合（PayPal、支付宝等）— 第一版仅支持 Stripe
4. 不做自动化财务对账和会计系统集成
5. 不做高级分析（MRR、Churn、LTV 预测）

> ⚠️ **反模式警告：不要把这个产品过度建设成支付平台。** 产品的价值在于「让小型商家更容易使用 Stripe」，而不是「做一个比 Stripe 更好的 Stripe」。每次想加新功能时，先问自己：「Stripe 本身已经做了这个吗？」如果 Stripe 已经做了，就只做封装和简化，不要重建。如果发现自己在写支付处理逻辑、PCI 合规代码、或者清算账本，立即停止 — 你已经越界了。

**依赖哪些第三方服务：**

| 服务 | 用途 | 替代方案 |
|---|---|---|
| Stripe API | 所有支付数据源、退款操作、客户管理、订阅管理 | 无（产品定位就是 Stripe 专用） |
| Auth0 / Clerk | 用户认证 | Supabase Auth, NextAuth |
| Vercel / Railway | 应用部署和托管 | Fly.io, Render |
| Resend | 通知邮件（退款完成、对账提醒） | SendGrid, Postmark |
| Upstash / Redis | Stripe API 响应缓存（降低 API 调用频率） | 自建 Redis |

**不承诺哪些责任：**

1. 不承诺支付处理 SLA — 支付可用性由 Stripe 负责，产品在状态页上明确标注 Stripe 系统状态
2. 不承诺资金安全 — 所有资金操作在 Stripe 侧完成，产品不接触资金流
3. 不承诺数据实时性 — 数据从 Stripe API 获取，可能存在缓存延迟（明确标注更新时间）
4. 不承诺 Stripe API 兼容性 — Stripe API 升级可能导致产品暂时不可用，在服务条款中明确说明

---

## 11. 不做清单

1. ❌ **不做支付处理系统** — 不收单、不清算、不处理资金、不管理 Stripe Connect 资金流。Stripe 已经在做这个，而且做得很好。你的价值是简化管理体验，不是重建支付基础设施。
2. ❌ **不做 PCI-DSS 合规认证** — 不存储信用卡号、CVV、完整卡信息。所有敏感支付数据由 Stripe 管理和保护。
3. ❌ **不做多支付渠道聚合** — 第一版不做 PayPal、支付宝、微信支付等渠道的统一管理。专注 Stripe，避免在每个渠道的 API 差异中迷失方向。
4. ❌ **不做自动化财务/会计系统** — 不生成税务报表、不做复式记账、不集成 QuickBooks/Xero。这些是另一个产品方向（财务 SaaS），复杂度远超支付管理层。
5. ❌ **不做 Stripe Connect 平台管理** — 不做 marketplace 的资金分账、不做 Connect 账户的 onboarding 流程管理。Connect 的复杂度远高于普通 Stripe 账户管理，属于不同产品方向。
6. ❌ **不做高级数据分析引擎** — 不计算 MRR、ARR、Churn Rate、LTV、Cohort Analysis。这些是 ProfitWell / Baremetrics 的核心领域，他们做得很好。你的产品可以做简单的汇总展示，但不做预测模型。
7. ❌ **不做 Stripe 替代品或竞品** — 不提供独立的支付处理能力。产品永远是 Stripe 的上层，不是 Stripe 的替代。如果 Stripe 某天关闭 API，产品就没有存在的意义。在商业计划中坦诚面对这个依赖。

---

## 12. 最低成本验证动作

### 动作 1：Stripe Dashboard 痛点访谈

**目标：** 验证小型电商商家是否真的觉得 Stripe Dashboard 不够用，以及他们最痛的功能是什么

**具体步骤：**
1. 在 Shopify 社区、Reddit r/stripe、Indie Hackers 发帖：「作为小型电商商家，你在使用 Stripe Dashboard 处理退款和对账时最痛苦的是什么？」
2. 筛选回复中 3-5 位愿意聊的商家，安排 15 分钟视频或文字访谈
3. 重点问：你现在怎么处理退款的？（录屏最好）你一周用几次 Stripe Dashboard？你愿意为简化的管理面板付多少钱？
4. 整理访谈记录，确认最痛的功能是否与 MVP 假设一致

**预计时间：** 2 天

---

### 动作 2：Stripe API 权限验证与技术原型

**目标：** 验证 Stripe API 是否能支持 MVP 列出的所有功能，以及开发成本的真实范围

**具体步骤：**
1. 注册 Stripe 测试账号，创建测试数据（50+ 笔交易、20+ 客户、10+ 订阅）
2. 搭建最小原型：一个简单的 Web 页面，用 Stripe Node.js SDK 调用以下 API：
   - List refunds + create refund
   - List customers + retrieve customer
   - List subscriptions + update subscription
   - List payment intents + balance transactions
3. 记录每个 API 的权限要求、调用频率限制、响应时间、数据完整性
4. 评估从原型到 MVP 还需要多少开发量

**预计时间：** 2 天

---

### 动作 3：Stripe App Marketplace 竞品扫描 + 定价验证

**目标：** 确认市场空间和定价锚点

**具体步骤：**
1. 浏览 Stripe App Marketplace，列出所有「退款管理」「账单管理」「客户管理」「订阅管理」类应用
2. 对每个竞品记录：安装量、评分、评语内容（特别是差评里提了什么需求没被满足）、定价
3. 在 Google 搜索 "Stripe refund management tool"、"Stripe billing dashboard"、"simplify Stripe dashboard"、"best Stripe analytics for small business"，记录搜索结果中的竞品和搜索量估计
4. 整理一份竞品矩阵（功能 vs 定价 vs 目标用户），确认你的差异化定位（小型商家 + 简化体验 + 更低价格）是否有空间

**预计时间：** 1.5 天

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

- **还缺哪些竞品信息：** Stripe App Marketplace 上竞品的实际安装量、月活用户数、定价策略。ProfitWell / Baremetrics / ChartMogul 面向小型商家的具体定价和使用数据。
- **还缺哪些搜索关键词：** "Stripe refund management"、"Stripe dashboard alternative for small business"、"simplify Stripe billing"、"Stripe subscription manager for Shopify" 等关键词的搜索量和竞争度。
- **还缺哪些用户行为证据：** 小型商家使用 Stripe Dashboard 的具体行为数据 — 多少比例的商家每周处理退款？他们平均在 Stripe Dashboard 上花多少时间？有多少商家安装了第三方 Stripe 管理应用？
- **还缺哪些相似案例：** 是否有其他 Stripe 封装工具从小功能起步的成功案例？是否有类似产品失败的经验教训？
- **还缺哪些价格基准：** Baremetrics、ChartMogul、ProfitWell 的最低定价和付费转化率。小型电商商家愿意为「简化 Stripe Dashboard」支付的月费范围。
- **还缺哪些历史复盘记录：** 之前是否有类似「做 XX API 的管理层封装」的项目评估？有什么经验可以复用？

### 人工调研关键词

```
🔍 人工调研关键词：
- S02 痛点强度 → "Stripe dashboard too complex", "Stripe refund process painful", "Stripe billing management for small business"
- S04 替代方案 → "Stripe management tools", "Stripe dashboard alternative", "Stripe App Marketplace billing apps"
- S05 付费意愿 → "ProfitWell pricing", "Baremetrics pricing small business", "ChartMogul pricing", "Stripe analytics tool cost"
- S06 用户群体 → "small ecommerce Stripe user pain points", "Shopify Stripe refund workflow", "WooCommerce Stripe management"
- S07 获客路径 → "Stripe refund management tool" search volume, "best Stripe dashboard" Google Trends, Stripe App Marketplace traffic
```

### 推荐外部工具

如果未来接入 MCP，可以优先使用：

- `product_route.case_search` — 搜索「第三方 API 封装」「支付管理层」相似案例
- `product_route.competitor_search` — 自动调研 Stripe App Marketplace 竞品
- `product_route.keyword_search` — 查询 "Stripe refund management" 等关键词搜索量
- `product_route.pricing_lookup` — 查询 Baremetrics、ChartMogul、ProfitWell 价格基准
- `product_route.history_query` — 查询是否有类似 API 封装层产品的历史评估

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
  "idea": "做一个支付管理 SaaS，让小型电商商家在 Stripe 之上管理退款、账单、客户和订阅。不自己处理支付，只做 Stripe 的管理层",
  "main_route": "R04",
  "main_route_label": "第三方封装 / 集成层",
  "secondary_route": "R02",
  "secondary_route_label": "货架服务",
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 4,
    "usage_frequency": 3,
    "alternative_maturity": 4,
    "payment_evidence": 4,
    "user_clarity": 3,
    "acquisition_clarity": 3,
    "delivery_complexity": 3,
    "liability_risk": 3,
    "maintenance_cost": 3,
    "reuse_value": 3,
    "stage_fit": 3
  },
  "risk_gates": [],
  "matched_rules": [
    "路由规则8：S04>=4 AND S05>=3 AND S08<=3 → 可考虑 R02 货架服务",
    "R04 适合条件：底层 Stripe API 复杂 + 存在成熟第三方 + 核心价值是简化整合 + 不需要从零造底层"
  ],
  "blocked_by": [],
  "next_action": "先做 Stripe Dashboard 痛点访谈 + Stripe API 技术原型验证 + 竞品扫描，确认核心痛点和差异化空间后开始 MVP 开发。MVP 范围：退款管理 + 账单概览 + 客户搜索 + 订阅列表，严禁越界做支付处理",
  "do_not_build": [
    "支付处理系统（不收单、不清算、不处理资金）",
    "PCI-DSS 合规底层（不存储信用卡信息）",
    "多支付渠道聚合（PayPal、支付宝等）",
    "自动化财务/会计系统（QuickBooks/Xero 集成、税务报表）",
    "Stripe Connect 平台管理",
    "高级数据分析引擎（MRR/ARR/Churn/LTV 预测）",
    "Stripe 替代品或独立支付处理能力"
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
