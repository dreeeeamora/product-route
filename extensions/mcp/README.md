# MCP Extensions for Product Route

Product Route 可以通过 MCP（Model Context Protocol）工具接入外部证据来源，但**核心 Skill 不依赖 MCP**。

## 概述

MCP 工具允许 Agent 在评估产品想法时自动获取外部证据，包括：

- 案例库检索
- 竞品搜索
- 关键词搜索量查询
- 定价信息查询
- 趋势扫描
- 历史决策查询和保存
- 报告导出

## 可用工具

详见 `tools.md`。

## 未连接 MCP 时的降级策略

当 MCP 工具未连接时，Product Route 应：

1. 在报告中标注 `mcp.connected: false`
2. 对于无法自动获取的证据，输出人工调研关键词
3. 降低整体置信度
4. 优先推荐 R09（信息不足，先调研）如果关键证据缺失

> MCP tools only improve evidence coverage and confidence. They are not required for the core skill.
