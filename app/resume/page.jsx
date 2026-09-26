"use client";

import { FaAws, FaJava } from "react-icons/fa";
import { FiDownload, FiExternalLink, FiMapPin } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRust,
  SiC,
  SiSpringboot,
  SiNodedotjs,
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiKubernetes,
  SiLinux,
  SiGit,
  SiGitlab,
  SiEthereum,
  SiAndroid,
  SiOpenai,
} from "react-icons/si";
import { Button } from "@/components/ui/button";

// about data
const about = {
  title: "About me",
  description:
    "A passionate, enthusiastic, and skilled Software Engineer who is committed to working smart to achieve goals and willing to take on any challenge. Moreover, a responsible team player with solid and friendly leadership qualities and a good team spirit who can adapt and focus on any productive target.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Upeksha Herath",
    },
    {
      fieldName: "Role",
      fieldValue: "Software Engineer @ Allion",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Location",
      fieldValue: "Kurunegala, Sri Lanka",
    },
    {
      fieldName: "Email",
      fieldValue: "upekshah.official@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+94) 77 312 8452",
    },
    {
      fieldName: "Work mode",
      fieldValue: "On-site · Hybrid · Remote",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Sinhala",
    },
  ],
};

// experience data
const experience = {
  title: "My experience",
  description:
    "From internship to Software Engineer, I've worked across full-stack web engineering, application engineering, AI tooling and technical writing.",
  items: [
    {
      company: "Allion Technologies",
      link: "",
      type: "Full-time",
      location: "Hybrid",
      duration: "Feb 2026 - Present",
      current: true,
      roles: [{ position: "Software Engineer", duration: "Feb 2026 - Present" }],
      highlights: [
        "Developing Model Context Protocol (MCP) servers and web engineering solutions.",
        "Contributing to the team's software infrastructure.",
        "Featured in the company's Employee Spotlight.",
      ],
      skills: ["Web Engineering", "MCP", "Software Infrastructure"],
      url: "",
    },
    {
      company: "Informatics",
      link: "",
      type: "Full-time",
      location: "Colombo 03",
      duration: "May 2025 - Feb 2026",
      roles: [
        { position: "Software Engineer", duration: "Nov 2025 - Feb 2026" },
        { position: "Associate Software Engineer", duration: "May 2025 - Oct 2025" },
      ],
      highlights: [
        "Promoted from Associate Software Engineer to Software Engineer within six months.",
        "Worked on application engineering for client-facing software products.",
      ],
      skills: ["Application Engineering"],
      url: "",
    },
    {
      company: "Enlear",
      link: "https://www.enlear.com/",
      type: "Part-time",
      location: "Remote",
      duration: "Nov 2023 - Nov 2025",
      roles: [{ position: "Technical Writer", duration: "Nov 2023 - Nov 2025" }],
      highlights: [
        "Produced technical documentation and technical publications for software learners.",
      ],
      skills: ["Technical Writing", "Technical Documentation"],
      url: "",
    },
    {
      company: "Rootcode",
      link: "https://rootcode.io/",
      type: "Internship",
      location: "Colombo · Hybrid",
      duration: "Jan 2024 - Jun 2024",
      roles: [{ position: "Software Engineer Intern", duration: "Jan 2024 - Jun 2024" }],
      highlights: [
        "Contributed to a full-stack intern project using React, Next.js, Tailwind CSS, TypeScript, Redux Toolkit, Spring Boot and MySQL.",
        "Joined the MyLeave team: developed Spring Boot multi-tenant backend features and wrote unit tests with JUnit.",
        "Integrated frontend features with Zustand and React Query for state and data management.",
        "Took part in the RTC AI website revamp, upgrading Next.js and configuring the dev environment.",
        "Received positive feedback from mentors and leads for code quality and progress.",
      ],
      skills: ["Next.js", "TypeScript", "Spring Boot", "JUnit", "MySQL"],
      url: "/assets/resume/docs/Upeksha Herath.rootcode.pdf",
    },
  ],
  volunteering: [
    {
      organization: "Faculty of IT, University of Moratuwa",
      position: "Evaluator - Viva & Code Review Sessions",
      duration: "2025 - Present",
      description:
        "Evaluating Level 2 undergraduates in technical evaluation and online code review sessions, discussing their technical decisions and giving constructive feedback.",
    },
  ],
};

// education data
const education = {
  title: "My education",
  description:
    "Graduated with a BSc (Hons) in Information Technology from the Faculty of IT, University of Moratuwa.",
  items: [
    {
      institution: "University of Moratuwa - SL",
      degree: "BSc (Hons) in Information Technology",
      duration: "2021 - 2025",
      description:
        "Object-oriented programming, databases, software engineering and team software/hardware projects.",
    },
    {
      institution: "Central College Kuliyapitiya",
      degree: "Secondary Education",
      duration: "2011 - 2019",
    },
    {
      institution: "Pannala National School",
      degree: "Primary Education",
      duration: "2006 - 2011",
      description:
        "Passed the grade-5 scholarship examination and went to another school.",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Technologies I use to design, build and ship products, grouped by where they fit in the stack.",
  groups: [
    {
      name: "AI & Agents",
      items: [
        { icon: <SiOpenai />, name: "Generative AI" },
        { name: "RAG" },
        { name: "Agentic AI" },
        { name: "MCP Servers" },
        { name: "LangChain" },
        { name: "Workflow Automation" },
      ],
    },
    {
      name: "Frontend & Mobile",
      items: [
        { icon: <SiReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiAngular />, name: "Angular" },
        { icon: <SiReact />, name: "React Native" },
        { icon: <SiAndroid />, name: "Android" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiBootstrap />, name: "Bootstrap" },
        { icon: <SiHtml5 />, name: "HTML" },
        { icon: <SiCss3 />, name: "CSS" },
      ],
    },
    {
      name: "Backend & Data",
      items: [
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <SiNodedotjs />, name: "Node.js" },
        { icon: <SiFastapi />, name: "FastAPI" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { name: "Database Design" },
      ],
    },
    {
      name: "Languages",
      items: [
        { icon: <SiJavascript />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiPython />, name: "Python" },
        { icon: <SiC />, name: "C" },
        { icon: <SiRust />, name: "Rust" },
      ],
    },
    {
      name: "Cloud & DevOps",
      items: [
        { icon: <FaAws />, name: "AWS EC2 / Lightsail" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <SiLinux />, name: "Linux" },
        { icon: <SiGit />, name: "Git" },
        { icon: <SiGitlab />, name: "GitLab" },
      ],
    },
    {
      name: "Other",
      items: [
        { icon: <SiEthereum />, name: "Blockchain / Ethereum" },
        { name: "Technical Writing" },
        { name: "Leadership" },
        { name: "Communication" },
        { name: "Problem Solving" },
        { name: "Teamwork" },
      ],
    },
  ],
};

// certifications data
const certifications = {
  title: "Certifications",
  description: "Courses and assessments I've completed to keep my skills sharp.",
  items: [
    { name: "Rust for JavaScript Developers", issuer: "LinkedIn Learning", date: "Jun 2026" },
    { name: "How to Build Your First AI Agent with ChatGPT", issuer: "LinkedIn Learning", date: "Jun 2026" },
    { name: "Agentic AI: Build Your First Agentic AI System", issuer: "LinkedIn Learning", date: "Jun 2026" },
    { name: "Learn AI Agents in 15 Minutes", issuer: "LinkedIn Learning", date: "Jun 2026" },
    { name: "Learning Kubernetes", issuer: "LinkedIn Learning", date: "Jun 2026" },
    { name: "Claude Code 101", issuer: "Anthropic", date: "May 2026" },
    { name: "JavaScript (Basic)", issuer: "HackerRank", date: "Nov 2023" },
    { name: "React Native Ecosystem and Workflow", issuer: "LinkedIn Learning", date: "Feb 2023" },
    { name: "React Native Essential Training", issuer: "LinkedIn Learning", date: "Feb 2023" },
    { name: "JavaScript Programming", issuer: "Sololearn", date: "Jun 2022" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SectionHeader = ({ title, description }) => (
  <div className="flex flex-col gap-4 text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[640px] text-white/60 mx-auto xl:mx-0">{description}</p>
  </div>
);

const Tag = ({ children }) => (
  <li className="text-xs text-accent/90 bg-accent/10 border border-accent/20 rounded-full px-3 py-1 leading-normal">
    {children}
  </li>
);

const Resume = () => {
  return (
    <div className="animate-in fade-in duration-500 min-h-[80vh] flex items-start justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-10 xl:gap-[60px]"
        >
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 xl:flex xl:flex-col w-full max-w-[380px] sm:max-w-none xl:max-w-[380px] mx-auto xl:mx-0 gap-3 xl:gap-6 xl:sticky xl:top-40 self-start">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about" className="col-span-2 sm:col-span-2 xl:col-span-1">
              About me
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="w-full pb-12">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <SectionHeader
                  title={experience.title}
                  description={experience.description}
                />
                <ol className="relative border-l border-white/10 ml-2 xl:ml-0">
                  {experience.items.map((item, index) => {
                    return (
                      <li key={index} className="mb-8 ml-6 xl:ml-8 last:mb-0">
                        {/* timeline dot */}
                        <span
                          className={`absolute -left-[7px] mt-7 w-[13px] h-[13px] rounded-full border-2 border-primary ${
                            item.current ? "bg-accent" : "bg-white/40"
                          }`}
                        ></span>
                        <div className="bg-[#232329] rounded-xl p-6 xl:px-8 flex flex-col gap-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="text-accent text-sm">
                              {item.duration}
                            </span>
                            {item.current && (
                              <span className="text-[11px] uppercase tracking-wider bg-accent text-primary font-bold rounded-full px-2 py-[2px]">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-2xl font-semibold leading-tight">
                              {item.link ? (
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 hover:text-accent transition-colors"
                                >
                                  {item.company}
                                  <FiExternalLink className="text-base text-white/40" />
                                </a>
                              ) : (
                                item.company
                              )}
                            </h4>
                            <span className="flex items-center gap-2 text-sm text-white/50">
                              <FiMapPin />
                              {item.type} · {item.location}
                            </span>
                          </div>
                          {/* roles */}
                          <ul className="flex flex-col gap-1">
                            {item.roles.map((role, i) => (
                              <li
                                key={i}
                                className="flex flex-wrap items-center gap-x-3 text-white/90"
                              >
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <span>{role.position}</span>
                                {item.roles.length > 1 && (
                                  <span className="text-sm text-white/40">
                                    {role.duration}
                                  </span>
                                )}
                              </li>
                            ))}
                          </ul>
                          {/* highlights */}
                          <ul className="flex flex-col gap-2 text-sm text-white/60 leading-relaxed list-disc pl-5 marker:text-accent/60">
                            {item.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                            <ul className="flex flex-wrap gap-2">
                              {item.skills.map((skill, i) => (
                                <Tag key={i}>{skill}</Tag>
                              ))}
                            </ul>
                            {item.url ? (
                              <a
                                href={item.url}
                                download="Upeksha_Herath_service_letter"
                              >
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="uppercase flex items-center gap-2 py-2 px-4"
                                >
                                  <span className="text-xs">letter</span>
                                  <FiDownload className="text-base" />
                                </Button>
                              </a>
                            ) : null}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ol>

                {/* volunteering */}
                <h4 className="text-2xl font-bold text-center xl:text-left pt-4">
                  Volunteering
                </h4>
                <ul className="flex flex-col gap-6">
                  {experience.volunteering.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] rounded-xl p-6 xl:px-8 flex flex-col gap-2"
                    >
                      <span className="text-accent text-sm">{item.duration}</span>
                      <h5 className="text-xl font-semibold leading-tight">
                        {item.position}
                      </h5>
                      <p className="text-white/80">{item.organization}</p>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <SectionHeader
                  title={education.title}
                  description={education.description}
                />
                <ul className="grid grid-cols-1 gap-6">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-6 xl:px-10 rounded-xl flex flex-col items-start gap-2"
                      >
                        <span className="text-accent text-sm">
                          {item.duration}
                        </span>
                        <h4 className="text-xl font-semibold leading-tight">
                          {item.degree}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/80">{item.institution}</p>
                        </div>
                        {item.description && (
                          <p className="text-sm text-white/60 leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <SectionHeader
                  title={skills.title}
                  description={skills.description}
                />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {skills.groups.map((group, index) => (
                    <div
                      key={index}
                      className="bg-[#232329] rounded-xl p-6 flex flex-col gap-4"
                    >
                      <h4 className="text-lg font-semibold text-accent">
                        {group.name}
                      </h4>
                      <ul className="flex flex-wrap gap-2">
                        {group.items.map((skill, i) => (
                          <li
                            key={i}
                            className="group flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm hover:border-accent/60 hover:text-accent transition-all duration-300"
                          >
                            {skill.icon && (
                              <span className="text-lg text-white/70 group-hover:text-accent transition-colors">
                                {skill.icon}
                              </span>
                            )}
                            {skill.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* certifications */}
            <TabsContent value="certifications" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <SectionHeader
                  title={certifications.title}
                  description={certifications.description}
                />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] rounded-xl p-5 flex flex-col gap-1 border border-transparent hover:border-accent/40 transition-colors"
                    >
                      <span className="text-accent text-sm">{item.date}</span>
                      <h4 className="font-semibold leading-snug">{item.name}</h4>
                      <p className="text-sm text-white/60">{item.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <SectionHeader title={about.title} description={about.description} />
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[760px] mx-auto xl:mx-0 w-full">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] rounded-xl px-5 py-4 flex flex-col gap-1"
                      >
                        <span className="text-white/50 text-sm">
                          {item.fieldName}
                        </span>
                        <span className="text-lg break-words">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
