# Contributing to Product Route

Thanks for your interest in contributing. Product Route is an open-source, evidence-based product idea routing skill. This document explains how to contribute.

## Scope of Contributions

### Welcome

- Bug fixes in scoring rules, routing logic, or risk gates
- Translation improvements (zh-CN ↔ en)
- New example evaluations demonstrating edge cases
- Additional test cases in `tests/expected-routes.*.md`
- Documentation improvements
- MCP tool implementations (in `extensions/mcp/`)
- Provider implementations (in `extensions/providers/`)

### Requires Discussion First

- Adding new scoring dimensions (S13+)
- Adding new route types (R10+)
- Adding new risk gates (G09+)
- Changing the core process flow (Evidence → Score → Risk Gate → Route → MVP Boundary)
- Changing hard routing rules

### Out of Scope

- Features that make the core Skill depend on paid services
- Features that change Product Route into a "startup idea scorer" or "business plan generator"
- Features that bypass the evidence-first principle

## Development Setup

```bash
git clone git@github.com:dreeeeamora/product-route.git
cd product-route

# Verify rule IDs
npx tsx src/check-rule-ids.ts

# Build bundles
npx tsx src/export.ts --lang zh-CN
npx tsx src/export.ts --lang en
```

## Project Structure

```
skills/          ← Skill packages (source of truth)
  product-route.zh-CN/   ← Chinese runtime
  product-route.en/      ← English runtime
dist/            ← Built bundles (do not edit directly)
schemas/         ← JSON Schema for programmatic use
tests/           ← Regression test cases
extensions/      ← MCP / Provider interfaces (optional)
src/             ← Build and validation scripts
```

## Pull Request Checklist

1. [ ] Run `npx tsx src/check-rule-ids.ts` — must pass
2. [ ] Run `npx tsx src/export.ts` — bundles must build successfully
3. [ ] If changing rules: update BOTH language versions (zh-CN AND en)
4. [ ] If adding examples: follow the report-template format exactly
5. [ ] If changing JSON structure: update `schemas/result.schema.json`
6. [ ] Update `CHANGELOG.md`

## Language Policy

- The repository is bilingual (zh-CN + en)
- Each runtime package is monolingual — never mix rules from different languages in one session
- Rule IDs (S01-S12, R01-R09, G01-G08) are language-independent
- JSON keys are always English

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
