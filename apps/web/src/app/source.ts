import type { ArtistProfile } from "@/types/artist";
import { createMDXSource } from "@fumadocs/content-collections";
import {
  allBlogMetas,
  allBlogs,
  allProjectMetas,
  allProjects,
} from "content-collections";
import { loader } from "fumadocs-core/source";

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
    name: "Ho",
    image: "/images/person/ho.jpeg",
    nickname: "seungho",
    description: "그는 감히 전설이라고 할 수 있다.",
  },
  {
    name: "JinHo",
    image: "/images/person/jinho.png",
    nickname: "yeom2",
    description: "엄마 나는 커서 승호처럼 될래요.",
  },
  {
    name: "Kingtaro",
    image: "/images/person/kingtaro.png",
    nickname: "juntaro",
    description: "King",
  },
  {
    name: "Mr. Dong",
    image: "/images/person/dong.jpg",
    nickname: "dminzz",
    description: "Dong",
  },
];

export const artistProfile = {
  baseUrl: "/artistProfiles",
  getPages: () => artistProfilesData,
  getPage: (name: string) => artistProfilesData.find((p) => p.name === name),
};
