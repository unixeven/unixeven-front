'use client';

import { FC } from 'react';
import { Link } from 'react-scroll';
// import { GrServices } from "react-icons/gr";
// import { GiProcessor } from "react-icons/gi";
// import { IoMdBriefcase } from "react-icons/io";
// import { RiTeamFill } from "react-icons/ri";
// import { FaPhone } from "react-icons/fa";

// const links = [
//   { name: "Послуги", id: "services", icon: GrServices },
//   { name: "Процеси", id: "processes", icon: GiProcessor },
//   { name: "Портфоліо", id: "portfolio", icon: IoMdBriefcase },
//   { name: "Команда", id: "team", icon: RiTeamFill },
//   { name: "Контакти", id: "contacts", icon: FaPhone },
// ];

interface NavBarProps {
  nav: { name: string; id: string }[];
}

export const NavBar: FC<NavBarProps> = ({ nav }) => {
  return (
    <ul className="flex flex-col gap-7 md:flex-row items-center justify-center md:gap-4 lg:gap-8">
      {nav.map(({ name, id }) => {
        // const LinkIcon = icon;
        return (
          <li key={id}>
            <Link
              to={id}
              offset={30}
              smooth={true}
              duration={500}
              className="block md:py-5 text-2xl text-center md:text-base lg:text-2xl cursor-pointer"
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
