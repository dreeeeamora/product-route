# Competitor Research Provider Interface

## 用途

自动搜索和分析竞品信息，包括定价、功能、目标用户、用户评价。为 S04（替代方案成熟度）和 S05（付费意愿证据）提供高质量证据。

## 输入

```typescript
interface CompetitorResearchQuery {
  query: string;           // 产品描述或关键词
  limit?: number;          // 返回竞品数量，默认 5
  include_pricing?: boolean; // 是否获取定价信息，默认 true
  include_reviews?: boolean; // 是否获取用户评价，默认 true
}
```

## 输出

```typescript
interface CompetitorResearchResult {
  competitors: Array<{
    name: string;
    url: string;
    description: string;
    pricing_model: string;  // freemium, subscription, one-time, usage-based
    plans?: Array<{
      name: string;
      price_monthly: number;
      features: string[];
    }>;
    target_users: string;
    strengths: string[];
    weaknesses: string[];
    review_summary?: string;
    estimated_users?: string;
  }>;
}
```

## 如何转化为 Evidence Table

竞品信息可以转化为多条证据：

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E0XX | 正面证据 | competitor_observation | {name} 的付费用户规模表明市场存在 | B | S04, S05 |
| E0XX | 反面证据 | competitor_observation | {name} 的基础设施投入显示交付复杂度高 | B | S08, S10 |

置信度默认为 B 级（通过自动搜索获取）。

## 如果未连接，Skill 应如何降级

1. 标注 `external_evidence.competitor_research.connected: false`
2. 基于已知竞品信息手动填写证据表
3. 在「外部证据缺口」中列出需要手动搜索的竞品
4. 提供人工调研关键词

> 外部 Provider 只用于提高证据覆盖率和置信度，不是核心 Skill 的必要依赖。External providers only improve evidence coverage and confidence. They are not required for the core skill.
