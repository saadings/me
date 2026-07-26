import { describe, expect, it } from "vitest";

import robots from "./robots";

// See src/data/index.test.ts - saadings.me no longer resolves.
const LAPSED_DOMAIN = "saadings.me";

describe("robots", () => {
  it("advertises a sitemap on a reachable host", () => {
    const { sitemap } = robots();

    expect(sitemap).toMatch(/^https:\/\//);
    expect(sitemap).not.toContain(LAPSED_DOMAIN);
  });
});
