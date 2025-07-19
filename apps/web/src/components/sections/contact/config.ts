import type { Contact } from "@/types/contact";
import { SiInstagram, SiYoutube } from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: "ye0m2@gmail.com",
  socials: [
    {
      name: "Youtube",
      href: "https://www.youtube.com/watch?v=1lAXNqA25Bs",
      Icon: SiYoutube,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/v.f.labs/",
      Icon: SiInstagram,
    },
  ],
};

export { contact };
