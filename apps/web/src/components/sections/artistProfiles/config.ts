import type { ArtistProfile } from "@/types/artist";
import { artistProfile as artistProfileData } from "@/app/source";

export const artistProfiles: ArtistProfile[] = artistProfileData.getPages();
