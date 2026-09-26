import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypewriterDescription } from "@/components/TypeWriter";
import { FiArrowRight } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            {/* availability */}
            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-3 mb-4 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                </span>
                Open to opportunities
              </span>
            </div>
            {/* fixed height: the typewriter only renders text after hydration */}
            <div className="text-xl h-[28px] leading-[28px]">
              <TypewriterDescription />
            </div>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Upeksha Herath</span>
            </h1>
            <p className="max-w-[540px] mb-9 text-white/80 mx-auto xl:mx-0">
              Software Engineer at{" "}
              <span className="text-white">Allion Technologies</span> and BSc
              (Hons) IT graduate of the University of Moratuwa. I build
              full-stack web and mobile products and AI-powered systems with
              RAG, agents and MCP, and I write about tech as a content creator.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col items-center xl:items-start gap-8">
              <div className="flex flex-wrap justify-center xl:justify-start items-center gap-4">
                <Link href="/projects">
                  <Button size="lg" className="flex items-center gap-2">
                    <span>View my work</span>
                    <FiArrowRight className="text-xl" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact me
                  </Button>
                </Link>
              </div>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
