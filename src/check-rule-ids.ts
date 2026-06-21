/**
 * check-rule-ids.ts
 *
 * 检查中文 Skill 包中的规则 ID 是否完整：
 * - scoring-rules.md 必须包含 S01-S12
 * - routing-rules.md 必须包含 R01-R09
 * - risk-gates.md 必须包含 G01-G08
 *
 * 如果缺失，输出错误信息并以非零退出码退出。
 */

import * as fs from "fs";
import * as path from "path";

const PROJECT_ROOT = path.resolve(__dirname, "..");
const SKILL_DIR = path.resolve(PROJECT_ROOT, "skills/product-route.zh-CN/references");

interface RuleCheck {
  file: string;
  prefix: string;
  expectedIds: string[];
}

const CHECKS: RuleCheck[] = [
  {
    file: "scoring-rules.md",
    prefix: "S",
    expectedIds: Array.from({ length: 12 }, (_, i) => `S${String(i + 1).padStart(2, "0")}`),
  },
  {
    file: "routing-rules.md",
    prefix: "R",
    expectedIds: Array.from({ length: 9 }, (_, i) => `R${String(i + 1).padStart(2, "0")}`),
  },
  {
    file: "risk-gates.md",
    prefix: "G",
    expectedIds: Array.from({ length: 8 }, (_, i) => `G${String(i + 1).padStart(2, "0")}`),
  },
];

let errors = 0;

for (const check of CHECKS) {
  const filePath = path.join(SKILL_DIR, check.file);

  if (!fs.existsSync(filePath)) {
    console.error(`[ERROR] File not found: ${check.file}`);
    errors++;
    continue;
  }

  const content = fs.readFileSync(filePath, "utf-8");

  const missing: string[] = [];
  for (const id of check.expectedIds) {
    // Match the ID as a standalone token (preceded by non-word char or start of line)
    const regex = new RegExp(`(^|\\W)${id}(\\W|$)`, "m");
    if (!regex.test(content)) {
      missing.push(id);
    }
  }

  if (missing.length > 0) {
    console.error(`[ERROR] ${check.file}: Missing IDs: ${missing.join(", ")}`);
    errors++;
  } else {
    console.log(`[OK] ${check.file}: All ${check.expectedIds.length} IDs present (${check.prefix}01-${check.prefix}${String(check.expectedIds.length).padStart(2, "0")})`);
  }
}

// Also check CORE.md for P01-P06
const corePath = path.resolve(PROJECT_ROOT, "CORE.md");
if (fs.existsSync(corePath)) {
  const coreContent = fs.readFileSync(corePath, "utf-8");
  const pIds = Array.from({ length: 6 }, (_, i) => `P${String(i + 1).padStart(2, "0")}`);
  const pMissing: string[] = [];
  for (const id of pIds) {
    const regex = new RegExp(`(^|\\W)${id}(\\W|$)`, "m");
    if (!regex.test(coreContent)) {
      pMissing.push(id);
    }
  }
  if (pMissing.length > 0) {
    console.warn(`[WARN] CORE.md: Missing principle IDs: ${pMissing.join(", ")}`);
  } else {
    console.log(`[OK] CORE.md: All 6 principle IDs present (P01-P06)`);
  }
}

console.log("");
if (errors > 0) {
  console.error(`❌ Check failed: ${errors} error(s) found.`);
  process.exit(1);
} else {
  console.log("✅ All rule IDs verified.");
  process.exit(0);
}
