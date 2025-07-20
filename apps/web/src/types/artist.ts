import type { ARTIST_NAME } from "@/consts/artist";

import type { Socials } from "./contact";

export interface ArtistProfile {
  name: ARTIST_NAME;
  image: string;
  nickname: ARTIST_NAME;
  shortDescription: string;
  fullDescription: string;
  socials?: Socials[];
}

export type ArtistName = (typeof ARTIST_NAME)[keyof typeof ARTIST_NAME];
