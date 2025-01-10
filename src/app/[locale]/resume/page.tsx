"use client";

// Packages
import React from "react";
import { useMediaQuery } from "usehooks-ts";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  ScrollShadow,
  Tab,
  Tabs,
  Tooltip,
} from "@nextui-org/react";

const about = {
  title: "Acerca de mí",
  description:
    "Desarrollador Full Stack apasionado por la creación de soluciones tecnológicas que marcan la diferencia. Me motiva resolver problemas complejos, aprender nuevas herramientas y colaborar en equipos para entregar productos innovadores y escalables. Comprometido con la mejora continua y la excelencia técnica.",
  info: [
    { fieldName: "Nombre", fieldValue: "Brayhan Suarez" },
    { fieldName: "Teléfono", fieldValue: "(+57) 321 457 6287" },
    { fieldName: "Experiencia", fieldValue: "+4 Años" },
    { fieldName: "Nacionalidad", fieldValue: "Colombiano" },
    { fieldName: "Email", fieldValue: "brayhan9505@gmail.com" },
    { fieldName: "Idiomas", fieldValue: "Inglés, Español" },
  ],
};

const experience = {
  title: "Experiencia",
  description:
    "Desarrollador Full Stack con experiencia en el diseño e implementación de aplicaciones web y móviles, especializado en tecnologías como React, Vue, Flutter, Node.js y MongoDB. Enfocado en crear soluciones escalables y de alto rendimiento, con un compromiso hacia la excelencia técnica y la mejora continua.",
  items: [
    {
      company: "Lait Technology",
      position: "Full-Stack Developer",
      duration: "Feb 2024 - Presente",
    },
    {
      company: "Meridian Group",
      position: "Front-end Developer",
      duration: "May 2023 - Ene 2024",
    },
    {
      company: "Experimentality",
      position: "Front-end Developer",
      duration: "Sep 2021 - Ene 2023",
    },
    {
      company: "JcInnova",
      position: "Front-end Developer",
      duration: "Oct 2020 - Sep 2021",
    },
  ],
};

const education = {
  title: "Educación",
  subtitle: "Cursos",
  description:
    "Graduado en Ingeniería de Software con formación sólida en desarrollo de sistemas y especialización en tecnologías como React, Vue, Flutter, Node.js y bases de datos SQL y NoSQL. Comprometido/a con el aprendizaje continuo y la aplicación de conocimientos a proyectos innovadores.",
  items: [
    {
      institution: "Universidad Surcolombiana",
      degree: "Ingeniero de Software",
      duration: "2019 - 2022",
    },
    {
      institution: "Universidad Surcolombiana",
      degree: "Tecnólogo en desarrollo de software",
      duration: "2016 - 2019",
    },
    {
      institution: "SENA",
      degree: "Técnico en Producción Agropecuaria",
      duration: "2010 - 2011",
    },
  ],
  courses: [
    {
      institution: "Platzi",
      course: "Cursos en desarrollo frontend",
      duration: "2019 - 2022",
    },
    {
      institution: "Platzi",
      course: "Cursos en desarrollo backend",
      duration: "2016 - 2019",
    },
  ],
};

const skills = {
  title: "Habilidades",
  description:
    "Desarrollador Full Stack con habilidades avanzadas en el uso de tecnologías como React, Node.js y bases de datos SQL y NoSQL. Experto en diseño de interfaces intuitivas, optimización de rendimiento y desarrollo de APIs RESTful. Destaca por su capacidad para colaborar en equipos multidisciplinarios y abordar desafíos complejos con soluciones efectivas.",
  items: [
    { icon: "simple-icons:react", name: "React Js" },
    { icon: "simple-icons:nextdotjs", name: "Next Js" },
    { icon: "simple-icons:vuedotjs", name: "Vue Js" },
    { icon: "simple-icons:nodedotjs", name: "Node Js" },
    { icon: "simple-icons:html5", name: "HTML" },
    { icon: "simple-icons:tailwindcss", name: "Tailwind CSS" },
    { icon: "simple-icons:typescript", name: "Typescript" },
    { icon: "simple-icons:nestjs", name: "Nest Js" },
  ],
};

export default function ResumePage() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <motion.div
      className='min-h-[80vh] flex justify-center py-6 xl:py-0'
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className='container mx-auto'>
        <Tabs
          aria-label='resume options'
          fullWidth={true}
          color='secondary'
          classNames={{
            tab: "h-12",
            tabContent: "group-data-[selected=true]:text-primary",
          }}
          isVertical={isMobile ? false : true}
        >
          {/* Experience */}
          <Tab key='experience' title='Experiencia'>
            <Card className='flex flex-col gap-2 text-center xl:text-left'>
              <CardHeader className='text-4xl font-bold'>
                {experience.title}
              </CardHeader>
              <CardBody className='text-white/60 mx-auto xl:mx-0 gap-[30px]'>
                <p className='leading-relaxed'>{experience.description}</p>
                <ScrollShadow className='h-[400px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-secondary [&::-webkit-scrollbar-thumb]:rounded-full'>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-items-center'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1'
                        >
                          <span className='text-accent-default'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[5px] h-[5px] rounded-full bg-accent-default'></span>
                            <p className='text-white/60 text-md'>
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollShadow>
              </CardBody>
            </Card>
          </Tab>

          {/* Education */}
          <Tab key='education' title='Educación'>
            <ScrollShadow className='h-[650px] [&::-webkit-scrollbar]:w-2  [&::-webkit-scrollbar-thumb]:bg-secondary [&::-webkit-scrollbar-thumb]:rounded-full'>
              <Card className='flex flex-col gap-2 text-center xl:text-left'>
                <CardHeader className='text-4xl font-bold'>
                  {education.title}
                </CardHeader>
                <CardBody className='text-white/60 mx-auto xl:mx-0 gap-[30px] leading-relaxed'>
                  <p>{education.description}</p>

                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-items-center'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[204px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1'
                        >
                          <span className='text-accent-default'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[5px] h-[5px] rounded-full bg-accent-default'></span>
                            <p className='text-white/60 text-md'>
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <h4 className='text-4xl font-bold text-white'>
                    {education.subtitle}
                  </h4>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-items-center'>
                    {education.courses.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#232329] h-[204px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1'
                        >
                          <span className='text-accent-default'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center'>
                            {item.course}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[5px] h-[5px] rounded-full bg-accent-default'></span>
                            <p className='text-white/60 text-md'>
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </CardBody>
              </Card>
            </ScrollShadow>
          </Tab>

          {/* Skills */}
          <Tab key='skills' title='Habilidades'>
            <Card className='flex flex-col gap-2 py-2'>
              <CardHeader className='text-4xl font-bold'>
                {skills.title}
              </CardHeader>
              <CardBody className=' mx-auto xl:mx-0 gap-[30px]'>
                <p className='text-white/60 leading-relaxed'>
                  {skills.description}
                </p>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px] justify-items-center'>
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <Tooltip content={skill.name}>
                          <Icon
                            className='text-6xl hover:text-accent-default transition-all duration-300 cursor-pointer'
                            icon={skill.icon}
                          />
                        </Tooltip>
                      </li>
                    );
                  })}
                </ul>
              </CardBody>
            </Card>
          </Tab>

          {/* About me */}
          <Tab key='about-me' title='Acerca de mí'>
            <Card className='flex flex-col gap-2'>
              <CardHeader className='text-4xl font-bold'>
                {about.title}
              </CardHeader>
              <CardBody className=' mx-auto xl:mx-0 gap-[30px]'>
                <p className='text-white/60 leading-relaxed'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 justify-items-start mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}:</span>
                        <span>{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </motion.div>
  );
}
