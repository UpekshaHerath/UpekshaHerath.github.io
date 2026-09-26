import Image from "next/image";

// pure CSS animations (see .photo-ring in globals.css): the portrait is painted
// straight from the server HTML instead of waiting for JS to fade it in
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div className="animate-in fade-in duration-500">
        {/* image */}
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
          <Image
            src="/assets/photo4.png"
            priority
            quality={85}
            fill
            sizes="(min-width: 1200px) 498px, 298px"
            alt="Portrait of Upeksha Herath"
            className="object-contain"
          />
        </div>

        {/* circle */}
        <svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            className="photo-ring"
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Photo;
