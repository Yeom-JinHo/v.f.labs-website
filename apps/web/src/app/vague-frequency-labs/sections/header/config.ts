import type { Link } from "@/types/link";

// This is a setting for the compact header
const linkLimit = 4;
//

const links: Link[] = [
  {
    title: "About",
    href: "/vague-frequency-labs/about",
    thumbnail: "home.jpg",
  },
  {
    title: "Video",
    href: "/vague-frequency-labs/video",
    thumbnail: "about.jpg",
  },
  {
    title: "Artist",
    href: "/vague-frequency-labs/artist",
    thumbnail: "projects.jpg",
  },
  {
    title: "Contact",
    href: "/vague-frequency-labs/contact",
    thumbnail: "blog.jpg",
  },
];

export { linkLimit, links };
