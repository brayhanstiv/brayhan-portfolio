"use client";

// Packages
import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import Image from "next/image";

// Styles
import "swiper/css";
import { Button, image, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quidem ex necessitatibus explicabo laudantium a placeat! Quidem quod culpa a, atque, totam cum, quo quisquam tempora sint aliquam pariatur aspernatur.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "Project 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quidem ex necessitatibus explicabo laudantium a placeat! Quidem quod culpa a, atque, totam cum, quo quisquam tempora sint aliquam pariatur aspernatur.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem quidem ex necessitatibus explicabo laudantium a placeat! Quidem quod culpa a, atque, totam cum, quo quisquam tempora sint aliquam pariatur aspernatur.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "Javascript" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

export default function WorkPage() {
  const [project, setProject] = useState(projects[0]);

  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500 capitalize">
                Proyecto {project.category}
              </h2>
              {/* Description */}
              <p className=" text-white/60">Proyecto {project.description}</p>
              {/* Stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent-default">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live project button */}
                <Link href={project.live}>
                  <Tooltip content="Proyecto en vivo" delay={100}>
                    <div className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group">
                      <Icon
                        icon="solar:arrow-right-up-linear"
                        className="text-5xl text-white group-hover:text-accent-default"
                      />
                    </div>
                  </Tooltip>
                </Link>
                {/* Github project button */}
                <Link href={project.github}>
                  <Tooltip content="Github repositorio" delay={100}>
                    <div className="w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group">
                      <Icon
                        icon="hugeicons:github"
                        className="text-5xl text-white group-hover:text-accent-default"
                      />
                    </div>
                  </Tooltip>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] lg:h-[460px]">
            <React.StrictMode>
              <Swiper
                ref={sliderRef}
                spaceBetween={30}
                slidesPerView={1}
                className="lg:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* Overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/* Image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* Slider buttons */}
                <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none px-4 lg:px-0">
                  <Button
                    onPress={handlePrev}
                    color="secondary"
                    className="bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  >
                    <Icon icon="solar:alt-arrow-left-linear" />
                  </Button>
                  <Button
                    onPress={handleNext}
                    color="secondary"
                    className="bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  >
                    <Icon icon="solar:alt-arrow-right-linear" />
                  </Button>
                </div>
              </Swiper>
            </React.StrictMode>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
