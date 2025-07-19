import type { Socials } from "./contact";

export interface ArtistProfile {
  name: string;
  image: string;
  nickname: string;
  shortDescription: string;
  fullDescription: string;
  socials?: Socials[];
}
