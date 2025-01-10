"use client";

// Packages
import React, { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Image from "next/image";

// Styles
import "swiper/css";
import { Button, image, Link, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "Un proyecto desarrollado con Next.js, aprovechando las funcionalidades que ofrece este framework para el desarrollo de aplicaciones web escalables y rápidas. En este proyecto, se ha integrado la librería Next UI, la cual proporciona una serie de componentes modernos y personalizables para una experiencia de usuario atractiva y fluida. Además, se ha utilizado TypeScript para asegurar una mayor robustez en el código, mejorando la gestión de tipos y reduciendo posibles errores durante el desarrollo.",
    stack: [{ name: "Next Js" }, { name: "React Js" }, { name: "Typescript" }],
    image: "/assets/work/thumb1.png",
    live: "https://brayhan-portfolio.netlify.app/es",
    github: "https://github.com/brayhanstiv/brayhan-portfolio",
  },
  {
    num: "02",
    category: "frontend",
    title: "Project 2",
    description:
      "Un proyecto desarrollado con Vue.js, utilizando tecnologías web fundamentales como CSS, HTML y JavaScript. Este enfoque permite aprovechar la capacidad de Next.js para crear aplicaciones web eficientes, mientras se mantiene una estructura limpia y flexible mediante el uso de CSS para el diseño visual, HTML para la estructura y JavaScript para la funcionalidad interactiva.",
    stack: [
      { name: "Vue Js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/brayhanstiv/pokedex",
  },
  {
    num: "03",
    category: "frontend",
    title: "Project 3",
    description:
      "Un proyecto desarrollado con React.js, utilizando Vite como herramienta de construcción para una experiencia de desarrollo más rápida y eficiente. Se ha integrado TypeScript para mejorar la calidad del código, proporcionando tipado estático y reduciendo la posibilidad de errores durante el desarrollo. Esta combinación optimiza el flujo de trabajo, asegurando una aplicación robusta y escalable.",
    stack: [{ name: "React Js" }, { name: "Vite" }, { name: "TypeScript" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/brayhanstiv/react-shop",
  },
  {
    num: "04",
    category: "móvil",
    title: "Project 4",
    description:
      "Un proyecto móvil desarrollado con Flutter, utilizando el lenguaje Dart para crear una aplicación nativa de alto rendimiento. Flutter permite desarrollar interfaces de usuario hermosas y fluidas, mientras que Dart proporciona un entorno de desarrollo eficiente y con gran capacidad de escalabilidad. Esta combinación asegura un rendimiento óptimo en plataformas iOS y Android, manteniendo una base de código unificada para ambas.",
    stack: [{ name: "Flutter" }, { name: "Dart" }],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "https://github.com/brayhanstiv/recipes-flutter",
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
      className='min-h-[80vh] flex flex-col justify-center py-12 lg:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-[30px]'>
          <div className='w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* Outline number */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              {/* Category */}
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500 capitalize'>
                Proyecto {project.category}
              </h2>
              {/* Description */}
              <p className=' text-white/60'>{project.description}</p>
              {/* Stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className='text-xl text-accent-default'>
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className='border border-white/20'></div>
              {/* Buttons */}
              <div className='flex items-center gap-4'>
                {/* Live project button */}
                <Link href={project.live} isExternal>
                  <Tooltip content='Proyecto en vivo' delay={100}>
                    <div className='w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group'>
                      <Icon
                        icon='solar:arrow-right-up-linear'
                        className='text-5xl text-white group-hover:text-accent-default'
                      />
                    </div>
                  </Tooltip>
                </Link>
                {/* Github project button */}
                <Link href={project.github} isExternal>
                  <Tooltip content='Github repositorio' delay={100}>
                    <div className='w-[70px] h-[70px] rounded-full bg-white/10 flex justify-center items-center group'>
                      <Icon
                        icon='hugeicons:github'
                        className='text-5xl text-white group-hover:text-accent-default'
                      />
                    </div>
                  </Tooltip>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-[50%] lg:h-[460px]'>
            <React.StrictMode>
              <Swiper
                ref={sliderRef}
                spaceBetween={30}
                slidesPerView={1}
                className='lg:h-[520px] mb-12'
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className='w-full'>
                      <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                        {/* Overlay */}
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                        {/* Image */}
                        <div className='relative w-full h-full'>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className='object-cover'
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* Slider buttons */}
                <div className='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none px-4 lg:px-0'>
                  <Button
                    onPress={handlePrev}
                    color='secondary'
                    className='bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                  >
                    <Icon icon='solar:alt-arrow-left-linear' />
                  </Button>
                  <Button
                    onPress={handleNext}
                    color='secondary'
                    className='bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                  >
                    <Icon icon='solar:alt-arrow-right-linear' />
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
