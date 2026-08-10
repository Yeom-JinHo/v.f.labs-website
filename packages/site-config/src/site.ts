/**
 * A site is one manageable brand surface: a label, an agency, or an artist that
 * owns its own pages. The id doubles as the public route prefix
 * (`/vague-frequency-labs`, `/celebrate-agency`, ...) so admin urls line up with
 * the site they edit: `/admin/vague-frequency-labs/artist`.
 */
export const SITE = {
  VAGUE_FREQUENCY_LABS: "vague-frequency-labs",
  CELEBRATE_AGENCY: "celebrate-agency",
  PAYDAY_RECORDS: "payday-records",
  JUNTARO: "juntaro",
} as const;

export type Site = (typeof SITE)[keyof typeof SITE];

export const SITES = Object.values(SITE);

export const SITE_LABEL = {
  [SITE.VAGUE_FREQUENCY_LABS]: "VAGUE FREQUENCY LABS",
  [SITE.CELEBRATE_AGENCY]: "CELEBRATE AGENCY",
  [SITE.PAYDAY_RECORDS]: "PAYDAY RECORDS",
  [SITE.JUNTARO]: "JUNTARO",
} as const satisfies Record<Site, string>;

export const SITE_SHORT_LABEL = {
  [SITE.VAGUE_FREQUENCY_LABS]: "VFLABS",
  [SITE.CELEBRATE_AGENCY]: "CELEBRATE",
  [SITE.PAYDAY_RECORDS]: "PAYDAY",
  [SITE.JUNTARO]: "JUNTARO",
} as const satisfies Record<Site, string>;

export const isSite = (value: string): value is Site =>
  SITES.includes(value as Site);
