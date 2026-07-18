import assert from "node:assert/strict";
import test from "node:test";
import {
  contributionYears,
  contributionsForYear,
  parseContributionData,
} from "./github-contributions.ts";

test("validates and orders GitHub contribution data", () => {
  const data = parseContributionData({
    total: { 2026: 3, 2025: 1 },
    contributions: [
      { date: "2026-01-02", count: 2, level: 2 },
      { date: "2026-01-01", count: 1, level: 1 },
    ],
  });

  assert.ok(data);
  assert.deepEqual(contributionYears(data), ["2025", "2026"]);
  assert.deepEqual(
    contributionsForYear(data, "2026").map(({ date }) => date),
    ["2026-01-01", "2026-01-02"]
  );
  assert.deepEqual(
    contributionsForYear(data, "2026", "2026-01-01").map(
      ({ date }) => date
    ),
    ["2026-01-01"]
  );
  assert.equal(
    parseContributionData({ total: { 2026: "3" }, contributions: [] }),
    null
  );
});
