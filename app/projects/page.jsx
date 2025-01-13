"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Blockchain based Vehicle Ownership Management System",
    title: "project 1",
    description:
      "The whole project was a Vehicle Ownership Management System built on top of Etherium. In this there was a mobile wallet that can be used to store SSIs. This is the Second Year Software Project's my individually contributed part. The whole project is a blockchain-based vehicle ownership management system. ",
    stack: [
      { name: "React Native" },
      { name: "Hyperledger Aries Cloud Agent Python (ACA-Py)" },
    ],
    image: "/assets/projects/vehicleOwnershipManagementSystem.png",
    live: "",
    github: "https://github.com/UpekshaHerath/L2-Software-Project.git",
  },
  {
    num: "02",
    category: "Depreciation Calculator - 2021",
    title: "project 2",
    description:
      "A front-end application for a accounting concept called depreciation.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Bootstrap" },
      { name: "Venilla JS" },
    ],
    image: "/assets/projects/depreciationCalculator.png",
    live: "https://upeksha.me/depreciation-calculator/",
    github: "https://github.com/UpekshaHerath/depreciation-calculator.git",
  },
  {
    num: "03",
    category:
      "Automated Camera Stand for Wild Life Photography - 2020 (Team leader)",
    title: "project 3",
    description:
      "In this project, we designed and built a camera stand for distance photography process to make sure it is safer and more effective. This project is a micro-controller-based project. ",
    stack: [
      { name: "C" },
      { name: "Atmega 32" },
      { name: "Atmel Studio" },
      { name: "Proteus" },
    ],
    image: "/assets/projects/automatedCameraStand.png",
    live: "",
    github: "https://github.com/UpekshaHerath/L1-Hardware-Project.git",
  },
  {
    num: "04",
    category: "Blog Site- 2021",
    title: "project 4",
    description:
      "Blog application that can do CRUD operations related to blogs related to a particular author.",
    stack: [{ name: "React" }, { name: "JSON Server" }],
    image: "/assets/projects/thumb2.png",
    live: "",
    github:
      "https://github.com/UpekshaHerath/Blog-site-frontend-using-react.git",
  },
  {
    num: "05",
    category:
      "Skill Performance Ball Data Visualization using mobile application.",
    title: "project 5",
    description:
      "This is an application related to cricket that can be used to track the changes in a ball. We can take data related to the motion and the rotation of the ball using this application. ",
    stack: [{ name: "React Native" }, { name: "Firebase" }],
    image: "/assets/projects/thumb1.png",
    live: "",
    github:
      "https://github.com/UpekshaHerath/spin_ball_performace_tracking_app.git",
  },
  {
    num: "05",
    category: "Portforlio website - old version",
    title: "project 6",
    description:
      "This is the old version of my portfolio website. This is a static website that is built using HTML, CSS, and JS.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
    image: "/assets/projects/oldPortfolio.png",
    live: "https://upeksha.me/old_portfolio_website/",
    github: "https://github.com/UpekshaHerath/old_portfolio_website.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl text-accent border-white border rounded-xl px-4 py-1"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live !== "" ? (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}

                {/* github project button */}
                {project.github !== "" ? (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
