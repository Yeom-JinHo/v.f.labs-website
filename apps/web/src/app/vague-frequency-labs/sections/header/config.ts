import type { Link } from "@/types/link";

// This is a setting for the compact header
const linkLimit = 5;
//

const links: Link[] = [
  {
    title: "About",
    href: "/vague-frequency-labs/about",
  },
  {
    title: "Artist",
    href: "/vague-frequency-labs/artist",
  },
  {
    title: "Music",
    href: "/vague-frequency-labs/music",
  },
  {
    title: "Video",
    href: "/vague-frequency-labs/video",
  },
  {
    title: "Contact",
    href: "/vague-frequency-labs/contact",
  },
];

export { linkLimit, links };
