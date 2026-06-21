# Security Policy

## Reporting a Vulnerability

Product Route is an AI Skill — a set of rules and templates for product idea evaluation. It contains no runtime servers, databases, or network services.

However, if you discover a security-relevant issue (e.g., prompt injection vulnerability in the skill's rule structure, unsafe handling of user input in templates), please report it by opening a GitHub Issue.

## Scope

Security concerns relevant to this project:

- Prompt injection vulnerabilities in rule files
- Unsafe content injection in report templates
- Rules that could be abused to generate harmful recommendations

## Out of Scope

- Issues in third-party MCP tools or Providers (these are separate projects)
- Issues in the AI model that executes the skill (this is the model provider's responsibility)
- General AI safety concerns not specific to this skill

## Product Route's Built-in Safety

Product Route's design includes inherent safety features:

- **Evidence-first principle**: Cannot recommend building without evidence
- **Risk gates (G01-G08)**: High-risk infrastructure is explicitly blocked from solo/small-team development recommendations
- **Confidence penalties**: Weak evidence is explicitly downgraded
- **Do Not Build list**: Every evaluation must include what NOT to build
- **R09 Research First**: Insufficient evidence routes to research, not development
- **R07 Defer**: High-risk items are explicitly deferred

## Supported Versions

| Version | Supported |
|---|---|
| 0.1.x | ✅ |

## Disclosure

Please allow reasonable time for review and resolution before public disclosure of any security issues.
