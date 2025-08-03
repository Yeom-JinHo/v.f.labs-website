import {
  SiApple,
  SiBeatport,
  SiInstagram,
  SiSoundcloud,
  SiSpotify,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

export type IconName =
  | "SiApple"
  | "SiBeatport"
  | "SiInstagram"
  | "SiSoundcloud"
  | "SiSpotify"
  | "SiYoutube";

export const IconMap: Record<
  IconName,
  React.ComponentType<{ className?: string }>
> = {
  SiApple,
  SiBeatport,
  SiInstagram,
  SiSoundcloud,
  SiSpotify,
  SiYoutube,
};

export const getIcon = (iconName: IconName) => {
  return IconMap[iconName];
};
