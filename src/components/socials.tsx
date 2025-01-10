// Packages
import { siteConfig } from "@/config/site";
import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/react";
import React from "react";

// Contants
const socials = [
  { icon: "hugeicons:github", path: `${siteConfig.links.github}` },
  { icon: "hugeicons:linkedin-02", path: `${siteConfig.links.linkedin}` },
];

type SocialProps = {
  containerStyles: string;
  subContainerStyles: string;
  iconStyles: string;
};

const Socials = ({
  containerStyles,
  subContainerStyles,
  iconStyles,
}: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} isExternal href={item.path}>
            <div className={subContainerStyles}>
              <Icon icon={item.icon} className={iconStyles} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
