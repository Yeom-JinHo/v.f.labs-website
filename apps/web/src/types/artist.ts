import type { Socials } from "./contact";

export interface ArtistProfile {
  name?: string;
  image?: string;
  nickname?: string;
  description?: string;
  socials?: Socials[];
}
