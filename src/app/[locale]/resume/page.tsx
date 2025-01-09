"use client";

// Packages
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardHeader,
  Listbox,
  ListboxItem,
  ScrollShadow,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { useMediaQuery } from "usehooks-ts";
import { ReactNode } from "react";

const about = {
  title: "Acerca de mí",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga vitae eius non soluta pariatur, in ex. Veritatis provident vel quos, veniam dolorem earum nostrum quas aspernatur facere, laboriosam porro iste!",
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
  icon: "/assets/resume/badge.svg",
  title: "Mi experiencia",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit saepe maiores reiciendis illo eveniet rerum ducimus molestias, architecto, labore fugiat cupiditate provident, at explicabo iusto obcaecati dolor aut laborum!",
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
  icon: "/assets/resume/cap.svg",
  title: "Mi formación",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit saepe maiores reiciendis illo eveniet rerum ducimus molestias, architecto, labore fugiat cupiditate provident, at explicabo iusto obcaecati dolor aut laborum!",
  items: [
    {
      institution: "Universidad Surcolombiana",
      degree: "Ingeniero de Software",
      duration: "2019 - 2022",
    },
    {
      company: "Universidad Surcolombiana",
      position: "Tecnólogo en desarrollo de software",
      duration: "2016 - 2019",
    },
    {
      company: "SENA",
      position: "Técnico en Producción Agropecuaria",
      duration: "2010 - 2011",
    },
  ],
};

const courses = {
  icon: "/assets/resume/cap.svg",
  title: "Mi formación",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit saepe maiores reiciendis illo eveniet rerum ducimus molestias, architecto, labore fugiat cupiditate provident, at explicabo iusto obcaecati dolor aut laborum!",
  items: [
    {
      institution: "Platzi",
      course: "Cursos en desarrollo frontend",
      duration: "2019 - 2022",
    },
    {
      company: "Platzi",
      position: "Cursos en desarrollo backend",
      duration: "2016 - 2019",
    },
  ],
};

const skills = {
  title: "Mis habilidades",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit saepe maiores reiciendis illo eveniet rerum ducimus molestias, architecto, labore fugiat cupiditate provident, at explicabo iusto obcaecati dolor aut laborum!",
  items: [
    { icon: <Icon icon='' />, name: "Javascript" },
    { icon: <Icon icon='' />, name: "Typescript" },
    { icon: <Icon icon='' />, name: "React Js" },
    { icon: <Icon icon='' />, name: "Vue Js" },
    { icon: <Icon icon='' />, name: "Vue Js" },
    { icon: <Icon icon='' />, name: "Next Js" },
    { icon: <Icon icon='' />, name: "Node Js" },
  ],
};

type ListboxWrapperProps = {
  children?: ReactNode | ReactNode[];
};

const ListboxWrapper = ({ children }: ListboxWrapperProps) => (
  <div className='w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100'>
    {children}
  </div>
);

export default function ResumePage() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <motion.div
      className='min-h-[80vh] flex justify-center py-12 xl:py-0'
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
            <Card className='flex flex-col gap-[30px] text-center xl:text-left'>
              <CardHeader className='text-4xl font-bold'>
                {experience.title}
              </CardHeader>
              <CardBody className='text-white/60 mx-auto xl:mx-0 gap-[30px]'>
                <p>{experience.description}</p>
                <ScrollShadow className='h-[400px]'>
                  <ul className='grid grid-cols-1 md:grid-cols-2 gap-[30px] justify-items-center'>
                    {experience.items.map((item, index) => {
                      return (
                        <li>
                          <span>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div>
                            <span></span>
                            <p>{item.company}</p>
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
          <Tab key='education' title='Formación'>
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>

          {/* Skills */}
          <Tab key='skills' title='Habilidades'>
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>

          {/* About me */}
          <Tab key='about-me' title='Acerca de mí'>
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </motion.div>
  );
}
