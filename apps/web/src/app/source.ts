import type { ArtistProfile } from "@/types/artist";
import { createMDXSource } from "@fumadocs/content-collections";
import {
  SiInstagram,
  SiSoundcloud,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
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
    fullDescription: `
    JUNTARO is a Tech House producer and DJ based in Seoul,  
South Korea who presents new trends with his own sound.  
He proved his worth as a producer by releasing EPs and singles through leading labels such as  
Matroda's 'Terminal Underground Records'.  
He also had an amazing performance, peaking at #6 on the Beatport Tech House charts.  
Since 2010, he has been active in numerous festivals and clubs, expanding his presence.  
Also, as a member of Kuchi Tachi, he left a mark on the  
asia dance music world and promised more success.


JUNTARO는 서울을 기반으로 활동하는 테크 하우스 프로듀서이자 DJ입니다.  
그는 자신만의 사운드로 새로운 트렌드를 제시합니다.  
Matroda의 'Terminal Underground Records'와 같은 대표 레이블을 통해  
EP와 싱글을 발매하며 프로듀서로서의 실력을 입증했습니다.  
또한 Beatport 테크 하우스 차트에서 최고 6위를 기록하는 뛰어난 성과를 거두었습니다.  
2010년부터 그는 다양한 페스티벌과 클럽에서 활발히 활동하며 존재감을 넓혀왔습니다.  
또한 Kuchi Tachi의 멤버로서 아시아 댄스 음악 씬에 큰 흔적을 남겼고,  
앞으로 더 큰 성공을 예고하고 있습니다.
`,
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/ye0m_2/",
        Icon: SiInstagram,
      },
      {
        name: "Instagram",
        href: "https://soundcloud.com/ye0m2",
        Icon: SiSoundcloud,
      },
    ],
  },
  {
    name: ARTIST_NAME.SIELO,
    image: "/images/artist/sielo/profile.jpg",
    nickname: ARTIST_NAME.SIELO,
    shortDescription: "King",
    fullDescription: `
    DJ/Producer Sielo has been making waves in the global Tech House scene since 2020, with his music being released on prominent international labels like In/Rotation, The Myth Of NYX, Controversia, Elevation, Bass House Music, Soave Records, and Lowly. His unique sound has led to ongoing collaborations with top-tier DJs and producers from around the world.

In August 2022, Sielo’s collaboration with LOOZBONE, “I Can Feel It,” under In/Rotation, gained significant exposure, being featured as background music in the EDC Orlando 2022 Recap Video and the CORONA USA Video. His most recent track, “Mindscape,” was crafted alongside the renowned ‘K-391’ the producer behind massive hits like ‘Lily’ and ’Ignite’ and Nick Strand, former member of Seeb.

Sielo has quickly gained recognition within the Tech House scene, both in Korea and internationally. His tracks have earned support from some of the biggest names in the industry, including David Guetta, Alok, Don Diablo, Tchami, 4B, Showtek, Firebeats, Mike Williams, House Nation, Future House Music, and Bass House Music.

Beyond his music, Sielo’s presence on the DJ circuit is growing. He has been booked for major festivals such as World DJ Festival, Micro Seoul, and Strike Music Festival, where his electrifying performances have caught the attention of fans and industry professionals alike.

With his signature infectious sound and distinct style, Sielo continues to expand his fan base and is building momentum with his exciting musical journey. Expect more from him as he captivates the global stage with his electrifying beats, creative collaborations, and positive energy.


DJ/프로듀서 Sielo는 2020년부터 글로벌 테크 하우스 씬에서 두각을 나타내고 있으며,
그의 음악은 In/Rotation, The Myth Of NYX, Controversia, Elevation, Bass House Music, Soave Records, Lowly와 같은 저명한 해외 레이블에서 발매되었습니다.
독창적인 사운드를 바탕으로 세계 각지의 톱 클래스 DJ 및 프로듀서들과 지속적인 협업을 이어가고 있습니다.

2022년 8월, LOOZBONE과의 협업 트랙 “I Can Feel It”(In/Rotation)는
EDC Orlando 2022 Recap 영상 및 CORONA USA 광고 영상의 배경음악으로 사용되며 큰 주목을 받았습니다.
최신곡 “Mindscape”는 세계적인 히트곡 ‘Lily’, ‘Ignite’를 만든 K-391,
그리고 Seeb의 전 멤버 Nick Strand와 함께 작업한 곡입니다.

Sielo는 한국뿐 아니라 해외 테크 하우스 씬에서도 빠르게 인지도를 쌓아왔으며,
그의 트랙은 David Guetta, Alok, Don Diablo, Tchami, 4B, Showtek, Firebeats, Mike Williams 등
글로벌 탑 아티스트들의 서포트를 받고 있습니다.
또한 House Nation, Future House Music, Bass House Music 등 주요 채널들에서도 주목받고 있습니다.

음악 외에도 Sielo의 DJ 활동 또한 점차 확장되고 있으며,
World DJ Festival, Micro Seoul, Strike Music Festival 등 주요 페스티벌에 섭외되어
팬들과 업계 관계자들 사이에서 강렬한 인상을 남기고 있습니다.

감염력 강한 사운드와 독창적인 스타일을 바탕으로 팬층을 넓히고 있는 그는,
앞으로도 에너지 넘치는 비트, 창의적인 협업, 긍정적인 에너지로
글로벌 무대에서 더 큰 존재감을 보여줄 것으로 기대됩니다.
`,

    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/ye0m_2/",
        Icon: SiInstagram,
      },
      {
        name: "Instagram",
        href: "https://soundcloud.com/ye0m2",
        Icon: SiSoundcloud,
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
        href: "https://www.instagram.com/ye0m_2/",
        Icon: SiInstagram,
      },
      {
        name: "Instagram",
        href: "https://soundcloud.com/ye0m2",
        Icon: SiSoundcloud,
      },
    ],
  },
  {
    name: ARTIST_NAME.DEARBOI,
    image: "/images/artist/dearboi/profile.png",
    nickname: ARTIST_NAME.DEARBOI,
    shortDescription: "King",
    fullDescription: `
    Dearboi is a house/tech house DJ based in Seoul, South Korea, with his own unique vibe.  
He is currently working as a resident DJ at 'MUSE' in Seoul and is attacking many people.  
Manufactured he’s music is also an artist whose own groove has been proven and expected to contribute to future activities in Korea and abroad.

Dearboi는 서울을 기반으로 활동하는 하우스/테크 하우스 DJ로, 그만의 독특하고 매력적인 바이브로 주목받고 있습니다.  
현재 서울의 ‘MUSE’ 클럽에서 레지던트 DJ로 활약하며, 관객과 공감하는 에너지 넘치는 셋을 선보이고 있습니다.  
자신만의 색깔과 검증된 그루브를 바탕으로 국내는 물론 해외 씬에서도 활발한 활동이 기대되는 아티스트입니다.
`,
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/ye0m_2/",
        Icon: SiInstagram,
      },
      {
        name: "Instagram",
        href: "https://soundcloud.com/ye0m2",
        Icon: SiSoundcloud,
      },
    ],
  },
  {
    name: ARTIST_NAME.PLAYMODE,
    image: "/images/artist/playmode/profile.jpg",
    nickname: ARTIST_NAME.PLAYMODE,
    shortDescription: "King",
    fullDescription: `
    “PLAYMODE” is a highly skilled electronic music producer and DJ hailing from Seoul, South Korea.  
With a primary focus on Tech and Bass House genres,

“PLAYMODE” has established a reputation for their exceptional ability to explore and blend diverse sounds across various genres.

His extensive experience in the vibrant club scene from a young age has honed their live performance skills and deepened their understanding of crowd dynamics.

With his exceptional talent and ability to deliver unparalleled sonic experiences, Playmode is the ideal choice for any event or venue seeking to elevate their musical programming

“PLAYMODE”는 서울을 기반으로 활동하는 실력파 일렉트로닉 뮤직 프로듀서이자 DJ로, Tech House와 Bass House 장르를 중심으로 활약하고 있습니다.

장르를 넘나드는 사운드 믹싱과 감각적인 연출로 주목받으며, 실험적이고 창의적인 사운드로 탄탄한 평판을 쌓아왔습니다.

어릴 때부터 클럽 씬에서 활동하며 무대 경험을 쌓아온 그는 라이브 퍼포먼스 능력을 끌어올리고, 관객 흐름에 대한 탁월한 감각을 갖추게 되었습니다.

독보적인 사운드와 몰입감 있는 음악 연출 능력을 지닌 PLAYMODE는 어떤 이벤트나 공연장에서도 분위기를 한층 끌어올릴 수 있는 최고의 선택지입니다.
    `,
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/ye0m_2/",
        Icon: SiInstagram,
      },
      {
        name: "Instagram",
        href: "https://soundcloud.com/ye0m2",
        Icon: SiSoundcloud,
      },
    ],
  },
  {
    name: ARTIST_NAME.LOOZBONE,
    image: "/images/artist/loozbone/profile.png",
    nickname: ARTIST_NAME.LOOZBONE,
    shortDescription: "King",
    fullDescription: `
    LOOZBONE is a talented Tech House and Bass House producer who has been making waves in the electronic dance music scene.
With his unique sound and powerful tracks, he has gained a loyal following and caught the attention of industry professionals worldwide.

LOOZBONE has been releasing music in Korea and overseas.
Tracks like “Upgraded,” “See You,” and “Light It Up” were released on major labels such as Controversia (Alok’s label) in Brazil and HUB Records.
“I Can Feel It” was featured on Insomniac Music Group’s In/Rotation as part of the “Rotate Vol.9” compilation.
He has also remixed tracks for K-pop artists such as aespa and Seulgi (Red Velvet).
Additionally, his track “Don’t Stop” has garnered over 1 million streams on Spotify.

LOOZBONE has played at Korea’s biggest dance music festivals, including World DJ Festival and Strike Music Festival.
He has also performed at nightclubs such as Bangkok Muin, Omni / Alta (Taiwan), and clubs in South Korea including Race, Sound, and Jack.

LOOZBONE is a rising star in the electronic dance music scene.
With a unique sound that sets him apart, his recent releases and live performances have solidified his reputation as a top talent — and he is poised for even greater success in the future.

LOOZBONE은 테크 하우스와 베이스 하우스를 중심으로 활동하는 재능 있는 프로듀서로,
전자 음악 씬에서 독창적인 사운드와 강렬한 트랙들로 전 세계 업계 관계자들의 주목을 받고 있습니다.

그는 한국과 해외에서 활발히 활동 중이며,
“Upgraded”, “See You”, “Light It Up”과 같은 트랙을 브라질 최대 레이블 Controversia (Alok 소속) 및 HUB Records에서 발매했습니다.
“I Can Feel It”은 Insomniac Music Group의 In/Rotation – Rotate Vol.9 컴필레이션에 수록되었고,
aespa, 레드벨벳의 슬기 등 K-POP 아티스트의 트랙 리믹스도 진행했습니다.
특히 “Don’t Stop”은 Spotify에서 100만 스트리밍을 돌파했습니다.

LOOZBONE은 월드 DJ 페스티벌, 스트라이크 뮤직 페스티벌 등
국내 최대 댄스 뮤직 페스티벌에 출연했으며,
방콕 Muin, 대만 Omni/Alta, 그리고 한국의 Race, Sound, Jack 등 주요 클럽에서도 공연했습니다.

LOOZBONE은 빠르게 떠오르는 일렉트로닉 댄스 뮤직 신의 스타로,
그만의 독창적인 사운드와 무대 퍼포먼스로 존재감을 강화하고 있으며
앞으로 더욱 기대되는 아티스트로 주목받고 있습니다.
    `,
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/ye0m_2/",
        Icon: SiInstagram,
      },
      {
        name: "Instagram",
        href: "https://soundcloud.com/ye0m2",
        Icon: SiSoundcloud,
      },
    ],
  },
  {
    name: ARTIST_NAME.RYUMO,
    image: "/images/artist/ryumo/profile.jpg",
    nickname: ARTIST_NAME.RYUMO,
    shortDescription: "King",
    fullDescription: `
    Young and hot DJ / Producer from Seoul, Korea.  
Ryumo is Punk, and has positive style.

Ryumo currently serves as a head producer of Club Chroma, a globally renowned club located in South Korea.

He played at huge festivals such as World DJ Festival, S20, Micro and Strike Festival and holds a solid resume for opening for Zedd, Nicky Romero, Alok, Kaaze and more.

Ryumo has also breached the mainstream media by participating as one of the main acts in a TV show called "WET!"

During the course of this TV series, he demonstrated a variety of skills and released a track with the K-Pop Group called “Lovelyz”

He started his career as a producer with Future House genre under the name "Tasty Hills", but continues his activities mainly in the drum and base and UK house genres in line with his new name and branding.

Also, he has 0.1million views on short-form videos


Ryumo는 서울 출신의 젊고 에너지 넘치는 DJ/프로듀서로,  
펑크한 태도와 긍정적인 스타일로 주목받고 있는 아티스트입니다.

현재 그는 한국을 대표하는 글로벌 클럽인 클럽 크로마(Chroma)의  
헤드 프로듀서로 활동하고 있습니다.

월드 DJ 페스티벌, S20, 마이크로 페스티벌, 스트라이크 뮤직 페스티벌 등  
대형 무대에서 공연했으며, Zedd, Nicky Romero, Alok, Kaaze 등의 오프닝 무대 이력을 보유하고 있습니다.

또한 방송 예능 프로그램 "WET!"에 메인 아티스트로 출연해 다양한 재능을 보여주었으며, K-POP 그룹 러블리즈와의 트랙 작업도 진행했습니다.

활동 초반에는 "Tasty Hills"라는 이름으로 Future House 장르의 프로듀서로 시작했으며,  
현재는 이름과 브랜드를 새롭게 하여 Drum & Bass, UK House 중심으로 활동 중입니다.

또한 숏폼 플랫폼에서도 주목받으며, 10만 뷰 이상의 조회수를 기록하고 있습니다.
    `,
    socials: [
      {
        name: "Youtube",
        href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
        Icon: SiYoutube,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/ye0m_2/",
        Icon: SiInstagram,
      },
      {
        name: "Instagram",
        href: "https://soundcloud.com/ye0m2",
        Icon: SiSoundcloud,
      },
    ],
  },
];

export const artistProfile = {
  baseUrl: "/artistProfiles",
  getPages: () => artistProfilesData,
  getPage: (name: string) => artistProfilesData.find((p) => p.name === name),
};
