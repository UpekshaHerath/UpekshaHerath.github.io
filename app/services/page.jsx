import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Full-stack web apps and SaaS products with Next.js, React, Angular, Spring Boot and Node.js, from pixel-perfect UI to scalable APIs.",
    href: "",
  },
  {
    num: "02",
    title: "AI & Agentic Systems",
    description:
      "AI features that deliver real value: RAG pipelines, AI agents, MCP servers and explainable ML, integrated into your product.",
    href: "",
  },
  {
    num: "03",
    title: "Mobile Development",
    description:
      "Cross-platform and Android applications with React Native, built for great performance and user experience.",
    href: "",
  },
  {
    num: "04",
    title: "Custom Software & Databases",
    description:
      "Tailor-made applications and well-designed databases (MySQL, MongoDB) that fit your business workflows.",
    href: "",
  },
  {
    num: "05",
    title: "Cloud & DevOps",
    description:
      "Deploy and run applications on AWS (EC2, Lightsail), Linux and Kubernetes with Git-based workflows.",
    href: "",
  },
  {
    num: "06",
    title: "Technical Writing",
    description:
      "Clear technical documentation, tutorials and articles, backed by two years as a technical writer at Enlear.",
    href: "",
  },
];


const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <div className="animate-in fade-in duration-500 grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  {/* <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link> */}
                </div>
                {/* title */}
                <h2 className="text-[32px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
