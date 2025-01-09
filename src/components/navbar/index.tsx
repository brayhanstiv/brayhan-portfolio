"use client";
// Packages
import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Button,
  Kbd,
  Link,
  Input,
  link as linkStyles,
} from "@nextui-org/react";
import { Link as RoutingLink, usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";

// Config
import { siteConfig } from "@/config/site";

// Components
import { ThemeSwitch } from "@/components/switches/themeSwitch";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslations("Navbar");
  const pathName = usePathname();

  const searchInput = (
    <Input
      aria-label='Search'
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className='hidden lg:inline-block' keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement='outside'
      placeholder='Search...'
      startContent={
        <Icon
          className='text-base text-default-400 pointer-events-none flex-shrink-0'
          icon='solar:magnifer-outline'
        />
      }
      type='search'
    />
  );

  return (
    <>
      <NextUINavbar maxWidth='full' position='sticky'>
        {/* Start Content */}
        <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
          {/* Brand */}
          <NavbarBrand as='li' className='gap-3 max-w-fit'>
            <RoutingLink
              className='flex justify-start items-center gap-1'
              href='/'
            >
              <p className='text-4xl font-bold text-inherit'>
                Brayhan<span className='text-accent-default'>.</span>
              </p>
            </RoutingLink>
          </NavbarBrand>

          {/*  Desktop Menu */}
          <ul className='hidden md:flex gap-4 justify-start ml-2'>
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <RoutingLink
                  className={clsx(
                    `${item.href === pathName ? "text-accent-default border-accent-default border-b-2 pb-2" : "text-foreground-500"}`
                  )}
                  href={item.href}
                >
                  {t(item.label)}
                </RoutingLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        {/* Content Desktop menu */}
        <NavbarContent
          className='hidden md:flex basis-1/5 sm:basis-full'
          justify='end'
        >
          <NavbarItem className='hidden sm:flex gap-2'>
            <ThemeSwitch />
            <Button color='secondary' className='text-black '>
              {t("hire_me")}
            </Button>
          </NavbarItem>
          <NavbarItem className='hidden lg:flex'>{searchInput}</NavbarItem>
        </NavbarContent>

        {/* Nav menu */}
        <NavbarMenu>
          {searchInput}
          <div className='mx-4 mt-2 md:flex flex-col gap-2'>
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`} className='mb-2'>
                <RoutingLink
                  className={clsx(
                    `${item.href === pathName ? "text-accent-default border-accent-default border-b-1 pb-1" : "text-foreground-500"}`
                  )}
                  href={item.href}
                >
                  {t(item.label)}
                </RoutingLink>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>

        {/* Content Nav menu */}
        <NavbarContent className='md:hidden basis-1 pl-4' justify='end'>
          <ThemeSwitch />
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
      </NextUINavbar>
    </>
  );
};
