import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import Link from "next/link";

const mediaIcons = [
  { name: "Facebook", href: "https://uk-ua.facebook.com/", icon: FaFacebookF },
  { name: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
  { name: "LinkedinIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
];

export const SocialContactUs = () => {
  return (
    <div className="flex gap-6 items-center">
      {mediaIcons.map((media) => {
        const LinkIcon = media.icon;
        return (
            <Link
              key={media.name}
              href={media.href}
              className="group flex items-center outline-none justify-center gradient-border dark:relative dark:border-0 dark:hover:shadow-none dark:focus:shadow-none dark:hover:before:bg-pacificBlue dark:focus:before:bg-pacificBlue p-4 size-16 rounded-full border-2 border-cobalt cursor-pointer hover:border-pacificBlue focus:border-pacificBlue"
            >
              <LinkIcon className="fill-cobalt dark:fill-lightWhite group-hover:fill-pacificBlue group-focus:fill-pacificBlue" size={34} />
            </Link>
          
        );
      })}
    </div>
  )
};
