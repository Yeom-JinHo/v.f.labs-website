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
    shortDescription: "그는 감히 전설이라고 할 수 있다.",
    fullDescription: "그는 감히 전설이라고 할 수 있다.",
  },
  {
    name: "JinHo",
    image: "/images/person/jinho.png",
    nickname: "yeom2",
    shortDescription: "엄마 나는 커서 승호처럼 될래요.",
    fullDescription: "엄마 나는 커서 승호처럼 될래요.",
  },
  {
    name: "Kingtaro",
    image: "/images/person/juntaro.jpg",
    nickname: "juntaro",
    shortDescription: "King",
    fullDescription: `
Tech House, Deep Tech House 그리고 Minimal까지 폭넓게 플레이하고 제작하는 DJ/Producer JUNTARO(준타로)는 명실상부히 아시아 하우스 씬을 대표하는 아티스트.
많은 이들이 존경을 보내는 Terminal Underground, TMRW Music, Rawsome Recording 등의 레코즈에서 EP 와 Single 들을 릴리즈 하며 비트 포트 차트 6위라는 괄목한 성과를 이뤄냈고
James Hype, Mark Knight, Jamie Jones, Marco Carola, Matroda 등 정점을 달리는 아티스트들 과 이비자를 대표하는 이벤트 중 하나인 United Ants의 지원을 받으며 국제적 러브콜을 받고 있다.

JUNTARO is a Tech House producer and DJ based in Seoul, South Korea who presents new trends with his own sound. He
proved his worth as a producer by releasing EPs and singles through leading labels such as Matrodas' Terminal Underground
Records. He also had an amazing performance, peaking at #6 on the Beatport Tech House charts. Since 2010, he has been
active in numerous festivals and clubs, expanding his presence. Also, as a member of Kuchi Tachi, he left a mark on the dance
music world and promised more success.`,
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
    name: "Mr. Dong",
    image: "/images/person/dong.jpg",
    nickname: "dminzz",
    shortDescription: "Dong",
    fullDescription: "Dong",
  },
];

export const artistProfile = {
  baseUrl: "/artistProfiles",
  getPages: () => artistProfilesData,
  getPage: (name: string) => artistProfilesData.find((p) => p.name === name),
};
