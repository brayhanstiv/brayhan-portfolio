"use client";

import { Icon } from "@iconify/react";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
// Packages
import { motion } from "framer-motion";

const info = [
  {
    icon: "solar:phone-linear",
    title: "Teléfono",
    description: "(+57) 321 457 6287",
  },
  {
    icon: "solar:letter-linear",
    title: "Email",
    description: "brayhan9505@gmail.com",
  },
  {
    icon: "solar:map-point-linear",
    title: "Address",
    description: "Cra 31 # 18 E 34",
  },
];

const services = [
  { key: "frdv", name: "Desarrollo Front-End" },
  { key: "bdv", name: "Desarrollo Back-End" },
  { key: "fldv", name: "Desarrollo Full-Stack" },
];

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/*Form */}
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent-default">
                Trabajemos juntos
              </h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus nam accusantium fugit, saepe nisi asperiores eius
                expedita accusamus harum deleniti blanditiis atque vitae
                corrupti cum aspernatur dignissimos delectus dolor tenetur?
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Nombres"
                  variant="bordered"
                  color="secondary"
                />
                <Input
                  type="text"
                  placeholder="Apellidos"
                  variant="bordered"
                  color="secondary"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  variant="bordered"
                  color="secondary"
                />
                <Input
                  type="phone"
                  placeholder="Teléfono"
                  variant="bordered"
                  color="secondary"
                />
              </div>
              <Select
                className="min-w-full"
                classNames={{
                  label: "text-gray-400",
                }}
                listboxProps={{
                  itemClasses: {
                    base: [
                      "text-default-500",
                      "data-[selectable=true]:focus:text-primary",
                      "data-[selectable=true]:focus:bg-accent-default",
                    ],
                  },
                }}
                size="sm"
                label="Selecciona un servicio"
                variant="bordered"
                color="secondary"
              >
                {services.map((item, index) => (
                  <SelectItem key={index}>{item.name}</SelectItem>
                ))}
              </Select>
              <Textarea
                minRows={5}
                placeholder="Escribe tu mensaje aquí"
                variant="bordered"
                color="secondary"
              />
              <Button className="max-w-40 text-primary" color="secondary">
                Enviar mensaje
              </Button>
            </form>
          </div>
          {/*Info */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent-default rounded-md flex items-center justify-center">
                      <Icon icon={item.icon} width={30} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
