import type { Link } from "@/types/link";

// This is a setting for the compact header
const linkLimit = 4;
//

const links: Link[] = [
  {
    title: "Company",
    href: "/",
    thumbnail: "home.jpg",
  },
  {
    title: "Video",
    href: "/video",
    thumbnail: "about.jpg",
  },
  {
    title: "Artist",
    href: "/artist",
    thumbnail: "projects.jpg",
  },
  {
    title: "Contact",
    href: "/contact",
    thumbnail: "blog.jpg",
  },
];

export { linkLimit, links };
