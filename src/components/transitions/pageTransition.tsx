"use client";

// Packages
import { AnimatePresence, delay, motion } from "framer-motion";
import { usePathname } from "@/i18n/routing";
import React, { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode | ReactNode[];
  className?: string;
};

const PageTransition = ({ className, children }: PageTransitionProps) => {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <div className={className} key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed top-0 bg-black pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
