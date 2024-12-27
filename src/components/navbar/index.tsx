"use client";
// Packages
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import { Link as RoutingLink } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";

// Config
import { siteConfig } from "@/config/site";

// Components
import { ThemeSwitch } from "@/components/switches/theme";
import { GithubIcon, SearchIcon } from "@/components/icons";

export const Navbar = () => {
  const t = useTranslations("Navbar");

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
        <SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />
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
                  className={clsx(linkStyles({ color: "foreground" }))}
                  color='foreground'
                  href={item.href}
                >
                  {t(item.label)}
                </RoutingLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        {/* Content Nav menu */}
        <NavbarContent className='md:hidden basis-1 pl-4' justify='end'>
          <ThemeSwitch />
          <NavbarMenuToggle />
          <Link isExternal aria-label='Hire me' href={siteConfig.links.github}>
            <GithubIcon className='text-default-500' />
          </Link>
          <Button color='secondary' className='text-black'>
            {t("hire_me")}
          </Button>
        </NavbarContent>

        {/* Content Desktop menu */}
        <NavbarContent
          className='hidden md:flex basis-1/5 sm:basis-full'
          justify='end'
        >
          <NavbarItem className='hidden sm:flex gap-2'>
            <ThemeSwitch />
            <Link
              isExternal
              aria-label='Hire me'
              href={siteConfig.links.github}
            >
              <GithubIcon className='text-default-500' />
            </Link>
            <Button color='secondary' className='text-black'>
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
              <NavbarMenuItem key={`${item}-${index}`}>
                <RoutingLink
                  color={
                    index === siteConfig.navMenuItems.length - 1
                      ? "secondary"
                      : "foreground"
                  }
                  href={item.href}
                >
                  {t(item.label)}
                </RoutingLink>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </>
  );
};
