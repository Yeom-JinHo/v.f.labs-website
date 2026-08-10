import type { Site } from "./site";
import { SITE } from "./site";

/**
 * An admin module is one manageable entity type. Adding a module here is only
 * half the work — it also needs a matching route under
 * `apps/web/src/app/admin/[site]/<module>`.
 */
export const ADMIN_MODULE = {
  ARTIST: "artist",
  RELEASE: "release",
  TOUR: "tour",
} as const;

export type AdminModule = (typeof ADMIN_MODULE)[keyof typeof ADMIN_MODULE];

export const ADMIN_MODULE_LABEL = {
  [ADMIN_MODULE.ARTIST]: "Artists",
  [ADMIN_MODULE.RELEASE]: "Releases",
  [ADMIN_MODULE.TOUR]: "Tours",
} as const satisfies Record<AdminModule, string>;

/**
 * Which entity types each site manages. This is the single source of truth for
 * the admin sidebar, the route guards and the server actions — never branch on
 * the site id anywhere else.
 *
 * Note this only decides *which modules exist* for a site. It says nothing
 * about *which rows* are visible inside a module; that stays a query-level
 * concern (`where site_id = ...`).
 */
export const SITE_ADMIN_MODULES = {
  [SITE.VAGUE_FREQUENCY_LABS]: [ADMIN_MODULE.ARTIST, ADMIN_MODULE.RELEASE],
  [SITE.CELEBRATE_AGENCY]: [ADMIN_MODULE.ARTIST],
  [SITE.PAYDAY_RECORDS]: [ADMIN_MODULE.RELEASE],
  [SITE.JUNTARO]: [ADMIN_MODULE.RELEASE, ADMIN_MODULE.TOUR],
} as const satisfies Record<Site, readonly AdminModule[]>;

export const getEnabledModules = (site: Site): readonly AdminModule[] =>
  SITE_ADMIN_MODULES[site];

export const isModuleEnabled = (site: Site, module: AdminModule): boolean =>
  getEnabledModules(site).includes(module);

export const adminModulePath = (site: Site, module: AdminModule): string =>
  `/admin/${site}/${module}`;
