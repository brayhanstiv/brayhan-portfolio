"use client";

// Packages
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/react";

// Components
import Socials from "@/components/socials";
import Photo from "@/components/images/photo";
import Stats from "@/components/stats";

export default function Home() {
  return (
    <section className='h-full'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* Text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Full-Stack Developer</span>
            <h1 className='h1 mb-6'>
              Hola Soy <br />{" "}
              <span className='text-accent-default'>Brayhan Stiven </span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>
              Ingeniero de Software con experiencia desde el año 2020, he
              trabajado en diversas áreas del desarrollo, incluyendo Frontend,
              AI y Backend.
            </p>
            {/* Buttons ans socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='bordered'
                color='secondary'
                className='uppercase flex items-center gap-2'
                endContent={
                  <Icon icon='solar:download-minimalistic-linear' width={20} />
                }
              >
                Download CV
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "p-1 w-9 h-9 border border-accent-default rounded-lg flex justify-center items-center text-accent-default text-base hover:bg-accent-default hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  );
}
