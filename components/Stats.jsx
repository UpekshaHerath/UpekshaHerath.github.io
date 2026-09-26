"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    suffix: "+",
    text: "Years of experience",
  },
  {
    num: 4,
    text: "Companies worked with",
  },
  {
    num: 26,
    text: "Projects completed",
  },
  {
    num: 10,
    text: "Certifications earned",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col xl:flex-row gap-2 xl:gap-4 items-center justify-center xl:justify-start text-center xl:text-left"
                key={index}
              >
                <CountUp
                  end={item.num}
                  suffix={item.suffix}
                  duration={2.5}
                  delay={0}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className="max-w-[150px] leading-snug text-white/80">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
