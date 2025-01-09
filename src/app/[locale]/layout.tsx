// Packages
import { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import clsx from "clsx";
import "@/styles/globals.css";

import { Providers } from "./providers";

// Components
import PageTransition from "@/components/transitions/pageTransition";
import StairTransition from "@/components/transitions/stairTransition";

// Config
import { siteConfig } from "@/config/site";
import { fontBrainsMono } from "@/config/fonts";

// Components
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang='es'>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          fontBrainsMono.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <div className='relative flex flex-col h-screen'>
              <Navbar />
              <StairTransition />
              <PageTransition className='container mx-auto max-w-7xl pt-16 px-8 lg:px-16 flex-grow'>
                {children}
              </PageTransition>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
