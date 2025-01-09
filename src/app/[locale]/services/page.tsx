"use client";

import { Link } from "@/i18n/routing";
import { Icon } from "@iconify/react";
// Packages
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Front-end",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dignissimos consequatur animi labore unde culpa repudiandae quae delectus distinctio quasi.",
    href: "",
  },
  {
    num: "02",
    title: "Diseño UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dignissimos consequatur animi labore unde culpa repudiandae quae delectus distinctio quasi.",
    href: "",
  },
  {
    num: "03",
    title: "Back-end",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dignissimos consequatur animi labore unde culpa repudiandae quae delectus distinctio quasi.",
    href: "",
  },
  {
    num: "04",
    title: "IA",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dignissimos consequatur animi labore unde culpa repudiandae quae delectus distinctio quasi.",
    href: "",
  },
];

export default function ServicePage() {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className=' grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className='flex flex-col justify-center gap-6 group'
              >
                {/* Top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-default transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                  >
                    <Icon
                      icon='solar:arrow-right-down-linear'
                      className='text-primary text-3xl'
                    />
                  </Link>
                </div>
                {/* Heading */}
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500 cursor-pointer'>
                  {service.title}
                </h2>
                {/* Description */}
                <p className='text-white/60'>{service.description}</p>
                {/* Border */}
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
