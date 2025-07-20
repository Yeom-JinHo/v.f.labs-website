import type { ArtistProfile } from "@/types/artist";
import { createMDXSource } from "@fumadocs/content-collections";
import { SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";
import {
  allBlogMetas,
  allBlogs,
  allProjectMetas,
  allProjects,
} from "content-collections";
import { loader } from "fumadocs-core/source";

import { ARTIST_NAME } from "./../consts/artist";

export const project = loader({
  baseUrl: "/projects",
  source: createMDXSource(allProjects, allProjectMetas),
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(allBlogs, allBlogMetas),
});

export const artistProfilesData: ArtistProfile[] = [
  {
    name: ARTIST_NAME.JUNTARO,
    image: "/images/artist/juntaro/profile.jpg",
    nickname: ARTIST_NAME.JUNTARO,
    shortDescription: "King",
    fullDescription: "test",
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/juntaromusic/",
        Icon: SiInstagram,
      },
    ],
  },
  {
    name: ARTIST_NAME.SIELO,
    image: "/images/artist/sielo/profile.jpg",
    nickname: ARTIST_NAME.SIELO,
    shortDescription: "King",
    fullDescription: "test",
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/juntaromusic/",
        Icon: SiInstagram,
      },
    ],
  },
  {
    name: ARTIST_NAME.SAM,
    image: "/images/artist/sam/profile.jpeg",
    nickname: ARTIST_NAME.SAM,
    shortDescription: "King",
    fullDescription: "test",
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/juntaromusic/",
        Icon: SiInstagram,
      },
    ],
  },
  {
    name: ARTIST_NAME.DEARBOI,
    image: "/images/artist/dearboi/profile.png",
    nickname: ARTIST_NAME.DEARBOI,
    shortDescription: "King",
    fullDescription: "test",
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/juntaromusic/",
        Icon: SiInstagram,
      },
    ],
  },
  {
    name: ARTIST_NAME.PLAYMODE,
    image: "/images/artist/playmode/profile.jpg",
    nickname: ARTIST_NAME.PLAYMODE,
    shortDescription: "King",
    fullDescription: "test",
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/juntaromusic/",
        Icon: SiInstagram,
      },
    ],
  },
  {
    name: ARTIST_NAME.LOOZBONE,
    image: "/images/artist/loozbone/profile.png",
    nickname: ARTIST_NAME.LOOZBONE,
    shortDescription: "King",
    fullDescription: "test",
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/juntaromusic/",
        Icon: SiInstagram,
      },
    ],
  },
  {
    name: ARTIST_NAME.RYUMO,
    image: "/images/artist/ryumo/profile.jpg",
    nickname: ARTIST_NAME.RYUMO,
    shortDescription: "King",
    fullDescription: "test",
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/juntaromusic/",
        Icon: SiInstagram,
      },
    ],
  },
];

export const artistProfile = {
  baseUrl: "/artistProfiles",
  getPages: () => artistProfilesData,
  getPage: (name: string) => artistProfilesData.find((p) => p.name === name),
};
