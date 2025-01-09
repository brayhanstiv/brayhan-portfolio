// Packages
import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";
import React from "react";

// Contants
const socials = [
  { icon: "hugeicons:github", path: "" },
  { icon: "hugeicons:linkedin-02", path: "" },
];

type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};

const Socials = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} isExternal href={item.path}>
            <Icon icon={item.icon} className={iconStyles} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
