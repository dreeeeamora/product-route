# MCP Tools for Product Route

以下是 Product Route 可能使用的 MCP 工具接口文档。这些是**接口定义**，不是实现。

---

## product_route.case_search

**用途：** 在案例库中搜索类似的产品案例。

**输入：**
```json
{
  "query": "string — 搜索关键词，如 'policy page hosting SaaS'",
  "route_type": "string — 可选，限定路由类型，如 'R02'",
  "limit": "number — 返回结果数量，默认 5"
}
```

**输出：**
```json
{
  "cases": [
    {
      "id": "string",
      "name": "string",
      "route_type": "string",
      "description": "string",
      "outcome": "string",
      "key_learnings": ["string"],
      "relevance_score": "number"
    }
  ]
}
```

---

## product_route.competitor_search

**用途：** 搜索竞品信息。

**输入：**
```json
{
  "query": "string — 搜索关键词",
  "limit": "number — 返回结果数量，默认 5"
}
```

**输出：**
```json
{
  "competitors": [
    {
      "name": "string",
      "url": "string",
      "pricing_model": "string",
      "target_users": "string",
      "strengths": ["string"],
      "weaknesses": ["string"]
    }
  ]
}
```

---

## product_route.keyword_search

**用途：** 查询关键词搜索量和竞争度。

**输入：**
```json
{
  "keywords": ["string — 关键词列表"],
  "region": "string — 地区，默认 'global'"
}
```

**输出：**
```json
{
  "results": [
    {
      "keyword": "string",
      "search_volume": "number",
      "competition": "string — 'low' | 'medium' | 'high'",
      "cpc": "number — 可选"
    }
  ]
}
```

---

## product_route.pricing_lookup

**用途：** 查询已知产品的定价信息。

**输入：**
```json
{
  "product_names": ["string — 产品名称列表"]
}
```

**输出：**
```json
{
  "results": [
    {
      "name": "string",
      "plans": [
        {
          "name": "string",
          "price_monthly": "number",
          "price_annual": "number",
          "features": ["string"]
        }
      ],
      "free_tier": "boolean"
    }
  ]
}
```

---

## product_route.trend_scan

**用途：** 扫描趋势数据，了解产品方向的上升或下降趋势。

**输入：**
```json
{
  "query": "string — 趋势查询关键词",
  "timeframe": "string — '7d' | '30d' | '90d' | '12m' | '5y'"
}
```

**输出：**
```json
{
  "trend": "string — 'rising' | 'stable' | 'declining'",
  "data_points": [
    {
      "date": "string",
      "value": "number"
    }
  ]
}
```

---

## product_route.history_query

**用途：** 查询历史评估记录。

**输入：**
```json
{
  "query": "string — 查询条件",
  "limit": "number — 默认 10"
}
```

**输出：**
```json
{
  "evaluations": [
    {
      "id": "string",
      "idea": "string",
      "route": "string",
      "confidence": "string",
      "date": "string",
      "outcome": "string — 可选，后续实际结果"
    }
  ]
}
```

---

## product_route.history_save

**用途：** 保存当前评估记录。

**输入：**
```json
{
  "evaluation": "object — 符合 result.schema.json 的完整评估结果"
}
```

**输出：**
```json
{
  "id": "string",
  "saved": "boolean"
}
```

---

## product_route.report_export

**用途：** 将评估报告导出为指定格式。

**输入：**
```json
{
  "evaluation": "object — 评估结果",
  "format": "string — 'json' | 'markdown' | 'html'"
}
```

**输出：**
```json
{
  "content": "string",
  "format": "string",
  "filename": "string"
}
```

---

> 以上为接口文档。实际实现需要后端服务支持。核心 Skill 不依赖这些工具。
