# Keyword Provider Interface

## 用途

提供关键词搜索量、竞争度、CPC 等数据。为 S01（触发场景明确度）和 S07（获客路径清晰度）提供证据。

## 输入

```typescript
interface KeywordQuery {
  keywords: string[];      // 关键词列表
  region?: string;         // 地区，默认 'global'
  language?: string;       // 语言，默认 'en'
}
```

## 输出

```typescript
interface KeywordResult {
  results: Array<{
    keyword: string;
    search_volume: number;       // 月搜索量
    competition: 'low' | 'medium' | 'high';
    cpc?: number;                // 每次点击费用（如有）
    related_keywords?: string[]; // 相关关键词
    trend?: 'rising' | 'stable' | 'declining';
  }>;
}
```

## 如何转化为 Evidence Table

关键词数据可以转化为证据：

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E0XX | 正面证据 | external_provider | "{keyword}" 月搜索量 {volume}，表明场景明确且可被搜索获取 | B | S01, S07 |
| E0XX | 正面证据 | external_provider | "{keyword}" CPC 为 {cpc}，竞品在投放广告，表明有商业价值 | B | S05, S07 |

置信度默认为 B 级（来自搜索引擎/关键词工具数据）。

## 如果未连接，Skill 应如何降级

1. 标注 `external_evidence.keyword_research.connected: false`
2. 使用已知常识推断搜索场景（如「qr code generator 应该是高搜索量关键词」）
3. 以 `unverified` source_type 标注，降低证据置信度
4. 提供人工调研关键词

> 外部 Provider 只用于提高证据覆盖率和置信度，不是核心 Skill 的必要依赖。External providers only improve evidence coverage and confidence. They are not required for the core skill.
