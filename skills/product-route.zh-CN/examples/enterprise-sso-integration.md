# 示例评估：企业 SSO 统一集成服务

## 产品想法

给中小企业的 SaaS 产品做统一 SSO 集成服务。帮他们对接客户的 Okta、Azure AD、Google Workspace 身份系统。包括 SAML/OIDC 配置、权限映射、审计日志。

---

## 目标用户

- 面向企业客户销售的 B2B SaaS 产品团队（10-100 人规模）
- 典型画像：刚刚签下第一个企业客户的 SaaS 创始人/CTO，客户 IT 部门发来一份 20 页的安全问卷，第一条就是 "Do you support SAML 2.0 SSO?"
- 已经或正在准备 SOC 2 / ISO 27001 认证的 SaaS 公司
- YC / Techstars 等孵化器中的 B2B SaaS 创业公司

---

## 触发场景

- SaaS 产品签下第一个企业客户，客户 IT 部门要求通过 Okta/Azure AD 登录，否则不签合同
- 企业客户的采购/安全团队发来安全评估问卷，SSO 支持是硬性前置条件
- SaaS 产品需要过 SOC 2 Type II 审计，审计师要求提供 SSO 配置和审计日志证明
- 已有企业客户要求新增一个身份提供商（如从 Okta 扩展到 Azure AD）
- 企业客户内部安全审计发现 SaaS 产品不支持 SSO，要求限期整改否则终止合作

---

## 证据表

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E001 | 正面证据 | competitor_observation | WorkOS 是直接竞品，定价 $99/月起（SSO），$249/月（enterprise），已获多轮融资，证明市场已被验证 | B | S04, S05 |
| E002 | 正面证据 | competitor_observation | Auth0 Enterprise 将 SSO 作为高级功能单独定价，Clerk 的 enterprise tier 也提供 SAML/OIDC 集成，表明企业客户愿意为 SSO 付费 | B | S05 |
| E003 | 正面证据 | web_research | Okta Businesses at Work 年度报告：大型企业平均使用 89 个 SaaS 应用，SSO 是企业管理 SaaS 访问的标配要求 | B | S01, S02 |
| E004 | 正面证据 | web_research | 多个 SaaS 产品（Notion、Linear、Figma、Vercel）将 SSO 作为 Enterprise 定价 tier 的核心功能，月费差异可达数千美元 | B | S05 |
| E005 | 正面证据 | web_research | SOC 2 Type II 审计标准明确要求访问控制和审计日志，SSO 是实现该要求的标准方式 | B | S01, S02 |
| E006 | 正面证据 | web_research | 社区讨论（Hacker News、/r/SaaS、Indie Hackers）中大量开发者抱怨 SAML 集成复杂："Adding SAML SSO was the worst 3 months of my dev life" | B | S02 |
| E007 | 正面证据 | manual | SAML 协议本身规范复杂（XML 签名、证书管理、metadata 交换），需要处理不同 IdP 的方言差异（Okta vs Azure AD vs Google 的行为不完全一致） | C | S08, S10 |
| E008 | 正面证据 | competitor_observation | WorkOS 官方文档中明确列出每种 IdP 的独特配置步骤，多达 20+ 步，验证了「每个客户都需要定制化配置」的判断 | B | S08 |

---

## 反证表

| ID | 反证/风险 | 影响 | 置信度 |
|---|---|---|---|
| CE001 | WorkOS 是成熟且资金充足的直接竞品，拥有品牌认知度和开发者社区，新进入者差异化难度大 | S04 替代方案成熟度、S05 付费意愿（用户可能选 WorkOS 而非新服务） | B |
| CE002 | Auth0 / Clerk 自身也提供 SSO 功能，部分 SaaS 公司可能直接使用这些平台的内置 SSO 而非额外购买集成服务 | S04 替代方案成熟度、客户可能不需要单独的服务层 | B |
| CE003 | SSO 集成本质是一次性配置 + 偶尔维护，客户在使用 6-12 个月后可能不再需要持续付费 → 高流失风险 | S03 使用频率、S10 维护成本（需要持续获客弥补流失） | B |
| CE004 | 企业销售周期长（3-6 个月），涉及安全审查、法务审核、采购流程 → 现金流压力大，不适合资源有限的团队 | S07 获客路径、S12 阶段适配度 | B |
| CE005 | 不同 IdP 持续更新（Okta 改版、Azure AD 升级到 Entra ID），每个变更都可能破坏已有集成 → 隐性维护负担 | S10 维护成本 | B |
| CE006 | 如果配置错误导致权限映射出错，可能造成越权访问（用户 A 看到用户 B 的数据）→ 严重安全事故 | S09 责任风险 | B |

---

## 评分表

| 维度 ID | 维度 | 分数 | 依据 | 命中锚点 | 置信度 |
|---|---|---|---|---|---|
| S01 | 触发场景明确度 | 4 | 企业客户提出 SSO 要求、SOC 2 审计要求、客户 IT 部门安全问卷 — 均为可预测的外部强制事件 | 能举出明确触发事件：签企业客户、安全审计、客户 IT 部门合规要求 | B |
| S02 | 痛点强度 | 4 | 不支持 SSO = 丢失企业客户 = 直接收入损失。SAML 集成复杂，自研需数月，延误客户上线 | 不用会影响上线、运营、收入、交付或客户体验 | B |
| S03 | 使用频率 | 2 | 初始配置为一次性工作；后续偶尔新增 IdP（数月一次）、调整权限映射（每月 1-3 次） | 每月 1-3 次 | B |
| S04 | 替代方案成熟度 | 3 | WorkOS 存在但价格高（$99-$249/月起）；Auth0/Clerk 有 SSO 但非专门服务；自研成本高周期长 | 有几款竞品，但都有明显缺陷或价格过高 | B |
| S05 | 付费意愿证据 | 4 | WorkOS 有付费企业客户；Notion/Linear 等 SSO 功能年差价数千美元；企业 RFP 中 SSO 是必备项 | 有明确付费信号（竞品付费用户多、用户直接表达付费意愿） | B |
| S06 | 用户群体明确度 | 4 | 面向企业客户的 B2B SaaS 产品（10-100 人团队），正在签约或已签约企业客户的创始人/CTO，群体可通过 YC 社区、SaaS 圈子定向触达 | 能描述具体画像并有证据支撑 | B |
| S07 | 获客路径清晰度 | 3 | 通过 SaaS 创业者社区（Hacker News、Indie Hackers）、搜索关键词 "SSO integration service" "SAML setup for SaaS"、企业客户反向推荐触及目标用户 | 有 1-2 条可验证的获客路径 | B |
| S08 | 交付复杂度 | 3 | 基于 Auth0/Clerk 底层构建配置管理界面 + 权限映射 + 审计日志展示，不自己实现 SAML/OIDC 协议。1-3 个月 MVP，1-2 人 | 1-3 个月，需要 1-2 人 | B |
| S09 | 责任风险 | 4 | 认证失败或权限映射错误可导致用户无法登录或越权访问，直接影响客户业务。但使用成熟第三方认证底层（Auth0/Clerk），不自己处理密码和 Token | 有严重影响（认证失败、隐私泄露） | B |
| S10 | 维护成本 | 4 | 每个企业客户需要持续支持（新 IdP 对接、权限调整、故障排查）；需监控各 IdP API 变更；审计日志需合规存储 | 需要专人维护、监控、响应用户问题 | B |
| S11 | 复用价值 | 3 | SSO 配置框架、权限映射模型、审计日志模块可复用到其他场景，但不具备天然平台属性 | 部分模块可复用，或可作为其他产品的组件 | C |
| S12 | 当前阶段适配度 | 3 | 技术可行（Auth0/Clerk 成熟），但需要 B2B 销售经验和企业客户关系，不适合纯技术背景团队 | 基本匹配，但需要调整范围或学习新技能 | C |

---

## 置信度惩罚

### 触发 E01 惩罚的维度

无维度触发。所有评分 >= 4 的维度（S01、S02、S05、S06、S09、S10）均至少具有 B 级证据支撑。

### 证据等级为 C 的维度

| 维度 | 当前分数 | 证据等级 | 是否触发惩罚 | 说明 |
|---|---|---|---|---|
| S11 | 3 | C | 否（分数 <= 3） | 复用价值基于架构推演，缺乏类似产品案例支撑 |
| S12 | 3 | C | 否（分数 <= 3） | 阶段适配度基于自我评估，缺乏外部验证 |

**整体置信度评级：B（中高）**

理由：关键维度（S01、S02、S05、S06、S07）均具有 B 级证据支撑，大部分非关键维度也具有 B 级证据。S11 和 S12 为 C 级但不影响路由结论。整体证据质量达到 B 级标准。

---

## 风险门槛

### 命中的风险门槛

| 门槛 ID | 名称 | 触发原因 | 窄化建议 |
|---|---|---|---|
| G02 | 身份认证风险 | 产品涉及 SSO 集成、OAuth/OIDC 配置、权限映射和审计日志 — 与身份认证直接相关 | 使用 Auth0 / Clerk 作为底层认证引擎，自身只做配置管理界面和权限映射 UI；不自己存储密码、不自己实现 SAML/OIDC 协议、不自己管理 Session Token。本质是做「认证系统的配置层」而不是「认证系统」本身 |
| G04 | 隐私与合规风险 | 审计日志记录用户登录行为（时间、IP、操作），可能涉及 PII（个人可识别信息），且企业客户可能要求审计日志满足 SOC 2 / HIPAA 合规 | MVP 阶段明确审计日志的字段范围，不采集不必要的行为数据；日志存储使用合规的云服务（AWS CloudTrail 兼容 / 加密存储）；在服务条款中明确合规责任归属：合规兜底由企业客户自身的 IdP（Okta/Azure AD）承担，本服务只提供配置和日志展示 |

### 未命中的风险门槛

| 门槛 ID | 名称 | 为什么未命中 |
|---|---|---|
| G01 | 支付与资金风险 | 产品不涉及支付处理、资金存储或账户余额管理 |
| G03 | 邮件送达风险 | 产品核心不是邮件发送，即使有邮件通知也非核心功能，可使用 Resend/SendGrid 等成熟服务 |
| G05 | 视频、存储、带宽风险 | 不涉及视频托管、大文件存储或高带宽内容分发；审计日志数据量低（文本为主） |
| G06 | 核心通知风险 | 不依赖实时通知作为核心功能 |
| G07 | 客服可靠性风险 | 不涉及客服系统或工单系统；客户支持可通过标准方式（邮件/Slack）进行 |
| G08 | 部署与基础设施 SLA 风险 | 可在 Vercel/Railway 等成熟平台部署，MVP 阶段不承诺高可用 SLA |

### G02 专门分析：为什么命中但不触发 R07

G02（身份认证风险）的触发条件是「产品涉及用户注册、登录、权限管理、OAuth 集成、SSO」。本产品直接涉及 SSO 集成和权限映射，G02 必然被命中。

但 R07（高风险基础设施，暂缓）的触发需要 **同时满足 S09 >= 4 且 S08 >= 4**。本产品的 S08 = 3（1-3 个月 MVP，使用 Auth0/Clerk 底层），不满足双条件，因此 **R07 不触发**。

**核心逻辑：**

- 如果「从零构建身份认证系统」（自己实现 SAML 协议解析、XML 签名验证、Token 签发、密码哈希），那么 S08 >= 4 且 S09 >= 4 → 触发 R07 → 应当暂缓或窄化。
- 如果「在成熟身份认证服务之上做配置管理界面」（Auth0/Clerk 负责认证，本服务负责对接配置、权限映射、审计日志展示），那么 S08 降到 3，R07 不触发 → 可以推进，但必须明确标注依赖的第三方服务。

**类比：** 就像 R04（第三方封装）逻辑 — 用 Stripe 做支付管理面板（不做支付网关），用 Vimeo 做视频管理面板（不做视频托管）。本产品是用 Auth0/Clerk 做 SSO 配置管理面板（不做身份提供商）。

---

## 路由判断

**主路由：** R05 — 销售型服务（Sales-led Service）

**副路由：** R04 — 第三方封装 / 集成层（Third-party Wrapper）

**命中的路由规则：**

- **R05 路由条件命中：** 每个企业客户使用不同的 IdP（Okta / Azure AD / Google Workspace），SAML metadata 格式不一，权限模型不同（RBAC / ABAC / 自定义角色），合规要求各异 → **无法标准化自助购买，必须销售介入、需求沟通、定制接入、集成支持。** 符合 R05「需要定制化接入 + 客单价高 + 客户需要人工服务、培训、集成支持」的条件。
- **R04 路由条件命中（副路由）：** 底层认证服务复杂且高风险（S09 = 4），Auth0/Clerk 等第三方服务已成熟（S04 >= 3），本产品的核心价值在于简化 SAML/OIDC 配置复杂度、统一管理多个 IdP、提供可视化权限映射和审计日志 → 本质是「认证基础设施的配置层封装」。符合 R04「底层服务复杂、存在成熟第三方、核心价值在简化整合」的条件。

**硬性路由规则检查：**

| 规则 | 条件 | 是否触发 | 说明 |
|---|---|---|---|
| 规则 1（R07） | S09 >= 4 且 S08 >= 4 | 否 | S09 = 4, S08 = 3（使用 Auth0/Clerk 底层降复杂度） |
| 规则 2（R02） | S02 >= 4 且 S03 <= 2 且 S09 <= 3 | 否 | S09 = 4 > 3，不满足 S09 条件 |
| 规则 3（R01） | S03 >= 4 且 S02 <= 3 且 S05 <= 2 | 否 | 三项条件均不满足 |
| 规则 4（R03） | S11 >= 4 且 S07 <= 2 | 否 | S11 = 3 |
| 规则 5（R09） | S06 <= 2 | 否 | S06 = 4 |
| 规则 6（R09） | S01 <= 2 | 否 | S01 = 4 |
| 规则 7（R01） | S05 <= 2 且 S07 >= 4 | 否 | S05 = 4 |
| 规则 8（R02） | S04 >= 4 且 S05 >= 3 且 S08 <= 3 | 否 | S04 = 3 |

无硬性路由规则触发，路由由产品本质特征（定制化需求、销售介入）和 R05/R04 路由条件决定。

**为什么不是其它路线：**

- **R01 · 入口工具：** 付费意愿强烈（S05 = 4），客单价高，不是免费流量工具。SSO 集成涉及深度技术支持和销售沟通，不具备「低门槛自助使用」的特征。责任风险 S09 = 4 远超 R01 的安全上限。

- **R02 · 货架服务：** 这是本产品最容易被误判的路线。表面上看 S02 = 4（强痛点）+ S03 = 2（低频）很像典型的「低频强痛点货架服务」。但 **SSO 集成无法标准化自助购买**，原因有三：(1) 每个企业客户使用不同的 IdP，Okta 和 Azure AD 的 SAML 配置方式不完全一致，无法做一个「填个表单就能自动对接所有 IdP」的标准 SaaS；(2) 权限映射需求因客户而异 — 某客户用 RBAC，另一客户用 ABAC，还有客户要求部门级别的细粒度权限；(3) 企业客户的采购流程本身就要求销售沟通、安全审查、合同谈判 — 这不是一个可以「输入信用卡号即用」的产品。**R02 的核心前提是「可标准化」，而 SSO 集成天然是「非标品」。**

- **R03 · 内部基础设施：** 用户群体明确（S06 = 4），面向外部付费客户，有清晰的商业价值主张，不是「先满足自己再做给别人的」内部工具。获客路径虽不完美但可验证（S07 = 3）。

- **R04 · 第三方封装：** 有 R04 的特征（封装 Auth0/Clerk），但不完全是纯技术封装。核心价值还需要「销售咨询 + 集成支持 + 定制配置」的人力服务，因此 R04 是副路由而非主路由。纯 R04 产品（如 AI API 聚合路由）通常可以自助使用，不需要销售介入。

- **R06 · 内容或社区产品：** 核心价值是工具和服务，不是内容或社群。即使可以围绕 SSO 做内容和教程，产品收入不依赖内容，工具和服务是核心。

- **R07 · 高风险基础设施，暂缓：** S09 = 4 但 S08 = 3（使用 Auth0/Clerk 作为底层），不满足 S09 >= 4 且 S08 >= 4 的 R07 硬性触发条件。G02 被命中但通过第三方封装窄化，不强制 R07。

- **R08 · 只适合做功能：** 痛点强度足够（S02 = 4），有独立付费市场（S05 = 4），市场规模被 WorkOS 等竞品验证。SSO 集成不是某个 SaaS 产品的附属功能 — 它是横跨所有 B2B SaaS 的独立需求，完全可以独立成产品。

- **R09 · 信息不足，先调研：** 关键维度（S01、S02、S05、S06、S07）均有 B 级证据支撑，证据充足不需要延后。整体置信度为 B，满足推进条件。

---

## MVP 边界

**第一版只做什么：**

1. **SAML 2.0 配置界面：** 基于 Auth0/Clerk 的 SAML 连接器，提供引导式配置流程。支持 Okta 和 Azure AD 两个 IdP。客户填写 IdP metadata URL 或上传 metadata XML，系统自动完成对接。
2. **基本权限映射：** 将 IdP 的 Group/Role 映射到 SaaS 产品的角色。支持「IdP 中的 `admin` 组 → SaaS 产品的 `Administrator` 角色」这种一对一映射。不支持复杂的多级嵌套映射。
3. **审计日志只读面板：** 展示谁在何时通过哪个 IdP 登录/登出。支持按时间范围和用户筛选。日志由 Auth0/Clerk 底层生成，本服务只做聚合展示。
4. **单一租户配置存储：** 每个 SaaS 客户一个独立配置空间，配置数据和审计日志物理隔离。

**明确不做什么：**

1. 不自己实现 SAML 协议（XML 签名验证、Assertion 解析）— 完全依赖 Auth0/Clerk 的 SAML 连接器
2. 不自己实现 OIDC 协议（Token 签发、refresh token 管理）— 完全依赖底层认证服务
3. 不做 Google Workspace 集成（第一版只做 Okta + Azure AD，覆盖 80%+ 的企业 IdP 市场）
4. 不做自定义 IdP（如客户自建的 Keycloak 或 Shibboleth）— 第一版只支持主流商业 IdP
5. 不做 RBAC 策略引擎 — 只做简单的 Group→Role 映射，不实现复杂的策略评估

**依赖哪些第三方服务：**

| 服务 | 用途 | 替代方案 |
|---|---|---|
| Auth0 或 Clerk | SAML/OIDC 认证底层（协议实现、Token 管理、Session 安全） | WorkOS（但不等同，我们需要自己控制配置层）、Keycloak（开源但维护成本高） |
| Vercel / Railway | 应用托管 | AWS / Cloudflare Pages |
| PostgreSQL（托管） | 配置数据和审计日志存储 | Supabase |
| Resend / SendGrid | 配置完成通知邮件（非核心） | AWS SES |

**不承诺哪些责任：**

1. 不承诺底层认证服务的 SLA — 底层 SLA 由 Auth0/Clerk 承担，本服务只承诺配置界面的可用性
2. 不承诺合规兜底（SOC 2、HIPAA、GDPR）— 合规由客户的 IdP 和底层认证服务共同保障，本服务不承担合规审计人的角色
3. 不承诺 7x24 的紧急故障响应 — MVP 阶段提供工作时间（business hours）内的支持
4. 不承诺 100% 的 IdP 兼容性 — 每个 IdP 的行为有差异，第一版以 Okta 和 Azure AD 为目标测试

---

## 不做清单

1. ❌ **不从零实现 SAML/OIDC 协议** — SAML 的 XML 签名验证、证书链校验、Assertion 加密解密是极其容易出错的安全敏感代码。必须使用 Auth0 或 Clerk 的现成实现，绝不自研。
2. ❌ **不做身份提供商（IdP）本身** — 不做用户注册、密码哈希存储、MFA 管理、Session 管理。这些是 Auth0/Clerk 的领域，我们只做「在已有 IdP 和 SaaS 之间建立连接」的配置层。
3. ❌ **不做自动合规认证** — 不提供「使用本服务即自动满足 SOC 2 / HIPAA / ISO 27001」的承诺或认证标识。合规是法律问题，需要审计师评估，不是技术工具可以自动保证的。
4. ❌ **不做私有化部署** — 不在客户的数据中心或私有云部署本服务。这不是一个可以 Docker pull 下来一键运行的私有化产品。现阶段只提供 SaaS 形态的配置界面。
5. ❌ **不做 IdP 间的用户同步/迁移** — 不做「将用户从 Okta 迁移到 Azure AD」这种跨 IdP 的数据迁移功能。这超出了「配置连接」的范围，属于身份治理（IGA）领域，复杂度极高。
6. ❌ **不做自定义 IdP 适配器** — 不开源协议适配层的代码或提供插件接口让客户自行开发 IdP 适配器。MVP 阶段只支持我们验证过的 Okta 和 Azure AD，后续逐步扩展。
7. ❌ **不承诺 99.9% 以上的 SLA** — MVP 阶段不承诺高可用 SLA。如果 Auth0/Clerk 宕机，我们的配置界面可能也无法正常工作。在服务条款中明确此依赖关系。

---

## 最低成本验证动作

### 动作 1：竞品深度调研与差异化定位验证

**目标：** 确认 WorkOS 等竞品的功能覆盖、定价策略、用户不满点，找到差异化空间。

**具体步骤：**
1. 注册 WorkOS 免费账号，完整走一遍 SSO 配置流程（从注册到成功对接 Okta 测试租户），记录每个步骤的体验痛点和功能缺失。
2. 阅读 WorkOS 在 G2 / Product Hunt / Hacker News / Reddit 上的所有用户评价，整理用户抱怨清单（如「定价太贵」「不支持 X IdP」「文档难懂」）。
3. 对比 Auth0 Enterprise、Clerk Enterprise、WorkOS 三者的 SSO 定价和功能矩阵，制作功能对比表。
4. 在 Hacker News 搜索 "WorkOS alternative" "SSO integration for SaaS" "SAML setup service"，记录讨论热度和替代需求。
5. 输出结论：是否存在「比 WorkOS 更轻量、更便宜、更专注于中小企业」的定位空间。

**预计时间：** 2 天

---

### 动作 2：B2B SaaS 创始人痛点访谈

**目标：** 验证目标用户是否真的愿意为 SSO 集成服务付费，以及他们当前的解决方案和痛苦程度。

**具体步骤：**
1. 从 YC Startup Directory、Indie Hackers、Twitter/X 上筛选 5-8 个面向企业客户的 B2B SaaS 创始人（融资金额 < $5M，团队 < 50 人）。
2. 通过邮件/Twitter DM/LinkedIn 发送简洁的访谈邀请：「我正在调研 B2B SaaS 的 SSO 集成痛点，可以花 15 分钟聊聊你的经历吗？不卖任何东西。」
3. 准备访谈提纲，聚焦三个问题：(a) 你上一次被客户要求支持 SSO 是什么时候？你怎么处理的？(b) 如果有一个服务能帮你解决 SAML/OIDC 配置和权限映射，你愿意付多少钱？(c) 你对 WorkOS/Auth0 的 SSO 方案有什么不满？
4. 记录至少 3 个访谈对象的回答，特别注意他们表达的痛苦程度（用词强度、情绪反应）和自发提出的价格数字。
5. 如果 >= 60% 的访谈对象表示「愿意付费」且给出 >= $100/月 的价格，则验证通过。

**预计时间：** 3 天（含联系和协调时间）

---

### 动作 3：Auth0 底层技术验证 + 最小可用原型

**目标：** 验证「基于 Auth0 SAML 连接器构建配置界面」的技术可行性，确认 S08 = 3 的估计准确。

**具体步骤：**
1. 注册 Auth0 免费账号，启用 Enterprise SAML 连接器。
2. 在 Auth0 中手动配置一个 Okta 测试租户的 SAML 连接（Okta 提供免费开发者租户），完成从 Okta 发起登录 → Auth0 处理 SAML Assertion → 返回用户信息到应用的完整流程。
3. 用 Auth0 Management API（或 Clerk API）尝试通过代码创建 SAML 连接、修改配置、读取登录事件。记录哪些操作有 API 支持、哪些需要手动在 Dashboard 操作。
4. 搭建一个简单的 Next.js 页面，调用 Auth0 API 实现：(a) 输入 Okta metadata URL → (b) 自动创建 SAML 连接 → (c) 返回配置结果。不做 UI 美化，只验证核心技术路径通畅。
5. 记录技术障碍点和实际耗时。如果从零到可工作的原型超过 3 天，重新评估 S08 分数。

**预计时间：** 3 天

---

## 外部证据缺口

### 外部证据连接状态

| 来源 | 状态 | 说明 |
|---|---|---|
| Case Library | not_connected | 未使用相似案例库，无法查询类似 SSO 集成服务的历史评估案例 |
| Competitor Research | not_connected | 未使用自动竞品调研工具，竞品信息来自公开可访问的网页和文档 |
| Keyword Research | not_connected | 未使用关键词搜索量查询工具，无法获取 "SSO integration service" 等词的精确搜索量 |
| Pricing Lookup | not_connected | 未使用价格基准查询，竞品定价信息来自手动浏览竞品官网定价页 |
| Decision History | not_connected | 未使用历史决策记录，无法参考之前对类似产品的评估结论 |
| MCP Tools | not_connected | 未调用 MCP 工具，所有证据来自手动收集和公开网络资源 |

### 当前缺口

- **还缺哪些竞品信息：** WorkOS 的确切客户数量、ARR 规模、客户留存率；WorkOS 的客户中中小 SaaS 的占比；是否有其他更小的竞品（如 SSOReady、BoxyHQ 等开源方案的用户使用数据）
- **还缺哪些搜索关键词：** "SSO integration service" 的月搜索量；"SAML setup for SaaS" 的 CPC 和竞争度；"WorkOS alternative" 的搜索趋势；"Okta integration service" 的搜索量
- **还缺哪些用户行为证据：** B2B SaaS 创始人在签署第一个企业客户时 SSO 请求的真实发生频率；有多少 SaaS 因为不支持 SSO 而丢过单；用户从尝试到购买 WorkOS 的平均时间
- **还缺哪些相似案例：** 历史上是否有类似「在 Auth0 上做配置层」的产品评估案例；是否有人尝试过同样的想法但失败了的案例
- **还缺哪些价格基准：** WorkOS 各 tier 的实际成交价格（vs 官网标价）；企业客户愿意为 SSO 功能额外支付的 SaaS 订阅溢价中位数
- **还缺哪些历史复盘记录：** 本项目或团队之前是否评估过类似 B2B 基础设施产品的经验

### 人工调研关键词

```
🔍 人工调研关键词：
- S04 替代方案 → "WorkOS pricing 2025", "Auth0 enterprise SSO pricing", "SSO integration alternatives", "SAML setup service comparison", "BoxyHQ vs WorkOS"
- S05 付费意愿 → "SSO as a service pricing", "how much does SSO integration cost", "enterprise SSO pricing SaaS", "how much do companies pay for SSO", "WorkOS reviews complaints pricing"
- S06 用户群体 → "B2B SaaS SSO requirements", "YC startup enterprise sales SSO", "SaaS SOC 2 compliance SSO requirement", "when do SaaS companies need SSO"
- S07 获客路径 → "SSO integration service", "SAML configuration service", "Okta integration for SaaS", "SSO setup help", "enterprise SSO made easy"
- S08 交付复杂度 → "Auth0 SAML connection API", "Clerk enterprise SSO setup", "SAML protocol complexity", "building SSO integration service tech stack"
```

### 推荐外部工具

如果未来接入 MCP，可以优先使用：

- `product_route.case_search` — 搜索「B2B 基础设施」「认证集成」「第三方封装」等类型的相似案例
- `product_route.competitor_search` — 自动调研 WorkOS、Auth0 Enterprise SSO、Clerk Enterprise 的功能和定价
- `product_route.keyword_search` — 查询 "SSO integration service" "SAML setup for SaaS" "enterprise SSO" 等关键词的搜索量
- `product_route.pricing_lookup` — 查询 SSO 集成服务的市场价格基准和 B2B SaaS 为 SSO 功能支付的溢价
- `product_route.history_query` — 查询历史上是否有类似「认证基础设施配置层」产品的评估记录

> **核心 Skill 不依赖外部服务即可运行。外部案例库、竞品库、关键词库和 MCP 工具只用于提高证据覆盖率和置信度。**

---

## JSON Result

```json
{
  "schema_version": "0.1.0",
  "skill_version": "0.1.0",
  "runtime_language": "zh-CN",
  "evidence_mode": "manual_only",
  "mcp_enabled": false,
  "idea": "给中小企业的 SaaS 产品做统一 SSO 集成服务。帮他们对接客户的 Okta、Azure AD、Google Workspace 身份系统。包括 SAML/OIDC 配置、权限映射、审计日志。",
  "main_route": "R05",
  "main_route_label": "销售型服务",
  "secondary_route": "R04",
  "secondary_route_label": "第三方封装",
  "confidence": "B",
  "scores": {
    "trigger_clarity": 4,
    "pain_strength": 4,
    "usage_frequency": 2,
    "alternative_maturity": 3,
    "payment_evidence": 4,
    "user_clarity": 4,
    "acquisition_clarity": 3,
    "delivery_complexity": 3,
    "liability_risk": 4,
    "maintenance_cost": 4,
    "reuse_value": 3,
    "stage_fit": 3
  },
  "risk_gates": ["G02", "G04"],
  "matched_rules": [
    "R05 路由条件: 需要定制化接入 + 客单价高 + 客户需要人工服务、培训、集成支持",
    "R04 路由条件: 底层认证服务复杂(S09=4) + 第三方服务成熟 + 核心价值在简化配置和统一管理",
    "硬规则检查: 规则1(S09=4,S08=3,不触发R07); 规则2(S09=4>3,不触发R02); 其余规则均不触发"
  ],
  "blocked_by": [],
  "next_action": "竞品深度调研(WorkOS/Auth0/Clerk) + 5-8个B2B SaaS创始人痛点访谈 + Auth0底层技术验证原型",
  "do_not_build": [
    "从零实现SAML/OIDC协议",
    "身份提供商本身(用户注册、密码存储、MFA)",
    "自动合规认证(SOC 2/HIPAA/ISO 27001)",
    "私有化部署",
    "跨IdP用户同步/迁移",
    "自定义IdP适配器插件体系",
    "99.9%以上高可用SLA承诺"
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
