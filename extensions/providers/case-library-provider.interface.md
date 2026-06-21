# Case Library Provider Interface

## 用途

提供经过验证的产品案例库，作为评估的参考证据。案例库中的案例已经过 Product Route 评估，有已知的路由、结果和关键学习。

## 输入

```typescript
interface CaseLibraryQuery {
  query: string;           // 搜索关键词
  route_type?: string;     // 可选，限定路由类型 (R01-R09)
  limit?: number;          // 返回结果数量，默认 5
}
```

## 输出

```typescript
interface CaseLibraryResult {
  cases: Array<{
    id: string;
    name: string;
    route_type: string;     // R01-R09
    description: string;
    outcome: string;        // 后续实际结果（如果已知）
    key_learnings: string[];
    relevance_score: number; // 0-1
  }>;
}
```

## 如何转化为 Evidence Table

案例库返回的每条案例可以转化为一条证据：

| ID | 类型 | 来源类型 | 内容 | 置信度 | 支持的评分维度 |
|---|---|---|---|---|---|
| E0XX | 正面/反面证据 | case_library | {case.name}: {case.key_learnings 摘要} | B | S04, S05, S08 等 |

置信度默认为 B 级（案例库经过策划和验证）。

## 如果未连接，Skill 应如何降级

1. 标注 `external_evidence.case_library.connected: false`
2. 在「外部证据缺口」中列出需要通过案例库补充的信息
3. 整体置信度可能下降（如果案例库证据是关键的）
4. 不得因为案例库未连接而拒绝评估

> 外部 Provider 只用于提高证据覆盖率和置信度，不是核心 Skill 的必要依赖。External providers only improve evidence coverage and confidence. They are not required for the core skill.
