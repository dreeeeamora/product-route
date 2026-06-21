# Decision History Provider Interface

## 用途

存储和检索历史评估记录，帮助发现决策模式、避免重复错误、跟踪评估与实际结果的偏差。

## 输入（查询）

```typescript
interface HistoryQuery {
  query: string;           // 查询条件（产品关键词、路由类型等）
  route_type?: string;     // 可选，限定路由类型
  date_range?: {
    start: string;         // ISO 日期
    end: string;           // ISO 日期
  };
  limit?: number;          // 默认 10
}
```

## 输出（查询）

```typescript
interface HistoryQueryResult {
  evaluations: Array<{
    id: string;
    idea: string;
    main_route: string;
    secondary_route?: string;
    confidence: string;
    scores: Record<string, number>;
    date: string;
    outcome?: string;       // 后续实际结果（如果已跟踪）
    outcome_date?: string;
  }>;
}
```

## 输入（保存）

```typescript
interface HistorySaveInput {
  evaluation: object;      // 符合 result.schema.json 的完整评估结果
  user_id?: string;
  tags?: string[];
}
```

## 输出（保存）

```typescript
interface HistorySaveResult {
  id: string;
  saved: boolean;
}
```

## 如何转化为 Evidence Table

历史记录可以转化为证据：

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E0XX | 正面/反面证据 | internal_history | 类似产品 "{idea}" 曾被路由为 {route}，实际结果为 {outcome} | B | S08, S12 |

置信度取决于历史记录的完整性和时效性。

## 如果未连接，Skill 应如何降级

1. 标注 `external_evidence` 中无历史记录
2. 在评估中注明「无历史决策记录可供参考」
3. 建议用户手动回顾类似的历史决策
4. 核心 Skill 不依赖历史记录即可运行

> 外部 Provider 只用于提高证据覆盖率和置信度，不是核心 Skill 的必要依赖。External providers only improve evidence coverage and confidence. They are not required for the core skill.
