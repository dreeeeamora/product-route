/**
 * release-check.ts — Product Route 发版前全量检查
 *
 * 一条命令跑完所有校验，任何一项失败都会阻止发版。
 *
 * 用法:
 *   npx tsx src/release-check.ts             完整检查
 *   npx tsx src/release-check.ts --quick     仅规则 ID 检查（快检）
 *   npx tsx src/release-check.ts --bump      完整检查 + 确认版本号
 */

import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..");

// ── 配置 ──────────────────────────────────────────────

const SKILL_VERSION = "0.1.0";
const SCHEMA_VERSION = "0.1.0";

const LANGS = ["zh-CN", "en"];

const REQUIRED_REF_FILES = [
  "scoring-rules.md",
  "routing-rules.md",
  "evidence-rules.md",
  "risk-gates.md",
  "report-template.md",
];

const REQUIRED_EXAMPLE_FILES = [
  "policy-page-hosting.md",
  "full-video-hosting-risk.md",
  "qr-code-generator.md",
];

// ── 工具 ──────────────────────────────────────────────

let errors = 0;
let warnings = 0;

function pass(msg: string) {
  console.log(`  ✅ ${msg}`);
}

function warn(msg: string) {
  console.warn(`  ⚠️  ${msg}`);
  warnings++;
}

function fail(msg: string) {
  console.error(`  ❌ ${msg}`);
  errors++;
}

function section(title: string) {
  console.log(`\n━━━ ${title} ━━━`);
}

function readFile(filePath: string): string | null {
  try { return fs.readFileSync(filePath, "utf-8"); } catch { return null; }
}

// ── 检查函数 ──────────────────────────────────────────

function checkSkillStructure() {
  section("1. Skill 包结构完整性");

  for (const lang of LANGS) {
    const skillDir = path.resolve(PROJECT_ROOT, `skills/product-route.${lang}`);

    // SKILL.md
    if (!readFile(path.join(skillDir, "SKILL.md"))) {
      fail(`${lang}: SKILL.md 缺失`);
    } else {
      pass(`${lang}: SKILL.md 存在`);
    }

    // 检查 frontmatter 中的 runtime_language
    const skillMd = readFile(path.join(skillDir, "SKILL.md")) || "";
    const expectedLang = lang === "zh-CN" ? "zh-CN" : "en";
    if (skillMd.includes(`runtime_language: ${expectedLang}`)) {
      pass(`${lang}: runtime_language = ${expectedLang}`);
    } else {
      fail(`${lang}: runtime_language 不正确，期望 ${expectedLang}`);
    }

    // References
    for (const ref of REQUIRED_REF_FILES) {
      if (readFile(path.join(skillDir, "references", ref))) {
        pass(`${lang}: references/${ref}`);
      } else {
        fail(`${lang}: references/${ref} 缺失`);
      }
    }

    // Examples
    for (const ex of REQUIRED_EXAMPLE_FILES) {
      if (readFile(path.join(skillDir, "examples", ex))) {
        pass(`${lang}: examples/${ex}`);
      } else {
        fail(`${lang}: examples/${ex} 缺失`);
      }
    }
  }
}

function checkRuleIds() {
  section("2. 规则 ID 完整性");

  for (const lang of LANGS) {
    const refDir = path.resolve(PROJECT_ROOT, `skills/product-route.${lang}/references`);

    // S01-S12 in scoring-rules
    const scoring = readFile(path.join(refDir, "scoring-rules.md")) || "";
    for (let i = 1; i <= 12; i++) {
      const id = `S${String(i).padStart(2, "0")}`;
      if (new RegExp(`(^|\\W)${id}(\\W|$)`).test(scoring)) {
        // pass silently
      } else {
        fail(`${lang}: scoring-rules.md 缺少 ${id}`);
      }
    }

    // R01-R09 in routing-rules
    const routing = readFile(path.join(refDir, "routing-rules.md")) || "";
    for (let i = 1; i <= 9; i++) {
      const id = `R${String(i).padStart(2, "0")}`;
      if (new RegExp(`(^|\\W)${id}(\\W|$)`).test(routing)) {
        // pass silently
      } else {
        fail(`${lang}: routing-rules.md 缺少 ${id}`);
      }
    }

    // G01-G08 in risk-gates
    const gates = readFile(path.join(refDir, "risk-gates.md")) || "";
    for (let i = 1; i <= 8; i++) {
      const id = `G${String(i).padStart(2, "0")}`;
      if (new RegExp(`(^|\\W)${id}(\\W|$)`).test(gates)) {
        // pass silently
      } else {
        fail(`${lang}: risk-gates.md 缺少 ${id}`);
      }
    }

    // E01-E04 in evidence-rules
    const evidence = readFile(path.join(refDir, "evidence-rules.md")) || "";
    for (let i = 1; i <= 4; i++) {
      const id = `E0${i}`;
      if (evidence.includes(id)) {
        // pass silently
      } else {
        warn(`${lang}: evidence-rules.md 缺少 ${id}`);
      }
    }

    // X01 in evidence-rules
    if (evidence.includes("X01")) {
      // pass silently
    } else {
      fail(`${lang}: evidence-rules.md 缺少 X01`);
    }
  }

  // P01-P06 in CORE.md
  const core = readFile(path.resolve(PROJECT_ROOT, "CORE.md")) || "";
  for (let i = 1; i <= 6; i++) {
    const id = `P${String(i).padStart(2, "0")}`;
    if (new RegExp(`(^|\\W)${id}(\\W|$)`).test(core)) {
      // pass silently
    } else {
      fail(`CORE.md 缺少 ${id}`);
    }
  }

  if (errors === 0) pass("所有规则 ID 完整");
}

function checkBilingualAlignment() {
  section("3. 中英文规则对齐");

  const zhScoring = readFile(path.resolve(PROJECT_ROOT, "skills/product-route.zh-CN/references/routing-rules.md")) || "";
  const enScoring = readFile(path.resolve(PROJECT_ROOT, "skills/product-route.en/references/routing-rules.md")) || "";

  // 检查硬性路由规则数量
  const zhHardRules = (zhScoring.match(/→ 主路由/g) || []).length;
  const enHardRules = (enScoring.match(/→ Main route/g) || []).length;
  if (zhHardRules === enHardRules) {
    pass(`硬性路由规则数量一致: zh=${zhHardRules}, en=${enHardRules}`);
  } else {
    fail(`硬性路由规则数量不一致: zh=${zhHardRules}, en=${enHardRules}`);
  }

  // 检查 evidence_mode 章节
  const zhEvidence = readFile(path.resolve(PROJECT_ROOT, "skills/product-route.zh-CN/references/evidence-rules.md")) || "";
  const enEvidence = readFile(path.resolve(PROJECT_ROOT, "skills/product-route.en/references/evidence-rules.md")) || "";
  if (zhEvidence.includes("evidence_mode") && enEvidence.includes("evidence_mode")) {
    pass("evidence_mode 规则两边都有");
  } else {
    fail("evidence_mode 规则缺失");
  }
  if (zhEvidence.includes("X01") && enEvidence.includes("X01")) {
    pass("X01 规则两边都有");
  } else {
    fail("X01 规则缺失");
  }

  // 检查风险门槛数量
  const zhGates = readFile(path.resolve(PROJECT_ROOT, "skills/product-route.zh-CN/references/risk-gates.md")) || "";
  const enGates = readFile(path.resolve(PROJECT_ROOT, "skills/product-route.en/references/risk-gates.md")) || "";
  const zhGateCount = (zhGates.match(/## G\d+/g) || []).length;
  const enGateCount = (enGates.match(/## G\d+/g) || []).length;
  if (zhGateCount === enGateCount) {
    pass(`风险门槛数量一致: zh=${zhGateCount}, en=${enGateCount}`);
  } else {
    fail(`风险门槛数量不一致: zh=${zhGateCount}, en=${enGateCount}`);
  }
}

function checkBundleConsistency() {
  section("4. Bundle 产物一致性");

  const zhBundle = readFile(path.resolve(PROJECT_ROOT, "dist/product-route.zh-CN.bundle.md")) || "";
  const enBundle = readFile(path.resolve(PROJECT_ROOT, "dist/product-route.en.bundle.md")) || "";

  // JSON 字段对齐检查
  const requiredJsonFields = [
    "schema_version",
    "skill_version",
    "runtime_language",
    "evidence_mode",
    "mcp_enabled",
    "provider_status",
    "pricing_lookup",
    "decision_history",
  ];

  for (const field of requiredJsonFields) {
    const zhCount = (zhBundle.match(new RegExp(field, "g")) || []).length;
    const enCount = (enBundle.match(new RegExp(field, "g")) || []).length;
    if (zhCount > 0 && enCount > 0) {
      pass(`"${field}" 两边都存在`);
    } else {
      fail(`"${field}" 缺失 (zh=${zhCount}, en=${enCount})`);
    }
  }

  // 示例中不应有 confidence A
  const zhA = (zhBundle.match(/"confidence": "A"/g) || []).length;
  const enA = (enBundle.match(/"confidence": "A"/g) || []).length;
  if (zhA === 0 && enA === 0) {
    pass("示例 confidence 无 A 残留");
  } else {
    fail(`示例中仍有 confidence A (zh=${zhA}, en=${enA})`);
  }

  // 不应有"4 个以上高频场景"
  const zhOldAnchor = (zhBundle.match(/4 个以上高频场景/g) || []).length;
  const enOldAnchor = (enBundle.match(/4 个以上高频场景/g) || []).length;
  if (zhOldAnchor === 0 && enOldAnchor === 0) {
    pass("S01 锚点已修正（无旧版'高频场景'残留）");
  } else {
    fail(`S01 锚点仍有旧版残留 (zh=${zhOldAnchor}, en=${enOldAnchor})`);
  }
}

function checkSchemas() {
  section("5. JSON Schema 完整性");

  const schemas = ["idea.schema.json", "evidence.schema.json", "result.schema.json"];
  for (const s of schemas) {
    const content = readFile(path.resolve(PROJECT_ROOT, "schemas", s));
    if (content) {
      try {
        JSON.parse(content);
        pass(`schemas/${s} 是合法 JSON`);
      } catch {
        fail(`schemas/${s} JSON 解析失败`);
      }
    } else {
      fail(`schemas/${s} 缺失`);
    }
  }
}

function checkDocs() {
  section("6. 文档完整性");

  const rootFiles = [
    "README.md",
    "README.zh-CN.md",
    "README.en.md",
    "CORE.md",
    "DECISIONS.md",
    "CHANGELOG.md",
    "LICENSE",
    "CONTRIBUTING.md",
    "CODE_OF_CONDUCT.md",
    "SECURITY.md",
  ];

  for (const f of rootFiles) {
    if (readFile(path.resolve(PROJECT_ROOT, f))) {
      pass(f);
    } else {
      fail(`${f} 缺失`);
    }
  }

  const docs = ["theory-map.zh-CN.md", "how-to-use.zh-CN.md", "commercial-extension.zh-CN.md"];
  for (const d of docs) {
    if (readFile(path.resolve(PROJECT_ROOT, "docs", d))) {
      pass(`docs/${d}`);
    } else {
      warn(`docs/${d} 缺失`);
    }
  }
}

function showSummary() {
  section("结果");

  console.log("");
  if (errors === 0 && warnings === 0) {
    console.log("✅ 全部通过 — 可以发版");
    console.log(`   Skill 版本: ${SKILL_VERSION}`);
    console.log(`   Schema 版本: ${SCHEMA_VERSION}`);
    console.log("");
    console.log("   下一步: git tag v${SKILL_VERSION} && git push --tags");
  } else if (errors === 0) {
    console.log(`⚠️  ${warnings} 个警告 — 建议修复后再发版`);
  } else {
    console.error(`❌ ${errors} 个错误, ${warnings} 个警告 — 禁止发版`);
    process.exit(1);
  }
}

// ── Main ──────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const quickMode = args.includes("--quick");
  const bumpMode = args.includes("--bump");

  console.log("Product Route · Release Check");
  console.log("==============================");
  console.log(`Skill: v${SKILL_VERSION} | Schema: v${SCHEMA_VERSION}`);
  if (quickMode) console.log("Mode: quick (仅规则 ID)");
  if (bumpMode) console.log("Mode: bump (确认版本号)");

  checkSkillStructure();

  if (!quickMode) {
    checkRuleIds();
    checkBilingualAlignment();
    checkBundleConsistency();
    checkSchemas();
    checkDocs();
  } else {
    checkRuleIds();
  }

  showSummary();

  if (bumpMode) {
    console.log("");
    console.log("版本号确认:");
    console.log(`  SKILL_VERSION = "${SKILL_VERSION}"  (export.ts)`);
    console.log(`  SCHEMA_VERSION = "${SCHEMA_VERSION}" (export.ts)`);
    console.log("");
    console.log("如需改版本号，编辑 src/export.ts 顶部的常量。");
  }
}

main();
