import { describe, expect, it } from "vitest";

import { projects, socialMedia } from "@/data";

// The saadings.me domain lapsed, so every URL still pointing at it fails DNS.
// Deployed projects are reachable through their Vercel-hosted aliases instead.
const LAPSED_DOMAIN = "saadings.me";

describe("projects", () => {
  it.each(projects)("$title has a reachable link", ({ link }) => {
    expect(link).toMatch(/^https:\/\//);
    expect(link).not.toContain(LAPSED_DOMAIN);
  });
});

describe("socialMedia", () => {
  it.each(socialMedia)("profile $id has a reachable link", ({ link }) => {
    expect(link).toMatch(/^https:\/\//);
    expect(link).not.toContain(LAPSED_DOMAIN);
  });
});
