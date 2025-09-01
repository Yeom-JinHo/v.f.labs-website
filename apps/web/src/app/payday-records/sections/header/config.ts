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
    title: "Contact",
    href: "/vague-frequency-labs/contact",
  },
];

export { linkLimit, links };
