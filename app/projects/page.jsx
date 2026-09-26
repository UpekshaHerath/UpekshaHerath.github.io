"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard } from "swiper/modules";
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
    category: "InsureMatch - AI Insurance Recommendation System",
    title: "InsureMatch",
    period: "Apr 2026 - May 2026",
    description:
      "An explainable AI platform for a major life insurer that ranks the best-fit policies from a customer profile and explains why each one fits. Blends an XGBoost model with a RAG pipeline, uses SHAP for reasons, extracts details from uploaded policy documents and offers a built-in AI chat. Shipped on a tight deadline using synthetic data built on real insurance rules.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "FastAPI" },
      { name: "XGBoost" },
      { name: "LangChain" },
      { name: "ChromaDB" },
      { name: "Groq" },
    ],
    image: "",
    live: "",
    github: "",
  },
  {
    category: "Blockchain Based Vehicle Registration and Ownership Management System",
    period: "Aug 2022 - Jun 2023",
    title: "project 1",
    description:
      "A secure blockchain-based vehicle marketplace that turns physical assets into digital assets and uses Self-Sovereign Identity (SSI) for privacy. My individual contribution was the React Native mobile wallet used to store SSIs.",
    stack: [
      { name: "React Native" },
      { name: "Hyperledger Aries Cloud Agent Python (ACA-Py)" },
    ],
    image: "/assets/projects/vehicleOwnershipManagementSystem.png",
    live: "",
    github: "https://github.com/UpekshaHerath/L2-Software-Project.git",
  },
  {
    category: "Depreciation Calculator",
    title: "project 2",
    description:
      "A front-end application for a accounting concept called depreciation.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Bootstrap" },
      { name: "Vanilla JS" },
    ],
    image: "/assets/projects/depreciationCalculator.png",
    live: "https://upeksha.me/depreciation-calculator/",
    github: "https://github.com/UpekshaHerath/depreciation-calculator.git",
  },
  {
    category: "Automated Camera Stand for Wildlife Photography (Team leader)",
    period: "Jan 2021 - Jan 2022",
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
    category: "Blog Site",
    title: "project 4",
    description:
      "Blog application that can do CRUD operations related to blogs related to a particular author.",
    stack: [{ name: "React" }, { name: "JSON Server" }],
    image: "/assets/projects/blogSiteFrontend.png",
    live: "",
    github:
      "https://github.com/UpekshaHerath/Blog-site-frontend-using-react.git",
  },
  {
    category:
      "Skill Performance Ball Data Visualization using mobile application.",
    title: "project 5",
    description:
      "This is an application related to cricket that can be used to track the changes in a ball. We can take data related to the motion and the rotation of the ball using this application. ",
    stack: [{ name: "React Native" }, { name: "Firebase" }],
    image: "/assets/projects/skillPerformanceBall.png",
    live: "",
    github:
      "https://github.com/UpekshaHerath/spin_ball_performace_tracking_app.git",
  },
  {
    category: "Portfolio Website - Old Version",
    title: "project 6",
    description:
      "This is the old version of my portfolio website. This is a static website that is built using HTML, CSS, and JS.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
    image: "/assets/projects/oldPortfolio.png",
    live: "https://upeksha.me/old_portfolio_website/",
    github: "https://github.com/UpekshaHerath/old_portfolio_website.git",
  },
  {
    category: "Library Management System",
    title: "project 7",
    description:
      "This is a library management system that is built using MERN stack as to manage a small school library.",
    stack: [{ name: "React" }, { name: "Express.js" }, { name: "MongoDB" }],
    image: "/assets/projects/libraryManagementSystem.png",
    live: "",
    github: "https://github.com/UpekshaHerath/libraryManagementSystem",
  },
  {
    category: "Vehicle Tracking System",
    title: "project 8",
    description:
    "This project aims to develop a specialized monitoring device to ensure the safe transportation of food and pharmaceutical items. The device helps maintain optimal temperature conditions, detect vehicle speed, and provide real-time location tracking using GPS.",
    stack: [{ name: "Next.js"}, { name: "Firebase"}, { name: "Arduino"}],
    image: "/assets/projects/vehicleTrackingSystem.png",
    live: "https://esp32-vehicle-tracking-system.vercel.app/",
    github: "https://github.com/UpekshaHerath/esp32-vehicle-tracking-system"
  }, 
  {
    category: "Test Automation Cypress",
    title: "Project 9",
    description: "Did automation testing for a frontend system and a backend API. Wrote test cases and automation scripts using Cypress and Cucumber and also report test report generation.",
    stack: [{name: "Cypress"}, {name: "Cucumber"}, {name: "JavaScript"}, {name: "Java"}],
    image: "/assets/projects/cypressAutomation.png",
    live: "",
    github: "https://github.com/hansajayathilaka/test-automation-cypress"
  }
];

const pad = (n) => String(n).padStart(2, "0");

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="animate-in fade-in duration-500 min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-6">
              {/* outline num & counter */}
              <div className="flex items-end gap-4">
                <div className="text-7xl xl:text-8xl leading-none font-extrabold text-transparent text-outline">
                  {pad(activeIndex + 1)}
                </div>
                <span className="text-white/40 pb-2">
                  / {pad(projects.length)}
                </span>
              </div>
              {/* project category */}
              <div className="flex flex-col gap-2">
                <h2 className="text-[28px] xl:text-[38px] font-bold leading-tight text-white">
                  {project.category}
                </h2>
                {project.period && (
                  <span className="text-accent text-sm">{project.period}</span>
                )}
              </div>
              {/* project description */}
              <p className="text-white/60 leading-relaxed">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-sm text-accent bg-accent/10 border border-accent/30 rounded-full px-3 py-1"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 min-h-[70px]">
                {/* live project button */}
                {project.live !== "" ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live project"
                  >
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
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github repository"
                  >
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

                {project.live === "" && project.github === "" ? (
                  <p className="text-sm text-white/40">
                    Client project - source code is private.
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              modules={[Keyboard]}
              keyboard={{ enabled: true }}
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 rounded-xl"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full rounded-xl">
                    <div className="h-[260px] sm:h-[380px] xl:h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-xl">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 rounded-xl"></div>
                      {/* image */}
                      <div className="relative w-full h-full rounded-xl">
                        {project.image ? (
                          <Image
                            src={project.image}
                            fill
                            sizes="(min-width: 1200px) 50vw, 100vw"
                            className="object-cover rounded-xl"
                            alt={`${project.category} screenshot`}
                          />
                        ) : (
                          <div className="w-full h-full rounded-xl bg-gradient-to-br from-accent/30 via-[#232329] to-primary flex flex-col justify-center items-center gap-4 p-8 text-center">
                            <span className="text-5xl xl:text-7xl font-extrabold text-accent">
                              {project.title}
                            </span>
                            <span className="text-white/70 max-w-[360px]">
                              {project.category}
                            </span>
                          </div>
                        )}
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
    </section>
  );
};

export default Work;
