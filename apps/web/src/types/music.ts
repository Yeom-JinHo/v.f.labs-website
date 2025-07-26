import type { ArtistName } from "./artist";
import type { Socials } from "./contact";

export interface MusicInfo {
  name: string;
  artist: ArtistName;
  image: string;
  shortDescription: string;
  fullDescription: string;
  socials?: Socials[];
}
