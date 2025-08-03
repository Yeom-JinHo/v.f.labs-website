import type { IconName } from "@/lib/icon-map";

export interface Socials {
  name: string;
  href: string;
  iconName?: IconName;
}

export interface Contact {
  email: string;
  socials: Socials[];
}
